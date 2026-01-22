import mongoose from "mongoose";    

const Prodect = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    name:{  
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,  
    },
    image:{
        type:String,
        required:true,  
    },
    details:{
        type:String,
        required:true,  
    },
    // precherser:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"  
    // },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'  
    }    


})

export const ProdectModel = mongoose.model('Prodect',bookSchema);