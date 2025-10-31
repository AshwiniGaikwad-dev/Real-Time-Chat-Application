import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    recieverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    text:String,
    media:String,
   }, 
   {timestamps:true}
);

export const Message= mongoose.model("Message", messageSchema);