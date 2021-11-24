(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{36:function(e,t,a){e.exports=a(70)},41:function(e,t,a){},51:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(41),a(18)),o=a.n(s),i=a(33),u=a(22),m=a(16),d=a(8),p=a(9),b=a(11),E=a(10),f=a(3),h=a(1),v=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{class:"balance"},"Balance: ",this.props.accountBalance))}}]),a}(n.Component),g=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"Home"},r.a.createElement("img",{class:"App-logo",src:"https://cdn.iconscout.com/icon/free/png-256/bank-1417507-1201209.png",alt:"bank"}),r.a.createElement("h1",null,"Bank of React"),r.a.createElement("h2",{class:"Home-links"},r.a.createElement("div",null,r.a.createElement(f.b,{to:"/logIn"},"Change User")),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/userProfile"},"User Profile")),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/debits"},"Debits")),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/credits"},"Credits"))),r.a.createElement(v,{accountBalance:this.props.accountBalance}))}}]),a}(n.Component),O=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=Object(m.a)({},e.state.user),n=t.target.name,r=t.target.value;a[n]=r,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(p.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/userProfile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"field"},r.a.createElement("label",{htmlFor:"userName"},"User Name "),r.a.createElement("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})),r.a.createElement("div",{class:"field"},r.a.createElement("label",{htmlFor:"password"},"Password "),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("button",{class:"field"},"Log In")))}}]),a}(n.Component),j=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"User Profile"),r.a.createElement("div",null,"Username: ",this.props.userName),r.a.createElement("div",null,"Member Since: ",this.props.memberSince))}}]),a}(n.Component),k=function(e){return r.a.createElement("div",{class:"credits-debits"},r.a.createElement("h1",null,"Credits"),r.a.createElement("ul",null,e.credits.map((function(e){var t=e.date.slice(0,10);return r.a.createElement("li",{key:e.id},e.amount," ",e.description," ",t)}))),r.a.createElement("form",{onSubmit:e.addCredit,class:"field"},r.a.createElement("input",{type:"text",name:"description",placeholder:"enter description"}),r.a.createElement("input",{type:"text",name:"amount",placeholder:"enter value"}),r.a.createElement("button",{type:"submit"},"Add Credit")))},S=function(e){return r.a.createElement("div",{class:"credits-debits"},r.a.createElement("h1",null,"Debits"),r.a.createElement("ul",null,e.debits.map((function(e){var t=e.date.slice(0,10);return r.a.createElement("li",{key:e.id},e.amount," ",e.description," ",t)}))),r.a.createElement("form",{onSubmit:e.addDebit,class:"field"},r.a.createElement("input",{type:"text",name:"description",placeholder:"enter description"}),r.a.createElement("input",{type:"text",name:"amount",placeholder:"enter value"}),r.a.createElement("button",{type:"submit"},"Add Debit")))},N=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"App-header"},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-256/bank-1417507-1201209.png",alt:"bank"}),r.a.createElement(f.b,{to:"/"},"Home "),r.a.createElement(f.b,{to:"/userProfile"},"User Profile "),r.a.createElement(f.b,{to:"/debits"},"Debits "),r.a.createElement(f.b,{to:"/credits"},"Credits "))}}]),a}(n.Component),B=(a(51),a(20)),y=a.n(B),C=a(21),x=a.n(C),D=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).mockLogIn=function(e){var t=Object(m.a)({},n.state.currentUser);t.userName=e.userName,n.setState({currentUser:t})},n.addCredit=function(e){e.preventDefault();var t=e.target[0].value,a=parseFloat(e.target[1].value);if(isNaN(a))console.log("bad input");else{var r=x()(),c=new Date;c=c.toISOString().split("T")[0];var l={id:r,amount:a,date:c,description:t};n.setState((function(e,t){return{credits:[].concat(Object(u.a)(e.credits),[l]),accountBalance:Math.round(100*(n.state.accountBalance+a+Number.EPSILON))/100}}))}},n.addDebit=function(e){e.preventDefault();var t=e.target[0].value,a=parseFloat(e.target[1].value);if(isNaN(a))console.log("bad input");else{var r=x()(),c=new Date;c=c.toISOString().split("T")[0];var l={id:r,amount:a,date:c,description:t};n.setState((function(e,t){return{debits:[].concat(Object(u.a)(e.debits),[l]),accountBalance:Math.round(100*(n.state.accountBalance-a+Number.EPSILON))/100}}))}},n.componentDidMount=Object(i.a)(o.a.mark((function e(){var t,a,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/debits",t="https://moj-api.herokuapp.com/credits",e.prev=2,e.next=5,y.a.get("https://moj-api.herokuapp.com/debits");case 5:a=e.sent,r=0,a.data.forEach((function(e){r+=e.amount})),n.setState({accountBalance:Math.round(100*(n.state.accountBalance-r+Number.EPSILON))/100,debits:a.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response&&(console.log(e.t0.response.data),console.log(e.t0.response.status));case 14:return e.prev=14,e.next=17,y.a.get(t);case 17:c=e.sent,l=0,c.data.forEach((function(e){l+=e.amount})),n.setState({accountBalance:Math.round(100*(n.state.accountBalance+l+Number.EPSILON))/100,credits:c.data}),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),e.t1.response&&(console.log(e.t1.response.data),console.log(e.t1.response.status));case 26:case"end":return e.stop()}}),e,null,[[2,11],[14,23]])}))),n.state={accountBalance:0,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"},debits:[],credits:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{accountBalance:e.state.accountBalance})}}),r.a.createElement(h.b,{exact:!0,path:"/userProfile",render:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(j,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince}))}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(O,{user:e.state.currentUser,mockLogIn:e.mockLogIn}))}}),r.a.createElement(h.b,{exact:!0,path:"/debits",render:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(S,{addDebit:e.addDebit,debits:e.state.debits}),r.a.createElement(v,{accountBalance:e.state.accountBalance}))}}),r.a.createElement(h.b,{exact:!0,path:"/credits",render:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(k,{addCredit:e.addCredit,credits:e.state.credits}),r.a.createElement(v,{accountBalance:e.state.accountBalance}))}})))}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.c652c4cf.chunk.js.map