import React from "react";
import { NavLink } from "react-router-dom";

export default function ChatroomList({ chatrooms }) {
  return (
    <div className="chatroom-container mt-5">
      <h5>List of Chatrooms</h5>
      {chatrooms &&
        chatrooms.length > 0 &&
        chatrooms.map(room => (
          <div className="room pb-1 pl-4" key={room._id}>
            <NavLink to={`chatroom/${room._id}`}>{room.chatroom}</NavLink>
          </div>
        ))}
    </div>
  );
}
