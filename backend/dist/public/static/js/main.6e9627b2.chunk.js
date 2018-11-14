(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t){},128:function(e,t,a){},130:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"logIn",function(){return N}),a.d(r,"signUp",function(){return j}),a.d(r,"getProfile",function(){return k}),a.d(r,"getUsers",function(){return C}),a.d(r,"createChatRoom",function(){return x}),a.d(r,"getChatrooms",function(){return R}),a.d(r,"getChatroomMember",function(){return S}),a.d(r,"getChatroomMessages",function(){return M});var n=a(0),o=a.n(n),c=a(57),s=a.n(c),l=(a(70),a(2)),i=a(3),m=a(5),u=a(4),p=a(6),d=(a(72),a(141)),h=a(127),f=a(17),g=a(10),v=a.n(g),b=a(14),E=a(18),y=a.n(E),O=function(){return localStorage.getItem("chatter-auth")},w={headers:{Authorization:"JWT ".concat(O())}},N=function(e,t){return function(){var a=Object(b.a)(v.a.mark(function a(r){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("/api/v1/users/login",e);case 3:(n=a.sent)&&n.data&&n.data.token?(localStorage.setItem("chatter-auth",n.data.token),t.push("/"),window.location.reload()):(localStorage.removeItem("chatter-auth"),t.push("/login/error")),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),a.t0&&(localStorage.removeItem("chatter-auth"),t.push("/login/error"));case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r,n,o,c,s,l,i,m;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(r={},e.delete("cpassword"),n=!0,o=!1,c=void 0,t.prev=5,s=e.entries()[Symbol.iterator]();!(n=(l=s.next()).done);n=!0)i=l.value,r[i[0]]=i[1];t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),o=!0,c=t.t0;case 13:t.prev=13,t.prev=14,n||null==s.return||s.return();case 16:if(t.prev=16,!o){t.next=19;break}throw c;case 19:return t.finish(16);case 20:return t.finish(13);case 21:return t.next=23,y.a.post("/api/v1/users/signup",r);case 23:(m=t.sent)&&"Created"===m.statusText?(window.history.pushState(null,null,"/login"),window.location.reload()):(window.history.pushState(null,null,"/register/error"),window.location.reload());case 25:case"end":return t.stop()}},t,this,[[5,9,13,21],[14,,16,20]])}));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/users/profile",w);case 3:a=e.sent,r={type:"GET_PROFILE",payload:a.data},a&&a.data&&t(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),localStorage.removeItem("chatter-auth"),window.location.reload();case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r={type:"GET_CONNECTED_USER",payload:e},e&&a(r);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var a=Object(b.a)(v.a.mark(function a(r){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("/api/v1/chat/create-chatroom",e,w);case 3:(n=a.sent)&&n.data&&n.data.chatroom?(console.log("chatroom",n.data),t.push("/chatroom/".concat(n.data.id))):n&&n.data.message?t.push("/create-chatroom/error-chat-room-exist"):t.push("/create-chatroom/error"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),a.t0&&t.push("/create-chatroom/error");case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},R=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/chat/chatrooms",w);case 3:a=e.sent,r={type:"GET_CHAT_ROOM",payload:a.data},a&&a.data&&t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r,n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("/api/v1/chat/members/".concat(e),w);case 3:(r=t.sent)?(n={type:"GET_CHAT_ROOM_MEMBER",payload:r.data},r&&r.data&&a(n)):console.log("ERROR "),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ERROR",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r,n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("/api/v1/chat/messages/".concat(e),w);case 3:(r=t.sent)?(n={type:"GET_CHAT_ROOM_MESSAGE",payload:r.data},r&&r.data&&a(n)):console.log("ERROR "),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ERROR",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},P=a(7),T=a(140),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:""},a.changeHandler=function(e){var t=e.target,r=t.name,n=t.value;a.setState(Object(f.a)({},r,n))},a.submitHandler=function(){var e=a.state,t=e.email,r=e.password;a.props.logIn({email:t,password:r},a.props.history),a.setState({email:"",password:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){O()&&this.props.history.push("/"),this.props.match.params.error&&this.setState({email:"",password:""})}},{key:"render",value:function(){var e=this.props.match.params.error;return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4",style:{background:"#fcb4b8"}},e&&o.a.createElement("div",{className:"alert-danger"},"Email or password not matched!!"),o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter email",onChange:this.changeHandler,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",onChange:this.changeHandler,required:!0})),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox",name:"remember"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"rememberCheckBox"},"Remember me")),o.a.createElement("button",{type:"submit",onClick:this.submitHandler,className:"btn  mt-3"},"Submit"),o.a.createElement("button",{type:"reset",className:"btn ml-3 mt-3"},"Reset")))))}}]),t}(n.Component),F=Object(P.b)(null,r)(Object(T.a)(A)),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={password:"",cpassword:"",isPasswordMatched:!0},a.handleSubmit=function(e){var t=document.getElementById("register"),r=new FormData(t);a.props.signUp(r)},a.onPasswordChange=function(e){var t=e.target,r=t.value,n=t.name;a.setState(Object(f.a)({},n,r))},a.verifyPassword=function(e){var t,r,n=e.target,o=n.value,c=n.name;o===a.state.password?a.setState((t={},Object(f.a)(t,c,o),Object(f.a)(t,"isPasswordMatched",!0),t)):a.setState((r={},Object(f.a)(r,c,o),Object(f.a)(r,"isPasswordMatched",!1),r))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.cpassword,r=e.isPasswordMatched,n=this.props.match.params.error;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron mt-5",style:{background:"#fcb4b8"}},n&&o.a.createElement("div",{className:"alert-danger p-2 text-center",style:{marginTop:"-50px",marginBottom:"20px"}},o.a.createElement("strong",null,"Failed !! ")," to create account ",o.a.createElement("br",null),o.a.createElement("strong",null," Please try again !!!")),o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},id:"register",encType:"multipart/form-data",name:"register"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Registration Form")),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",name:"email",required:!0})),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"userName"},"User Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"userName",placeholder:"User Name",name:"userName",required:!0}))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:t,placeholder:"Password",onChange:this.onPasswordChange,required:!0})),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"cpassword"}," Conform Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"cpassword",value:a,name:"cpassword",onChange:this.verifyPassword,"aria-describedby":"pass",placeholder:"Conform Password",required:!0}),!r&&o.a.createElement("small",{id:"pass",className:"form-text text-danger"},"Password not Mathched"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"address"},"Address"),o.a.createElement("input",{type:"text",className:"form-control",id:"address",name:"address",placeholder:"Eg:-Kathmandu",required:!0})),o.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"btn ",disabled:!r},"Register"),o.a.createElement("button",{type:"reset",className:"btn  ml-4"},"Reset"))))}}]),t}(n.Component),H=Object(P.b)(null,r)(_),U=(a(99),a(139)),D=a(61),G=a.n(D),I=a(21),q=a(31),B=a.n(q),L=function(e){var t=e.user,a=e.you;return console.log("USer",t),o.a.createElement("div",{className:"list"},o.a.createElement("h3",null,"Online user "),t&&t.map(function(e,t){return"undefined"!==e&&o.a.createElement("div",{className:e===a?"you list-item":"list-item",key:e+t},o.a.createElement("i",{className:"fa fa-user"})," \xa0",e)}))},K=function(e){var t=e.message,a=e.user;return o.a.createElement(o.a.Fragment,null,t&&t.map(function(e,t){return o.a.createElement("div",{className:e.username===a?"you message":"message",key:e.message+t},o.a.createElement("span",null,e.username," :")," ",e.message)}))},W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={message:""},a.sendMessage=function(e){var t=e.key,r=a.props,n=r.socket,o=r.profile,c=a.state.message,s={username:o.userName,uid:o.id,message:c};"Enter"===t&&(n.emit("message",s),a.setState({message:""}))},a.onChange=function(e){var t=e.target.value;a.setState({message:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.message;return o.a.createElement("form",{className:"chat-text-input",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"chat",name:"message",value:e,onChange:this.onChange,onKeyUp:this.sendMessage,"aria-describedby":"chat-text",placeholder:"Enter text to chat"})))}}]),t}(n.Component),J=Object(P.b)(function(e,t){return{state:e}},null)(W),z={host:"ws://localhost:4000",chatroomhost:"ws://localhost:4000/chatroom",darkSkyApiKey:"255ca3e599e402e7891bc5f329f7428c"},$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={socket:"",messages:[]},a.componentDidMount=function(){var e=a.props.profile,t=e&&e,r=t.userName,n=t.id;if(e){var o=B()(z.host,{query:"username="+r+"&uid="+n});o.on("message",function(e){var t=a.state.messages;t=Object(I.a)(t).concat([e]),a.setState({messages:t})}),o.on("updateUsersList",function(e){a.props.getUsers(e)}),a.setState({socket:o})}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,a=e.users,r=this.state,n=r.socket,c=r.messages;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4 chat-container"},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement(L,{user:a,you:t&&t.userName})),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(K,{message:c,user:t&&t.userName}),o.a.createElement(J,{socket:n,profile:t}))))}}]),t}(n.Component),Q=Object(P.b)(function(e,t){return{profile:e.getProfileReducer,users:e.getUsers}},r)($),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=function(){},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement(Q,null))))}}]),t}(n.Component),X=Object(P.b)(function(e,t){return{profile:e.getProfileReducer}},r)(V),Y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=O(),t=this.props.profile;return o.a.createElement("div",{id:e?"auth-landing":"landing"},e&&t?o.a.createElement(X,{profile:t}):o.a.createElement(n.Fragment,null,o.a.createElement("img",{src:G.a,alt:"bg"}),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"text"},o.a.createElement("h1",null,"ChaTTer"),o.a.createElement("div",null,"Connet easily"),o.a.createElement(U.a,{to:e?"/pay/":"/register",className:"border btn text-white mt-3"},e?"pay":"Sign Up for Free"),o.a.createElement("div",{className:"d-block d-lg-none"},o.a.createElement(U.a,{className:"btn border mt-3 text-white",to:"/login"},"Login"))))))}}]),t}(n.Component),Z=Object(P.b)(function(e){return{profile:e.getProfileReducer}},r)(Y),ee=(a(128),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=function(){var e=a.props.profile;O()&&!e&&a.props.getProfile()},a.logout=function(){localStorage.removeItem("chatter-auth"),a.props.history.push("/"),window.location.reload()},a.dispayProfile=function(){document.querySelector(".profile").classList.toggle("d-none")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=O(),t=this.props.profile;return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},o.a.createElement("div",{className:"container"},o.a.createElement(U.a,{className:"navbar-brand",to:"/"},"ChaTTer"),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav d-none d-sm-block d-md-none"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(U.a,{className:"nav-link",to:"/"},"login")))),e?o.a.createElement(n.Fragment,null,o.a.createElement(U.a,{className:"float-right pl-3 pr-3",to:"/add-friend"},"Add Friend"),o.a.createElement(U.a,{className:"float-right pl-3 pr-3",to:"/create-chatroom"},"Create Chatroom"),t&&o.a.createElement("div",{className:"profile-container"},o.a.createElement("div",{className:"profile d-none"},o.a.createElement("div",null,o.a.createElement(U.a,{to:"/profile-edit",onClick:this.dispayProfile},"Edit Profile")),o.a.createElement("div",null,"User Name: ",t&&t.userName),o.a.createElement("div",{onClick:this.logout},"Logout"))),o.a.createElement("span",{className:"d-none d-lg-block m-1 p-1 text-white",onClick:this.dispayProfile},"profile")):o.a.createElement(n.Fragment,null,o.a.createElement(U.a,{className:"float-right d-none d-lg-block",to:"/register"},"Register"),o.a.createElement(U.a,{className:"float-right d-none d-lg-block ml-3",to:"/login"},"Login"))))}}]),t}(n.Component)),te=Object(P.b)(function(e,t){return{profile:e.getProfileReducer}},r)(Object(T.a)(ee)),ae=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"alert alert-success text-center"},o.a.createElement("strong",null,"Success!")," Now add frineds."))}}]),t}(n.Component),re=a(64),ne=a(138);function oe(e){var t=e.component,a=Object(re.a)(e,["component"]),r=O();return o.a.createElement(h.a,Object.assign({},a,{render:function(e){return r?o.a.createElement(t,e):o.a.createElement(ne.a,{to:"/login"})}}))}a(130);var ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={chatroom:""},a.submitHandler=function(){var e=a.props,t=e.profile,r=e.createChatRoom,n=e.history,o=a.state.chatroom;o&&t&&r({chatroom:o,createdBy:t.id},n)},a.changeHandler=function(e){var t=e.target.value;a.setState({chatroom:t})},a.errorHandle=function(){console.log("ERRor")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.chatroom,t=this.props.match.params&&this.props.match.params.error;return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4",style:{background:"#fcb4b8"}},e&&e.length<5&&o.a.createElement("span",{className:"chat-warning"},"Name should be 5 char long"),t&&"error-chat-room-exist"===t&&o.a.createElement("span",{className:"chat-warning"},"Chatroom Already exist"),t&&"error"===t&&o.a.createElement("span",{className:"chat-warning"},"Error occure while creating chatroom ",o.a.createElement("br",null)," Please Try again"),o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("label",{htmlFor:"chatroom"},"Create Chatroom"),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"chatroom",name:"chatroom",value:e,placeholder:"Enter Name of Chatroom",onChange:this.changeHandler,required:!0})),o.a.createElement("button",{type:"submit",onClick:e.length>=5?this.submitHandler:this.errorHandler,className:"btn pull-right  mt-3"},"Create")))))}}]),t}(n.Component),se=Object(P.b)(function(e,t){return{profile:e.getProfileReducer}},r)(ce),le=function(e){var t=e.user,a=e.you;return o.a.createElement("div",{className:"list"},o.a.createElement("h3",null,"Member List"),t&&t.map(function(e,t){return o.a.createElement("div",{className:e.userName===a?"you list-item":"list-item",key:e.userName+t},o.a.createElement("i",{className:"fa fa-user"})," \xa0",e.userName)}))},ie=function(e){var t=e.message,a=e.user,r=e.you;return o.a.createElement("div",{className:r===a?"you message":"message"},o.a.createElement("span",null,a," :")," ",t)},me=function(e){var t=e.message,a=e.you;return console.log("Message"),o.a.createElement(o.a.Fragment,null,t&&t.map(function(e,t){return o.a.createElement(ie,{user:e.username?e.username:e.sender?e.sender.userName:"",you:a,key:e.message+t,message:e.message})}))},ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={message:""},a.sendMessage=function(e){var t=e.key,r=a.props,n=r.socket,o=r.profile,c=a.state.message,s={username:o.userName,uid:o.id,message:c};"Enter"===t&&(n.emit("message",s),a.setState({message:""}))},a.onChange=function(e){var t=e.target.value;a.setState({message:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.message;return o.a.createElement("form",{className:"chat-text-input",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"chat",name:"message",value:e,onChange:this.onChange,onKeyUp:this.sendMessage,"aria-describedby":"chat-text",placeholder:"Enter text to chat"})))}}]),t}(n.Component),pe=Object(P.b)(function(e,t){return{state:e}},null)(ue),de={host:"ws://localhost:4000",chatroomhost:"ws://localhost:4000/chatroom",darkSkyApiKey:"255ca3e599e402e7891bc5f329f7428c"},he=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={socket:"",messages:[]},a.componentDidMount=function(){var e=a.props,t=e.profile,r=e.chatroomid,n=t&&t,o=n.userName,c=n.id;if(t){var s=B()(de.chatroomhost,{query:"username=".concat(o,"&uid=").concat(c,"&chatroom=").concat(r)});s.on("message",function(e){var t=a.state.messages;t=Object(I.a)(t).concat([e]),a.setState({messages:t})}),a.setState({socket:s})}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,a=e.chatroomid,r=e.oldMessages,n=this.state,c=n.socket,s=n.messages;return r=r&&s&&Object(I.a)(r).concat(Object(I.a)(s)),o.a.createElement("div",{className:"col-sm-9"},r&&o.a.createElement(me,{message:r,you:t&&t.userName}),o.a.createElement(pe,{socket:c,profile:t,id:a}))}}]),t}(n.Component),fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=function(){var e=a.props.match.params&&a.props.match.params.id;a.props.getChatroomMember(e),a.props.getChatroomMessages(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params&&this.props.match.params.id,t=this.props,a=t.profile,r=t.members,n=t.messages;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4 chat-container"},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement(le,{user:r,you:a&&a.userName})),a&&r&&e&&o.a.createElement(he,{profile:a,oldMessages:n,members:r,chatroomid:e})))}}]),t}(n.Component),ge=Object(P.b)(function(e,t){return{profile:e.getProfileReducer,members:e.getMembers,messages:e.getMessage}},r)(fe),ve=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(te,null),o.a.createElement(d.a,null,o.a.createElement(h.a,{exact:!0,path:"/login/:error?",component:F}),o.a.createElement(h.a,{exact:!0,path:"/register/:error?",component:H}),o.a.createElement(h.a,{exact:!0,path:"/",component:Z}),o.a.createElement(oe,{exact:!0,path:"/add-friend",component:ae}),o.a.createElement(oe,{exact:!0,path:"/create-chatroom/:error?",component:se}),o.a.createElement(oe,{exact:!0,path:"/chatroom/:id",component:ge}),o.a.createElement(oe,{exact:!0,path:"/home",component:Q})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(137),Ee=a(15),ye=a(62),Oe=Object(Ee.combineReducers)({getProfileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROFILE":return t.payload||!1;default:return e}},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONNECTED_USER":return t.payload;default:return e}},getChatrooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_ROOM":return t.payload||!1;default:return e}},getMembers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_ROOM_MEMBER":return t.payload||!1;default:return e}},getMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_ROOM_MESSAGE":return t.payload||!1;default:return e}}}),we=a(63);var Ne=function(){return Object(Ee.createStore)(Oe,Object(we.composeWithDevTools)(Object(Ee.applyMiddleware)(ye.a)))},je=(a(132),a(133),a(134),Ne());s.a.render(o.a.createElement(P.a,{store:je},o.a.createElement(be.a,null,o.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a.p+"static/media/bg.91f1dec1.gif"},65:function(e,t,a){e.exports=a(136)},70:function(e,t,a){},72:function(e,t,a){},99:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.6e9627b2.chunk.js.map