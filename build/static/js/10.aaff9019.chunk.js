(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{377:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(369),c=t(81),s=t(82),m=t(74),i=Object(s.reduxForm)({form:"register"}),o=Object(r.a)(Object(r.c)({registerClick:function(e){return function(a){var t=a.email,n=a.password;n===a.confirmPassword?e.firebase.doCreateUserWithEmailAndPassword(t,n).then(function(e){console.log("s",e)}).catch(function(e){console.log("e",e)}):alert("Password tidak sama")}}})),u=Object(r.a)(m.c,o,i)(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("h3",null,"Create An Account"),l.a.createElement("form",{className:"mt-4",onSubmit:e.handleSubmit(e.registerClick)},l.a.createElement("div",{className:"group material-input"},l.a.createElement(s.Field,{name:"email",component:"input",type:"text",required:!0}),l.a.createElement("span",{className:"highlight"}),l.a.createElement("span",{className:"bar"}),l.a.createElement("label",null,"Email")),l.a.createElement("div",{className:"group material-input"},l.a.createElement(s.Field,{name:"password",component:"input",type:"password",required:!0}),l.a.createElement("span",{className:"highlight"}),l.a.createElement("span",{className:"bar"}),l.a.createElement("label",null,"Password")),l.a.createElement("div",{className:"group material-input"},l.a.createElement(s.Field,{name:"confirmPassword",component:"input",type:"password",required:!0}),l.a.createElement("span",{className:"highlight"}),l.a.createElement("span",{className:"bar"}),l.a.createElement("label",null,"Confirm Password")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-left"},l.a.createElement("div",{className:"styled-checkbox"},l.a.createElement("input",{type:"checkbox",name:"checkbox",id:"agree"}),l.a.createElement("label",{htmlFor:"agree"},"I Accept ",l.a.createElement("span",null,"Terms and Conditions"))))),l.a.createElement("div",{className:"sign-btn text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-gradient-01"},"Create an account")),l.a.createElement("div",{className:"register"},"Already have an account?",l.a.createElement("br",null),l.a.createElement(c.b,{to:"login"},"Sign In"))))});a.default=u}}]);