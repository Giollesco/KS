(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[18],{445:function(e,t,n){"use strict";var r=n(10),o=n(3),a=n(4),i=n(2),c=n(0),s=(n(14),n(6)),l=n(107),u=n(11),d=n(69),b=n(8),j=n(7),p=n(12),m=n(91),O=n(22),f=n(147),v=n(89),h=n(108);function x(e){return Object(v.a)("MuiLink",e)}var g=Object(h.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=Object(j.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(d.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(o.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLink"}),o=n.className,u=n.color,d=void 0===u?"primary":u,j=n.component,f=void 0===j?"a":j,v=n.onBlur,h=n.onFocus,g=n.TypographyClasses,w=n.underline,C=void 0===w?"always":w,D=n.variant,q=void 0===D?"inherit":D,V=Object(a.a)(n,k),A=Object(m.a)(),M=A.isFocusVisibleRef,T=A.onBlur,B=A.onFocus,F=A.ref,R=c.useState(!1),W=Object(r.a)(R,2),L=W[0],P=W[1],_=Object(O.a)(t,F),z=Object(i.a)({},n,{color:d,component:f,focusVisible:L,underline:C,variant:q}),H=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat(Object(b.a)(o)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(a,x,t)}(z);return Object(y.jsx)(S,Object(i.a)({className:Object(s.default)(H.root,o),classes:g,color:d,component:f,onBlur:function(e){T(e),!1===M.current&&P(!1),v&&v(e)},onFocus:function(e){B(e),!0===M.current&&P(!0),h&&h(e)},ref:_,ownerState:z,variant:q},V))}));t.a=C},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(9),o=n(10),a=n(0),i=n(443),c=n(582),s=n(527),l=n(426),u=n(462),d=n.n(u),b=n(461),j=n.n(b),p=n(1);function m(e){var t=e.disabled,n=void 0!==t&&t,u=e.name,b=e.control,m=e.label,O=e.type,f=void 0===O?"text":O,v=e.endAdornment,h=e.placeholder,x=void 0===h?"":h,g=e.textFieldProps,y=Object(a.useState)(!1),k=Object(o.a)(y,2),w=k[0],S=k[1];function C(){S((function(e){return!e}))}function D(e){e.preventDefault()}return Object(p.jsx)(i.a,{name:u,control:b,render:function(e){var t=e.field,o=t.onChange,a=t.value,i=e.fieldState.error;e.formState;return Object(p.jsx)(c.a,Object(r.a)({disabled:n,helperText:i?i.message:null,error:!!i,onChange:o,value:a,fullWidth:!0,label:m,variant:"outlined",placeholder:x,type:w?"text":f,InputProps:{endAdornment:v||"password"===f&&Object(p.jsx)(s.a,{position:"end",children:Object(p.jsx)(l.a,{"aria-label":"Toggle password visibility",onClick:C,onMouseDown:D,edge:"end",children:w?Object(p.jsx)(j.a,{}):Object(p.jsx)(d.a,{})})})}},g))}})}},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r={required:{value:!0,message:"This field is required"},email:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid e-mail address."}},o={login_error:"Dogodila se gre\u0161ka prilikom prijave",register_error:"Dogodila se gre\u0161ka prilikom stvaranja ra\u010duna"}},566:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(9),o=n(10),a=n(0),i=n(19),c=n(43),s=n(29),l=n(386),u=n(420),d=n(147),b=n(398),j=n(445),p=n(414),m=n(584),O=n(577),f=n(599),v=n(463),h=n.n(v),x=n(450),g=n(443),y=n(451),k=n(1);function w(){var e=Object(c.e)(),t=Object(i.f)(),n=Object(a.useState)(!1),v=Object(o.a)(n,2),w=v[0],S=v[1],C=Object(a.useState)({name:"",email:"",password:""}),D=Object(o.a)(C,1)[0],q=Object(s.c)((function(e){return e.USER.register.status})),V=Object(g.b)({defaultValues:D,mode:"onChange"}),A=V.handleSubmit,M=V.register,T=V.control,B=V.formState;function F(){S(!1)}function R(){S(!0)}function W(){t("/dashboard",{replace:!0})}return Object(k.jsxs)(l.a,{spacing:6,sx:{maxWidth:480,width:"100%"},children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{variant:"h4",sx:{mb:1},children:"Dobrodo\u0161li u Barber Booking"}),Object(k.jsx)(d.a,{variant:"subtitle2",sx:{opacity:.8,fontWeight:400},children:"Stvorite ra\u010dun da biste nastavili"})]}),Object(k.jsxs)(l.a,{spacing:4,children:[Object(k.jsx)(x.a,Object(r.a)({name:"name",required:!0,control:T,label:"Ime i prezime",inputMode:"text",type:"text"},M("name",{required:y.a.required}))),Object(k.jsx)(x.a,Object(r.a)({name:"email",required:!0,control:T,label:"E-mail adresa",inputMode:"email",type:"email"},M("email",{required:y.a.required,pattern:y.a.email}))),Object(k.jsx)(x.a,Object(r.a)({name:"password",required:!0,control:T,label:"Lozinka",type:"password",autoComplete:"current-password"},M("password",{required:y.a.required})))]}),Object(k.jsxs)(b.a,{children:["Ve\u0107 imate ra\u010dun?",Object(k.jsx)(j.a,{onClick:function(){t("/auth/login")},sx:{ml:1,cursor:"pointer"},children:"Prijavite se"})]}),"loading"===q?Object(k.jsx)(f.a,{loading:!0,loadingPosition:"start",startIcon:Object(k.jsx)(h.a,{}),variant:"outlined",sx:{height:54,textTransform:"none"},children:"Stvaranje ra\u010duna..."}):Object(k.jsx)(p.a,{onClick:A((function(t){console.log(t),e.register(t,W,R)})),sx:{height:54,textTransform:"none"},variant:"contained",fullWidth:!0,inputMode:"submit",disabled:!B.isValid,children:B.isValid?"Stvorite ra\u010dun":"Unesite podatke"}),Object(k.jsx)(m.a,{open:w,autoHideDuration:3e3,onClose:F,message:y.b.register_error,children:Object(k.jsx)(O.a,{onClose:F,severity:"error",sx:{width:"100%"},children:y.b.register_error})}),Object(k.jsx)("div",{style:{minHeight:0}})," "]})}}}]);
//# sourceMappingURL=18.f6726330.chunk.js.map