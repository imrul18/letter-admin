import{k as x,am as N,a as C,r as p,an as b,j as e,X as t,Y as n,Z as v,f as d,P as y,Q as P,S,T as j,$ as i,a0 as o,G as F,I as $,ae as k,af as w,ao as A}from"./index.9000953d.js";import{a as B}from"./App.b6b3cc48.js";const I=()=>{const c=B(),u=x(),{id:m}=N(),{uploadData:s,paramsData:r}=C(a=>a.headPostOffices);p.exports.useEffect(()=>{c(b(m))},[]);const l=a=>{var h,f;c(w({...s,[(h=a==null?void 0:a.target)==null?void 0:h.name]:(f=a.target)==null?void 0:f.value}))},g=async()=>{const a=await c(A(m));a!=null&&a.payload&&u("/head_post_office")};return e(p.exports.Fragment,{children:e(t,{children:e(n,{md:"6",sm:"12",children:e(v,{children:d(y,{children:[e(P,{children:e(S,{tag:"h4",children:"Edit Head Post Office"})}),d(j,{children:[d(t,{children:[d(n,{sm:"12",children:[e(i,{className:"form-label",for:"name",children:"Name"}),e(o,{type:"text",name:"name",id:"name",placeholder:"Name",value:s==null?void 0:s.name,onChange:l})]}),d(n,{sm:"12",children:[e(i,{className:"form-label",for:"code",children:"Code"}),e(o,{type:"text",name:"code",id:"code",placeholder:"Code",value:s==null?void 0:s.code,onChange:l})]}),d(n,{sm:"12",children:[e(i,{className:"form-label",for:"address",children:"Address"}),e(o,{type:"textarea",name:"address",id:"address",placeholder:"Address",value:s==null?void 0:s.address,onChange:l})]})]}),e(t,{children:e(n,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(F,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),g()},disabled:r==null?void 0:r.loading,children:r!=null&&r.loading?d($,{children:[e(k,{className:"me-25",size:"sm"}),"Please Wait..."]}):"Submit"})})})})]})]})})})})})};export{I as default};