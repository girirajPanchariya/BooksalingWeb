
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


export const getOtp = ()=> Math.floor(100000 + Math.random() * 900000).toString()

export const otpStore = new Map()

const transprot = nodemailer.createTransport({
    service:'gmail',
    auth:{
       user: process.env.EMAIL_USER,   // ✅ correct key
    pass: process.env.EMAIL_PASS,
     
    }
})

export const sendEmail = async(gmail,otp)=>{
  await transprot.sendMail({
        from:process.env.EMAIL_USER,
        to:gmail,
        subject:'your email verifition',
        text:`${otp}`
    })
}