import mongoose, { Schema } from "mongoose";
const ChatSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message: {
    type: Schema.Types.ObjectId,
    ref: "Message",
    required: true
  }
});

export default mongoose.model("Chat", ChatSchema);
