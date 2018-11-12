import React from "react";

export default ({ message, user }) => {
  return (
    <React.Fragment>
      {message &&
        message.map((d, i) => (
          <div
            className={d.username === user ? "you message" : "message"}
            key={d.message + i}
          >
            <span>{d.username} :</span> {d.message}
          </div>
        ))}
    </React.Fragment>
  );
};
