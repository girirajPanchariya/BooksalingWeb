import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phoneNo:{
        type:String,
        require:true
    },
    prodect:{
        type:mongoose.Types.ObjectId,
        ref:'Prodect'
    },
    order:{
        type:mongoose.Types.ObjectId,
        ref:'Order'
    }
},{timestamps:true})


export const User = mongoose.model('User',userSchema)
