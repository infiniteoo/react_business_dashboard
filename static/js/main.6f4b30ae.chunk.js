(this.webpackJsonpreact_business_dashboard=this.webpackJsonpreact_business_dashboard||[]).push([[0],{41:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(13),o=n.n(c),i=(n(41),n(14)),l=n(5);function s(){return Object(l.jsx)("h1",{children:" Business Corp "})}var d,b,u,h=n(11),j=n(12),p=j.b.div(d||(d=Object(h.a)(["\n  position: relative;\n  max-width: 1200px;\n  margin: auto;\n\n  @media (max-width: 1200px) {\n    margin: 40px 20px;\n    font-size: 12px;\n  }\n"]))),x="#f7f7f7",O="#dad9d9",f="#1DDA65",g="#353131",m=Object(j.a)(b||(b=Object(h.a)(["\n\nbody {\n    h1 {\n        ",";\n    }\n    color: ",";\n    background-color: ",";\n    font-family: 'Blinker', sans-serif;\n}\n\n"])),(function(e){return e.dark&&"color: ".concat(f,";")}),"#515263",(function(e){return e.dark?"#252020":x})),k=j.b.div(u||(u=Object(h.a)(["\nmargin-top: 20px;\npadding: 20px;\nbackground-color: ",";\nbox-shadow: 0px 3px 5px ",";\nbox-sizing: border-box;\n","\n\n@media (max-width: 1200px) {\n    padding: 10px;\n}\n\n"])),(function(e){return e.dark?g:"white"}),(function(e){return e.dark?"black":O}),(function(e){var t=e.height;return t&&"height: ".concat(t,"px;")})),v=n(21),y=n.n(v),w=n(29),C=n.n(w);function S(e,t,n){for(var r=[],a=0;a<e;a++)r.push(Math.floor(t+Math.random()*a*n));return r}var D=[{name:"Phones",data:S(12,30,5),color:"#149947"},{name:"Services",data:S(12,10,.2),color:"#1DDA65"},{name:"Laptops",data:S(12,6,.3),color:"#5CF396"},{name:"Tablets",data:S(12,5,.5),color:"#C1FAD7"}];function A(e){return"$".concat(e," Billion")}var F=["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){return{month:e,phones:A(D[0].data[t]),services:A(D[1].data[t]),laptops:A(D[2].data[t]),tablets:A(D[3].data[t])}})),M=[{width:240,label:"Month",dataKey:"month"},{width:240,label:"Phones",dataKey:"phones",numeric:!0},{width:240,label:"Services",dataKey:"services",numeric:!0},{width:240,label:"Laptops",dataKey:"laptops",numeric:!0},{width:240,label:"Tablets",dataKey:"tablets",numeric:!0}];function B(e){return{chart:{height:"360px",type:"column",backgroundColor:e?g:"white",style:{fontFamily:"'Blinker', sans-serif"}},title:{text:"Revenue by Product",style:{color:e?x:"black"}},xAxis:{labels:{style:{color:e?x:"black"}},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yAxis:{gridLineColor:e?"grey":x,labels:{style:{color:e?x:"black"}},min:0,reversedStacks:!1,title:{style:{color:e?x:"black",fontSize:"14px"},text:"Billions of Dollars"}},tooptip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage.0f}%)<br/>',shared:!0,style:{backgroundColor:e?g:"white",color:e?x:"black"}},plotOptions:{series:{borderWidth:0},column:{stacking:"normal"}},legend:{itemStyle:{color:e?x:"black"}},series:D}}function J(){var e=Object(r.useContext)(X),t=Object(i.a)(e,2),n=t[0],a=(t[1],"dark"===n);return Object(l.jsx)(k,{height:400,dark:a,children:Object(l.jsx)(C.a,{highcharts:y.a,options:B(a)})})}var K,R,P,I,L=n(19),z=n(35),T=n(30),_=n(31),H=n(36),N=n(34),E=(n(45),n(18)),G=j.b.div(K||(K=Object(h.a)(["\n  display: flex;\n  color: ",";\n  ",";\n"])),(function(e){var t=e.header;return e.dark?t?f:"white":"black"}),(function(e){return"right"===e.align&&"flex-direction: row-reverse"})),W=function(e){Object(H.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).cellRenderer=function(t){var n=t.cellData,r=t.columnIndex,a=e.props,c=a.columns,o=a.dark;return Object(l.jsx)(G,{dark:o,align:c[r].numeric?"right":"left",children:n})},e.headerRenderer=function(t){var n=t.label,r=t.columnIndex,a=e.props,c=a.columns,o=a.dark;return Object(l.jsx)(G,{dark:o,header:!0,align:c[r].numeric?"right":"left",children:Object(l.jsx)("span",{children:n})})},e}return Object(_.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,r=t.dark;return Object(l.jsx)(E.a,{children:function(t){var a=t.height,c=t.width;return Object(l.jsx)(E.c,{height:a,width:c,rowHeight:48,headerHeight:48,rowCount:F.length,rowGetter:function(e){var t=e.index;return F[t]},rowStyle:{borderBottom:"1px solid ".concat(r?"grey":O),boxSizing:"border-box"},gridStyle:{outline:0},children:n.map((function(t,n){var r=t.dataKey,a=Object(z.a)(t,["dataKey"]);return Object(l.jsx)(E.b,Object(L.a)({dataKey:r,headerRenderer:function(t){return e.headerRenderer(Object(L.a)(Object(L.a)({},t),{},{columnIndex:n}))},cellRenderer:e.cellRenderer},a),r)}))})}})}}]),n}(a.a.Component);function $(){var e=Object(r.useContext)(X),t=Object(i.a)(e,2),n=t[0],a=(t[1],"dark"===n);return Object(l.jsx)(k,{height:400,dark:a,children:Object(l.jsx)(W,{dark:a,columns:M})})}var q=j.b.div(R||(R=Object(h.a)(["\n  position: absolute;\n  right: 0px;\n  top: 20px;\n"]))),Q=j.b.input(P||(P=Object(h.a)([""]))),U=j.b.label(I||(I=Object(h.a)(["\n  cursor: pointer;\n  color: ",";\n"])),(function(e){return e.dark?"grey":"black"}));function V(){var e=Object(r.useContext)(X),t=Object(i.a)(e,2),n=t[0],a=t[1],c="dark"===n;return Object(l.jsx)("div",{children:Object(l.jsx)(q,{children:Object(l.jsxs)(U,{dark:c,children:[Object(l.jsx)(Q,{type:"checkbox",onChange:function(e){a(e.target.checked?"dark":"light")},checked:c}),"Dark Mode"]})})})}var X=Object(r.createContext)();function Y(){var e=Object(r.useState)("light"),t=Object(i.a)(e,2),n=t[0],a=(t[1],"dark"===n);return Object(l.jsxs)(X.Provider,{value:e,children:[Object(l.jsx)(m,{dark:a}),Object(l.jsxs)(p,{children:[Object(l.jsx)(s,{}),Object(l.jsx)(V,{}),Object(l.jsx)(J,{}),Object(l.jsx)($,{})]})]})}var Z=function(){return Object(l.jsx)(Y,{})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root")),ee()}},[[58,1,2]]]);
//# sourceMappingURL=main.6f4b30ae.chunk.js.map