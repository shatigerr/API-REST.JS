import mongoose from "mongoose";

const travelSchema = new  mongoose.Schema({
    name:String,
    travelled:String
});

export default new mongoose.model("Travel", travelSchema)

