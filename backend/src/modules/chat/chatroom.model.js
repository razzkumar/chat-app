import mongoose, { Schema } from "mongoose";
const ChatroomSchema = new Schema({
  chatroom: {
    type: String,
    required: true,
    trim: true
  },
  member: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ],
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chatroommessage",
      required: true
    }
  ]
});

ChatroomSchema.methods = {
  toAuthJSON() {
    return {
      id: this._id,
      member: this.member,
      createdBy: this.createdBy,
      chatroom: this.chatroom
    };
  }
};
export default mongoose.model("Chatroom", ChatroomSchema);
