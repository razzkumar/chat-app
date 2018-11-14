module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: \"mongodb://localhost/chatter-dev\",\n  JWT_SECRET: \"Thisisthesecretkey\"\n};\n\nconst testConfig = {\n  MONGO_URL: \"mongodb://localhost/chatter-test\",\n  JWT_SECRET: \"Thisisthesecretkey\"\n};\n\nconst prodConfig = {\n  MONGO_URL: \"mongodb://localhost/chatter-dev\",\n  JWT_SECRET: \"Thisisthesecretkey\"\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 4000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case \"development\":\n      return devConfig;\n    case \"test\":\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Removes th warnig with promises\n_mongoose2.default.Promise = global.Promise;\n\n//Connect the db with the given url\n\n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL);\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n_mongoose2.default.connection.once('open', () => console.log(\"MongoDB Running\")).on('error', e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: 'import' and 'export' may only appear at the top level (26:4)\\n\\n\\u001b[0m \\u001b[90m 24 | \\u001b[39m\\n \\u001b[90m 25 | \\u001b[39m  \\u001b[36mif\\u001b[39m (isDev) {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 26 | \\u001b[39m    \\u001b[36mimport\\u001b[39m morgan from \\u001b[32m\\\"morgan\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 27 | \\u001b[39m    app\\u001b[33m.\\u001b[39muse(morgan(\\u001b[32m\\\"dev\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\n \\u001b[90m 28 | \\u001b[39m  }\\n \\u001b[90m 29 | \\u001b[39m}\\u001b[33m;\\u001b[39m\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _socket = __webpack_require__(/*! ./socket */ \"./src/socket/index.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\n\nconst server = _http2.default.createServer(app);\n\n(0, _middleware2.default)(app);\n\n(0, _socket2.default)(server);\n\nif (true) {\n  app.get(\"/\", (req, res) => {\n    res.send(\"Hell bro\");\n  });\n}\nif (false) {}\n\n(0, _modules2.default)(app);\n\nserver.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`\n            Server is running on port: ${_constants2.default.PORT}\n\n            ----Running on ${\"development\"}\n            \n            ----Make something great!`);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/chat/chat.controllers.js":
/*!**********************************************!*\
  !*** ./src/modules/chat/chat.controllers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createChatroom = createChatroom;\nexports.getChatrooms = getChatrooms;\nexports.getChatroomsMembers = getChatroomsMembers;\nexports.getChatroomsMessage = getChatroomsMessage;\n\nvar _chatroom = __webpack_require__(/*! ./chatroom.model */ \"./src/modules/chat/chatroom.model.js\");\n\nvar _chatroom2 = _interopRequireDefault(_chatroom);\n\nvar _chatroomMessage = __webpack_require__(/*! ./chatroom.message.model */ \"./src/modules/chat/chatroom.message.model.js\");\n\nvar _chatroomMessage2 = _interopRequireDefault(_chatroomMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createChatroom(req, res) {\n  try {\n    const oldChatroom = await _chatroom2.default.find({ chatroom: req.body.chatroom });\n\n    if (oldChatroom && oldChatroom.length > 0) {\n      res.status(200).json({ message: \"chatroom exitst\" });\n    } else {\n      const chatroom = await _chatroom2.default.create(req.body);\n      if (chatroom) {\n        chatroom.member.push(req.user._id);\n        let addmember = await chatroom.save();\n        if (addmember) {\n          return res.status(200).json(addmember.toAuthJSON());\n        } else {\n          return res.status(500);\n        }\n      } else {\n        return res.status(500);\n      }\n    }\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function getChatrooms(req, res, next) {\n  const chatrooms = await _chatroom2.default.find({}, \"chatroom _id\");\n  if (chatrooms) {\n    res.status(200).json(chatrooms);\n  } else {\n    res.status(400);\n  }\n  next();\n}\nasync function getChatroomsMembers(req, res, next) {\n  const chatroomMembers = await _chatroom2.default.findById(req.params.id, \"members -_id\").populate(\"members\", \"userName _id\");\n  if (chatroomMembers) {\n    res.status(200).json(chatroomMembers.members);\n  } else {\n    res.status(400);\n  }\n  next();\n}\nasync function getChatroomsMessage(req, res, next) {\n  const ms = await _chatroom2.default.findById(req.params.id, \"messages id\").populate({\n    path: \"messages\",\n    model: \"Chatroommessage\",\n    select: \"-__v\",\n    populate: {\n      path: \"sender\",\n      model: \"User\",\n      select: \"userName -_id\"\n    }\n  });\n  if (ms) {\n    res.status(200).json(ms.messages);\n  } else {\n    res.status(400);\n  }\n  next();\n}\n\n//# sourceURL=webpack:///./src/modules/chat/chat.controllers.js?");

/***/ }),

