(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),s=n.n(a),i=n(7),o=n(116),l=n(117),j=n(1),u=function(e){var t=e.onIdSubmit,n=Object(c.useRef)();return Object(j.jsx)("div",{className:"container flex items-center h-screen ",children:Object(j.jsxs)(o.a,{className:"w-100",onSubmit:function(e){e.preventDefault(),t(n.current.value)},children:[Object(j.jsxs)(o.a.Group,{children:[Object(j.jsx)(o.a.Label,{className:"flex justify-center text-3xl font-semibold",children:"Enter your ID"}),Object(j.jsx)(o.a.Control,{type:"text",ref:n,required:!0})]}),Object(j.jsxs)("div",{className:"flex justify-center",children:[Object(j.jsx)("button",{type:"submit",className:"bg-blue-500 mt-4 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",style:{width:"8rem"},children:"Login"}),Object(j.jsx)("button",{onClick:function(){t(Object(l.a)())},className:"bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",style:{width:"8rem"},children:"Sign Up"})]})]})})};function d(e,t){var n="chat-application-"+e,r=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,o]}var b=n(119),x=n(118),f=n(113),O=n(115),m=n(120),h=n(23),v=n(21),p=r.a.createContext();function g(){return Object(c.useContext)(p)}function C(e){var t=e.children,n=d("contacts",[]),c=Object(i.a)(n,2),r=c[0],a=c[1];return Object(j.jsx)(p.Provider,{value:{contacts:r,createContact:function(e,t){a((function(n){return[].concat(Object(v.a)(n),[{id:e,name:t}])}))}},children:t})}var y=n(68),N=n.n(y),S=r.a.createContext();function w(e){var t=e.id,n=e.children,r=Object(c.useState)(),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){var e=N()("http://localhost:5000",{query:{id:t}});return o(e),function(){return e.close()}}),[t]),Object(j.jsx)(S.Provider,{value:s,children:n})}var I=r.a.createContext();function M(){return Object(c.useContext)(I)}function k(e){var t=e.id,n=e.children,r=d("conversations",[]),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(0),u=Object(i.a)(l,2),b=u[0],x=u[1],f=g().contacts,O=Object(c.useContext)(S);var m=Object(c.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;o((function(e){var r=!1,a={sender:c,text:n},s=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!0,Object(h.a)(Object(h.a)({},e),{},{messages:[].concat(Object(v.a)(e.messages),[a])})):e;var n,c}));return r?s:[].concat(Object(v.a)(e),[{recipients:t,messages:[a]}])}))}),[o]);Object(c.useEffect)((function(){if(null!=O)return O.on("receive-message",m),function(){return O.off("receive-message")}}),[O,m]);var p=s.map((function(e,n){var c=e.recipients.map((function(e){var t=f.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=e.messages.map((function(e){var n=f.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,r=t===e.sender;return Object(h.a)(Object(h.a)({},e),{},{senderName:c,fromMe:r})})),a=n===b;return Object(h.a)(Object(h.a)({},e),{},{messages:r,recipients:c,selected:a})})),C={conversations:p,selectedConversation:p[b],sendMessage:function(e,n){O.emit("send-message",{recipients:e,text:n}),m({recipients:e,text:n,sender:t})},selectConversationIndex:x,createConversation:function(e){o((function(t){return[].concat(Object(v.a)(t),[{recipients:e,messages:[]}])}))}};return Object(j.jsx)(I.Provider,{value:C,children:n})}function L(){var e=M(),t=e.conversations,n=e.selectConversationIndex;return Object(j.jsx)(m.a,{variant:"flush",children:t.map((function(e,t){return Object(j.jsx)(m.a.Item,{action:!0,onClick:function(){return n(t)},active:e.selected,children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}function q(){var e=g().contacts;return Object(j.jsx)(m.a,{variant:"flush",children:e.map((function(e){return Object(j.jsx)(m.a.Item,{children:e.name},e.id)}))})}function B(e){var t=e.closeModal,n=Object(c.useRef)(),r=Object(c.useRef)(),a=g().createContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a.Header,{closeButton:!0,children:"Create Contact"}),Object(j.jsx)(O.a.Body,{children:Object(j.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),a(n.current.value,r.current.value),t()},children:[Object(j.jsxs)(o.a.Group,{children:[Object(j.jsx)(o.a.Label,{children:"Id"}),Object(j.jsx)(o.a.Control,{type:"text",ref:n,required:!0})]}),Object(j.jsxs)(o.a.Group,{children:[Object(j.jsx)(o.a.Label,{children:"Name"}),Object(j.jsx)(o.a.Control,{type:"text",ref:r,required:!0})]}),Object(j.jsx)("div",{className:"flex justify-center mt-2",children:Object(j.jsx)(f.a,{type:"submit",children:"Create Contact"})})]})})]})}function D(e){var t=e.closeModal,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],l=g().contacts,u=M().createConversation;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(j.jsx)(O.a.Body,{children:Object(j.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),u(a),t()},children:[l.map((function(e){return Object(j.jsx)(o.a.Group,{controlId:e.id,children:Object(j.jsx)(o.a.Check,{type:"checkbox",value:a.includes(e.id),label:e.name,onChange:function(){return t=e.id,void s((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(v.a)(e),[t])}));var t}})},e.id)})),Object(j.jsx)("div",{className:"flex justify-center mt-2",children:Object(j.jsx)(f.a,{type:"submit",children:"Create"})})]})})]})}var E="conversations",G="contacts";function K(e){var t=e.id,n=Object(c.useState)(E),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),u=l[0],d=l[1],m=a===E;function h(){d(!1)}return Object(j.jsxs)("div",{style:{width:"250px"},className:"d-flex flex-column",children:[Object(j.jsxs)(b.a.Container,{activeKey:a,onSelect:s,children:[Object(j.jsxs)(x.a,{variant:"tabs",className:"justify-content-center",children:[Object(j.jsx)(x.a.Item,{children:Object(j.jsx)(x.a.Link,{eventKey:E,children:"Conversations"})}),Object(j.jsx)(x.a.Item,{children:Object(j.jsx)(x.a.Link,{eventKey:G,children:"Contacts"})})]}),Object(j.jsxs)(b.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(j.jsx)(b.a.Pane,{eventKey:E,children:Object(j.jsx)(L,{})}),Object(j.jsx)(b.a.Pane,{eventKey:G,children:Object(j.jsx)(q,{})})]}),Object(j.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your Id: ",Object(j.jsx)("span",{className:"text-muted",children:t})]}),Object(j.jsxs)(f.a,{onClick:function(){return d(!0)},className:"rounded-0",children:["New ",m?"Conversation":"Contact"]})]}),Object(j.jsx)(O.a,{show:u,onHide:h,children:m?Object(j.jsx)(D,{closeModal:h}):Object(j.jsx)(B,{closeModal:h})})]})}var P=n(114);function J(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),s=M(),l=s.sendMessage,u=s.selectedConversation;return Object(j.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(j.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(j.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:u.messages.map((function(e,t){var n=u.messages.length-1===t;return Object(j.jsxs)("div",{ref:n?a:null,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(j.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"bg-primary text-white":"border"),children:e.text}),Object(j.jsx)("div",{className:"text-muted small ".concat(e.fromMe?"text-right":""),children:e.fromMe?"You":e.senderName})]},t)}))})}),Object(j.jsx)(o.a,{onSubmit:function(e){e.preventDefault(),l(u.recipients.map((function(e){return e.id})),n),r("")},children:Object(j.jsx)(o.a.Group,{className:"m-2",children:Object(j.jsxs)(P.a,{children:[Object(j.jsx)(o.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return r(e.target.value)},style:{height:"75px",resize:"none"}}),Object(j.jsx)(P.a.Append,{className:"m-auto",children:Object(j.jsx)(f.a,{type:"submit",className:"py-4 rounded ml-1",children:"Send"})})]})})})]})}function H(e){var t=e.id,n=M().selectedConversation;return Object(j.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(j.jsx)(K,{id:t}),n&&Object(j.jsx)(J,{})]})}var R=function(){var e=d("id"),t=Object(i.a)(e,2),n=t[0],c=t[1];return n?Object(j.jsx)(w,{id:n,children:Object(j.jsx)(C,{children:Object(j.jsx)(k,{children:Object(j.jsx)(H,{id:n})})})}):Object(j.jsx)(u,{onIdSubmit:c})};n(109);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.e8726cb5.chunk.js.map