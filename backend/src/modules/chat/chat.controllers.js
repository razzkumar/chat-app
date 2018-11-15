import User from "../users/user.model";
import Message from "./message.model";

export async function getUsers(req, res, next) {
  const user = await User.find({}, "userName");

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400);
  }
  next();
}

export async function getMessage(req, res, next) {
  const ms = await Message.find({}, "-__v")
    .sort({ _id: -1 })
    .limit(20)
    .populate("sender", "userName");

  if (ms) {
    res.status(200).json(ms);
  } else {
    res.status(400);
  }
  next();
}
