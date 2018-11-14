import React from "react";

export default ({ message, user, you }) => {
  return (
    <div className={you === user ? "you message" : "message"}>
      <span>{user} :</span> {message}
    </div>
  );
};
