import mongoose from "mongoose";

import User from "./user.model";

export async function signUp(req, res) {
  try {
    const oldUser = await User.find({
      $or: [{ email: req.body.email }, { userName: req.body.userName }]
    });
    if (oldUser && oldUser.length > 0) {
      res.status(409).json({ message: "user exitst" });
    } else {
      const user = await User.create(req.body);
      return res.status(201).json(user.toAuthTokenJSON());
    }
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function login(req, res, next) {
  res.status(200).json(req.user.toAuthTokenJSON());
  return next();
}
export async function profile(req, res, next) {
  res.status(200).json(req.user.toAuthJSON());
  return next();
}

export async function getFriends(req, res, next) {
  const id = req.user._id;
  const fri = await User.find({ _id: id }).populate(
    "friends",
    "userName email"
  );
  res.status(200).json(fri[0].friends);
  return next();
}

export async function addFriends(req, res, next) {
  const { friendId } = req.body;
  let { friends } = req.user;
  let id = new mongoose.Types.ObjectId(friendId);

  if (friends.indexOf(friendId) !== -1) {
    // req.user.friends.push(friendId);
    // let savedFriend = await req.user.save();
    // console.log("Saved-<", savedFriend);
    res.status(200).json({ fuck: "YOU" });
  } else {
    res.status(409).send("Already your friend");
  }
  return next();
}
