(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[16],{444:function(e,t,n){"use strict";var a=n(121);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(122)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddRounded");t.default=o},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(9),i=n(10),r=n(0),o=n(443),c=n(582),s=n(527),l=n(426),d=n(462),u=n.n(d),j=n(461),p=n.n(j),b=n(1);function f(e){var t=e.disabled,n=void 0!==t&&t,d=e.name,j=e.control,f=e.label,h=e.type,m=void 0===h?"text":h,O=e.endAdornment,g=e.placeholder,x=void 0===g?"":g,v=e.textFieldProps,y=Object(r.useState)(!1),w=Object(i.a)(y,2),k=w[0],S=w[1];function I(){S((function(e){return!e}))}function D(e){e.preventDefault()}return Object(b.jsx)(o.a,{name:d,control:j,render:function(e){var t=e.field,i=t.onChange,r=t.value,o=e.fieldState.error;e.formState;return Object(b.jsx)(c.a,Object(a.a)({disabled:n,helperText:o?o.message:null,error:!!o,onChange:i,value:r,fullWidth:!0,label:f,variant:"outlined",placeholder:x,type:k?"text":m,InputProps:{endAdornment:O||"password"===m&&Object(b.jsx)(s.a,{position:"end",children:Object(b.jsx)(l.a,{"aria-label":"Toggle password visibility",onClick:I,onMouseDown:D,edge:"end",children:k?Object(b.jsx)(p.a,{}):Object(b.jsx)(u.a,{})})})}},v))}})}},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a={required:{value:!0,message:"This field is required"},email:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid e-mail address."}},i={login_error:"Dogodila se gre\u0161ka prilikom prijave",register_error:"Dogodila se gre\u0161ka prilikom stvaranja ra\u010duna"}},587:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n(16),i=n.n(a),r=n(54),o=n(10),c=n(9),s=n(0),l=n.n(s),d=n(181),u=n(19),j=n(29),p=n(386),b=n(420),f=n(527),h=n(414),m=n(584),O=n(577),g=n(599),x=n(463),v=n.n(x),y=n(450),w=n(36),k=n(426),S=n(147),I=n(444),D=n.n(I),_=n(1);function T(e){var t=e.multiple,n=void 0!==t&&t,a=e.setForm,c=e.initial,l=void 0===c?[]:c,j=e.update,f=void 0!==j&&j,h=e.id,m=void 0===h?0:h,O=e.onSuccess,g=e.onFail,x=(Object(u.e)(),Object(s.useState)([])),v=Object(o.a)(x,2),y=v[0],I=v[1],T=Object(s.useState)(l),A=Object(o.a)(T,2),C=A[0],F=A[1];function R(){return(R=Object(r.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("files",t),e.next=4,localStorage.getItem("token");case 4:a=e.sent,r={token:a,contentType:"multipart/form-data",type:t.type},Object(d.a)(r).post("/".concat(m,"/set_avatar/"),n).then((function(e){console.log("RES => ",e),O()})).catch((function(e){console.log("ERR => ",e),g()}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){if(y.length){var e=[];y.forEach((function(t){return e.push(URL.createObjectURL(t))})),F(e)}}),[y]),Object(_.jsxs)("div",{style:{width:"100%",height:"100%",postion:"relative !important"},children:[Object(_.jsx)(k.a,{sx:{position:"absolute",bottom:10,right:10,height:40,width:40,cursor:"pointer",bgcolor:"secondary.light","&:hover":{bgcolor:"#f1d0d2"}},children:Object(_.jsx)("label",{htmlFor:"file-input",children:Object(_.jsx)(D.a,{sx:{color:"#DF6D73",mt:1,cursor:"pointer"}})})}),Object(_.jsx)("input",{id:"file-input",type:"file",multiple:n,accept:"image/*",onChange:function(e){I(Object(w.a)(e.target.files)),a(n?Object(w.a)(e.target.files):e.target.files),f&&function(e){R.apply(this,arguments)}(e.target.files[0])},style:{display:"none"}}),Object(_.jsx)(b.a,{sx:{width:"100%",height:"100%",display:"grid",placeItems:"center",overflow:"hidden"},children:l.length||f||y.length?C.map((function(e,t){return Object(_.jsx)("img",{src:e,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:6}},t)})):Object(_.jsxs)(p.a,{direction:"column",alignItems:"center",spacing:1,children:[Object(_.jsx)(S.a,{variant:"h6",children:"Dodajte fotografiju"}),Object(_.jsx)(S.a,{variant:"caption",sx:{opacity:.75,maxWidth:220,textAlign:"center"},children:"Dozvoljene ekstenzije fotografije su: .png,.jpg,.jpeg"})]})})]})}var A=n(483);function C(e){var t=e.color,n=void 0===t?"secondary":t;return Object(_.jsx)(b.a,{sx:{width:"100%",height:400,display:"grid",placeItems:"center"},children:Object(_.jsxs)(p.a,{direction:"column",alignItems:"center",spacing:3,children:[Object(_.jsx)(A.a,{color:n}),Object(_.jsx)(S.a,{variant:"subtitle1",sx:{opacity:.75},children:"U\u010ditavanje ..."})]})})}var F=n(451),R=n(443),U=n(82),q=l.a.forwardRef((function(e,t){return Object(_.jsx)(O.a,Object(c.a)({elevation:6,ref:t,variant:"filled"},e))}));function z(){var e,t,n=Object(j.b)(),a=Object(u.e)(),l=Object(u.f)(),O=Object(s.useState)(a.pathname.split("/").at(-1)),x=Object(o.a)(O,2),w=x[0],k=x[1],S=Object(s.useState)(!1),I=Object(o.a)(S,2),D=I[0],A=I[1],z=Object(s.useState)({}),E=Object(o.a)(z,2),V=E[0],M=E[1],P=Object(s.useState)(!1),H=Object(o.a)(P,2),J=H[0],W=H[1],Z=Object(s.useState)(!1),L=Object(o.a)(Z,2),B=L[0],K=L[1],N=Object(s.useState)(!1),$=Object(o.a)(N,2),G=$[0],Q=$[1],X=Object(s.useState)(!1),Y=Object(o.a)(X,2),ee=Y[0],te=Y[1],ne=Object(s.useState)([]),ae=Object(o.a)(ne,2),ie=ae[0],re=ae[1],oe=Object(s.useState)({name:"",price:0,time_needed:30,file:null}),ce=Object(o.a)(oe,1)[0],se=Object(R.b)({defaultValues:ce}),le=se.handleSubmit,de=se.register,ue=se.control,je=se.formState,pe=se.setValue;Object(s.useEffect)((function(){if("add"!==w){var e={token:localStorage.getItem("token")};A(!0),Object(d.a)(e).get("/".concat(w,"/")).then((function(e){M(e.data);var t=e.data,n=t.name,a=t.price,i=t.time_needed,r=t.avatar;pe("name",n),pe("price",a),pe("time_needed",i),re([r]),A(!1)}))}else pe("name",""),pe("price",0),pe("time_needed",30),re([])}),[w]),Object(s.useEffect)((function(){k(a.pathname.split("/").at(-1))}),[a]);var be=function(){Q(!0)},fe=function(){Q(!1)},he=function(){te(!0)},me=function(){te(!1)};function Oe(){return(Oe=Object(r.a)(i.a.mark((function e(t){var r,o,c,s,u,j,p,b,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),r=t.name,o=t.price,c=t.time_needed,s=t.file,u={name:r,price:+o,time_needed:+c},(j=new FormData).append("data",JSON.stringify(u)),e.next=7,localStorage.getItem("token");case 7:p=e.sent,b={token:p},f={token:p,contentType:"multipart/form-data"},a.state.update?(console.log("UPDATE DATA => ",u),Object(d.a)(b).put("/".concat(V.id,"/"),{name:r,price:+o,time_needed:+c}).then((function(e){n({type:U.a}),be(),W(!1),setTimeout((function(){l("/admin/hairstyles")}),500)})).catch((function(e){W(!1),he()}))):(j.append("files",s[0]),W(!0),Object(d.a)(f).post("",j).then((function(e){n({type:U.a}),be(),W(!1),setTimeout((function(){l("/admin/hairstyles")}),500)})).catch((function(e){W(!1),he()})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.next=3,localStorage.getItem("token");case 3:t=e.sent,a={token:t},Object(d.a)(a).delete("/".concat(V.id,"/")).then((function(e){n({type:U.a}),be(),K(!1),setTimeout((function(){l("/admin/hairstyles")}),500)})).catch((function(e){K(!1),he()}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return D?Object(_.jsx)(C,{}):Object(_.jsxs)(p.a,{direction:"column",alignItems:"flex-start",spacing:6,sx:{maxWidth:720},children:[Object(_.jsx)(b.a,{sx:{height:240,width:"100%",borderRadius:2,position:"relative",border:"1px solid #dadada"},children:Object(_.jsx)(T,{initial:ie,update:null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.update,id:V.id,setForm:function(e){pe("file",e)},onSuccess:be,onFail:he})}),Object(_.jsx)(y.a,Object(c.a)({name:"name",required:!0,control:ue,label:"Ime usluge",placeholder:"Unesite ime usluge...",type:"text"},de("name",{required:F.a}))),Object(_.jsx)(y.a,Object(c.a)({name:"price",required:!0,control:ue,label:"Cijena usluge",type:"number",placeholder:"Unesite cijenu usluge...",endAdornment:Object(_.jsx)(f.a,{position:"end",children:"KM"})},de("price",{required:F.a}))),Object(_.jsx)(y.a,Object(c.a)({disabled:!0,name:"time_needed",required:!0,control:ue,label:"Vrijeme potrebno",type:"number",placeholder:"Unesite vrijeme potrebno za uslugu...",endAdornment:Object(_.jsx)(f.a,{position:"end",children:"min."})},de("time_needed",{required:F.a}))),Object(_.jsxs)(p.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:"100%"},children:[J?Object(_.jsx)(g.a,{loading:!0,loadingPosition:"start",startIcon:Object(_.jsx)(v.a,{}),variant:"outlined",sx:{textTransform:"none"},children:"Spremanje..."}):Object(_.jsx)(h.a,{onClick:le((function(e){return Oe.apply(this,arguments)})),sx:{textTransform:"none"},variant:"contained",inputMode:"submit",disabled:!je.isValid,children:je.isValid?"Spremi":"Unesite podatke"}),(null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.update)&&(B?Object(_.jsx)(g.a,{loading:!0,loadingPosition:"start",startIcon:Object(_.jsx)(v.a,{}),variant:"text",sx:{textTransform:"none"},children:"Brisanje..."}):Object(_.jsx)(h.a,{onClick:function(){return ge.apply(this,arguments)},sx:{textTransform:"none"},variant:"text",inputMode:"submit",color:"secondary",disabled:!je.isValid,children:"Izbri\u0161i uslugu"}))]}),Object(_.jsx)(m.a,{open:G,autoHideDuration:3e3,onClose:fe,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(_.jsx)(q,{onClose:fe,severity:"success",sx:{width:"100%"},children:"Uspje\u0161no ste dodali/uredili uslugu."})}),Object(_.jsx)(m.a,{open:ee,autoHideDuration:3e3,onClose:me,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(_.jsx)(q,{onClose:me,severity:"error",sx:{width:"100%"},children:"Do\u0161lo je do pogre\u0161ke pri dodavanju/ure\u0111ivanju usluge"})})]})}}}]);
//# sourceMappingURL=16.ec02b85e.chunk.js.map