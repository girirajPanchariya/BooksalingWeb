import { User } from "../Model/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getOtp, otpStore, sendEmail } from "../Other/EmailVerification.js";

export const Register = async (req, res) => {
  try {
    const { email, Name, address, phoneNo, prodect, password, otp } = req.body;

    // 1️⃣ Email required
    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    // 2️⃣ If OTP not provided → generate & send OTP
    if (!otp) {
      const generateOtp = getOtp();

      otpStore.set(email, {
        otp: generateOtp,
        expire: Date.now() + 10 * 60 * 1000 // 10 minutes
      });

      await sendEmail(email, generateOtp);

      return res.status(200).json({
        message: "OTP sent to email"
      });
    }

    // 3️⃣ Validate all fields for registration
    if (!Name || !address || !phoneNo  || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 4️⃣ Check stored OTP
    const store = otpStore.get(email);

    if (!store) {
      return res.status(400).json({
        message: "OTP not found or expired"
      });
    }

    if (store.otp !== otp) {
      return res.status(400).json({
        message: "OTP does not match"
      });
    }

    if (store.expire < Date.now()) {
      return res.status(400).json({
        message: "OTP expired"
      });
    }

    // 5️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // 6️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 7️⃣ Save user
    const user = new User({
      email,
      Name,
      address,
      phoneNo,
      prodect,
      password: hashedPassword
    });

    await user.save();

    // 8️⃣ Clear OTP
    otpStore.delete(email);

    return res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error"
    });
  }
};


// export const senmail = async(req,res)=>{
//         try {
//                 const {email} = req.body

//                 if(!email){
//                         return res.status(400).json({
//                             message:"email not found"
//                         })
//                 }
//                 const genret =  getOtp()

//                     otpStore(email,{
//                             otp:genret,
//                             expire:now.Dae(t)+10 *60 *1000
//                     })

//                     await sendEmail(email,genret);

//                     return res.status(200).json({
//                         message:'email is verified'
//                     })


//         } catch (error) {
//             console.log(error);
            
//         }
// }

export const LogintUser  = async(req,res)=>{
        try {
            const {email,password} = req.body
                const user = await User.findOne({email})

                if(!user){
                  return res.status(400).json({
                    message:"user not register"
                  })
                }
                if(!email || !password){
                    return res.status(400).json({
                        message:'All fileds are required'
                    })
                }
            const passwordmatch = await bcrypt.compare(password, user.password)
            if(!passwordmatch){
                return res.status(400).json({
                    message:"invalid password"
                })
            }

            const token = jwt.sign({ Id: user.id }, process.env.JWT_SCREAT_KEY, { expiresIn: '1d' })

            res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    // 6️⃣ Success response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        Name: user.Name,
        token

      }
    })

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message:`login internal ${error}`
            })
            
        }
}

export const  LogoutUser  = async(req,res)=>{

    try {
    
        return res.clearCookie('token',{
            maxAge:0,
            sameSite:'strict'
            
        }).status(200).json({
            message:` is Logout Succesfully `
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const UserProfile = async(req,res)=>{
    try {
        const userId = req.user.Id;
        
        if(!userId){
            return res.status(400).json({
                message:"any user is not login"
            })
        }

        const userProfile = await User.findById(userId)
            
        if(!userProfile){
            return res.status(400).json({
                message:"the user is not found"
            })
        }
        return res.status(200).json({
            message:`This is the my user ${userProfile.Name} profile`,
            userProfile

        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:`This is userProfile internale error`
        })
        
    }
}


export const UpdateUser = async (req, res) => {
  try {
    const userId = req.user.Id;
    const { email, Name, address, phoneNo, prodect, password, otp } = req.body;

    const data = { email, Name, address, phoneNo, prodect };

    // ✅ If password update requested
    if (password) {

      // STEP 1: Send OTP
      if (!otp) {
        const generateOtp = getOtp();

        otpStore.set(email, {
          otp: generateOtp,
          expire: Date.now() + 10 * 60 * 1000
        });

        await sendEmail(email, generateOtp);

        return res.status(200).json({
          message: "OTP sent to email"
        });
      }

      // STEP 2: Verify OTP
      const store = otpStore.get(email);

      if (!store) {
        return res.status(400).json({
          message: "OTP not found or expired"
        });
      }

      if (store.otp !== otp) {
        return res.status(400).json({
          message: "OTP does not match"
        });
      }

      if (store.expire < Date.now()) {
        return res.status(400).json({
          message: "OTP expired"
        });
      }

      // STEP 3: Hash password AFTER verification
      const hashPassword = await bcrypt.hash(password, 10);
      data.password = hashPassword;

      // Clear OTP
      otpStore.delete(email);
    }

    const updateUser = await User.findByIdAndUpdate(
      userId,
      data,
      { new: true }
    );

    await updateUser.save();
    if (!updateUser) {
      return res.status(400).json({
        message: "User not found or not logged in"
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      updateUser
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
      error
    });
  }
};