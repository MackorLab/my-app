(this["webpackJsonpvk-mini-app"]=this["webpackJsonpvk-mini-app"]||[]).push([[0],{138:function(e,t,c){},159:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),i=c.n(s),r=c(17),a=c.n(r),j=c(26),d=c.n(j),o=c(38),l=c(21),h=c(6),b=(c(136),c(5)),u=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(b.jsxs)(h.i,{id:t,children:[Object(b.jsx)(h.j,{children:"\u0412\u0430\u0448\u0438"}),n&&Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0418\u043c\u044f "}),children:Object(b.jsx)(h.e,{before:n.photo_200?Object(b.jsx)(h.c,{src:n.photo_200}):null,children:"".concat(n.first_name," ").concat(n.last_name)})}),n&&Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"\u0413\u043e\u0440\u043e\u0434"}),children:Object(b.jsx)(h.e,{children:"".concat(n.city.title)})}),n&&Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"VK_ID"}),children:Object(b.jsx)(h.e,{children:"".concat(n.id)})}),Object(b.jsx)(h.f,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f"})})]})},O=c.p+"static/media/Moscow.81daead8.jpg",p=(c(138),function(e){return Object(b.jsxs)(h.i,{id:e.id,children:[Object(b.jsx)(h.j,{left:Object(b.jsx)(h.k,{onClick:e.go,"data-to":"home"}),children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),Object(b.jsx)("img",{className:"Persik",src:O,alt:"Persik The Cat"}),Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("h1",{children:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:"}),Object(b.jsxs)("h2",{children:["-- ",(new Date).toLocaleTimeString()," --"]})]})]})}),x=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),j=r[0],O=r[1],x=Object(n.useState)(null),m=Object(l.a)(x,2),f=m[0],g=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,O(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){s(e.currentTarget.dataset.to)};return Object(b.jsx)(h.a,{children:Object(b.jsx)(h.b,{children:Object(b.jsxs)(h.l,{activePanel:c,popout:f,children:[Object(b.jsx)(u,{id:"home",fetchedUser:j,go:v}),Object(b.jsx)(p,{id:"persik",go:v})]})})})};c(139);a.a.send("VKWebAppInit"),setInterval((function(){i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}),1e3)}},[[159,1,2]]]);
//# sourceMappingURL=main.6fe96aa8.chunk.js.map