import mongoose from "mongoose";

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