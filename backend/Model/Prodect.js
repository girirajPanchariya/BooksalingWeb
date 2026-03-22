<<<<<<< HEAD
import mongoose from "mongoose";

const ProdectSchema = mongoose.Schema({
    Image:{
        type:String,
        required:true
    },
    userPost:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },

    ProdecName:{
        type:String,
        required:true
    },
    ProdecPrice:{
        type:String,
        required:true
    },
    ProdecDetail:{
        type:String,
        required:true
    },
    ProdecOrder:{
        type:mongoose.Types.ObjectId,
        ref:'Order'
    },
},{timetimestamps:true})

export const Prodect = mongoose.model('Prodect',ProdectSchema)
=======
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
>>>>>>> 8b5693da49838ff7bd6a6e720bed888783bef530
