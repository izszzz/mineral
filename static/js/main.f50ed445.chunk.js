(this.webpackJsonpmineral=this.webpackJsonpmineral||[]).push([[0],{10:function(e,t,a){e.exports={article:"article_article__24Yma",link:"article_link__3Nkwq App_link__4RR_J",container:"article_container__2hMj4",preview:"article_preview__1ZrV1 App_flex-center__1k7c5 App_flex__roWqQ"}},103:function(e,t,a){e.exports={main:"App_main__3ZkGI App_flex-between__3TQpN App_flex__roWqQ"}},104:function(e,t,a){e.exports={first:"landing_first__33n7S"}},106:function(e,t,a){e.exports=a.p+"static/media/Home.1e7bdfef.md"},116:function(e,t,a){e.exports=a(520)},12:function(e,t,a){e.exports={header:"header_header__HZ6Fg App_flex-between-center__1OwBO App_flex-between__3TQpN App_flex__roWqQ",nav:"header_nav__2v8dK App_flex-between-center__1OwBO App_flex-between__3TQpN App_flex__roWqQ",h2:"header_h2__2GFZ5 App_init__3ZnJr",ul:"header_ul__2I2jo App_init__3ZnJr",link:"header_link__3XF52 App_link__4RR_J",li:"header_li__2iWkp"}},121:function(e,t,a){},122:function(e,t,a){},23:function(e,t,a){e.exports={link:"card_link__2emBe App_link__4RR_J",cards:"card_cards__2XVkr App_init__3ZnJr",card:"card_card__1PvOV"}},24:function(e,t,a){e.exports={sidebar:"sidebar_sidebar__XsjxJ",ul:"sidebar_ul__3gV0S App_ul__3Tymj App_init__3ZnJr",link:"sidebar_link__1FljM App_link__4RR_J",li:"sidebar_li__r95zt"}},241:function(e,t){},520:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(121),a(9)),o=a(1),s=a(103),m=a.n(s),u=(a(122),a(104)),p=a.n(u),d=function(){return r.a.createElement("section",{className:p.a.first},r.a.createElement("span",null,"mineral.web"),r.a.createElement("background-1",{number:"100",colors:"#ff8080,#80b0ff,#afff80"}))},_=a(2),b=a(12),h=a.n(b),f=function(){return r.a.createElement("header",{className:h.a.header},r.a.createElement(i.b,{to:"/",className:h.a.link},r.a.createElement("h2",{className:h.a.h2},"Mineral.web")),r.a.createElement("nav",{className:h.a.nav},r.a.createElement(E,{lists:[["Home","/home"],["Document","/document"],["Guide","#"]]}),r.a.createElement(E,{lists:[]})))},E=function(e){return r.a.createElement("ul",{className:h.a.ul},e.lists.map((function(e){var t=Object(_.a)(e,2),a=t[0],n=t[1];return r.a.createElement(i.b,{className:h.a.link,to:n,key:a},r.a.createElement("li",{className:h.a.li},a))})))},g=a(32),v=a.n(g),k=a(10),w=a.n(k),x=a(106),y=a.n(x),j=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch(y.a).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[]),r.a.createElement("article",{className:w.a.article},r.a.createElement("div",{className:w.a.container},r.a.createElement(v.a,{source:a})))},N={btn:{BasicBtn:r.a.createElement(r.a.Fragment,null,r.a.createElement("basic-btn",{label:"basicbtn"}),r.a.createElement("basic-btn",{normal:"skyblue",hover:"deepskyblue",active:"lightskyblue",label:"bluebtn"}),r.a.createElement("basic-btn",{normal:"salmon",hover:"indianred",active:"lightsalmon",label:"redbtn"}),r.a.createElement("basic-btn",{normal:"darkcyan",hover:"green",active:"lightseagreen",label:"greenbtn"})),FollowBtn:r.a.createElement("follow-btn",null)},tooltip:{BasicTooltip:r.a.createElement("basic-tooltip",{text:"this is tooltip",position:"bottom"},r.a.createElement("basic-btn",{label:"tooltip",slot:"target"}))},dropdown:{BasicDropdown:r.a.createElement("basic-dropdown",null,r.a.createElement("basic-btn",{slot:"target",label:"dropdown"}),r.a.createElement("ul",{slot:"lists"},r.a.createElement("basic-dropdown-list",{text:"\u30c9\u30ed\u30c3\u30d7",path:"#\u30c9\u30ed\u30c3\u30d7"}),r.a.createElement("basic-dropdown-list",{text:"\u30c0\u30a6\u30f3",path:"#\u30c0\u30a6\u30f3"}),r.a.createElement("basic-dropdown-list",{text:"\u304b\u3082",path:"#\u304b\u3082"})))},modal:{BasicModal:r.a.createElement(r.a.Fragment,null,r.a.createElement("basic-btn",{label:"basicmodal",onClick:function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{slot:"title"}," this is title"),r.a.createElement("p",{slot:"content"},"this is content")),a=document.getElementsByTagName("basic-modal")[0];a.setAttribute("active",""),l.a.render(t,a)}}),r.a.createElement("basic-modal",null))},gauge:{BasicGauge:r.a.createElement("basic-gauge",{"max-points":"120","now-points":"110",width:"150"})},points:{BattlePoints:r.a.createElement("battle-points",{"max-points":"5","now-points":"4"})},chat:{BasicMessage:r.a.createElement("div",null,r.a.createElement("basic-chat-message",{color:"lightgray,lightskyblue",text:"Hello! Are you enjoy Mineral.web?",position:"right"}),r.a.createElement("basic-chat-message",{color:"lightgray,lightskyblue",text:"Please Enjoy!",position:"left"}))},bg:{Background1:r.a.createElement("background-1",{number:"30",colors:"red,blue,green",height:"200",width:"400"})}},O=a(522),A=a(110),B=function(e){var t=e.language,a=e.value;return r.a.createElement(O.a,{language:t,style:A.darcula},a)},J=a(111),R=a(112),F=a(114),T=a(113),M=a(115),S=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(J.a)(this,a),(e=t.call(this)).addStyle=function(){return"\n    div{ \n      cursor: pointer;\n      text-align: center;\n      margin: 10px 0;\n      padding: 10px 0;\n      color: white;\n      background: var(--main-theme-lightpink);\n      font-size: 20px;\n      border-radius: var(--main-border-radius);\n    }\n    div:hover{\n      background: var(--main-theme-pink);\n    }\n  "};var n=e.attachShadow({mode:"open"}),r=["style","div"].map((function(e){return document.createElement(e)})),c=Object(_.a)(r,2);return e.style_e=c[0],e.div=c[1],[e.div,e.style_e].forEach((function(e){return n.appendChild(e)})),e.style_e.textContent=e.addStyle(),e}return Object(R.a)(a,[{key:"connectedCallback",value:function(){var e=this,t=["label"].map((function(t){return e.getAttribute(t)})),a=Object(_.a)(t,1)[0];this.div.innerText=a}}]),a}(Object(M.a)(HTMLElement));customElements.define("download-btn",S);var Z=function(e){var t=e.match.params,a=t.category,c=t.show,l=Object(n.useState)(""),i=Object(_.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(""),u=Object(_.a)(m,2),p=u[0],d=u[1];Object(n.useEffect)((function(){[["README.md",s],["".concat(c,".js"),d]].forEach((function(e){var t=Object(_.a)(e,2),n=t[0],r=t[1];return fetch("/mineral/webcomponents/".concat(a,"/").concat(c,"/").concat(n)).then((function(e){return e.text()})).then((function(e){return r(e)}))}))}),[a,c]);return r.a.createElement("article",{className:w.a.article},r.a.createElement("div",{className:w.a.container},r.a.createElement("h2",null,"Preview"),r.a.createElement("div",{className:w.a.preview},N[a][c]),r.a.createElement("download-btn",{label:"Download",onClick:function(){return function(){var e=document.createElement("a"),t=new Blob([p],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="".concat(c,".js"),e.click(),e.remove()}()}}),r.a.createElement(v.a,{source:o,renderers:{code:B}})))},Q=a(23),W=a.n(Q),C=function(e){var t=e.child,a=e.path;return r.a.createElement(i.b,{to:"/document"+a,className:W.a.link},r.a.createElement("li",{className:W.a.card},t))},q=function(e){var t=e.match,a=t.url,n=t.params.category,c=function(e){return Object.entries(N[e]).map((function(t){var a=Object(_.a)(t,2),n=a[0],c=a[1],l="/".concat(e,"/").concat(n);return r.a.createElement(C,{child:c,path:l,key:l})}))};return r.a.createElement("ul",{className:W.a.cards},"/document"===a?Object.keys(N).map((function(e){return c(e)})):c(n))},D=function(){return r.a.createElement("article",{className:w.a.article},r.a.createElement("div",{className:w.a.container},[["/document",q],["/document/:category",q],["/document/:category/:show",Z]].map((function(e){var t=Object(_.a)(e,2),a=t[0],n=t[1];return r.a.createElement(o.a,{exact:!0,path:a,component:n,key:a})}))))},G=a(24),H=a.n(G),P=function(){return r.a.createElement("div",{className:H.a.sidebar},r.a.createElement("ul",{className:H.a.ul},r.a.createElement(V,{lists:[["Button","btn"],["Tooltip","tooltip"],["Dropdown","dropdown"],["Chat","chat"],["Gauge","gauge"],["Points","points"],["Background","bg"]]})))},V=function(e){return e.lists.map((function(e){var t=Object(_.a)(e,2),a=t[0],n=t[1];return r.a.createElement(i.b,{className:H.a.link,to:"/document/"+n,key:a},r.a.createElement("li",{className:H.a.li},a))}))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(o.a,{exact:!0,path:"/home",component:j}),r.a.createElement(o.a,{path:"/document",component:D}))},L=function(){return r.a.createElement(i.a,{basename:"/mineral"},r.a.createElement(f,null),r.a.createElement("main",{className:m.a.main},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,strict:!0,path:"/",component:d}),r.a.createElement(o.a,{strict:!0,path:"/",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.f50ed445.chunk.js.map