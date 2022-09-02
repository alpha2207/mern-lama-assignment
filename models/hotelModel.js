import mongoose from "mongoose";
const {Schema}=mongoose;

const HotelSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:[true,"Hotel type is required."]
    },
    city:{
        type:String,
        required:[true,"Hotel City is required."]
    },
    review:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    photos:[String]
})

export default mongoose.model('hotel',HotelSchema);