(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[17],{445:function(e,t,n){"use strict";var r=n(10),a=n(3),o=n(4),i=n(2),c=n(0),s=(n(14),n(6)),l=n(107),u=n(11),d=n(69),b=n(8),j=n(7),p=n(12),m=n(91),f=n(22),h=n(147),v=n(89),O=n(108);function x(e){return Object(v.a)("MuiLink",e)}var g=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=Object(j.a)(h.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(d.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLink"}),a=n.className,u=n.color,d=void 0===u?"primary":u,j=n.component,h=void 0===j?"a":j,v=n.onBlur,O=n.onFocus,g=n.TypographyClasses,k=n.underline,C=void 0===k?"always":k,D=n.variant,V=void 0===D?"inherit":D,A=Object(o.a)(n,w),q=Object(m.a)(),M=q.isFocusVisibleRef,T=q.onBlur,P=q.onFocus,B=q.ref,F=c.useState(!1),I=Object(r.a)(F,2),R=I[0],W=I[1],L=Object(f.a)(t,B),N=Object(i.a)({},n,{color:d,component:h,focusVisible:R,underline:C,variant:V}),_=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(b.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(o,x,t)}(N);return Object(y.jsx)(S,Object(i.a)({className:Object(s.default)(_.root,a),classes:g,color:d,component:h,onBlur:function(e){T(e),!1===M.current&&W(!1),v&&v(e)},onFocus:function(e){P(e),!0===M.current&&W(!0),O&&O(e)},ref:L,ownerState:N,variant:V},A))}));t.a=C},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(9),a=n(10),o=n(0),i=n(443),c=n(582),s=n(527),l=n(426),u=n(462),d=n.n(u),b=n(461),j=n.n(b),p=n(1);function m(e){var t=e.disabled,n=void 0!==t&&t,u=e.name,b=e.control,m=e.label,f=e.type,h=void 0===f?"text":f,v=e.endAdornment,O=e.placeholder,x=void 0===O?"":O,g=e.textFieldProps,y=Object(o.useState)(!1),w=Object(a.a)(y,2),k=w[0],S=w[1];function C(){S((function(e){return!e}))}function D(e){e.preventDefault()}return Object(p.jsx)(i.a,{name:u,control:b,render:function(e){var t=e.field,a=t.onChange,o=t.value,i=e.fieldState.error;e.formState;return Object(p.jsx)(c.a,Object(r.a)({disabled:n,helperText:i?i.message:null,error:!!i,onChange:a,value:o,fullWidth:!0,label:m,variant:"outlined",placeholder:x,type:k?"text":h,InputProps:{endAdornment:v||"password"===h&&Object(p.jsx)(s.a,{position:"end",children:Object(p.jsx)(l.a,{"aria-label":"Toggle password visibility",onClick:C,onMouseDown:D,edge:"end",children:k?Object(p.jsx)(j.a,{}):Object(p.jsx)(d.a,{})})})}},g))}})}},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r={required:{value:!0,message:"This field is required"},email:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid e-mail address."}},a={login_error:"Dogodila se gre\u0161ka prilikom prijave",register_error:"Dogodila se gre\u0161ka prilikom stvaranja ra\u010duna"}},565:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(16),a=n.n(r),o=n(9),i=n(54),c=n(10),s=n(0),l=n(19),u=n(43),d=n(29),b=n(386),j=n(420),p=n(147),m=n(398),f=n(445),h=n(414),v=n(584),O=n(577),x=n(599),g=n(463),y=n.n(g),w=n(450),k=n(443),S=n(451),C=n(1);function D(){var e=Object(u.e)(),t=Object(l.f)(),n=(Object(l.e)(),Object(d.c)((function(e){return e.USER.user}))),r=Object(s.useState)(!1),g=Object(c.a)(r,2),D=g[0],V=g[1],A=Object(s.useState)({email:localStorage.getItem("bb:last-email"),password:""}),q=Object(c.a)(A,1)[0],M=Object(k.b)({defaultValues:q,mode:"onChange"}),T=M.handleSubmit,P=M.register,B=M.control,F=M.formState;M.getValues;function I(){V(!1)}function R(){V(!0)}function W(){return(W=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("/dashboard",{replace:!0}),e.next=3,localStorage.setItem("bb:last-email",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("bb:last-email",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsxs)(b.a,{spacing:6,sx:{maxWidth:480,width:"100%"},children:[Object(C.jsxs)(j.a,{children:[Object(C.jsx)(p.a,{variant:"h4",sx:{mb:1},children:"Dobrodo\u0161li u Barber Booking"}),Object(C.jsx)(p.a,{variant:"subtitle2",sx:{opacity:.8,fontWeight:400},children:"Prijavite se da bi nastavili"})]}),Object(C.jsxs)(b.a,{sx:{width:"100%"},spacing:4,children:[Object(C.jsx)(w.a,Object(o.a)({name:"email",required:!0,control:B,label:"E-mail adresa",inputMode:"email",type:"email"},P("email",{required:S.a.required,pattern:S.a.email}))),Object(C.jsx)(w.a,Object(o.a)({name:"password",required:!0,control:B,label:"Lozinka",type:"password"},P("password",{required:S.a.required})))]}),Object(C.jsxs)(m.a,{children:["Nemate ra\u010dun?",Object(C.jsx)(f.a,{onClick:function(){t("/auth/register")},sx:{ml:1,cursor:"pointer"},children:"Stvorite ga"})]}),"loading"===n.status?Object(C.jsx)(x.a,{loading:!0,loadingPosition:"start",startIcon:Object(C.jsx)(y.a,{}),variant:"outlined",sx:{height:54,textTransform:"none"},children:"Prijavljivanje..."}):Object(C.jsx)(h.a,{onClick:T((function(t){console.log(t),e.login(t,(function(){return function(e){return W.apply(this,arguments)}(t.email)}),(function(){return function(e){return L.apply(this,arguments)}(t.email)}),R)})),sx:{height:54,textTransform:"none"},variant:"contained",fullWidth:!0,inputMode:"submit",disabled:!F.isValid,children:F.isValid?"Prijava":"Unesite podatke"}),Object(C.jsx)(v.a,{open:D,autoHideDuration:3e3,onClose:I,message:S.b.login_error,children:Object(C.jsx)(O.a,{onClose:I,severity:"error",sx:{width:"100%"},children:S.b.login_error})})]})}}}]);
//# sourceMappingURL=17.fba7f1fc.chunk.js.map