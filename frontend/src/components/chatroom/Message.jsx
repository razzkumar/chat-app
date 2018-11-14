import React from "react";
import MessageList from "./MessageList";

export default ({ message, you }) => {
  console.log("Message");
  return (
    <React.Fragment>
      {message &&
        message.map((d, i) => (
          <MessageList
            user={d.username ? d.username : d.sender ? d.sender.userName : ""}
            you={you}
            key={d.message + i}
            message={d.message}
          />
        ))}
    </React.Fragment>
  );
};
