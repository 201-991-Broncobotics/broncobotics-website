(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{6742:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){return t(5125)}])},5125:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return o}});var n=t(5893),a=t(7294),u=t(5547),i=t(6571),s=function(e){var r=0===e.year?"All":e.year;return(0,n.jsx)("button",{className:"mx-4 w-[10%] rounded-md border border-white text-red-500 ".concat(e.selected===e.year?"bg-white":""),onClick:function(){e.setYear(e.year)},children:r})},c=function(e){return(0,n.jsxs)("div",{className:"bg-gray-50",children:[e.member.name," graduated: ",e.member.graduationYear,"."," ",(0,n.jsx)("a",{href:"mailto:".concat(e.member.email),children:"Email them here!"})]})},o=!0;r.default=function(e){var r=e.members,t=(0,a.useState)(0),o=t[0],d=t[1],m=[];return(r=r.sort((function(e,r){return e.graduationYear-r.graduationYear}))).forEach((function(e){m.includes(e.graduationYear)||m.push(e.graduationYear)})),(0,n.jsxs)("div",{className:"bg-gray-50",children:[(0,n.jsx)(u.Z,{currentPage:"members"}),(0,n.jsxs)("div",{className:"my-2 flex flex-row justify-center self-center bg-gray-50 text-center text-2xl text-white",style:{fontFamily:"Times New Roman"},children:[m.sort((function(e,r){return e-r})).map((function(e,r){return(0,n.jsx)(s,{setYear:d,year:e,selected:o},r)})),(0,n.jsx)(s,{setYear:d,year:0,selected:o})]}),r.filter((function(e){return 0===o?e.graduationYear>0:e.graduationYear===o})).map((function(e,r){return(0,n.jsx)(c,{member:e},r)})),(0,n.jsx)(i.Z,{})]})}}},function(e){e.O(0,[247,304,774,888,179],(function(){return r=6742,e(e.s=r);var r}));var r=e.O();_N_E=r}]);