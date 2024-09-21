import mongoose from "mongoose";


const donorSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:String},
    phone:{type:Number},
    place:{type:String},
    bgroup:{type:String}

})

export default mongoose.model.data||mongoose.model("data",donorSchema)