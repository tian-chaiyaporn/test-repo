(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(e,n,t){"use strict";var r=t(7);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(195)),u=r(t(196));var l=function(e,n){var t=function(n){return a.default.createElement(u.default,n,e)};return t.displayName="".concat(n,"Icon"),(t=(0,i.default)(t)).muiName="SvgIcon",t};n.default=l},215:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(3),a=t.n(r),i=t(0),u=t.n(i),l=t(4);function c(){var e=a()(["\n  font-size: 56px;\n  font-weight: 100;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);return c=function(){return e},e}function o(){var e=a()(["\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);return o=function(){return e},e}var s=l.b.h1(o()),m=l.b.h1(c()),d=function(e){return u.a.createElement("div",null,u.a.createElement(s,null,e.title),u.a.createElement(m,null,e.subtitle))}},217:function(e,n,t){"use strict";t.d(n,"a",function(){return I});var r=t(3),a=t.n(r),i=t(0),u=t.n(i),l=t(4),c=t(11),o=t(218),s=t.n(o),m=t(10);function d(){var e=a()(["\n    max-height: ",";\n    margin-right: 10px;\n  "]);return d=function(){return e},e}function p(){var e=a()(["\n  height: ",";\n  padding: ",";\n\n  ","\n"]);return p=function(){return e},e}function f(){var e=a()(["\n    display: inline-block;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    outline: none;\n    background-color: transparent;\n  "]);return f=function(){return e},e}function v(){var e=a()(["\n  display: none;\n\n  ","\n"]);return v=function(){return e},e}function g(){var e=a()(["\n    width: 100%;\n    height: auto;\n  "]);return g=function(){return e},e}function b(){var e=a()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 195px;\n  height: 195px;\n\n  ","\n"]);return b=function(){return e},e}function h(){var e=a()(["\n    width: 100%;\n    flex-direction: row;\n    justify-content: start;\n  "]);return h=function(){return e},e}function E(){var e=a()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  color: ",";\n\n  ","\n"]);return E=function(){return e},e}function x(){var e=a()(["\n    padding: 10px 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 1px solid ",";\n    color: ",";\n    width: 100%;\n  "]);return x=function(){return e},e}function w(){var e=a()(["\n  width: 195px;\n  list-style: none;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);\n  border: solid 1.5px ",";\n  background-color: #ffffff;\n\n  ","\n"]);return w=function(){return e},e}var y=l.b.li(w(),function(e){return e.color.VERY_LIGHT_PINK},m.b.phone(x(),function(e){return e.color.BLACK||"black"},function(e){return e.color||"black"})),L=l.b.div(E(),function(e){return e.color||"black"},m.b.phone(h())),k=Object(l.b)(c.b)(b(),m.b.phone(g())),q=l.b.button(v(),m.b.phone(f())),j=l.b.img(p(),function(e){return e.height||"90px"},function(e){return e.padding||"0"},m.b.phone(d(),function(e){return e.height||"30px"})),I=function(e){var n=e.title,t=void 0===n?"":n,r=e.link,a=void 0===r?"":r,i=e.imageSrc,l=void 0===i?"":i;return u.a.createElement(y,{color:m.a},u.a.createElement(k,{to:a,color:m.a.BLACK},u.a.createElement(L,null,l&&u.a.createElement(j,{src:l}),u.a.createElement("span",null,t)),u.a.createElement(q,null,u.a.createElement(s.a,null))))}},218:function(e,n,t){"use strict";var r=t(7);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=(0,r(t(186)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),"KeyboardArrowRight");n.default=i},86:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(3),u=t.n(i),l=t(4),c=t(10),o=t(23),s=t(39),m=t(217);function d(){var e=u()(["\n  color: ",";\n"]);return d=function(){return e},e}function p(){var e=u()(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto;\n  max-width: 600px;\n  padding-top: 10px;\n"]);return p=function(){return e},e}var f=function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h2",null,"Job openings"),a.a.createElement(r.Fragment,null,a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement(b,null)))},v=l.b.div(p()),g=Object(l.b)(o.Link)(d(),c.a.BLACK),b=function(e){var n=e.job,t=void 0===n?"loren ipsum":n,r=e.location,i=void 0===r?"location":r;return Object(s.unstable_useMediaQuery)("(min-width:".concat(c.c.phone,"px)"))?a.a.createElement(v,null,a.a.createElement(g,{to:"/careers/".concat(t)},t),a.a.createElement("span",null,a.a.createElement("b",null,i))):a.a.createElement(m.a,{title:"job",link:"/careers/".concat(t)})},h=t(215);function E(){var e=u()(["\n  padding: 0;\n  margin: 7px 0;\n"]);return E=function(){return e},e}function x(){var e=u()(["\n    grid-template-columns: repeat(1, 1fr);\n  "]);return x=function(){return e},e}function w(){var e=u()(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto;\n  max-width: 600px;\n\n  ","\n"]);return w=function(){return e},e}function y(){var e=u()(["\n  padding: 10px 0;\n"]);return y=function(){return e},e}function L(){var e=u()(["\n  padding: 50px 0;\n"]);return L=function(){return e},e}var k=l.b.div(L()),q=function(){return a.a.createElement(k,null,a.a.createElement(j,null),a.a.createElement(I,null),a.a.createElement(P,null),a.a.createElement(D,null),a.a.createElement(C,null,a.a.createElement(f,null)))},j=function(){return a.a.createElement(C,null,a.a.createElement(h.a,{title:"Join Us",subtitle:"And help transform healthcare for everyone."}),a.a.createElement("p",null,M),a.a.createElement("p",null,N))},I=function(){return a.a.createElement(C,null,a.a.createElement("h2",null,"Our Mission"),a.a.createElement("p",null,A))},P=function(){return a.a.createElement(C,null,a.a.createElement("h2",null,"Our values"),a.a.createElement("p",null,K))},C=l.b.section(y()),O=l.b.div(w(),c.b.phone(x())),_=l.b.p(E()),D=function(){return a.a.createElement(C,null,a.a.createElement("h2",null,"Our perks"),a.a.createElement(O,null,a.a.createElement(_,null,"100% paid health benefits"),a.a.createElement(_,null,"Vacation and parental leave packages"),a.a.createElement(_,null,"Lunch and snacks on us"),a.a.createElement(_,null,"Cell phone reimbursement"),a.a.createElement(_,null,"Gym discount"),a.a.createElement(_,null,"Weekly yoga")))},M="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.",N="Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.",A="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.",K="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.";n.default=function(){return a.a.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 8%"}},a.a.createElement(q,null))}}}]);