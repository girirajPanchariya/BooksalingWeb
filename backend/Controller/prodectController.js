import { log } from "console";
import { Prodect } from "../Model/Prodect.js";
import { Order } from "../Model/Order.js";
import { User } from "../Model/UserModel.js";

export const postProdect = async (req, res) => {

    try {

            const userId = req.user.Id;
            
            if(!userId){
                return res.status(400).json({
                    message:"Plese login user then you prodect sell"
                })
            }

            const {ProdecName,ProdecPrice,ProdecDetail} = req.body;
                const ImagePath = req.file ? req.file.path :null;
            if(!ImagePath ||!ProdecName ||!ProdecPrice ||!ProdecDetail){
                return res.status(400).json({
                    message:"plese fill the all detaild"
                })
            }
                const loginguser = await User.findById(userId)
            const existingProdect = await Prodect.findOne({
                ProdecName,
                ProdecDetail,
                ProdecPrice,
                userPost:userId
            })


            if(existingProdect){
                return res.status(400).json({
                    message:`this prodect is exiting by this user ${loginguser.email}`
                })
            }

            const newProdect = await  Prodect({
                    Image:ImagePath,
                    ProdecName,
                    ProdecPrice,
                    ProdecDetail,
                    userPost:userId
            })


            


          await  newProdect.save()

            return res.status(200).json({
                message:'this is posted prodect',
                newProdect
            })

    } catch (error) {
            console.log(error);
            return res.status(200).json({
                message:"user prodect error",
                error
            })
            
    }

}   


export const getAllprodect = async(req,res)=>{
            try {
               const prodect  = await Prodect.find()
               
               if(!prodect){
                return res.status(400).json({
                    message:"prodect not find it"
                })
               }
               return res.status(200).json({
                message:"this is prodect",
                prodect
               })
            } catch (error) {
               console.log(error);
               return res.status(500).json({
                message:"Prodect found internal ",
                error:error
               })
                
            }
}


export const UserPost = async(req,res)=>{
    try {
            const userId = req.user.Id;
                console.log(userId);
                
            const post = await Prodect.find({userPost:userId});

            if(!post){
                return res.status(400).json({
                    message:"user post not found"
                })
            }
            return res.status(200).json({
                message:"post",
                post
            })
    } catch (error) {
    console.log(error);
    return res.status(500).json({
        message:"user post internal errorr",
        err:error
    })
    
    }
}

export const prodect = async(req,res)=>{
    try {
        const {id}= req.params;

        const prodect  = await Prodect.findById(id).populate("Orderby");

        if(!prodect){
            return res.status(400).json({
                message:"prodect not found it"
            })
        }

        return res.status(200).json({
            message:"prodect detiald",
            prodect
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"internal error"
        })
        
    }
}

export const prodectOrder = async (req, res) => {
    try {
        const { prodectid } = req.params;

        if (!prodectid) {
            return res.status(400).json({
                message: "Product ID not provided"
            });
        }

        const orders = await Order.find({ ProdecOrder: prodectid }).populate("Orderby");

        if (orders.length === 0) {
            return res.status(404).json({
                message: "No orders found for this product"
            });
        }

        return res.status(200).json({
            message: "Product orders",
            orders
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal error"
        });
    }
};