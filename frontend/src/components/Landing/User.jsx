import React from "react";

export default ({ user, you, allUser }) => {
  return (
    <div className="list">
      <h3>Chatter User</h3>
      {allUser &&
        allUser.map((d, i) => (
          <div
            className={
              d.userName === you
                ? "you online list-item"
                : user.includes(d.userName)
                ? "online list-item"
                : "list-item offline"
            }
            key={d.userName + i}
          >
            <i className="fa fa-user" /> &nbsp;
            {d.userName + "  "}
            {d.userName === you ? "(you)" : ""}
          </div>
        ))}
    </div>
  );
};
