(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{175:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var r=t(3),a=t.n(r),l=t(0),i=t.n(l),u=t(4);function c(){var n=a()(["\n  font-size: 56px;\n  font-weight: 100;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);return c=function(){return n},n}function o(){var n=a()(["\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);return o=function(){return n},n}var d=u.b.h1(o()),s=u.b.h1(c()),p=function(n){return i.a.createElement("div",null,i.a.createElement(d,null,n.title),i.a.createElement(s,null,n.subtitle))}},89:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),l=t(3),i=t.n(l),u=t(4),c=t(10),o=t(175);function d(){var n=i()(["\n  padding-top: 50px;\n"]);return d=function(){return n},n}function s(){var n=i()(["\n    grid-template-columns: repeat(1, 1fr);\n  "]);return s=function(){return n},n}function p(){var n=i()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  margin: 0 0 200px 0;\n\n  ","\n"]);return p=function(){return n},n}var m=[{city:"Bangkok",address1:"Habitia Watcharapol",address2:"Klong Thanon",country:"Thailand"},{city:"New York",address1:"568 Broadway",address2:"2nd Floor",country:"NY 10012"}],f=function(n){return a.a.createElement("div",null,a.a.createElement("h4",null,n.city||""),a.a.createElement("p",null,n.address1||""),a.a.createElement("p",null,n.address2||""),a.a.createElement("p",null,n.country?"".concat(n.city,", ").concat(n.country):""))},g=u.b.div(p(),c.b.phone(s())),E=u.b.section(d()),h=function(){var n=m.map(function(n){return a.a.createElement(f,{city:n.city,address1:n.address1,address2:n.address2,country:n.country})});return a.a.createElement("div",null,a.a.createElement(E,null,a.a.createElement(o.a,{title:"Contact Us",subtitle:"Need Help? Visit our Knowledge Base."})),a.a.createElement(E,null,a.a.createElement("h2",null,"Our offices"),a.a.createElement(g,null,n)))};e.default=function(){return a.a.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 8%"}},a.a.createElement(h,null))}}}]);