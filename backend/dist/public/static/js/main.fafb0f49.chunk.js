(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t){},128:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"logIn",function(){return O}),a.d(r,"signUp",function(){return j}),a.d(r,"getProfile",function(){return k}),a.d(r,"getUsers",function(){return x}),a.d(r,"getMembers",function(){return C}),a.d(r,"getMessages",function(){return S});var n=a(0),s=a.n(n),o=a(55),c=a.n(o),l=(a(70),a(4)),i=a(5),m=a(7),u=a(6),d=a(8),p=(a(72),a(137)),h=a(127),f=a(16),g=a(11),v=a.n(g),b=a(17),E=a(20),y=a.n(E),w=function(){return localStorage.getItem("chatter-auth")},N={headers:{Authorization:"JWT ".concat(w())}},O=function(e,t){return function(){var a=Object(b.a)(v.a.mark(function a(r){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("/api/v1/users/login",e);case 3:(n=a.sent)&&n.data&&n.data.token?(localStorage.setItem("chatter-auth",n.data.token),t.push("/"),window.location.reload()):(localStorage.removeItem("chatter-auth"),t.push("/login/error")),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),a.t0&&(localStorage.removeItem("chatter-auth"),t.push("/login/error"));case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r,n,s,o,c,l,i,m;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(r={},e.delete("cpassword"),n=!0,s=!1,o=void 0,t.prev=5,c=e.entries()[Symbol.iterator]();!(n=(l=c.next()).done);n=!0)i=l.value,r[i[0]]=i[1];t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),s=!0,o=t.t0;case 13:t.prev=13,t.prev=14,n||null==c.return||c.return();case 16:if(t.prev=16,!s){t.next=19;break}throw o;case 19:return t.finish(16);case 20:return t.finish(13);case 21:return t.next=23,y.a.post("/api/v1/users/signup",r);case 23:(m=t.sent)&&"Created"===m.statusText?(window.history.pushState(null,null,"/login"),window.location.reload()):(window.history.pushState(null,null,"/register/error"),window.location.reload());case 25:case"end":return t.stop()}},t,this,[[5,9,13,21],[14,,16,20]])}));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/users/profile",N);case 3:a=e.sent,r={type:"GET_PROFILE",payload:a.data},a&&a.data&&t(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),localStorage.removeItem("chatter-auth"),window.location.reload();case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r={type:"GET_CONNECTED_USER",payload:e},e&&a(r);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/chat/members",N);case 3:(a=e.sent)?(r={type:"GET_CHAT_MEMBER",payload:a.data},a&&a.data&&t(r)):console.log("ERROR "),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/chat/messages",N);case 3:(a=e.sent)?(r={type:"GET_CHAT_MESSAGE",payload:a.data},a&&a.data&&t(r)):console.log("ERROR "),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},M=a(10),R=a(139),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:""},a.changeHandler=function(e){var t=e.target,r=t.name,n=t.value;a.setState(Object(f.a)({},r,n))},a.submitHandler=function(){var e=a.state,t=e.email,r=e.password;a.props.logIn({email:t,password:r},a.props.history),a.setState({email:"",password:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){w()&&this.props.history.push("/"),this.props.match.params.error&&this.setState({email:"",password:""})}},{key:"render",value:function(){var e=this.props.match.params.error;return s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"jumbotron col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4",style:{background:"#fcb4b8"}},e&&s.a.createElement("div",{className:"alert-danger"},"Email or password not matched!!"),s.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email address"),s.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter email",onChange:this.changeHandler,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",onChange:this.changeHandler,required:!0})),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox",name:"remember"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"rememberCheckBox"},"Remember me")),s.a.createElement("button",{type:"submit",onClick:this.submitHandler,className:"btn  mt-3"},"Submit"),s.a.createElement("button",{type:"reset",className:"btn ml-3 mt-3"},"Reset")))))}}]),t}(n.Component),P=Object(M.b)(null,r)(Object(R.a)(T)),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={password:"",cpassword:"",isPasswordMatched:!0},a.handleSubmit=function(e){var t=document.getElementById("register"),r=new FormData(t);a.props.signUp(r)},a.onPasswordChange=function(e){var t=e.target,r=t.value,n=t.name;a.setState(Object(f.a)({},n,r))},a.verifyPassword=function(e){var t,r,n=e.target,s=n.value,o=n.name;s===a.state.password?a.setState((t={},Object(f.a)(t,o,s),Object(f.a)(t,"isPasswordMatched",!0),t)):a.setState((r={},Object(f.a)(r,o,s),Object(f.a)(r,"isPasswordMatched",!1),r))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.cpassword,r=e.isPasswordMatched,n=this.props.match.params.error;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron mt-5",style:{background:"#fcb4b8"}},n&&s.a.createElement("div",{className:"alert-danger p-2 text-center",style:{marginTop:"-50px",marginBottom:"20px"}},s.a.createElement("strong",null,"Failed !! ")," to create account ",s.a.createElement("br",null),s.a.createElement("strong",null," Please try again !!!")),s.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},id:"register",encType:"multipart/form-data",name:"register"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,"Registration Form")),s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",name:"email",required:!0})),s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("label",{htmlFor:"userName"},"User Name"),s.a.createElement("input",{type:"text",className:"form-control",id:"userName",placeholder:"User Name",name:"userName",required:!0}))),s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:t,placeholder:"Password",onChange:this.onPasswordChange,required:!0})),s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("label",{htmlFor:"cpassword"}," Conform Password"),s.a.createElement("input",{type:"password",className:"form-control",id:"cpassword",value:a,name:"cpassword",onChange:this.verifyPassword,"aria-describedby":"pass",placeholder:"Conform Password",required:!0}),!r&&s.a.createElement("small",{id:"pass",className:"form-text text-danger"},"Password not Mathched"))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"address"},"Address"),s.a.createElement("input",{type:"text",className:"form-control",id:"address",name:"address",placeholder:"Eg:-Kathmandu",required:!0})),s.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"btn ",disabled:!r},"Register"),s.a.createElement("button",{type:"reset",className:"btn  ml-4"},"Reset"))))}}]),t}(n.Component),U=Object(M.b)(null,r)(F),A=(a(99),a(138)),_=a(59),H=a.n(_),B=a(63),I=a(60),G=a.n(I),D=function(e){var t=e.user,a=e.you,r=e.allUser;return s.a.createElement("div",{className:"list"},s.a.createElement("h3",null,"Chatter User"),r&&r.map(function(e,r){return s.a.createElement("div",{className:e.userName===a?"you online list-item":t.includes(e.userName)?"online list-item":"list-item offline",key:e.userName+r},s.a.createElement("i",{className:"fa fa-user"})," \xa0",e.userName+"  ",e.userName===a?"(you)":"")}))},q=function(e){var t=e.message,a=e.user,r=e.allMessage;return s.a.createElement(s.a.Fragment,null,r&&r.map(function(e,t){return s.a.createElement("div",{className:e.userName===a?"you message":"message",key:e.message+t},s.a.createElement("span",null,e.sender.userName," :")," ",e.message)}),t&&t.map(function(e,t){return s.a.createElement("div",{className:e.username===a?"you message":"message",key:e.message+t},s.a.createElement("span",null,e.username," :")," ",e.message)}))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={message:""},a.sendMessage=function(e){var t=e.key,r=a.props,n=r.socket,s=r.profile,o=a.state.message,c={username:s.userName,uid:s.id,message:o};"Enter"===t&&(n.emit("message",c),a.setState({message:""}))},a.onChange=function(e){var t=e.target.value;a.setState({message:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.message;return s.a.createElement("form",{className:"chat-text-input",onSubmit:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",id:"chat",name:"message",value:e,onChange:this.onChange,onKeyUp:this.sendMessage,"aria-describedby":"chat-text",placeholder:"Enter text to chat"})))}}]),t}(n.Component),W=Object(M.b)(function(e,t){return{state:e}},null)(L),J={host:"ws://localhost:4000",chatroomhost:"ws://localhost:4000/chatroom",darkSkyApiKey:"255ca3e599e402e7891bc5f329f7428c"},K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={socket:"",messages:[],members:[]},a.componentDidMount=function(){a.props.getMembers(),a.props.getMessages();var e=a.props.profile,t=e&&e,r=t.userName,n=t.id;if(e){var s=G()(J.host,{query:"username="+r+"&uid="+n});s.on("message",function(e){var t=a.state.messages;t=Object(B.a)(t).concat([e]),a.scrollToBottom(),a.setState({messages:t})}),s.on("updateUsersList",function(e){a.props.getUsers(e)}),a.setState({socket:s})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"scrollToBottom",value:function(){var e=document.getElementsByClassName("chat-container")[0];e.scrollTop=e.scrollHeight-e.clientHeight,console.log("YEBA",e.scrollHeight,e.clientHeight,e.scrollTop)}},{key:"render",value:function(){var e=this.props,t=e.profile,a=e.users,r=e.allUser,n=e.allMessage;console.log("al",r);var o=this.state,c=o.socket,l=o.messages;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-sm-3"},r&&s.a.createElement(D,{user:a,you:t&&t.userName,allUser:r})),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("div",{className:"chat-container"},n&&s.a.createElement(q,{message:l,allMessage:n,user:t&&t.userName})),s.a.createElement(W,{socket:c,profile:t}))))}}]),t}(n.Component),z=Object(M.b)(function(e,t){return{profile:e.getProfileReducer,users:e.getUsers,allUser:e.getMembers,allMessage:e.getMessage}},r)(K),Y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=w(),t=this.props.profile;return s.a.createElement("div",{id:e?"auth-landing":"landing"},e&&t?s.a.createElement(z,{profile:t}):s.a.createElement(n.Fragment,null,s.a.createElement("img",{src:H.a,alt:"bg"}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"text"},s.a.createElement("h1",null,"ChaTTer"),s.a.createElement("div",null,"Connet easily"),s.a.createElement(A.a,{to:e?"/pay/":"/register",className:"border btn text-white mt-3"},e?"pay":"Sign Up for Free"),s.a.createElement("div",{className:"d-block d-lg-none"},s.a.createElement(A.a,{className:"btn border mt-3 text-white",to:"/login"},"Login"))))))}}]),t}(n.Component),$=Object(M.b)(function(e){return{profile:e.getProfileReducer}},r)(Y),Q=(a(128),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=function(){var e=a.props.profile;w()&&!e&&a.props.getProfile()},a.logout=function(){localStorage.removeItem("chatter-auth"),a.props.history.push("/"),window.location.reload()},a.dispayProfile=function(){document.querySelector(".profile").classList.toggle("d-none")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=w(),t=this.props.profile;return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},s.a.createElement("div",{className:"container"},s.a.createElement(A.a,{className:"navbar-brand",to:"/"},"ChaTTer"),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},s.a.createElement("ul",{className:"navbar-nav d-none d-sm-block d-md-none"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement(A.a,{className:"nav-link",to:"/"},"login")))),e?s.a.createElement(n.Fragment,null,s.a.createElement(A.a,{className:"float-right pl-3 pr-3",to:"/add-friend"},"Add Friend"),s.a.createElement(A.a,{className:"float-right pl-3 pr-3",to:"/create-chatroom"},"Create Chatroom"),t&&s.a.createElement("div",{className:"profile-container"},s.a.createElement("div",{className:"profile d-none"},s.a.createElement("div",null,s.a.createElement(A.a,{to:"/profile-edit",onClick:this.dispayProfile},"Edit Profile")),s.a.createElement("div",null,"User Name: ",t&&t.userName),s.a.createElement("div",{onClick:this.logout},"Logout"))),s.a.createElement("span",{className:"d-none d-lg-block m-1 p-1 text-white",onClick:this.dispayProfile},"profile")):s.a.createElement(n.Fragment,null,s.a.createElement(A.a,{className:"float-right d-none d-lg-block",to:"/register"},"Register"),s.a.createElement(A.a,{className:"float-right d-none d-lg-block ml-3",to:"/login"},"Login"))))}}]),t}(n.Component)),V=Object(M.b)(function(e,t){return{profile:e.getProfileReducer}},r)(Object(R.a)(Q)),X=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"alert alert-success text-center"},s.a.createElement("strong",null,"Success!")," Now add frineds."))}}]),t}(n.Component),Z=a(64),ee=a(136);function te(e){var t=e.component,a=Object(Z.a)(e,["component"]),r=w();return s.a.createElement(h.a,Object.assign({},a,{render:function(e){return r?s.a.createElement(t,e):s.a.createElement(ee.a,{to:"/login"})}}))}var ae=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(V,null),s.a.createElement(p.a,null,s.a.createElement(h.a,{exact:!0,path:"/login/:error?",component:P}),s.a.createElement(h.a,{exact:!0,path:"/register/:error?",component:U}),s.a.createElement(h.a,{exact:!0,path:"/",component:$}),s.a.createElement(te,{exact:!0,path:"/add-friend",component:X})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(135),ne=a(14),se=a(61),oe=Object(ne.combineReducers)({getProfileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROFILE":return t.payload||!1;default:return e}},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONNECTED_USER":return t.payload;default:return e}},getChatrooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_ROOM":return t.payload||!1;default:return e}},getMembers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_MEMBER":return t.payload||!1;default:return e}},getMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHAT_MESSAGE":return t.payload||!1;default:return e}}}),ce=a(62);var le=function(){return Object(ne.createStore)(oe,Object(ce.composeWithDevTools)(Object(ne.applyMiddleware)(se.a)))},ie=(a(130),a(131),a(132),le());c.a.render(s.a.createElement(M.a,{store:ie},s.a.createElement(re.a,null,s.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a.p+"static/media/bg.91f1dec1.gif"},65:function(e,t,a){e.exports=a(134)},70:function(e,t,a){},72:function(e,t,a){},99:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.fafb0f49.chunk.js.map