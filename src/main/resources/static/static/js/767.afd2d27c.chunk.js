"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[767],{7767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(5043),c=a(2327),r=a(2345),n=a(9157),i=a(5299),l=a(8353),o=a(6221),d=a(7550),h=a(7493),u=a(2679),A=a(6259),x=a(1509),j=a(4505),m=a(579);const p=()=>{const[e,t]=(0,s.useState)(""),[a,p]=(0,s.useState)(""),[y,v]=(0,s.useState)(""),[g,b]=(0,s.useState)(""),[f,w]=(0,s.useState)(""),[D,S]=(0,s.useState)("");return(0,m.jsx)(c.A,{children:(0,m.jsx)(r.A,{children:(0,m.jsxs)(n.A,{children:[(0,m.jsxs)(i.A,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,m.jsx)("i",{className:"bi bi-bell me-2",children:" "}),"Create ToDo"]}),(0,m.jsxs)(l.A,{children:[(0,m.jsxs)(o.A,{onSubmit:async s=>{s.preventDefault();const c={title:e,date:a,time:y,description:g};try{const e=await(0,j.L3)(c);w("ToDo saved successfully! ID: ".concat(e.data)),S(""),t(""),p(""),v(""),b("")}catch(r){console.error("Error saving ToDo:",r),S("Failed to save ToDo. Please try again."),w("")}},children:[(0,m.jsxs)(d.A,{children:[(0,m.jsx)(h.A,{for:"title",children:"Title"}),(0,m.jsx)(u.A,{id:"title",name:"title",placeholder:"\uc81c\ubaa9 \uc785\ub825",type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,m.jsxs)(d.A,{children:[(0,m.jsx)(h.A,{for:"date",children:"Date"}),(0,m.jsx)(u.A,{id:"date",name:"date",type:"date",value:a,onChange:e=>p(e.target.value),required:!0})]}),(0,m.jsxs)(d.A,{children:[(0,m.jsx)(h.A,{for:"time",children:"Time"}),(0,m.jsx)(u.A,{id:"time",name:"time",type:"time",value:y,onChange:e=>v(e.target.value)})]}),(0,m.jsxs)(d.A,{children:[(0,m.jsx)(h.A,{for:"description",children:"Description"}),(0,m.jsx)(u.A,{id:"description",name:"description",placeholder:"\uc124\uba85 \uc785\ub825",type:"textarea",value:g,onChange:e=>b(e.target.value)})]}),(0,m.jsx)(A.A,{color:"primary",type:"submit",children:"Save"})]}),f&&(0,m.jsx)(x.A,{color:"success",className:"mt-3",children:f}),D&&(0,m.jsx)(x.A,{color:"danger",className:"mt-3",children:D})]})]})})})}},4505:(e,t,a)=>{a.d(t,{L3:()=>i,Nr:()=>n,Tk:()=>r,Ys:()=>o,uy:()=>l});var s=a(5091);const c="http://localhost:8080/todo",r=async()=>await s.A.get(c),n=async e=>await s.A.get("".concat(c,"/").concat(e)),i=async e=>await s.A.post("".concat(c),e),l=async(e,t)=>await s.A.put("".concat(c,"/").concat(e),t),o=async e=>await s.A.delete("".concat(c,"/").concat(e))}}]);
//# sourceMappingURL=767.afd2d27c.chunk.js.map