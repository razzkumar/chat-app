import React from "react";

export default ({ message, user, allMessage }) => {
  return (
    <React.Fragment>
      {allMessage &&
        allMessage.map((d, i) => (
          <div
            className={
              d && d.sender && d.sender.userName === user
                ? "you message"
                : "message"
            }
            key={d.message + i}
          >
            <span>{d && d.sender && d.sender.userName} :</span> {d && d.message}
          </div>
        ))}
      {message &&
        message.map((d, i) => (
          <div
            className={d && d.username === user ? "you message" : "message"}
            key={d && d.message + i}
          >
            <span>{d && d.username} :</span> {d.message}
          </div>
        ))}
    </React.Fragment>
  );
};
