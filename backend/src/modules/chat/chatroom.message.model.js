import mongoose, { Schema } from "mongoose";
const ChatRoomMessageSchema = new Schema({
  message: {
    type: String,
    required: true,
    trim: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});
export default mongoose.model("Chatroommessage", ChatRoomMessageSchema);
