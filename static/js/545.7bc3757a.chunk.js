"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[545],{3545:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,o,s,c=t(4270),u=t(168),d=t(6444),l=d.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: justify;\n  row-gap: 15px;\n  min-height: 100vh;\n  padding: 20px;\n  color: #010101;\n"]))),x=t(9439),p=t(2791),h=t(5218),f=d.ZP.form(a||(a=(0,u.Z)(["\nborder: 1px solid black;  \ndisplay: block;\npadding: 10px;\ndisplay:flex;\nflex-direction: column;\ngap:20px;\nwidth: 320px;\nmargin-bottom: 20px;\n"]))),m=d.ZP.button(i||(i=(0,u.Z)(["\npadding: 5px;\n  text-align: center;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 5px;\n  border: none;\n  &:hover,\n  &:focus {\n    background-color:  #f27e30;\n"]))),b=function(n){return n.contacts.contacts.filter((function(e){return e.name.toLowerCase().includes(n.contacts.query)}))},g=function(n){return n.contacts.contacts},v=function(n){return n.contacts.isLoading},j=t(9434),Z=t(7908),y=t(3329),w=t(6429),k=w.generate(),C=w.generate(),P=w.generate();function A(){var n=(0,p.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),i=(0,x.Z)(a,2),o=i[0],s=i[1],c=(0,j.I0)(),u=(0,j.v9)(g),d=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}},l=function(){r(""),s("")};return(0,y.jsxs)(f,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e={id:w.generate(),name:t,number:o},r=e.name.toLowerCase(),a=u.find((function(n){return n.name.toLowerCase()===r}));a?h.ZP.success("".concat(e.name," is already in contacts")):c((0,Z.el)(e)),l()},children:[(0,y.jsx)("label",{htmlFor:k,children:"Name"}),(0,y.jsx)("input",{type:"text",name:"name",value:t,onChange:d,id:k,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)("label",{htmlFor:C,children:"Number"}),(0,y.jsx)("input",{type:"tel",name:"number",value:o,onChange:d,id:C,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,y.jsx)(m,{type:"submi",id:P,children:"Add contact"}),(0,y.jsx)(h.x7,{})]})}var _,q,F=d.ZP.li(o||(o=(0,u.Z)(["\n  margin: 5px;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n"]))),z=d.ZP.button(s||(s=(0,u.Z)(["\n  width: 60px;\n  height: 30px;\n  text-align: center;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 5px;\n  border: none;\n  &:hover,\n  &:focus {\n    background-color:  #f27e30;\n  }\n"]))),I=function(){var n=(0,j.v9)(b),e=(0,j.I0)();return(0,y.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,y.jsxs)(F,{children:[(0,y.jsxs)("p",{children:[r,": ",a," "]}),(0,y.jsx)(z,{onClick:function(){return e((0,Z._f)(t))},children:"delete"})]},t)}))})},L=d.ZP.label(_||(_=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: justify;\n  gap: 10px;\n"]))),N=d.ZP.input(q||(q=(0,u.Z)(["\nwidth: 160px;\n"]))),S=t(7104),R=function(){var n=(0,j.I0)();return(0,y.jsxs)(L,{htmlFor:"",children:["Find contacts by name",(0,y.jsx)(N,{type:"text",onChange:function(e){return t=e.target.value,void n((0,S._)(t));var t}})]})},B=function(){var n=(0,j.I0)(),e=(0,j.v9)(v);return(0,p.useEffect)((function(){n((0,Z.Rh)())}),[n]),(0,y.jsxs)(l,{children:[(0,y.jsx)(c.q,{children:(0,y.jsx)("title",{children:"Phonebook"})}),(0,y.jsx)(A,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(R,{}),(0,y.jsx)("div",{children:e&&"Request in progress..."}),(0,y.jsx)(I,{})]})}}}]);
//# sourceMappingURL=545.7bc3757a.chunk.js.map