(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[3],{485:function(e,a,t){e.exports={dialog:"Message_dialog__3LJwE",messages:"Message_messages__2KDfa",dialog_wrapper:"Message_dialog_wrapper__oDkT2"}},488:function(e,a,t){},489:function(e,a,t){e.exports={form:"AddMessageForm_form__1yZMz",textarea:"AddMessageForm_textarea__1FubE",noValid:"AddMessageForm_noValid__2mluG"}},490:function(e,a,t){e.exports={dialog:"Dialog_dialog___V64F",listItem:"Dialog_listItem__1xS0B",active:"Dialog_active__uvKFc"}},491:function(e,a,t){e.exports={dialog_inner:"DialogMessage_dialog_inner__2dvTV",message_item:"DialogMessage_message_item__33aDY",avatar:"DialogMessage_avatar__2hOvh",date:"DialogMessage_date__2Fnpn"}},494:function(e,a,t){"use strict";t.r(a);var n=t(69),s=t(70),r=t(72),i=t(71),l=t(0),c=t.n(l),m=t(485),o=t.n(m),d=t(199),u=(t(488),t(226)),g=t(227),_=t(42),f=t(489),p=t.n(f),v=t(465).a.TextArea,E=function(e){var a=e.input,t=e.meta,n=Object(_.a)(e,["input","meta"]);return c.a.createElement("div",{className:p.a.form},c.a.createElement(v,Object.assign({},a,n,{className:t.valid?p.a.textarea:p.a.noValid})),!t.valid&&c.a.createElement("p",null,t.error))},b=t(106),M=Object(g.a)({form:"FormAddMessage"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(u.a,{name:"addMessage",component:E,validate:[b.b]}),c.a.createElement("button",{className:"Button"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})),N=function(e){return c.a.createElement("div",{className:"addMessage"},c.a.createElement(M,{onSubmit:function(a){e.addMessage(a.addMessage)}}))},O=t(10),j=t(54),D=Object(O.b)((function(e){return{}}),(function(e){return{addMessage:function(a){e(Object(d.a)(a)),e(Object(j.a)("FormAddMessage"))}}}))(N),x=t(490),F=t.n(x),h=t(30),k=t(82),w=t.n(k),y=function(e){var a=e.dialog;return c.a.createElement(h.b,{to:"/message/"+a.id,className:F.a.dialog,activeClassName:F.a.active},c.a.createElement("div",{className:F.a.listItem},c.a.createElement("img",{src:w.a,alt:"ava"}),c.a.createElement("p",null,a.user)))},A=function(e){return c.a.createElement("div",{className:o.a.dialog_wrapper},e.dialogs.map((function(e){return c.a.createElement(y,{dialog:e,key:e.id})})))},V=Object(O.b)((function(e){return{dialogs:e.messagePage.dialogs}}),(function(e){return{}}))(A),S=t(491),I=t.n(S),J=function(e){return c.a.createElement("div",{className:I.a.dialog_inner},e.message.map((function(e){return c.a.createElement("div",{className:I.a.message_item,key:e.id},c.a.createElement("img",{src:w.a,alt:"avatar",className:I.a.avatar}),c.a.createElement("p",{key:e.id},e.message),c.a.createElement("span",{className:I.a.date},e.date))})))},T=Object(O.b)((function(e){return{message:e.messagePage.message}}),{})(J),B=function(e){return c.a.createElement("div",{className:o.a.messages},c.a.createElement(V,null),c.a.createElement("div",{className:o.a.dialog},c.a.createElement(T,null),c.a.createElement(D,null)))},C=t(142),K=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(B,null)}}]),t}(l.Component);a.default=Object(C.a)(K)}}]);
//# sourceMappingURL=3.fd43cce9.chunk.js.map