/***/ "./src/modules/chat/chat.routes.js":
/*!*****************************************!*\
  !*** ./src/modules/chat/chat.routes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _chat = __webpack_require__(/*! ./chat.controllers */ \"./src/modules/chat/chat.controllers.js\");\n\nvar chatController = _interopRequireWildcard(_chat);\n\nvar _auth = __webpack_require__(/*! ../../services/auth/auth.services */ \"./src/services/auth/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\n\nroutes.post(\"/create-chatroom\", _auth.authJwt, chatController.createChatroom);\nroutes.get(\"/chatrooms\", _auth.authJwt, chatController.getChatrooms);\nroutes.get(\"/members/:id\", _auth.authJwt, chatController.getChatroomsMembers);\nroutes.get(\"/messages/:id\", _auth.authJwt, chatController.getChatroomsMessage);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/chat/chat.routes.js?");

/***/ }),

/***/ "./src/modules/chat/chatroom.message.model.js":
/*!****************************************************!*\
  !*** ./src/modules/chat/chatroom.message.model.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ChatRoomMessageSchema = new _mongoose.Schema({\n  message: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  sender: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"User\",\n    required: true\n  },\n  timestamp: {\n    type: Date,\n    required: true,\n    default: Date.now()\n  }\n});\nexports.default = _mongoose2.default.model(\"Chatroommessage\", ChatRoomMessageSchema);\n\n//# sourceURL=webpack:///./src/modules/chat/chatroom.message.model.js?");

/***/ }),

/***/ "./src/modules/chat/chatroom.model.js":
/*!********************************************!*\
  !*** ./src/modules/chat/chatroom.model.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ChatroomSchema = new _mongoose.Schema({\n  chatroom: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  members: [{\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"User\",\n    required: true\n  }],\n  timestamp: {\n    type: Date,\n    required: true,\n    default: Date.now()\n  },\n  createdBy: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"User\",\n    required: true\n  },\n  messages: [{\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"Chatroommessage\",\n    required: true\n  }]\n});\n\nChatroomSchema.methods = {\n  toAuthJSON() {\n    return {\n      id: this._id,\n      member: this.member,\n      createdBy: this.createdBy,\n      chatroom: this.chatroom\n    };\n  }\n};\nexports.default = _mongoose2.default.model(\"Chatroom\", ChatroomSchema);\n\n//# sourceURL=webpack:///./src/modules/chat/chatroom.model.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _chat = __webpack_require__(/*! ./chat/chat.routes */ \"./src/modules/chat/chat.routes.js\");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\nvar _auth = __webpack_require__(/*! ../services/auth/auth.services */ \"./src/services/auth/auth.services.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use(\"/api/v1/users\", _user2.default);\n  app.use(\"/api/v1/chat\", _chat2.default);\n\n  app.get(\"/hello\", _auth.authJwt, (req, res) => {\n    res.send(\"This is secret route\");\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\nexports.profile = profile;\nexports.getFriends = getFriends;\nexports.addFriends = addFriends;\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const oldUser = await _user2.default.find({\n      $or: [{ email: req.body.email }, { userName: req.body.userName }]\n    });\n    if (oldUser && oldUser.length > 0) {\n      res.status(409).json({ message: \"user exitst\" });\n    } else {\n      const user = await _user2.default.create(req.body);\n      return res.status(201).json(user.toAuthTokenJSON());\n    }\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function login(req, res, next) {\n  res.status(200).json(req.user.toAuthTokenJSON());\n  return next();\n}\nasync function profile(req, res, next) {\n  res.status(200).json(req.user.toAuthJSON());\n  return next();\n}\n\nasync function getFriends(req, res, next) {\n  const id = req.user._id;\n  const fri = await _user2.default.find({ _id: id }).populate(\"friends\", \"userName email\");\n  res.status(200).json(fri[0].friends);\n  return next();\n}\n\nasync function addFriends(req, res, next) {\n  const { friendId } = req.body;\n  let { friends } = req.user;\n  let id = _mongoose2.default.Types.ObjectId(friendId);\n  if (friends.indexOf(id) === -1) {\n    req.user.friends.push(id);\n    let savedFriend = await req.user.save();\n    res.status(200).json(savedFriend);\n  } else {\n    res.status(409).send(\"Already your friend\");\n  }\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _user = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    index: { unique: true },\n    required: [true, \"Email is required!\"],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n      message: \"{VALUE} is not valid email!\"\n    }\n  },\n  userName: {\n    type: String,\n    required: [true, \"UserName is required!\"],\n    trim: true,\n    index: { unique: true }\n  },\n  friends: [{\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"User\",\n    required: true,\n    default: \"5be13d15ea956e6052000dea\"\n  }],\n  password: {\n    type: String,\n    required: [true, \"Password is required!\"],\n    trim: true,\n    minlength: [6, \"Password need to be longer!\"],\n    validate: {\n      validator(password) {\n        return _user.passwordReg.test(password);\n      },\n      message: \"{VALUE} is not a valid password!. Password most contain capital letter special character and Numerical values\"\n    }\n  }\n});\n\nUserSchema.pre(\"save\", function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n  return next();\n});\n\nUserSchema.methods = {\n  // Hasing and varifying password\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateUser(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n\n  // jwt methods\n  createToken() {\n    return _jsonwebtoken2.default.sign({ _id: this._id }, _constants2.default.JWT_SECRET);\n  },\n  toFriendsJSON() {\n    return {\n      username: this.userName,\n      name: `${this.firstName} ${this.lastName}`\n    };\n  },\n  toAuthJSON() {\n    return {\n      id: this._id,\n      friends: this.friends,\n      email: this.email,\n      userName: this.userName\n    };\n  },\n  toAuthTokenJSON() {\n    return {\n      token: `${this.createToken()}`\n    };\n  }\n};\nexports.default = _mongoose2.default.model(\"User\", UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _auth = __webpack_require__(/*! ../../services/auth/auth.services */ \"./src/services/auth/auth.services.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\n\nroutes.post(\"/signup\", (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\n// routes.get('/getuser', userController.getUser);\n\nroutes.post(\"/login\", _auth.authLocal, userController.login);\n\nroutes.get(\"/profile\", _auth.authJwt, userController.profile);\n\nroutes.get(\"/friends\", _auth.authJwt, userController.getFriends);\n\nroutes.post(\"/addfriend\", _auth.authJwt, userController.addFriends);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    firstName: _joi2.default.string().required(),\n    lastName: _joi2.default.string().required(),\n    userName: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth/auth.services.js":
