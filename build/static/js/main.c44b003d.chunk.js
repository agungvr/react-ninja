(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(n,e,t){n.exports=t(368)},19:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"f",function(){return o}),t.d(e,"d",function(){return a}),t.d(e,"b",function(){return i}),t.d(e,"e",function(){return c}),t.d(e,"c",function(){return s});var r="API",o=function(n){return{type:"API_START",payload:n}},a=function(n){return{type:"API_END",payload:n}},i=function(n){return{type:"ACCESS_DENIED",payload:{url:n}}},c=function(n){return{type:"API_ERROR",error:n}},s=function(n){var e=n.url,t=void 0===e?"":e,o=n.method,a=void 0===o?"GET":o,i=n.data,c=void 0===i?null:i,s=n.accessToken,u=void 0===s?null:s,d=n.onSuccess,l=void 0===d?function(){}:d,f=n.onFailure,p=void 0===f?function(){}:f,h=n.label,b=void 0===h?"":h,v=n.headersOverride;return{type:r,payload:{url:t,method:a,data:c,accessToken:u,onSuccess:l,onFailure:p,label:b,headersOverride:void 0===v?null:v}}}},366:function(n,e,t){},368:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),a=t(75),i=t.n(a),c=t(8),s=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return function(){return o.a.createElement(n,e,o.a.createElement(t,null))}},u=function(n,e,t){if(!n)throw new Error("WrapperComponent should be set!");return t?s(n,e,t):function(t){if(!t)throw new Error("Component should be set!");return s(n,e,t)}},d=u(r.StrictMode),l=t(77),f=u(l.ErrorBoundary,{FallbackComponent:l.FallbackView}),p=t(22),h=t(126),b=t(134),v=t(80),m=t(127),w=t.n(m),E=t(24),A=t(38),g=t.n(A),O=t(19),j=function(n){var e=n.dispatch;return function(n){return function(t){if(n(t),t.type===O.a){var r=t.payload,o=r.url,a=r.method,i=r.data,c=r.accessToken,s=r.onSuccess,u=r.onFailure,d=r.label,l=r.headers,f=["GET","DELETE"].includes(a)?"params":"data";g.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"AIzaSyD2mgsqdaxLK_zBqdi9wf-hbLvU08Q0E1g",REACT_APP_AUTH_DOMAIN:"react-ninja-69.firebaseapp.com",REACT_APP_DATABASE_URL:"https://react-ninja-69.firebaseio.com",REACT_APP_PROJECT_ID:"react-ninja-69",REACT_APP_STORAGE_BUCKET:"react-ninja-69.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"467526491555"}).REACT_APP_BASE_URL||"",g.a.defaults.headers.common["Content-Type"]="application/json",g.a.defaults.headers.common.Authorization="Bearer ".concat(c),d&&e(Object(O.f)(d)),g.a.request(Object(E.a)({url:o,method:a,headers:l},f,i)).then(function(n){var t=n.data;e(s(t))}).catch(function(n){e(Object(O.e)(n)),e(u(n)),n.response&&403===n.response.status&&e(Object(O.b)(window.location.pathname))}).finally(function(){d&&e(Object(O.d)(d))})}}}},y=t(82),_=t(29),P=t(55),S=function(n){return Object(_.a)({},n,{error:null,isLoading:!0,success:!1})},R=function(n){return Object(_.a)({},n,{error:null,isLoading:!1,success:!0})},T=function(n,e){return Object(_.a)({},n,{error:e.payload.response.statusText,isLoading:!1,success:!1})},C=function(n){return n},I={data:[],isLoading:!1,success:!1,error:null},L=function(n){var e,t=(e={},Object(E.a)(e,n.successAction,R),Object(E.a)(e,n.errorAction,T),Object(E.a)(e,n.isLoadingAction,S),e);return function(n){return function(e,r){var o=(t[r.type]||C)(e,r);return n(o,r)}}}({isLoadingAction:"API_START",successAction:"LOGIN_SUCCESS",errorAction:"LOGIN_FAILURE"})(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P.a:return Object(_.a)({},n,{data:e.payload});default:return n}}),k=Object(c.combineReducers)({form:y.reducer,login:L}),U=t(25),N=t.n(U),D=t(31),W=N.a.mark(B),x=N.a.mark(G);function B(n){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return void(n.next=2);case 2:case"end":return n.stop()}},W,this)}function G(){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.b)(P.a,B);case 2:case"end":return n.stop()}},x,this)}var z=N.a.mark(F);function F(){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.a)(G);case 2:case"end":return n.stop()}},z,this)}var q=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={key:"root",storage:w.a},o=Object(v.a)(r,n),a=Object(b.a)(),i=Object(c.createStore)(o,t,Object(h.composeWithDevTools)(Object(c.applyMiddleware)(a,j))),s=Object(v.b)(i);return a.run(e),{store:i,persistor:s}}(k,F),K=q.store,M=q.persistor,J=u(p.Provider,{store:K}),Q=u(t(128).a,{loading:null,persistor:M}),V=u(t(81).a),H=t(131),Y=t.n(H),$=t(132),X=t.n($),Z=u(r.Suspense,{fallback:o.a.createElement("div",{className:"preload"},o.a.createElement(Y.a,{loader:X.a,size:100,strokeWidth:8,strokeColor:"#ffffff",duration:1500}))}),nn=t(74),en=u(nn.a.Provider,{value:new nn.b}),tn=Object(c.compose)(d,f,en,Q,J,V,Z),rn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function on(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}t(366);var an=tn(Object(r.lazy)(function(){return t.e(4).then(t.bind(null,382))}));i.a.render(o.a.createElement(an,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");rn?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):on(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):on(e,n)})}}()},55:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a});var r=t(19),o="LOGIN_SUCCESS",a=function(){return Object(r.c)({label:"LOGIN_REQUEST",url:"https://api.myjson.com/bins/19dtxc",onSuccess:i,onFailure:c})},i=function(n){return{type:o,payload:n}},c=function(n){return{type:"LOGIN_FAILURE",payload:n}}},74:function(n,e,t){"use strict";var r=t(1),o=t.n(r),a=o.a.createContext(null),i=function(n){return function(e){return o.a.createElement(a.Consumer,null,function(t){return o.a.createElement(n,Object.assign({},e,{firebase:t}))})}},c=a,s=t(133),u=t(79),d=t.n(u),l=(t(364),{apiKey:"AIzaSyD2mgsqdaxLK_zBqdi9wf-hbLvU08Q0E1g",authDomain:"react-ninja-69.firebaseapp.com",databaseURL:"https://react-ninja-69.firebaseio.com",projectId:"react-ninja-69",storageBucket:"react-ninja-69.appspot.com",messagingSenderId:"467526491555"}),f=function n(){var e=this;Object(s.a)(this,n),this.doCreateUserWithEmailAndPassword=function(n,t){return e.auth.createUserWithEmailAndPassword(n,t)},this.doSignInWithEmailAndPassword=function(n,t){return e.auth.signInWithEmailAndPassword(n,t)},this.doSignOut=function(){return e.auth.signOut()},this.doPasswordReset=function(n){return e.auth.sendPasswordResetEmail(n)},this.doPasswordUpdate=function(n){return e.auth.currentUser.updatePassword(n)},d.a.initializeApp(l),this.auth=d.a.auth()};t.d(e,"a",function(){return c}),t.d(e,"c",function(){return i});e.b=f}},[[135,13,12]]]);