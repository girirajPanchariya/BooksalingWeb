import mongoose from "mongoose";



export const mongooseConection = async(req,res)=>{
        try {
            mongoose.connect(process.env.MONGO_URL)
            console.log('data base is Contected');
            
        } catch (error) {
            console.log('data base is not connected');
            console.log(error);
            
            
        }
}