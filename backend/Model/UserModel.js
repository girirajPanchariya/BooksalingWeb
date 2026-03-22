import mongoose from "mongoose";

<<<<<<< HEAD

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
=======
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
    phone:{
        type:String,
        required:true,
    },
    SalingBook:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Prodect"
    },
  profile:[{
    image:{
        type:String,

    },
    address:[{
        
    city:{
        type:String,
    },
    state:{
        type:String,
    },  
    country:{
        type:String,    
    },
    vilaage:{
        type:String,
    },
    pincode:{
        type:String,        
    }

}
]
  }]
},{  timestamps: true,});

export const UserModel = mongoose.model('User',userSchema);
>>>>>>> 8b5693da49838ff7bd6a6e720bed888783bef530
