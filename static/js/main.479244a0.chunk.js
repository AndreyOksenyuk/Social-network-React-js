(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(48),r=a(1),s={dialogs:[{id:1,user:"Andrey"},{id:2,user:"Sergey"},{id:3,user:"Pedro"},{id:4,user:"Max"},{id:5,user:"Ivan"},{id:6,user:"Dimon"}],message:[{id:1,message:"Hello!!! It is my first message. How are you?"},{id:2,message:"Hello! i am ok)"},{id:3,message:"Hello!!!"},{id:4,message:"Bye!"}]},o=function(e){return{type:"ADD-NEW-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-MESSAGE":var a={id:Date.now(),message:t.message};return Object(r.a)(Object(r.a)({},e),{},{message:[].concat(Object(n.a)(e.message),[a])});default:return e}}},12:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(137),r=a.n(n).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"994c0563-a343-4b38-a674-54b0f1bd315c"}}),s={getFollow:function(e){return r.get("follow/".concat(e)).then((function(e){return e.data}))},deleteFollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},postFollow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}},o={getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUserStatus:function(e){return r.get("/profile/status/".concat(e)).then((function(e){return e.data}))},putMyStatus:function(e){return r.put("/profile/status",e)},putMyPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{}).then((function(e){return e.data}))}},c=function(){return r.get("auth/me").then((function(e){return e.data}))},i=function(e,t,a){return r.post("/auth/login",{email:e,password:t,rememberMe:a})},u=function(){return r.delete("/auth/login")}},133:function(e,t,a){"use strict";var n=a(16),r=a(0),s=a.n(r),o=a(147),c=a.n(o),i=a(131),u=a(132),l=a(43),m=a(77),d=a.n(m),f=function(e){var t=e.input,a=e.meta,n=Object(l.a)(e,["input","meta"]);return s.a.createElement("div",{className:d.a.form},s.a.createElement("textarea",Object.assign({},t,n,{className:a.valid?d.a.textarea:d.a.noValid})),!a.valid&&s.a.createElement("p",null,a.error))},p=a(44),b=Object(u.a)({form:"addPostProfile"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(i.a,{name:"post",component:f,validate:[p.b],type:"text"}),s.a.createElement("button",null,"add post"))})),E=function(e){return s.a.createElement("div",{className:c.a.addPost},s.a.createElement(b,{onSubmit:function(t){e.addPost(t.post)}}))},h=a(9),g=Object(h.b)((function(e){return{value:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(n.b)(t))},changePost:function(t){e(Object(n.c)(t))}}}))(E);t.a=g},135:function(e,t,a){"use strict";var n=a(9),r=a(0),s=a.n(r),o=a(35),c=a.n(o),i=a(32),u=a.n(i),l=(a(300),function(e){return s.a.createElement("div",{className:c.a.Posts},s.a.createElement("div",{className:c.a.post},s.a.createElement("img",{src:u.a,alt:"ava"}),s.a.createElement("i",null,e.posts.user)),s.a.createElement("p",null,e.posts.message),s.a.createElement("div",{className:c.a.likeAndDisLike},s.a.createElement("div",{className:e.posts.like.status?c.a.likeActive:c.a.noActiv,onClick:function(){e.setLike(e.index)}},s.a.createElement("div",{className:"fa fa-thumbs-up","aria-hidden":"true"},s.a.createElement("span",null,e.posts.like.count))),s.a.createElement("div",{className:e.posts.disLike.status?c.a.likeActive:c.a.noActiv,onClick:function(){e.setDisLike(e.index)}},s.a.createElement("div",{className:"fa fa-thumbs-down","aria-hidden":"true"},s.a.createElement("span",null,e.posts.disLike.count)))))}),m=function(e){return s.a.createElement("div",{className:"MapPosts"},e.posts.map((function(t,a){return s.a.createElement(l,{key:t.id,posts:t,setLike:e.setLike,setDisLike:e.setDisLike,index:a})})))},d=a(16),f=Object(n.b)((function(e){return{posts:e.profilePage.posts,text:e.profilePage.text}}),(function(e){return{setLike:function(t){e(Object(d.e)(t))},setDisLike:function(t){e(Object(d.d)(t))}}}))(m);t.a=f},136:function(e,t,a){"use strict";var n=a(23),r=a(24),s=a(26),o=a(25),c=a(0),i=a.n(c),u=a(75),l=a.n(u),m=a(10),d=function(e){var t=e.disableSubscribeBtn.some((function(t){return t===e.id}));return e.authorization?i.a.createElement(i.a.Fragment,null,e.userFollowed?i.a.createElement("button",{disabled:t,className:l.a.btnOnFollow,onClick:function(){return e.unfollow(e.id)}},t?i.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-fw"}):"\u043e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):i.a.createElement("button",{disabled:t,className:l.a.btnFollow,onClick:function(){return e.follow(e.id)}},t?i.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-fw"}):"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")):i.a.createElement(m.b,{to:"/login",className:l.a.btnFollow},"\u0432\u043e\u0439\u0442\u0438")},f=a(9),p=a(28),b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d,this.props)}}]),a}(i.a.Component);t.a=Object(f.b)((function(e){return{disableSubscribeBtn:e.usersPage.disableSubscribeBtn,authorization:e.auth.login}}),{unfollow:p.f,follow:p.b})(b)},141:function(e,t,a){e.exports={news:"News_news__3t4KC"}},142:function(e,t,a){e.exports={music:"Music_music__2L22a"}},143:function(e,t,a){e.exports={setting:"Settings_setting__3R-0J"}},144:function(e,t,a){e.exports={UsersPage:"Users_UsersPage__2v0Th",btnShoeMore:"Users_btnShoeMore__3xNDC"}},145:function(e,t,a){e.exports={Login:"Login_Login__1Ukpl"}},146:function(e,t,a){e.exports={testAccount:"TestAccData_testAccount__7z0rq"}},147:function(e,t,a){e.exports={addPost:"AddPost_addPost__11wKw"}},16:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return f})),a.d(t,"h",(function(){return p})),a.d(t,"j",(function(){return b})),a.d(t,"k",(function(){return E}));var n=a(48),r=a(1),s=a(12),o={User:{},userStatus:null,followedUser:null,newPostText:"",text:0,posts:[{id:1,user:"Andery",message:"Hello how are you?",like:{status:!0,count:56},disLike:{status:!1,count:3}},{id:2,user:"Dimon",message:"Hello! I am ok) And you?",like:{status:!1,count:8},disLike:{status:!1,count:0}},{id:3,user:"Ivan",message:"My first posts...",like:{status:!1,count:5},disLike:{status:!0,count:5}},{id:4,user:"Ivan",message:"Bye!",like:{status:!1,count:2},disLike:{status:!0,count:7}}]},c=function(e){return{type:"ADD-POST",post:e}},i=function(e){return{type:"NEW-POST",text:e}},u=function(e){return{type:"LIKE",index:e}},l=function(e){return{type:"DIS-LIKE",index:e}},m=function(){return{type:"FOLLOWED_TOGLE"}},d=function(e){return{type:"CHANGE_MY_STATUS",status:e}},f=function(e){return function(t){s.e.getUserProfile(e).then((function(e){return t({type:"USER_PROFILE",user:e})}))}},p=function(e){return function(t){s.b.getFollow(e).then((function(e){return t({type:"SET-FOLLOWED-USER",follow:e})}))}},b=function(e){return function(t){s.e.getUserStatus(e).then((function(e){return t({type:"GET_USER_STATUS",status:e})}))}},E=function(e){return function(t){s.e.putMyPhoto(e).then((function(e){0===e.resultCode&&t({type:"SET_MY_PHOTOS",photos:e.data.photos})}))}};t.g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:Date.now(),user:"User name",message:t.post,like:{status:!1,count:0},disLike:{status:!1,count:0}};return Object(r.a)(Object(r.a)({},e),{},{posts:[a].concat(Object(n.a)(e.posts))});case"NEW-POST":return Object(r.a)(Object(r.a)({},e),{},{newPostText:t.text});case"LIKE":return e.posts[t.index].like.status?Object(r.a)(Object(r.a)(Object(r.a)({},e),e.posts[t.index]=Object(r.a)(Object(r.a)({},e.posts[t.index]),{},{like:{status:!1,count:e.posts[t.index].like.count-1}})),{},{text:e.posts[t.index].like.count}):Object(r.a)(Object(r.a)(Object(r.a)({},e),e.posts[t.index]=Object(r.a)(Object(r.a)({},e.posts[t.index]),{},{like:{status:!0,count:e.posts[t.index].like.count+1},disLike:{status:!1,count:!0===e.posts[t.index].disLike.status?e.posts[t.index].disLike.count-1:e.posts[t.index].disLike.count}})),{},{text:e.posts[t.index].like.count});case"DIS-LIKE":return e.posts[t.index].disLike.status?Object(r.a)(Object(r.a)(Object(r.a)({},e),e.posts[t.index]=Object(r.a)(Object(r.a)({},e.posts[t.index]),{},{disLike:{status:!1,count:e.posts[t.index].disLike.count-1}})),{},{text:e.posts[t.index].disLike.count}):Object(r.a)(Object(r.a)(Object(r.a)({},e),e.posts[t.index]=Object(r.a)(Object(r.a)({},e.posts[t.index]),{},{disLike:{status:!0,count:e.posts[t.index].disLike.count+1},like:{status:!1,count:!0===e.posts[t.index].like.status?e.posts[t.index].like.count-1:e.posts[t.index].like.count}})),{},{text:e.posts[t.index].disLike.count});case"USER_PROFILE":return Object(r.a)(Object(r.a)({},e),{},{User:Object(r.a)({},t.user)});case"SET-FOLLOWED-USER":return Object(r.a)(Object(r.a)({},e),{},{followedUser:t.follow});case"FOLLOWED_TOGLE":return Object(r.a)(Object(r.a)({},e),{},{followedUser:e.followedUser=!e.followedUser});case"GET_USER_STATUS":case"CHANGE_MY_STATUS":return Object(r.a)(Object(r.a)({},e),{},{userStatus:t.status});case"SET_MY_PHOTOS":return Object(r.a)(Object(r.a)({},e),{},{User:Object(r.a)(Object(r.a)({},e.User),{},{photos:Object(r.a)({},t.photos)})});default:return e}}},173:function(e,t,a){e.exports=a(301)},255:function(e,t,a){},256:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},27:function(e,t,a){e.exports={email:"LoginForm_email__37VvK",emailError:"LoginForm_emailError__3RKX3",messageError:"LoginForm_messageError__3rGNQ"}},28:function(e,t,a){"use strict";a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(48),r=a(1),s=a(12),o={users:[],numberOfPages:1,numberOfUsers:6,totalUsersCount:0,isFetching:!1,portitionSize:10,disableSubscribeBtn:[]},c=function(e){return{type:"SET-PAGE",page:e}},i=function(e){return{type:"IS_FETCHING",isFetching:e}},u=function(e,t){return{type:"DISABLE_SUBSCRIBE_BTN",userId:e,isFeatching:t}},l=function(e,t){return function(a){a(i(!0)),s.e.getUsers(e,t).then((function(e){a({type:"SET-USERS",users:e.items}),a({type:"SET-TOTAL-COUNT",totalCount:e.totalCount}),a(i(!1))}))}},m=function(e){return function(t){t(u(e,!0)),s.b.deleteFollow(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",id:e}}(e)),t(u(e,!1))}))}},d=function(e){return function(t){t(u(e,!0)),s.b.postFollow(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",id:e}}(e)),t(u(e,!1))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(r.a)(Object(r.a)({},e),{},{users:t.users});case"SET-PAGE":return Object(r.a)(Object(r.a)({},e),{},{users:[],numberOfPages:t.page});case"SET-TOTAL-COUNT":return Object(r.a)(Object(r.a)({},e),{},{totalUsersCount:t.totalCount});case"IS_FETCHING":return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case"DISABLE_SUBSCRIBE_BTN":return Object(r.a)(Object(r.a)({},e),{},{disableSubscribeBtn:t.isFeatching?[].concat(Object(n.a)(e.disableSubscribeBtn),[t.userId]):e.disableSubscribeBtn.filter((function(e){return e!==t.userId}))});default:return e}}},29:function(e,t,a){e.exports={nav:"Nav_nav__2sLwg",active:"Nav_active__1MyEJ",setting:"Nav_setting__2pp3b"}},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(8),o=a(16),c=a(109),i={news:"NEWS state in the development"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},l=a(28),m=a(1),d=a(12),f=a(50),p={id:null,login:null,email:null,messages:null,isAuth:!1},b=function(e){return{type:"SET_AUTH_DATA",data:e}},E=function(){return function(e){Object(d.c)().then((function(t){0===t.resultCode&&e(b(Object(m.a)({},t.data)))}))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_DATA":return Object(m.a)(Object(m.a)(Object(m.a)({},e),t.data),{},{isAuth:!0});case"LOGIN_SET_ME_ID":return Object(m.a)(Object(m.a)({},e),{},{id:t.id,messages:t.messages,isAuth:t.isAuth});case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{id:t.id,login:null,email:null,messages:t.messages,isAuth:t.isAuth})}return e},g={text:"Settings Page in the development"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type,e},_=a(138),O=a(134),j=Object(s.c)({profilePage:o.g,messagePage:c.b,settingPage:v,usersPage:l.a,newsPage:u,auth:h,form:O.a}),S=Object(s.e)(j,Object(s.a)(_.a)),N=a(68),y=a.n(N),P=(a(255),a(256),a(10)),k=a(11),x=a(29),w=a.n(x),C=function(){return r.a.createElement("nav",{className:w.a.nav},r.a.createElement("ul",null,r.a.createElement(P.b,{teg:"li",to:"/Myprofile",activeClassName:w.a.active},"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),r.a.createElement(P.b,{to:"/message",activeClassName:w.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),r.a.createElement(P.b,{to:"/news",activeClassName:w.a.active},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement(P.b,{to:"/music",activeClassName:w.a.active},"\u041c\u0443\u0437\u044b\u043a\u0430"),r.a.createElement(P.b,{to:"/users",activeClassName:w.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),r.a.createElement(P.b,{to:"/setting",className:w.a.setting,activeClassName:w.a.active},r.a.createElement("i",{className:"fa fa-cog","aria-hidden":"true"}),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))},U=function(){return r.a.createElement("footer",{className:"footer"})},A=a(141),L=a.n(A),M=function(e){return r.a.createElement("div",{className:L.a.news},r.a.createElement("h1",null,"News"))},T=a(142),F=a.n(T),I=function(){return r.a.createElement("div",{className:F.a.music},r.a.createElement("h1",null,"Music"))},B=a(143),D=a.n(B),V=function(e){return r.a.createElement("div",{className:D.a.setting},r.a.createElement("h1",null,e.text))},H=a(9),z=a(69),G=Object(s.d)(z.a,Object(H.b)((function(e){return{text:e.settingPage.text}}),{}))((function(e){return r.a.createElement(V,e)})),R=a(23),W=a(24),K=a(26),Y=a(25),J=a(74),Q=a.n(J),q=a(32),Z=a.n(q),X=a(136),$=function(e){return r.a.createElement("div",null,e.users.map((function(e){return r.a.createElement("div",{key:e.id,className:Q.a.user},r.a.createElement(P.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:null!=e.photos.small?e.photos.small:Z.a,alt:"avatar",className:Q.a.avatar})),r.a.createElement("div",{className:Q.a.user__content},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.status)),r.a.createElement(X.a,{id:e.id,userFollowed:e.followed}))})))},ee=a(144),te=a.n(ee),ae=a(42),ne=a(73),re=a(49),se=a.n(re),oe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.numberOfUsers),a=[],s=1;s<=t;s++)a.push(s);var o=Math.ceil(t/e.portitionSize),c=Object(n.useState)(1),i=Object(ne.a)(c,2),u=i[0],l=i[1],m=(u-1)*e.portitionSize+1,d=u*e.portitionSize;return r.a.createElement("div",{className:se.a.pagination},u>1&&r.a.createElement("button",{className:se.a.prev,onClick:function(){l(u-1)}},"\u2190"),a.filter((function(e){return e>=m&&e<=d})).map((function(t){return r.a.createElement("span",{key:t,className:e.numberOfPages===t?se.a.pagination__pageActive:se.a.pagination__page,onClick:function(){e.onSetPage(t)}},t)})),o>u&&r.a.createElement("button",{className:se.a.next,onClick:function(){l(u+1)}},"\u2192"))},ce=function(e){return r.a.createElement("div",{className:te.a.UsersPage},e.fetching?r.a.createElement(ae.a,null):r.a.createElement($,{users:e.users,follow:e.follow,unfollow:e.unfollow,disableSubscribeBtn:e.disableSubscribeBtn,disableBtn:e.disableBtn}),r.a.createElement(oe,{onSetPage:e.onSetPage,numberOfPages:e.numberOfPages,totalUsersCount:e.totalUsersCount,numberOfUsers:e.numberOfUsers,portitionSize:e.portitionSize}))},ie=function(e){Object(K.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onSetPage=function(t){e.props.getUsers(t,e.props.numberOfUsers),e.props.setPage(t)},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.numberOfPages,this.props.numberOfUsers)}},{key:"render",value:function(){return r.a.createElement(ce,{users:this.props.users,numberOfPages:this.props.numberOfPages,numberOfUsers:this.props.numberOfUsers,totalUsersCount:this.props.totalUsersCount,onSetPage:this.onSetPage,fetching:this.props.fetching,portitionSize:this.props.portitionSize})}}]),a}(r.a.Component),ue=Object(H.b)((function(e){return{text:e.usersPage.text,users:e.usersPage.users,numberOfPages:e.usersPage.numberOfPages,numberOfUsers:e.usersPage.numberOfUsers,totalUsersCount:e.usersPage.totalUsersCount,fetching:e.usersPage.isFetching,portitionSize:e.usersPage.portitionSize}}),{isFetching:l.d,setPage:l.e,getUsers:l.c})(ie),le=a(39),me=a.n(le),de=function(e){var t=function(){e.logout()};return r.a.createElement("header",{className:me.a.header},r.a.createElement("div",{className:me.a.ExitIco},e.isAuth&&r.a.createElement(P.b,{to:"./login",onClick:t,className:"fa fa-sign-out fa-3x"})),r.a.createElement("div",{className:me.a.login},e.isAuth&&r.a.createElement(P.b,{to:"./login",className:me.a.logoutBtn,onClick:t},"\u0412\u044b\u0439\u0442\u0438"),e.isAuth?r.a.createElement("div",{className:me.a.login__nik},r.a.createElement(P.b,{to:"/Myprofile"},e.login),r.a.createElement("img",{src:Object(m.a)({},e.myPhoto).small||Z.a,alt:""})):r.a.createElement(P.b,{to:"/login",className:me.a.login__link},"Login")))},fe=function(e){Object(K.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.authMe()}},{key:"render",value:function(){return r.a.createElement(de,Object.assign({},this.props.data,{logout:this.props.logoutThankCreator,isAuth:this.props.isAuth,login:this.props.login,myPhoto:this.props.myPhoto}))}}]),a}(r.a.Component),pe=Object(H.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,myPhoto:e.profilePage.User.photos}}),{authMe:E,logoutThankCreator:function(){return function(e){Object(d.a)().then((function(t){0===t.data.resultCode&&e({type:"LOGOUT",id:null,messages:null,isAuth:!1})}))}}})(fe),be=a(145),Ee=a.n(be),he=a(131),ge=a(132),ve=(a(262),a(43)),_e=a(27),Oe=a.n(_e),je=function(e){var t=e.input,a=e.meta,n=Object(ve.a)(e,["input","meta"]),s=!a.dirty&&a.touched,o=a.error&&a.touched;return r.a.createElement("div",{className:o||s?Oe.a.emailError:Oe.a.email},r.a.createElement("input",Object.assign({},t,n)),o&&r.a.createElement("p",{className:Oe.a.messageError},a.error),s&&r.a.createElement("p",{className:Oe.a.messageError},"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"))},Se=function(e){var t=e.input,a=e.meta,n=Object(ve.a)(e,["input","meta"]),s=!a.dirty&&a.touched,o=a.error&&a.touched;return r.a.createElement("div",{className:o||s?Oe.a.emailError:Oe.a.email},r.a.createElement("input",Object.assign({},t,n)),o&&r.a.createElement("p",{className:Oe.a.messageError},a.error),s&&r.a.createElement("p",{className:Oe.a.messageError},"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"))},Ne=a(44),ye=Object(ge.a)({form:"login"})((function(e){return e.isAuth?r.a.createElement(k.a,{to:"/Myprofile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleSubmit,className:"login-form"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("label",{className:"lf--label",htmlFor:"email"},r.a.createElement("svg",{x:"0px",y:"0px",width:"12px",height:"13px"},r.a.createElement("path",{fill:"#B1B7C4",d:"M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"}))),r.a.createElement(he.a,{id:"email",className:"lf--input",type:"email",placeholder:"email:",name:"email",component:je,validate:[Ne.a]})),r.a.createElement("div",{className:"flex-row"},r.a.createElement("label",{className:"lf--label",htmlFor:"password"},r.a.createElement("svg",{x:"0px",y:"0px",width:"15px",height:"5px"},r.a.createElement("g",null,r.a.createElement("path",{fill:"#B1B7C4",d:"M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"})))),r.a.createElement(he.a,{id:"password",className:"lf--input",type:"password",placeholder:"password",name:"password",component:Se,validate:[Ne.b,Ne.c]})),r.a.createElement(he.a,{id:"rememberMe",type:"checkbox",name:"rememberMe",component:"input"}),r.a.createElement("label",{className:"checkBox",htmlFor:"rememberMe"},"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),r.a.createElement("button",{className:"lf--submit"},"submit"),e.error&&r.a.createElement("div",{className:"formError"},r.a.createElement("p",null,e.error))))})),Pe=a(146),ke=a.n(Pe),xe=function(){return r.a.createElement("div",{className:ke.a.testAccount},r.a.createElement("h4",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:"),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: ")," free@samuraijs.com"),r.a.createElement("p",null,r.a.createElement("strong",null,"Password: ")," free"))},we=function(e){return r.a.createElement("div",{className:Ee.a.Login},r.a.createElement(xe,null),r.a.createElement("h3",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement(ye,{onSubmit:function(t){e.loginThankCreator(t.email,t.password,t.rememberMe)},isAuth:e.isAuth}))},Ce=Object(H.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThankCreator:function(e,t,a){return function(n){Object(d.d)(e,t,a).then((function(e){var t,a;0===e.data.resultCode?(n((t=e.data.data.userId,a=e.data.messages,{type:"LOGIN_SET_ME_ID",id:t,messages:a,isAuth:!0})),Object(d.c)().then((function(e){0===e.resultCode&&n(b(Object(m.a)({},e.data)))}))):n(Object(f.a)("login",{_error:e.data.messages[0]}))}))}}})((function(e){return r.a.createElement(we,e)})),Ue=(a(94),a(133)),Ae=a(135),Le=function(e){var t=r.a.createRef(),a=Object(n.useState)(!0),s=Object(ne.a)(a,2),o=s[0],c=s[1];return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{className:"MyStatus"},null===e.status?r.a.createElement("i",null,"\u0431\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"):r.a.createElement("h5",null,e.myStatus),r.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true",onClick:function(){return c(!1)}})):r.a.createElement("input",{ref:t,type:"text",value:e.myStatus,onChange:function(){e.changeValueMyStatus(t.current.value)},autoFocus:!0,onBlur:function(){return c(!0),void d.e.putMyStatus({status:"".concat(e.myStatus)})}}))},Me=function(e){return r.a.createElement("div",{className:"UserInform"},r.a.createElement("h5",{className:"UserInform__name"},e.fullName),r.a.createElement("div",{className:"UserInform__status"},r.a.createElement(Le,{myStatus:e.myStatus,setMyStatus:e.setMyStatus,changeValueMyStatus:e.changeValueMyStatus})),r.a.createElement("div",{className:"UserInform__data"},r.a.createElement("div",{className:"UserInform__data-email"},r.a.createElement("p",null,"Email:"),r.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)),r.a.createElement("div",{className:"UserInform__data-phone"},r.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"),r.a.createElement("a",{href:"tel:+380123456789"},"+380123456789")),r.a.createElement("div",{className:"UserInform__data-phone"},r.a.createElement("p",null,"\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435:")),r.a.createElement("div",{className:"UserInform__data-phone"},r.a.createElement("p",null,"\u0420\u043e\u0431\u043e\u0442\u0430:")),r.a.createElement("div",{className:"UserInform__data-phone"},r.a.createElement("p",null,"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"))))},Te=function(){return r.a.createElement("div",{className:"AddAvatarSVG"},r.a.createElement("svg",{version:"1.1",id:"Capa_1",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M213.333,0c-70.592,0-128,57.408-128,128v42.667c0,26.411,8.043,50.965,21.803,71.381C43.221,278.912,0,347.733,0,426.667\r V448c0,35.285,28.715,64,64,64h192c11.797,0,21.333-9.557,21.333-21.333s-9.536-21.333-21.333-21.333H64\r c-11.776,0-21.333-9.579-21.333-21.333v-21.333c0-66.965,38.784-125.013,95.061-152.939\r c21.227,15.595,47.317,24.939,75.605,24.939c70.592,0,128-57.408,128-128V128C341.333,57.408,283.925,0,213.333,0z\r M298.667,170.667c0,47.061-38.272,85.333-85.333,85.333S128,217.728,128,170.667V128c0-47.061,38.272-85.333,85.333-85.333\r c47.061,0,85.333,38.272,85.333,85.333V170.667z"}),r.a.createElement("path",{d:"M490.667,362.667h-85.333v-85.333c0-11.776-9.536-21.333-21.333-21.333c-11.797,0-21.333,9.557-21.333,21.333v85.333\r h-85.333C265.536,362.667,256,372.224,256,384s9.536,21.333,21.333,21.333h85.333v85.333c0,11.776,9.536,21.333,21.333,21.333\r c11.797,0,21.333-9.557,21.333-21.333v-85.333h85.333c11.797,0,21.333-9.557,21.333-21.333S502.464,362.667,490.667,362.667z"})))},Fe=function(e){return r.a.createElement("div",{className:"MyPhotoWrapper"},e.photoLarge?r.a.createElement("img",{src:e.photoLarge,alt:"avatar",className:"MyAvatar"}):r.a.createElement("img",{src:Z.a,alt:"avatar",className:"MyAvatar"}),r.a.createElement("input",{type:"file",id:"inputPhoto",onChange:function(t){e.saveMyPhotoTC(t.target.files[0])}}),r.a.createElement("label",{htmlFor:"inputPhoto"},r.a.createElement(Te,null)))},Ie=function(e){return r.a.createElement("div",{className:"MyProfile"},r.a.createElement("div",{className:"MyProfile__user"},r.a.createElement(Fe,{photoLarge:Object(m.a)({},e.user.photos).large,saveMyPhotoTC:e.saveMyPhotoTC}),r.a.createElement(Me,{myStatus:e.myStatus,setMyStatus:e.setMyStatus,changeValueMyStatus:e.changeValueMyStatus,fullName:e.user.fullName,email:e.email})),r.a.createElement("div",{className:"MyProfile__posts"},r.a.createElement(Ue.a,null),r.a.createElement(Ae.a,null)))},Be=function(e){Object(K.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={preloader:!0},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(d.c)().then((function(t){0===t.resultCode&&(e.props.getMyProfile(t.data.id),e.props.getUserStatus(t.data.id),e.setState({preloader:!1}))}))}},{key:"render",value:function(){return this.state.preloader?r.a.createElement(ae.a,null):r.a.createElement(Ie,this.props)}}]),a}(r.a.Component),De=Object(s.d)(k.f,z.a,Object(H.b)((function(e){return{user:e.profilePage.User,myStatus:e.profilePage.userStatus,email:e.auth.email,fulfilled:e.auth.fulfilled}}),{getMyProfile:o.i,authMeThankCreator:E,getUserStatus:o.j,changeValueMyStatus:o.f,saveMyPhotoTC:o.k}))(Be),Ve=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ae.a,null)},r.a.createElement(e,t))}},He=r.a.lazy((function(){return a.e(4).then(a.bind(null,311))})),ze=r.a.lazy((function(){return a.e(3).then(a.bind(null,310))}));var Ge=function(e){return r.a.createElement(P.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(pe,null),r.a.createElement(C,null),r.a.createElement("div",{className:"mainContent"},r.a.createElement(k.b,{path:"/login",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(k.b,{path:"/Myprofile",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(k.b,{path:"/profile/:userId?",render:Ve(He)}),r.a.createElement(k.b,{path:"/message",render:Ve(ze)}),r.a.createElement(k.b,{path:"/news",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(k.b,{path:"/music",component:I}),r.a.createElement(k.b,{path:"/users",component:ue}),r.a.createElement(k.b,{path:"/setting",component:G})),r.a.createElement(U,null)))};y.a.render(r.a.createElement(P.a,null,r.a.createElement(H.a,{store:S},r.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports=a.p+"static/media/ava.2dca3c78.jpg"},35:function(e,t,a){e.exports={Posts:"Post_Posts__s5e-v",post:"Post_post__1AvUM",likeAndDisLike:"Post_likeAndDisLike___RxY0",likeActive:"Post_likeActive__2hUQu",noActiv:"Post_noActiv__eJC_O"}},39:function(e,t,a){e.exports={header:"Header_header__r3du6",ExitIco:"Header_ExitIco__2du4j",login:"Header_login__3NaN7",login__link:"Header_login__link__3bGTY",login__nik:"Header_login__nik__1Fj6g",logoutBtn:"Header_logoutBtn__KGXqq"}},42:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(261);t.a=function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{id:"cube-loader"},r.a.createElement("div",{className:"caption"},r.a.createElement("div",{className:"cube-loader"},r.a.createElement("div",{className:"cube loader-1"}),r.a.createElement("div",{className:"cube loader-2"}),r.a.createElement("div",{className:"cube loader-4"}),r.a.createElement("div",{className:"cube loader-3"})))))}},44:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return c}));var n,r,s=(n=500,function(e){return e&&e.length>n?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}),o=(r=4,function(e){return e&&e.length<r?"Must be ".concat(r," characters or more"):void 0}),c=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},49:function(e,t,a){e.exports={pagination:"Pagination_pagination__1JQ2p",pagination__page:"Pagination_pagination__page__njCfP",pagination__pageActive:"Pagination_pagination__pageActive__1F-_F",prev:"Pagination_prev__3X-Zc",next:"Pagination_next__2WQFu"}},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(23),r=a(24),s=a(26),o=a(25),c=a(0),i=a.n(c),u=a(9),l=a(11),m=function(e){var t=function(t){Object(s.a)(c,t);var a=Object(o.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(l.a,{to:"/login"})}}]),c}(i.a.Component);return Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{})(t)}},74:function(e,t,a){e.exports={user:"UserCard_user__1OPVG",avatar:"UserCard_avatar__2BHMV",user__content:"UserCard_user__content__1-BIf",locations:"UserCard_locations__1Lg61"}},75:function(e,t,a){e.exports={btnFollow:"SubscribeBtn_btnFollow__1RwV0",btnOnFollow:"SubscribeBtn_btnOnFollow__1PnOf"}},77:function(e,t,a){e.exports={form:"AddMessageForm_form__1gxLE",textarea:"AddMessageForm_textarea__1aBQa",noValid:"AddMessageForm_noValid__1Q7O3"}},94:function(e,t,a){}},[[173,1,2]]]);
//# sourceMappingURL=main.479244a0.chunk.js.map