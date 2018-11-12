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

export async function getChatrooms(req, res, next) {
  const chatrooms = await Chatroom.find({}, "chatroom _id");
  if (chatrooms) {
    res.status(200).json(chatrooms);
  } else {
    res.status(400);
  }
  next();
}
export async function getChatroomsMembers(req, res, next) {
  const chatroomMembers = await Chatroom.findById(
    req.params.id,
    "members -_id"
  ).populate("members", "userName _id");
  if (chatroomMembers) {
    res.status(200).json(chatroomMembers.members);
  } else {
    res.status(400);
  }
  next();
}
