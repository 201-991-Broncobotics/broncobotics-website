(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{6742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){return n(5125)}])},5125:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(5893),a=n(7294),i=n(5547),s=n(6571),u=function(e){return(0,r.jsx)("a",{href:"mailto:".concat(e.member.email),children:(0,r.jsxs)("li",{className:"my-2 w-full bg-gray-50 text-2xl text-white outline outline-1 outline-black ",style:{fontFamily:"Martel",listStyle:"none"},children:[e.member.name," ","'",String(e.member.graduationYear).substring(2,4),"."]})})},l=!0;t.default=function(e){var t=e.members,n=(0,a.useState)(0),l=(n[0],n[1],(0,a.useState)("")),o=l[0],c=l[1],m=[];return(t=t.sort((function(e,t){return e.graduationYear-t.graduationYear}))).forEach((function(e){m.includes(e.graduationYear)||m.push(e.graduationYear)})),(0,r.jsxs)("div",{className:"bg-gray-50",children:[(0,r.jsx)(i.Z,{currentPage:"members"}),(0,r.jsx)("div",{className:" text-center text-4xl font-bold text-white",style:{fontFamily:"Roboto Slab"},children:"Search for Current and Former Broncobotics Members"}),(0,r.jsx)("div",{className:"my-2 flex flex-row justify-center self-center bg-gray-50 text-center text-2xl text-white",style:{fontFamily:"Times New Roman"},children:(0,r.jsx)("input",{type:"text",className:"text-gray-50 w-[30%]",value:o,onChange:function(e){return c(e.target.value)}})}),(0,r.jsx)("div",{className:"text-center ",children:(0,r.jsx)("ul",{className:" m-auto w-[20%] outline-white ",children:t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).map((function(e,t){return(0,r.jsx)(u,{member:e},t)}))})}),(0,r.jsx)(s.Z,{})]})}}},function(e){e.O(0,[247,304,774,888,179],(function(){return t=6742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);