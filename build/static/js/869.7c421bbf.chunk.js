"use strict";(self.webpackChunkpms_client=self.webpackChunkpms_client||[]).push([[869],{1800:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(3067),a=r(184);function i(e){var n=e.children;e.type;return(0,a.jsx)(t.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}i.defaultProps={type:"scale"}},768:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(4554),a=r(1889),i=r(1413),o=r(5987),s=r(7135),l=r(184),c=["children"],d=function(e){var n=e.children,r=(0,o.Z)(e,c);return(0,l.jsx)(s.Z,(0,i.Z)((0,i.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,l.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},u=r(735),p=r(5193),m=r(9164),h=r(6314),x=function(){var e=(0,p.Z)((function(e){return e.breakpoints.down("sm")}));return(0,l.jsx)(m.Z,{maxWidth:"xl",children:(0,l.jsx)(h.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit"})})},Z=function(e){var n=e.children;return(0,l.jsx)(t.Z,{sx:{minHeight:"100vh"},children:(0,l.jsxs)(a.ZP,{container:!0,direction:"column",sx:{minHeight:"100vh"},children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,l.jsx)(u.Z,{})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,l.jsx)(a.ZP,{item:!0,children:(0,l.jsx)(d,{children:n})})})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,l.jsx)(x,{})})]})})}},2869:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(1087),a=r(1889),i=r(6314),o=r(890),s=r(4165),l=r(5861),c=r(9439),d=r(2791),u=r(7689),p=r(4925),m=r(9189),h=r(7071),x=r(8096),Z=r(7198),v=r(3786),g=r(3466),b=r(3400),f=r(6151),j=r(8007),y=r(6277),w=r(1800),P=function(e){var n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(n+=1),n},C=r(1654),S=r(4215),k=r(8272),B=r(184),O=function(){var e=(0,d.useState)(),n=(0,c.Z)(e,2)[1],r=(0,d.useState)(!1),t=(0,c.Z)(r,2),o=t[0],O=t[1],E=(0,u.s0)(),F=[{label:"BUYER",value:"buyer"},{label:"SELLER",value:"seller"},{label:"STUDENT",value:"hr"}],R=function(){O(!o)},q=function(e){e.preventDefault()},N=function(e){var r,t=P(e);n((r=t)<2?{label:"Poor",color:"error.main"}:r<3?{label:"Weak",color:"warning.main"}:r<4?{label:"Normal",color:"warning.dark"}:r<5?{label:"Good",color:"success.main"}:r<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"})};return(0,d.useEffect)((function(){N("")}),[]),(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(y.J9,{initialValues:{name:"",email:"",company:"",password:"",phone:"",role:"",submit:null},validationSchema:j.Ry().shape({name:j.Z_().max(255).required("Name is required"),email:j.Z_().email("Must be a valid email").max(255).required("Email is required"),password:j.Z_().required("Password is required").min(8,"Password must be at least 8 characters").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,"Password should contain at least one special character, one uppercase, one lowercase and one number"),role:j.Z_().max(255).required("Role is required"),phone:j.Z_().matches(/^[0-9]/,"Please enter a valid phone number").required("Phone number is required")}),onSubmit:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n,r){var t,a,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.setErrors,a=r.setStatus,i=r.setSubmitting,e.prev=1,e.next=4,C.O.register({name:n.name,email:n.email,password:n.password,phone:n.phone,role:n.role});case 4:e.sent&&E("/home"),a({success:!1}),i(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),a({success:!1}),t({submit:(null===(o=e.t0.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)||"something went wrong"}),i(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,t=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,c=e.touched,d=e.values,u=e.setFieldValue;return(0,B.jsx)("form",{noValidate:!0,onSubmit:s,children:(0,B.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{spacing:1,children:[(0,B.jsx)(p.Z,{htmlFor:"company-signup",children:"Company Name"}),(0,B.jsx)(m.Z,{fullWidth:!0,error:Boolean(c.name&&n.name),id:"name-signup",value:d.name,name:"name",onBlur:r,onChange:t,placeholder:"Company Name",inputProps:{}}),c.name&&n.name&&(0,B.jsx)(h.Z,{error:!0,id:"helper-text-company-signup",children:n.name})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{spacing:1,children:[(0,B.jsx)(p.Z,{htmlFor:"phone-signup",children:"Mobile Number"}),(0,B.jsx)(m.Z,{fullWidth:!0,error:Boolean(c.phone&&n.phone),id:"phone-signup",value:d.phone,name:"phone",onBlur:r,onChange:t,placeholder:"Phone Number",type:"tel"}),c.phone&&n.phone&&(0,B.jsx)(h.Z,{error:!0,id:"helper-text-company-signup",children:n.phone})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{spacing:1,children:[(0,B.jsx)(p.Z,{htmlFor:"email-signup",children:"Email Address*"}),(0,B.jsx)(m.Z,{fullWidth:!0,error:Boolean(c.email&&n.email),id:"email-login",type:"email",value:d.email,name:"email",onBlur:r,onChange:t,placeholder:"Email",inputProps:{}}),c.email&&n.email&&(0,B.jsx)(h.Z,{error:!0,id:"helper-text-email-signup",children:n.email})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{spacing:1,children:[(0,B.jsx)(p.Z,{htmlFor:"role-signup",children:"Role"}),(0,B.jsxs)(x.Z,{children:[(0,B.jsx)(p.Z,{id:"role-label",children:"Select Role"}),(0,B.jsx)(y.gN,{as:Z.Z,name:"role",labelId:"role-label",id:"role",onChange:function(e){return u("role",e.target.value)},error:Boolean(c.role&&n.role),children:F.map((function(e){return(0,B.jsx)(v.Z,{value:e.value,children:e.label})}))})]}),c.role&&n.role&&(0,B.jsx)(h.Z,{error:!0,id:"helper-text-role-signup",children:n.role})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{spacing:1,children:[(0,B.jsx)(p.Z,{htmlFor:"password-signup",children:"Password"}),(0,B.jsx)(m.Z,{fullWidth:!0,error:Boolean(c.password&&n.password),id:"password-signup",type:o?"text":"password",value:d.password,name:"password",onBlur:r,onChange:function(e){t(e),N(e.target.value)},endAdornment:(0,B.jsx)(g.Z,{position:"end",children:(0,B.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:q,edge:"end",size:"large",children:o?(0,B.jsx)(S.Z,{}):(0,B.jsx)(k.Z,{})})}),placeholder:"******",inputProps:{}}),c.password&&n.password&&(0,B.jsx)(h.Z,{error:!0,id:"helper-text-password-signup",children:n.password})]})}),n.submit&&(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(h.Z,{error:!0,children:n.submit})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(w.Z,{children:(0,B.jsx)(f.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})}})})},E=r(768),F=function(){return(0,B.jsx)(E.Z,{children:(0,B.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,B.jsx)(o.Z,{variant:"h3",children:"Sign up"}),(0,B.jsx)(o.Z,{component:t.rU,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(O,{})})]})})}},1654:function(e,n,r){r.d(n,{O:function(){return a}});var t=r(5875);var a={register:function(e){return(0,t.v_)("/auth/register",e).then((function(e){return e}))},login:function(e){return(0,t.v_)("/auth/login",e).then((function(e){return e}))}}},3786:function(e,n,r){r.d(n,{Z:function(){return S}});var t=r(4942),a=r(3366),i=r(7462),o=r(2791),s=r(3733),l=r(4419),c=r(2065),d=r(6934),u=r(1402),p=r(6199),m=r(3701),h=r(162),x=r(2071),Z=r(133),v=r(6014),g=r(9849),b=r(5878),f=r(1217);function j(e){return(0,f.Z)("MuiMenuItem",e)}var y=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=r(184),P=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.dense&&n.dense,r.divider&&n.divider,!r.disableGutters&&n.gutters]}})((function(e){var n,r=e.theme,a=e.ownerState;return(0,i.Z)({},r.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((r.vars||r).palette.divider),backgroundClip:"padding-box"},(n={"&:hover":{textDecoration:"none",backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,t.Z)(n,"&.".concat(y.selected),(0,t.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),(0,t.Z)(n,"&.".concat(y.selected,":hover"),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),(0,t.Z)(n,"&.".concat(y.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,t.Z)(n,"&.".concat(y.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,t.Z)(n,"& + .".concat(Z.Z.root),{marginTop:r.spacing(1),marginBottom:r.spacing(1)}),(0,t.Z)(n,"& + .".concat(Z.Z.inset),{marginLeft:52}),(0,t.Z)(n,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,t.Z)(n,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,t.Z)(n,"& .".concat(v.Z.root),{minWidth:36}),n),!a.dense&&(0,t.Z)({},r.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},r.typography.body2,(0,t.Z)({},"& .".concat(v.Z.root," svg"),{fontSize:"1.25rem"})))})),S=o.forwardRef((function(e,n){var r=(0,u.Z)({props:e,name:"MuiMenuItem"}),t=r.autoFocus,c=void 0!==t&&t,d=r.component,m=void 0===d?"li":d,Z=r.dense,v=void 0!==Z&&Z,g=r.divider,b=void 0!==g&&g,f=r.disableGutters,y=void 0!==f&&f,S=r.focusVisibleClassName,k=r.role,B=void 0===k?"menuitem":k,O=r.tabIndex,E=r.className,F=(0,a.Z)(r,P),R=o.useContext(p.Z),q=o.useMemo((function(){return{dense:v||R.dense||!1,disableGutters:y}}),[R.dense,v,y]),N=o.useRef(null);(0,h.Z)((function(){c&&N.current&&N.current.focus()}),[c]);var M,I=(0,i.Z)({},r,{dense:q.dense,divider:b,disableGutters:y}),V=function(e){var n=e.disabled,r=e.dense,t=e.divider,a=e.disableGutters,o=e.selected,s=e.classes,c={root:["root",r&&"dense",n&&"disabled",!a&&"gutters",t&&"divider",o&&"selected"]},d=(0,l.Z)(c,j,s);return(0,i.Z)({},s,d)}(r),_=(0,x.Z)(N,n);return r.disabled||(M=void 0!==O?O:-1),(0,w.jsx)(p.Z.Provider,{value:q,children:(0,w.jsx)(C,(0,i.Z)({ref:_,role:B,tabIndex:M,component:m,focusVisibleClassName:(0,s.Z)(V.focusVisible,S),className:(0,s.Z)(V.root,E)},F,{ownerState:I,classes:V}))})}))}}]);
//# sourceMappingURL=869.7c421bbf.chunk.js.map