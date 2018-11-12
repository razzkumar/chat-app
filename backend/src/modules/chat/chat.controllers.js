import mongoose from "mongoose";

import Chatroom from "./chatroom.model";

export async function createChatroom(req, res) {
  try {
    const oldChatroom = await Chatroom.find({ chatroom: req.body.chatroom });

    if (oldChatroom && oldChatroom.length > 0) {
      res.status(200).json({ message: "chatroom exitst" });
    } else {
      const chatroom = await Chatroom.create(req.body);
      if (chatroom) {
        chatroom.member.push(req.user._id);
        let addmember = await chatroom.save();
        if (addmember) {
          return res.status(200).json(addmember.toAuthJSON());
        } else {
          return res.status(500);
        }
      } else {
        return res.status(500);
      }
    }
  } catch (e) {
    return res.status(500).json(e);
  }
}
