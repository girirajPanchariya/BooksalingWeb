import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Prodect"  
    }],
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Shipped","Delivered","Cancelled"],
        default:"Pending"
    }

},{timestamps:true});

export const OrderModel = mongoose.model('Order',orderSchema);