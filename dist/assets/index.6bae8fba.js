import{k as N,a as g,j as e,r as u,X as c,Y as n,Z as x,f as d,P as C,Q as b,S as v,T as y,$ as i,a0 as t,G as S,I as P,ae as j,aP as w,aQ as F}from"./index.9000953d.js";import{a as $}from"./App.b6b3cc48.js";const A=()=>{const o=$(),f=N(),{uploadData:s,paramsData:r}=g(a=>a.headPostOffices),l=a=>{var m,h;o(w({[(m=a==null?void 0:a.target)==null?void 0:m.name]:(h=a.target)==null?void 0:h.value}))},p=async()=>{const a=await o(F());a!=null&&a.payload&&f("/zone")};return e(u.exports.Fragment,{children:e(c,{children:e(n,{md:"6",sm:"12",children:e(x,{children:d(C,{children:[e(b,{children:e(v,{tag:"h4",children:"New Zone"})}),d(y,{children:[d(c,{children:[d(n,{sm:"12",children:[e(i,{className:"form-label",for:"name",children:"Name"}),e(t,{type:"text",name:"name",id:"name",placeholder:"Name",value:s==null?void 0:s.name,onChange:l})]}),d(n,{sm:"12",children:[e(i,{className:"form-label",for:"code",children:"Code"}),e(t,{type:"text",name:"code",id:"code",placeholder:"Code",value:s==null?void 0:s.code,onChange:l})]}),d(n,{sm:"12",children:[e(i,{className:"form-label",for:"address",children:"Address"}),e(t,{type:"textarea",name:"address",id:"address",placeholder:"Address",value:s==null?void 0:s.address,onChange:l})]})]}),e(c,{children:e(n,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(S,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),p()},disabled:r==null?void 0:r.loading,children:r!=null&&r.loading?d(P,{children:[e(j,{className:"me-25",size:"sm"}),"Please Wait..."]}):"Submit"})})})})]})]})})})})})};export{A as default};