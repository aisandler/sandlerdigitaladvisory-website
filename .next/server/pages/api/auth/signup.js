"use strict";(()=>{var e={};e.id=11,e.ids=[11],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},401:e=>{e.exports=import("firebase/auth")},1492:e=>{e.exports=import("firebase/firestore")},4420:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.r(a),t.d(a,{config:()=>d,default:()=>p,routeModule:()=>l});var r=t(1802),s=t(7153),n=t(6249),c=t(3588),o=e([c]);c=(o.then?(await o)():o)[0];let p=(0,n.l)(c,"default"),d=(0,n.l)(c,"config"),l=new r.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/auth/signup",pathname:"/api/auth/signup",bundlePath:"",filename:""},userland:c});i()}catch(e){i(e)}})},6213:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{I:()=>p,db:()=>d});var r=t(3745),s=t(401),n=t(1492),c=e([r,s,n]);[r,s,n]=c.then?(await c)():c;let o=(0,r.getApps)().length?(0,r.getApps)()[0]:(0,r.initializeApp)({apiKey:"AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I",authDomain:"sda-client-portal.firebaseapp.com",projectId:"sda-client-portal",storageBucket:"sda-client-portal.firebasestorage.app",messagingSenderId:"608424811993",appId:"1:608424811993:web:da7b03d4fc620cb65a4dc8"}),p=(0,s.getAuth)(o),d=(0,n.getFirestore)(o);i()}catch(e){i(e)}})},3588:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.r(a),t.d(a,{signUpNewClient:()=>signUpNewClient});var r=t(401),s=t(6213),n=t(8608),c=e([r,s,n]);async function signUpNewClient(e,a,t){try{let i=await (0,r.createUserWithEmailAndPassword)(s.I,e,a),{user:c}=i,o=await (0,n.xv)(c.uid,e,"client");return t&&await (0,n.Ut)(c.uid,t),o}catch(e){throw console.error("Error creating new client:",e),e}}[r,s,n]=c.then?(await c)():c,i()}catch(e){i(e)}})},8608:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{Ut:()=>assignUserToGroup,xv:()=>createUserProfile});var r=t(6213),s=t(1492),n=e([r,s]);async function createUserProfile(e,a,t){let i={uid:e,email:a,role:t,name:a.split("@")[0],organizationId:"sandler-digital",accessLevel:"admin"===t?10:1};return await (0,s.setDoc)((0,s.doc)(r.db,"users",e),i),i}async function assignUserToGroup(e,a){await (0,s.updateDoc)((0,s.doc)(r.db,"users",e),{clientGroupId:a});let t=(0,s.doc)(r.db,"clientGroups",a),i=await (0,s.getDoc)(t);if(i.exists()){let a=i.data();a.clients.includes(e)||await (0,s.updateDoc)(t,{clients:[...a.clients,e]})}}[r,s]=n.then?(await n)():n,i()}catch(e){i(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[222],()=>__webpack_exec__(4420));module.exports=t})();