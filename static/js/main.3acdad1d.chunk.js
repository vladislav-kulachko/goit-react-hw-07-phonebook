(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__4kI8E",label:"ContactForm_label__315e8",input:"ContactForm_input__t6QIO",button:"ContactForm_button__7Atrk",puls:"ContactForm_puls__35wQD"}},13:function(t,e,n){t.exports={list:"ContactList_list__1Fm0C",item:"ContactList_item__csM7L",phone:"ContactList_phone__1_bBt",button:"ContactList_button__M_x-Q",puls:"ContactList_puls__NGYhc",notify:"ContactList_notify__xV1sV",blink:"ContactList_blink__2QBo5"}},16:function(t,e,n){t.exports={container:"App_container__1ENNp",title:"App_title__1gwcb",titleList:"App_titleList__3ltPz",contactsSection:"App_contactsSection__2O5Gx"}},26:function(t,e,n){t.exports={label:"ContactFilter_label__3EdSC",input:"ContactFilter_input__1Smp6"}},36:function(t,e,n){t.exports={spinner:"Loader_spinner__2SwFI"}},45:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(12),o=n.n(a),s=n(7),i=(n(45),n(16)),u=n.n(i),l=n(2),p=n.n(l),b=n(9),d=n(15),j=n(11),f=n.n(j),h=n(6),O=n(22),m=n.n(O),x="http://localhost:2285";function _(){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat(x,"/contacts"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("".concat(x,"/contacts"),e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("".concat(x,"/contacts/").concat(e));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=Object(h.c)("phonebook/getContact",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,_();case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),c=t.t0,t.abrupt("return",r(c.message));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(h.c)("phonebook/addContact",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,w(e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),c=t.t0,t.abrupt("return",r(c.message));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),L=Object(h.c)("phonebook/delContact",function(){var t=Object(b.a)(p.a.mark((function t(e,n){var r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,C(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),c=t.t0,t.abrupt("return",r(c.message));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),F=n(19),S=function(t){return t.contacts.items},A=function(t){return t.contacts.filter},I=function(t){return t.contacts.error},D=function(t){return t.contacts.isLoading},z=Object(F.a)([S,A],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),E=n(5),V=n(1);function B(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(d.a)(a,2),i=o[0],u=o[1],l=Object(s.c)(I),j=Object(s.c)(S),h=Object(s.b)(),O=function(){var t=Object(b.a)(p.a.mark((function t(e,n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(N({name:e,number:n})).unwrap();case 3:r=t.sent,E.d.success('Succsess! Added contact with name: "'.concat(r.name,'"'),{theme:"colored",position:"top-center",autoClose:3e3,transition:E.a,toastId:5}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),E.d.error('Adding contact failed with error: "'.concat(l,'"'),{theme:"colored",position:"top-center",autoClose:5e3,transition:E.b,toastId:6});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),m=function(t){switch(t.target.name){case"name":c(t.target.value);break;case"number":u(t.target.value)}};return Object(V.jsxs)("form",{className:f.a.form,onSubmit:function(t){if(t.preventDefault(),""!==n&&""!==i){if(j.find((function(t){return t.number===i})))return void alert("\u042d\u0442\u043e\u0442 \u043d\u043e\u043c\u0435\u0440 ".concat(i," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"));if(j.find((function(t){return t.name===n})))return void alert("\u042d\u0442\u043e \u0438\u043c\u044f ".concat(n," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"));O(n,i),c(""),u("")}},children:[Object(V.jsxs)("label",{className:f.a.label,children:["Name",Object(V.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:m})]}),Object(V.jsxs)("label",{className:f.a.label,children:["Number",Object(V.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:m})]}),Object(V.jsx)("button",{className:f.a.button,type:"submit",children:"Add Contact"})]})}var M=n(26),Q=n.n(M),J=Object(h.b)("phonebook/changeFilter");function P(){var t=Object(s.b)(),e=Object(s.c)(A);return Object(V.jsxs)("label",{className:Q.a.label,children:["Find contact by name",Object(V.jsx)("input",{className:Q.a.input,name:"find",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",onChange:function(e){return t(J(e.target.value))},value:e})]})}var W=n(13),Z=n.n(W),q=n(35),G=n.n(q),T=n(36),Y=n.n(T);function $(t){var e=t.loading;return console.log(e),Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("li",{className:Y.a.spinner,children:Object(V.jsx)(G.a,{type:"ThreeDots",color:"gray",height:50,width:50,visible:e})})})}function H(){var t=Object(r.useState)(!0),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(s.c)(z),o=Object(s.c)(D),i=Object(s.c)(I),u=Object(s.b)(),l=function(){var t=Object(b.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(L(e.target.id)).unwrap();case 3:n=t.sent,E.d.success('Succsess! Deleted contact with id: "'.concat(n,'"'),{theme:"colored",position:"top-center",autoClose:3e3,transition:E.a,toastId:1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),E.d.error('Failed delete with error: "'.concat(i,'"'),{theme:"colored",position:"top-center",autoClose:5e3,transition:E.b,toastId:2});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return t.prev=1,t.next=4,u(k()).unwrap();case 4:c(!1),E.d.success("Succsess! Download all contacts!",{theme:"colored",position:"top-center",autoClose:3e3,transition:E.a,toastId:3}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),c(!1),E.d.error("Failed download contacts with error: ".concat(i),{theme:"colored",position:"top-center",autoClose:5e3,transition:E.b,toastId:4});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}),[u,i,n]),Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)("ul",{className:Z.a.list,children:[Object(V.jsx)($,{loading:o}),0===a.length?Object(V.jsx)("li",{className:Z.a.notify,children:"Oops, this is empty... Please add your contacts!"}):a.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(V.jsxs)("li",{className:Z.a.item,children:[n,":",Object(V.jsx)("span",{className:Z.a.phone,children:r}),Object(V.jsx)("button",{className:Z.a.button,id:e,type:"button",onClick:l,children:"Delete"})]},e)}))]})})}n(84);function K(){return Object(V.jsxs)("section",{className:u.a.container,children:[Object(V.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(V.jsx)(B,{}),Object(V.jsxs)("section",{className:u.a.contactsSection,children:[Object(V.jsx)("h2",{className:u.a.titleList,children:"Contacts list"}),Object(V.jsx)(P,{}),Object(V.jsx)(H,{})]}),Object(V.jsx)(E.c,{})]})}var R,U,X,tt=n(21),et=n(3),nt=n(10),rt=Object(h.d)([],(R={},Object(et.a)(R,k.fulfilled,(function(t,e){return e.payload})),Object(et.a)(R,N.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(et.a)(R,L.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),R)),ct=Object(h.d)(!1,(U={},Object(et.a)(U,k.pending,(function(){return!0})),Object(et.a)(U,k.fulfilled,(function(){return!1})),Object(et.a)(U,k.rejected,(function(){return!1})),Object(et.a)(U,N.pending,(function(){return!0})),Object(et.a)(U,N.fulfilled,(function(){return!1})),Object(et.a)(U,N.rejected,(function(){return!1})),Object(et.a)(U,L.pending,(function(){return!0})),Object(et.a)(U,L.fulfilled,(function(){return!1})),Object(et.a)(U,L.rejected,(function(){return!1})),U)),at=Object(h.d)(null,(X={},Object(et.a)(X,N.rejected,(function(t,e){return e.payload})),Object(et.a)(X,N.pending,(function(){return null})),Object(et.a)(X,L.rejected,(function(t,e){return e.payload})),Object(et.a)(X,L.pending,(function(){return null})),Object(et.a)(X,k.rejected,(function(t,e){return e.payload})),Object(et.a)(X,k.pending,(function(){return null})),X)),ot=Object(h.d)("",Object(et.a)({},J,(function(t,e){return e.payload}))),st=Object(nt.b)({items:rt,filter:ot,isLoading:ct,error:at}),it=n(37),ut=n.n(it),lt=Object(h.a)({reducer:{contacts:st},middleware:function(t){return[].concat(Object(tt.a)(t()),[ut.a])},devTools:!1});o.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(s.a,{store:lt,children:Object(V.jsx)(K,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.3acdad1d.chunk.js.map