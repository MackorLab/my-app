(this["webpackJsonpvk-mini-app"]=this["webpackJsonpvk-mini-app"]||[]).push([[0],{138:function(e,t,c){},159:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),i=c.n(s),r=c(17),a=c.n(r),d=c(26),j=c.n(d),o=c(38),b=c(21),h=c(6),l=(c(136),c(5)),u=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(l.jsxs)(h.i,{id:t,children:[Object(l.jsx)(h.j,{children:"\u0412\u0430\u0448\u0438"}),n&&Object(l.jsx)(h.g,{header:Object(l.jsx)(h.h,{mode:"secondary",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0418\u043c\u044f "}),children:Object(l.jsx)(h.e,{before:n.photo_200?Object(l.jsx)(h.c,{src:n.photo_200}):null,children:"".concat(n.first_name," ").concat(n.last_name)})}),n&&Object(l.jsx)(h.g,{header:Object(l.jsx)(h.h,{mode:"secondary",children:"\u0413\u043e\u0440\u043e\u0434"}),children:Object(l.jsx)(h.e,{children:"".concat(n.city.title)})}),n&&Object(l.jsx)(h.g,{header:Object(l.jsx)(h.h,{mode:"secondary",children:"VK_ID"}),children:Object(l.jsx)(h.e,{children:"".concat(n.id)})}),Object(l.jsx)(h.f,{children:Object(l.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f"})})]})},p=c.p+"static/media/Moscow.81daead8.jpg";c(138);a.a.send("VKWebAppTapticNotificationOccurred",{type:"success"});var O=function(e){return Object(l.jsxs)(h.i,{id:e.id,children:[Object(l.jsx)(h.j,{left:Object(l.jsx)(h.k,{onClick:e.go,"data-to":"home"}),children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),Object(l.jsx)("img",{className:"Persik",src:p,alt:"Persik The Cat"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h1",{children:"\u041c\u0435\u0441\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:"}),Object(l.jsxs)("h2",{children:["-- ",(new Date).toLocaleTimeString()," --"]})]})]})},x=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),d=r[0],p=r[1],x=Object(n.useState)(null),m=Object(b.a)(x,2),f=m[0],v=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var g=function(e){s(e.currentTarget.dataset.to)};return Object(l.jsx)(h.a,{children:Object(l.jsx)(h.b,{children:Object(l.jsxs)(h.l,{activePanel:c,popout:f,children:[Object(l.jsx)(u,{id:"home",fetchedUser:d,go:g}),Object(l.jsx)(O,{id:"persik",go:g})]})})})};c(139);a.a.send("VKWebAppInit"),setInterval((function(){i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}),1e3),a.a.send("VKWebAppGetPhoneNumber",{})}},[[159,1,2]]]);
//# sourceMappingURL=main.4818f3f0.chunk.js.map