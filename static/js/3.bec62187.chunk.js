/*! For license information please see 3.bec62187.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,n,t){e.exports={selectPage:"Paginator_selectPage__1oWzK",paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi"}},293:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=s.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)t.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(n,[]))||(e.exports=r)}()},294:function(e,n,t){e.exports={userAvatar:"User_userAvatar__1-Q_0"}},296:function(e,n,t){"use strict";t.r(n);var r=t(31),s=t(32),o=t(34),i=t(33),a=t(0),c=t(1),l=t.n(c),u=t(12),g=t(130),p=t(97),f=t(52),j=t(292),h=t.n(j),d=t(293),b=t.n(d),P=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,l=Math.ceil(n/t),u=[],g=1;g<=l;g++)u.push(g);var j=Math.ceil(l/i),d=Object(c.useState)(1),P=Object(f.a)(d,2),O=P[0],v=P[1],x=(O-1)*i+1,w=O*i;return Object(a.jsxs)("div",{className:h.a.paginator,children:[O>1&&Object(a.jsx)("button",{onClick:function(){v(O-1)},children:"PREV"}),u.filter((function(e){return e>=x&&e<=w})).map((function(e){return Object(a.jsxs)("span",{className:b()(Object(p.a)({},h.a.selectPage,r===e),h.a.pageNumber),onClick:function(n){s(e)},children:[" ",e," "]},e)})),j>O&&Object(a.jsx)("button",{onClick:function(){v(O+1)},children:"NEXT"})]})},O=t(294),v=t.n(O),x=t(68),w=t(17),m=function(e){var n=e.user,t=e.followingInProgress,r=e.follow,s=e.unfollow;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(w.b,{to:"/profile/"+n.id,children:Object(a.jsx)("img",{src:null!=n.photos.small?n.photos.small:x.a,className:v.a.userAvatar})})}),Object(a.jsx)("div",{children:n.followed?Object(a.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Unfollow"}):Object(a.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Follow"})})]}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:n.name}),Object(a.jsx)("div",{children:n.status})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:"user.location.country"}),Object(a.jsx)("div",{children:"user.location.city"})]})]})]})},C=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(P,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(a.jsx)("div",{children:e.users.map((function(n){return Object(a.jsx)(m,{user:n,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},n.id)}))})]})},y=t(42),S=function(e){return e.usersPage.users},_=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUsersCount},U=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},N=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var t=e.props.pageSize;e.props.getUsers(n,t)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.getUsers(n,t)}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[this.props.isFetching?Object(a.jsx)(y.a,{}):null,Object(a.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),t}(l.a.Component);n.default=Object(u.b)((function(e){return{users:S(e),pageSize:_(e),totalUsersCount:z(e),currentPage:U(e),isFetching:k(e),followingInProgress:I(e)}}),{follow:g.b,setCurrentPage:g.d,unfollow:g.f,toggleFollowingProgress:g.e,getUsers:g.c})(N)}}]);
//# sourceMappingURL=3.bec62187.chunk.js.map