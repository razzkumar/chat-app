let host, chatroomhost;

const hostname = window.location.hostname;

if (hostname.indexOf("livechat.yarsha.net") >= 0) {
  host = "ws://livechat.yarsha.net";
  chatroomhost = "ws://livechat.yarsha.net/chatroom";
} else {
  host = "ws://localhost:4000";
  chatroomhost = "ws://localhost:4000/chatroom";
}

export { host, chatroomhost };
