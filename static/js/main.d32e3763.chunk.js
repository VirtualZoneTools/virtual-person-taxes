(this.webpackJsonptaxes=this.webpackJsonptaxes||[]).push([[0],{193:function(e,n,t){e.exports=t(537)},198:function(e,n,t){},517:function(e,n){},537:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(183),o=t.n(c),i=(t(198),t(189)),l=t(110),m=t(548),u=t(552),s=t(550),d=t(547),p=t(111),f=t(20),g=t(19),b=t(546),E=t(549),x=t(190),v=t(551),h=t(107),y=t.n(h),N=function(e){var n=e.field,t=e.form,a=t.touched,c=t.errors,o=Object(x.a)(e,["field","form"]);return r.a.createElement("div",{className:"Input-wrapper"},r.a.createElement(v.a,Object.assign({marginBottom:"15px",type:"text"},n,o,{validationMessage:y()(a,n.name)&&y()(c,n.name)})))};function S(){return{fullName:localStorage.getItem("fullName")||"",address:localStorage.getItem("address")||"",personalNumber:localStorage.getItem("personalNumber")||""}}var j=Object(p.a)(Object(p.a)({},S()),{},{transactions:[{date:"",amount:void 0}]}),k=function(){return"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8"},q=function(e){return"".concat(e," \u10eb\u10d0\u10da\u10d8\u10d0\u10dc \u10db\u10dd\u10d9\u10da\u10d4\u10d0")},B=function(e){return"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8 ".concat(e)},I=g.object().shape({fullName:g.string().min(2,q("\u10e1\u10d0\u10ee\u10d4\u10da\u10d8")).required(k()),address:g.string().min(2,q("\u10db\u10d8\u10e1\u10d0\u10db\u10d0\u10e0\u10d7\u10d8")).required(k()),personalNumber:g.string().length(11,B("\u10de\u10d8\u10e0\u10d0\u10d3\u10d8 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8")).required(k()),transactions:g.array().of(g.object().shape({date:g.string().min(10,"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10d8\u10e7\u10dd\u10e1 DD/MM/YYYY \u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10e8\u10d8").required(k()),amount:g.number().required(k())}))}),C=function(e){var n=e.onSubmit;return r.a.createElement(f.d,{initialValues:j,onSubmit:function(e,t){!function(e){var n=e.fullName,t=e.address,a=e.personalNumber;S().fullName||(localStorage.setItem("fullName",n),localStorage.setItem("address",t),localStorage.setItem("personalNumber",a))}(e),n(e),t.setSubmitting(!1)},validationSchema:I,render:function(e){var n=e.status,t=e.isSubmitting,a=e.isValid,c=e.values;return r.a.createElement(f.c,null,r.a.createElement(f.a,{type:"text",name:"fullName",label:"\u10e1\u10e0\u10e3\u10da\u10d8 \u10e1\u10d0\u10ee\u10d4\u10da\u10d8",component:N,placeholder:"\u10db\u10d0\u10d2. \u10d2\u10d8\u10dd\u10e0\u10d2\u10d8 \u10db\u10d0\u10d8\u10e1\u10e3\u10e0\u10d0\u10eb\u10d4",required:!0}),r.a.createElement(f.a,{type:"text",name:"address",label:"\u10db\u10d8\u10e1\u10d0\u10db\u10d0\u10e0\u10d7\u10d8",component:N,placeholder:"\u10db\u10d0\u10d2. \u10e0\u10e3\u10e1\u10d7\u10d0\u10d5\u10d4\u10da\u10d8\u10e1 \u10d2\u10d0\u10db\u10d6. 26",required:!0}),r.a.createElement(f.a,{type:"text",name:"personalNumber",label:"\u10de\u10d8\u10e0\u10d0\u10d3\u10d8 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8",component:N,placeholder:"\u10db\u10d0\u10d2. 01101899998",required:!0}),r.a.createElement(f.b,{name:"transactions",render:function(e){return r.a.createElement(l.a,null,r.a.createElement(d.a,{size:400,marginBottom:"15px"},"\u10e2\u10e0\u10d0\u10dc\u10d6\u10d0\u10e5\u10ea\u10d8\u10d4\u10d1\u10d8"),c.transactions&&c.transactions.length>0&&c.transactions.map((function(n,t){return r.a.createElement(m.a,{key:t,elevation:0,backgroundColor:"white",padding:"15px",marginBottom:"15px"},r.a.createElement(d.a,{size:300,marginBottom:"15px"},"\u10e2\u10e0\u10d0\u10dc\u10d6\u10d0\u10e5\u10ea\u10d8\u10d0 #",t+1),r.a.createElement(f.a,{type:"string",name:"transactions.".concat(t,".date"),label:"\u10d7\u10d0\u10e0\u10d8\u10e6\u10d8",component:N,placeholder:"\u10db\u10d0\u10d2. 02/03/2019",required:!0}),r.a.createElement(f.a,{type:"number",name:"transactions.".concat(t,".amount"),label:"\u10d3\u10d8\u10d5\u10d8\u10d3\u10d4\u10dc\u10d3\u10d8\u10e1 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0",component:N,placeholder:"\u10db\u10d0\u10d2. 10000",required:!0}),r.a.createElement(l.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(u.a,{type:"button",appearance:"minimal",intent:"danger",iconBefore:"remove",disabled:1===c.transactions.length,onClick:function(){return e.remove(t)}},"\u10e2\u10e0\u10d0\u10dc\u10d6\u10d0\u10e5\u10ea\u10d8\u10d8\u10e1 \u10ec\u10d0\u10e8\u10da\u10d0")))})),n&&n.msg&&r.a.createElement(b.a,null,n.msg),r.a.createElement(l.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},r.a.createElement(u.a,{type:"button",appearance:"minimal",intent:"success",iconBefore:"add",onClick:function(){return e.push("")}},"\u10e2\u10e0\u10d0\u10dc\u10d6\u10d0\u10e5\u10ea\u10d8\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0"),r.a.createElement(u.a,{iconBefore:E.a,appearance:"primary",height:40,marginTop:"15px",type:"submit",disabled:t||!a},"\u10d8\u10dc\u10e1\u10e2\u10e0\u10e3\u10e5\u10ea\u10d8\u10d4\u10d1\u10d8\u10e1 \u10d3\u10d0\u10d2\u10d4\u10dc\u10d4\u10e0\u10d8\u10e0\u10d4\u10d1\u10d0")))}}))}})},w=t(188),O=t.n(w),D=function(e){var n=e.md;return r.a.createElement(O.a,{source:n,escapeHtml:!1,skipHtml:!1})},Y=function(e){return e/95*5},_=function(e){return'<input value="'.concat(e,'"/>')},z=function(e){var n=e.fullName,t=e.address,a=e.personalNumber,r=e.transactions,c=r.reduce((function(e,n){return e+n.amount}),0),o=c+Y(c),i=r.map((function(e){var n=e.amount,t=e.date;return"\n1. ".concat(t," - ").concat(n+Y(n)," \u10da\u10d0\u10e0\u10d8\u10d3\u10d0\u10dc, ").concat(n," \u10d0\u10e0\u10d8\u10e1 \u10d3\u10d8\u10d5\u10d8\u10d3\u10d4\u10dc\u10d3\u10d8, \u10ee\u10dd\u10da\u10dd ").concat(Y(n)," \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8.\n").trim()})).join("\n"),l=r.map((function(e){var r=e.amount,c=e.date;return"\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d2\u10d0\u10dc\u10d0\u10ea\u10d4\u10db\u10d8\u10e1 \u10db\u10d8\u10db\u10e6\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d0\u10d8\u10d3\u10d4\u10dc\u10e2. \u10dc\u10dd\u10db\u10d4\u10e0\u10d8** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 ".concat(_(a),"\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10e1\u10d0\u10ee\u10d4\u10da\u10d8** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 ").concat(_(n.split(" ")[0]),"\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d2\u10d5\u10d0\u10e0\u10d8** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 ").concat(_(n.split(" ")[1]),"\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10db\u10d8\u10e1\u10d0\u10db\u10d0\u10e0\u10d7\u10d8** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(t),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10de\u10d8\u10e0\u10d8\u10e1 \u10e0\u10d4\u10d6\u10d8\u10d3\u10d4\u10dc\u10e2\u10dd\u10d1\u10d0 (\u10e5\u10d5\u10d4\u10e7\u10d0\u10dc\u10d0)** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_("\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd"),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10e8\u10d4\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d8\u10e1 \u10db\u10d8\u10db\u10e6\u10d4\u10d1 \u10de\u10d8\u10e0\u10d7\u10d0 \u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d0** \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 **").concat(_(1.4),": \u10e1\u10ee\u10d5\u10d0 \u10e4\u10d8\u10d6\u10d8\u10d9\u10e3\u10e0\u10d8 \u10de\u10d8\u10e0\u10d4\u10d1\u10d8**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d2\u10d0\u10dc\u10d0\u10ea\u10d4\u10db\u10d8\u10e1 \u10e1\u10d0\u10ee\u10d4** \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 **").concat(_("\u10d3\u10d8\u10d5\u10d8\u10d3\u10d4\u10dc\u10d3\u10d8"),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d2\u10d0\u10dc\u10d0\u10ea\u10d4\u10db\u10d8\u10e1 \u10d7\u10d0\u10dc\u10ee\u10d0(\u10da\u10d0\u10e0\u10d8)** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(r+Y(r)),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10e8\u10d4\u10e6\u10d0\u10d5\u10d0\u10d7\u10d8\u10e1 \u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(0),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d2\u10d0\u10ea\u10d4\u10db\u10d8\u10e1 \u10d7\u10d0\u10e0\u10d8\u10e6\u10d8** \u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4 \u10d7\u10d0\u10e0\u10d8\u10e6\u10d8 **").concat(_(c),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10ec\u10e7\u10d0\u10e0\u10dd\u10e1\u10d7\u10d0\u10dc \u10d3\u10d0\u10e1\u10d0\u10d9\u10d0\u10d5\u10d4\u10d1\u10d4\u10da\u10d8 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8\u10e1 \u10d2\u10d0\u10dc\u10d0\u10d9\u10d5\u10d4\u10d7\u10d8** \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 **").concat(_(5),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d3\u10d0\u10d9\u10d0\u10d5\u10d4\u10d1\u10e3\u10da\u10d8 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8 (\u10da\u10d0\u10e0\u10d8)** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(Y(r)),"**\n1. \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10e6\u10d8\u10da\u10d0\u10e1\u10d9\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0, \u10d8\u10d9\u10dd\u10dc\u10d8\u10d7 **+**\n").trim()})).join("\n");return"\n# \u10db\u10d8\u10db\u10dd\u10ee\u10d8\u10da\u10d5\u10d0\n\u10e2\u10e0\u10d0\u10dc\u10d6\u10d0\u10e5\u10ea\u10d8\u10d4\u10d1\u10d8 \u10e0\u10dd\u10db\u10da\u10d8\u10e1 \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d8\u10e0\u10d4\u10d1\u10d0\u10e1\u10d0\u10ea \u10d5\u10d0\u10ee\u10d3\u10d4\u10dc\u10d7:\n\n".concat(i,"\n\n# \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d8\u10e1 \u10e8\u10d4\u10d5\u10e1\u10d4\u10d1\u10d0\n1. \u10d2\u10d0\u10d3\u10d0\u10d3\u10d8 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 eservices.rs.ge \u10d3\u10d0 \u10d2\u10d0\u10d8\u10d0\u10e0\u10d4 \u10d0\u10d5\u10e2\u10dd\u10e0\u10d8\u10d6\u10d4\u10d1\u10d0\u10e1\n1. \u10d2\u10d0\u10d3\u10d0\u10d3\u10d8 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 __\u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d4\u10d1\u10d8__\n\n## \u10db\u10dd\u10d2\u10d4\u10d1\u10d0\n1. \u10d2\u10d0\u10d3\u10d0\u10d3\u10d8 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 **\u10e7\u10dd\u10d5\u10d4\u10da\u10d7\u10d5\u10d8\u10e3\u10e0\u10d8 > \u10db\u10dd\u10d2\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8**\n1. \u10d3\u10d0\u10d9\u10da\u10d8\u10d9\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10d6\u10d4 **\u10d0\u10ee\u10d0\u10da\u10d8 \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d0**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d4\u10d9\u10dd\u10dc\u10dd\u10db\u10d8\u10d9\u10e3\u10e0\u10d8 \u10e1\u10d0\u10e5\u10db\u10d8\u10d0\u10dc\u10dd\u10d1\u10d8\u10e1 (NACE) \u10d9\u10dd\u10d3\u10d8 \u10e1\u10e0\u10e3\u10da\u10d0\u10d3** \u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4 **").concat(_(62020)," (\u10e1\u10d0\u10d9\u10dd\u10dc\u10e1\u10e3\u10da\u10e2\u10d0\u10ea\u10d8\u10dd \u10e1\u10d0\u10e5\u10db\u10d8\u10d0\u10dc\u10dd\u10d1\u10d4\u10d1\u10d8 \u10d9\u10dd\u10db\u10de\u10d8\u10e3\u10e2\u10d4\u10e0\u10e3\u10da\u10d8 \u10e2\u10d4\u10e5\u10dc\u10dd\u10da\u10dd\u10d2\u10d8\u10d4\u10d1\u10d8\u10e1 \u10d3\u10d0\u10e0\u10d2\u10e8\u10d8)** (\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10e1 \u10d0\u10d9\u10e0\u10d4\u10e4\u10d0 \u10e1\u10d0\u10d9\u10db\u10d0\u10e0\u10d8\u10e1\u10d8\u10d0)\n1. **\u10e0\u10d4\u10d6\u10d8\u10d3\u10d4\u10dc\u10e2\u10d8 \u10e1\u10d0\u10ec\u10d0\u10e0\u10db\u10dd** \u10db\u10dd\u10dc\u10d8\u10e8\u10e3\u10da\u10d8 \u10d3\u10d0\u10e2\u10dd\u10d5\u10d4\n1. \u10d3\u10d0\u10d0\u10d9\u10da\u10d8\u10d9\u10d4 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10e1 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1, \u10d8\u10d9\u10dd\u10dc\u10d8\u10d7 **+**\n1. \u10d6\u10d4\u10db\u10dd\u10d7 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 **2** \u10e0\u10d0\u10d7\u10d0 \u10d2\u10d0\u10d3\u10d0\u10ee\u10d5\u10d8\u10d3\u10d4 \u10db\u10d4\u10dd\u10e0\u10d4 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **16.1 \u10d2\u10d0\u10dc\u10d0\u10ec\u10d8\u10da\u10d4\u10d1\u10e3\u10da\u10d8 \u10d3\u10d8\u10d5\u10d8\u10d3\u10d4\u10dc\u10d3\u10d8, \u10db\u10d0\u10d7 \u10e8\u10dd\u10e0\u10d8\u10e1** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(o),"**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **22. \u10db\u10dd\u10d2\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8\u10e1\u10d2\u10d0\u10dc \u10d2\u10d0\u10d7\u10d0\u10d5\u10d8\u10e1\u10e3\u10e4\u10da\u10d4\u10d1\u10e3\u10da\u10d8 \u10db\u10dd\u10d2\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10dc\u10d0\u10ec\u10d8\u10da\u10d4\u10d1\u10d0, \u10d2\u10d0\u10ec\u10d4\u10e3\u10da\u10d8 \u10ee\u10d0\u10e0\u10ef\u10d8, \u10d2\u10d0\u10dc\u10ee\u10dd\u10e0\u10ea\u10d8\u10d4\u10da\u10d4\u10d1\u10e3\u10da\u10d8 \u10d2\u10d0\u10dc\u10d0\u10ea\u10d4\u10db\u10d8** \u10e9\u10d0\u10ec\u10d4\u10e0\u10d4 **").concat(_(o),"**\n1. \u10d3\u10d0\u10e1\u10e5\u10e0\u10dd\u10da\u10d4 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d8\u10e1 \u10d1\u10dd\u10da\u10dd\u10e8 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 **\u10e8\u10d4\u10dc\u10d0\u10ee\u10d5\u10d0**\n1. \u10d0\u10e1\u10e5\u10e0\u10dd\u10da\u10d4 \u10e1\u10e3\u10da \u10d6\u10d4\u10db\u10dd\u10d7 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10d2\u10d0\u10d7\u10d8\u10e8\u10d5\u10d8\u10e1 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 \u10d8\u10d9\u10dd\u10dc\u10d8\u10d7 **x**\n\n##  \u10d2\u10d0\u10dc\u10d0\u10ea\u10d4\u10db\u10d7\u10d0 \u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10d0\n*\u10d0\u10e6\u10d0\u10e0 \u10d8\u10d5\u10e1\u10d4\u10d1\u10d0 *01/01/2020*-\u10d3\u10d0\u10dc.*\n\n## \u10e1\u10d0\u10e8\u10d4\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10dd\n1. \u10d2\u10d0\u10d3\u10d0\u10d5\u10d3\u10d8\u10d5\u10d0\u10e0\u10d7 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 **\u10e7\u10dd\u10d5\u10d4\u10da\u10d7\u10d5\u10d8\u10e3\u10e0\u10d8 > \u10e1\u10d0\u10e8\u10d4\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10dd (\u10d2\u10d0\u10d3\u10d0\u10ee\u10d3\u10d8\u10e1 \u10ec\u10e7\u10d0\u10e0\u10dd\u10e1\u10d7\u10d0\u10dc \u10d3\u10d0\u10d9\u10d0\u10d5\u10d4\u10d1\u10e3\u10da\u10d8 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10ee\u10d0\u10d3\u10d8)**\n1. \u10d3\u10d0\u10d9\u10da\u10d8\u10d9\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10d6\u10d4 **\u10d0\u10ee\u10d0\u10da\u10d8 \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d0**\n1. **\u10d2\u10d0\u10d3\u10d0\u10db\u10ee\u10d3\u10d4\u10da\u10d8\u10e1 \u10e2\u10d8\u10de\u10d8** \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 **\u10e1\u10ee\u10d5\u10d0**\n1. \u10d5\u10d4\u10da\u10e8\u10d8 **\u10d4\u10d9\u10dd\u10dc\u10dd\u10db\u10d8\u10d9\u10e3\u10e0\u10d8 \u10e1\u10d0\u10e5\u10db\u10d8\u10d0\u10dc\u10dd\u10d1\u10d8\u10e1 (NACE) \u10d9\u10dd\u10d3\u10d8 \u10e1\u10e0\u10e3\u10da\u10d0\u10d3** \u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4 **").concat(_(62020)," (\u10e1\u10d0\u10d9\u10dd\u10dc\u10e1\u10e3\u10da\u10e2\u10d0\u10ea\u10d8\u10dd \u10e1\u10d0\u10e5\u10db\u10d8\u10d0\u10dc\u10dd\u10d1\u10d4\u10d1\u10d8 \u10d9\u10dd\u10db\u10de\u10d8\u10e3\u10e2\u10d4\u10e0\u10e3\u10da\u10d8 \u10e2\u10d4\u10e5\u10dc\u10dd\u10da\u10dd\u10d2\u10d8\u10d4\u10d1\u10d8\u10e1 \u10d3\u10d0\u10e0\u10d2\u10e8\u10d8)** (\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10e1 \u10d0\u10d9\u10e0\u10d4\u10e4\u10d0 \u10e1\u10d0\u10d9\u10db\u10d0\u10e0\u10d8\u10e1\u10d8\u10d0)\n1. \u10d3\u10d0\u10d0\u10d9\u10da\u10d8\u10d9\u10d4 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10e1 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1, \u10d8\u10d9\u10dd\u10dc\u10d8\u10d7 **+**\n1. \u10d6\u10d4\u10db\u10dd\u10d7 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 **2** \u10e0\u10d0\u10d7\u10d0 \u10d2\u10d0\u10d3\u10d0\u10ee\u10d5\u10d8\u10d3\u10d4 \u10db\u10d4\u10dd\u10e0\u10d4 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4\n").concat(l,"\n1. \u10d3\u10d0\u10e1\u10e5\u10e0\u10dd\u10da\u10d4 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d8\u10e1 \u10d1\u10dd\u10da\u10dd\u10e8\u10d8 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 **\u10e8\u10d4\u10dc\u10d0\u10ee\u10d5\u10d0**\n1. \u10d0\u10e1\u10e5\u10e0\u10dd\u10da\u10d4 \u10e1\u10e3\u10da \u10d6\u10d4\u10db\u10dd\u10d7 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4 \u10d2\u10d0\u10d7\u10d8\u10e8\u10d5\u10d8\u10e1 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 \u10d8\u10d9\u10dd\u10dc\u10d8\u10d7 **x**\n\n# \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d4\u10d1\u10d8\u10e1 \u10ec\u10d0\u10e0\u10d3\u10d2\u10d4\u10dc\u10d0\n1. \u10d2\u10d0\u10d3\u10d0\u10d5\u10d3\u10d8\u10d5\u10d0\u10e0 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 **\u10e1\u10e2\u10d0\u10e2\u10d8\u10e1\u10e2\u10d8\u10d9\u10d0 > \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10d2\u10d6\u10d0\u10d5\u10dc\u10d8 \u10d3\u10d4\u10d9\u10da\u10d0\u10e0\u10d0\u10ea\u10d8\u10d4\u10d1\u10d8**\n1. \u10e8\u10d4\u10d3\u10d8\u10ee\u10d0\u10e0 \u10e7\u10d5\u10d4\u10da\u10d0 \u10d3\u10d4\u10da\u10d9\u10d0\u10e0\u10d0\u10ea\u10d8\u10d0\u10e8\u10d8\n1. \u10d0\u10d9\u10da\u10d8\u10d9\u10d0\u10d5 **\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10e1** \u10db\u10d0\u10dc\u10d0\u10db \u10e1\u10d0\u10dc\u10d0\u10db \u10d0\u10e0 \u10d2\u10d0\u10db\u10dd\u10e9\u10dc\u10d3\u10d4\u10d1\u10d0 \u10e6\u10d8\u10da\u10d0\u10d9\u10d8 **\u10d2\u10d0\u10d3\u10d0\u10d2\u10d6\u10d0\u10d5\u10dc\u10d0**\n1. \u10d0\u10d9\u10da\u10d8\u10d9\u10d0\u10d5 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 **\u10d2\u10d0\u10d3\u10d0\u10d2\u10d6\u10d0\u10d5\u10dc\u10d0**")};var H=function(){var e=Object(a.useState)(),n=Object(i.a)(e,2),t=n[0],c=n[1];return r.a.createElement(l.a,{background:"tint2",minHeight:"100vh",padding:"30px"},t?r.a.createElement(m.a,{elevation:2,marginX:"auto",maxWidth:"960px",padding:"15px",background:"white"},r.a.createElement(u.a,{iconBefore:s.a,appearance:"minimal",onClick:function(){return c(null)}},"\u10e4\u10dd\u10e0\u10db\u10d8\u10e1 \u10e9\u10d0\u10e1\u10ec\u10dd\u10e0\u10d4\u10d1\u10d0"),r.a.createElement(D,{md:t})):r.a.createElement(l.a,{display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(d.a,{size:400,marginBottom:"15px"},"\u10d8\u10dc\u10e1\u10e2\u10e0\u10e3\u10e5\u10ea\u10d8\u10d8\u10e1 \u10db\u10d8\u10e1\u10d0\u10e6\u10d4\u10d1\u10d0\u10d3 \u10e8\u10d4\u10d0\u10d5\u10e1\u10d4\u10d7 \u10e4\u10dd\u10e0\u10db\u10d0"),r.a.createElement(m.a,{elevation:2,background:"tint1",padding:"15px",overflow:"auto",minWidth:"360px",maxWidth:"600px"},r.a.createElement(C,{onSubmit:function(e){return c(z(e))}}))))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.d32e3763.chunk.js.map