/*!********************************************!*\
  !*** ./src/services/auth/auth.services.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = exports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _user = __webpack_require__(/*! ../../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst localOptions = {\n  usernameField: \"email\"\n};\n\nconst localStrategy = new _passportLocal2.default(localOptions, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({ email });\n    if (!user) {\n      return done(null, false, { message: \"Incorrect email\" });\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false, { message: \"Incorrect password\" });\n    }\n    return done(false, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n// jwt strategy\nconst jwtOptions = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"JWT\"),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\n\nconst jwtStrategy = new _passportJwt.Strategy(jwtOptions, async (payload, done) => {\n  try {\n    // Identify user by ID,\n    const user = await _user2.default.findById(payload._id);\n    if (!user) {\n      return done(null, false);\n    }\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n//using different strategy\n\n_passport2.default.use(localStrategy);\n_passport2.default.use(jwtStrategy);\n\n// exporting\nconst authLocal = exports.authLocal = _passport2.default.authenticate(\"local\", { session: false });\nconst authJwt = exports.authJwt = _passport2.default.authenticate(\"jwt\", { session: false });\n\n//# sourceURL=webpack:///./src/services/auth/auth.services.js?");

/***/ }),

/***/ "./src/socket/index.js":
/*!*****************************!*\
  !*** ./src/socket/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _socket = __webpack_require__(/*! socket.io */ \"socket.io\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import User from \"./users\";\n\nlet users = {};\n\nconst getUsers = () => {\n  return Object.keys(users).map(function (key) {\n    return users[key].username;\n  });\n};\nconst createSocket = user => {\n  let cur_user = users[user.uid],\n      updated_user = {\n    [user.uid]: Object.assign(cur_user, {\n      sockets: [...cur_user.sockets, user.socket_id]\n    })\n  };\n  users = Object.assign(users, updated_user);\n};\n\nconst createUser = user => {\n  users = Object.assign({\n    [user.uid]: {\n      username: user.username,\n      uid: user.uid,\n      sockets: [user.socket_id]\n    }\n  }, users);\n};\n\nconst removeSocket = socket_id => {\n  let uid = \"\";\n  Object.keys(users).map(function (key) {\n    let sockets = users[key].sockets;\n    if (sockets.indexOf(socket_id) !== -1) {\n      uid = key;\n    }\n  });\n  let user = users[uid];\n  if (user.sockets.length > 1) {\n    // Remove socket only\n    let index = user.sockets.indexOf(socket_id);\n    let updated_user = {\n      [uid]: Object.assign(user, {\n        sockets: user.sockets.slice(0, index).concat(user.sockets.slice(index + 1))\n      })\n    };\n    users = Object.assign(users, updated_user);\n  } else {\n    // Remove user by key\n    let clone_users = Object.assign({}, users);\n    delete clone_users[uid];\n    users = clone_users;\n  }\n};\n\nexports.default = server => {\n  const io = (0, _socket2.default)(server);\n\n  // Default linsenter on \"/\"\n  io.on(\"connection\", socket => {\n    let query = socket.request._query,\n        user = {\n      username: query.username,\n      uid: query.uid,\n      socket_id: socket.id\n    };\n\n    if (users[user.uid] !== undefined) {\n      createSocket(user);\n      socket.emit(\"updateUsersList\", getUsers());\n    } else {\n      createUser(user);\n      io.emit(\"updateUsersList\", getUsers());\n    }\n    socket.on(\"message\", data => {\n      io.sockets.emit(\"message\", {\n        username: data.username,\n        message: data.message,\n        uid: data.uid\n      });\n    });\n\n    socket.on(\"disconnect\", () => {\n      console.log(\"USer  disconect in home\");\n      removeSocket(socket.id);\n      io.emit(\"updateUsersList\", getUsers());\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/socket/index.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });