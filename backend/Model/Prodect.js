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
