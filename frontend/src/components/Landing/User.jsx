import React from "react";

export default ({ user, you }) => {
  console.log("USer", user);
  return (
    <div className="list">
      <h3>Online user </h3>
      {user &&
        user.map(
          (d, i) =>
            d !== "undefined" && (
              <div
                className={d === you ? "you list-item" : "list-item"}
                key={d + i}
              >
                <i className="fa fa-user" /> &nbsp;
                {d}
              </div>
            )
        )}
    </div>
  );
};
