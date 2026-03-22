import mongoose from "mongoose";

<<<<<<< HEAD
const OrderSchema = mongoose.Schema({
    
    Orderby: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    OrderDeliverData: {
        type: Date,
        required: true,
        default: () => {
            const date = new Date();
            date.setDate(date.getDate() + 5).toLocaleString().split(' '); // ✅ fixed
            return date;
        }
    },

    ProdecOrder: {
        type: mongoose.Types.ObjectId,
        ref: 'Prodect'
    },
    OrderStatus:{
        type:String,
        enum:['panding','cancel','delivered','rejected'],
        default:'panding'
    }


}, { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);
=======
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
>>>>>>> 8b5693da49838ff7bd6a6e720bed888783bef530
