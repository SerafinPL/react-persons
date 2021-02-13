(this["webpackJsonpreact-persons"]=this["webpackJsonpreact-persons"]||[]).push([[0],{100:function(e,n,t){},101:function(e,n,t){},102:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t(1),o=t.n(s),c=t(47),r=t.n(c),i=(t(84),t(8)),l=t(10),u=t(2),p=t(3),d=t(5),j=t(4),h=t(23),m=t.n(h),b=o.a.createContext({authenticated:!1,login:function(){}}),g=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).inputElementRef=o.a.createRef(),a}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.inputElementRef.current.focus(),console.log(this.context.authenticated)}},{key:"render",value:function(){return console.log("Person.js rendering..."),Object(a.jsxs)("div",{className:m.a.persons,children:[this.context.authenticated?Object(a.jsx)("p",{children:"Authenticated!"}):Object(a.jsx)("p",{children:"Please Log in"}),Object(a.jsxs)("p",{onClick:this.props.funkcja,children:["Jestem ",this.props.name," i mam ",this.props.age," lat!"]}),Object(a.jsx)("p",{children:this.props.children}),Object(a.jsx)("input",{ref:this.inputElementRef,type:"text",onChange:this.props.zmiana,value:this.props.name})]})}}]),t}(s.Component);g.contextType=b;var f=g,k=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,n){return console.log("PERSONS.js getSnapshotBeforeUpdate"),{message:"SnapshotMessage"}}},{key:"componentDidUpdate",value:function(e,n,t){console.log("PERSONS.js componentDidUpdate"),console.log(t)}},{key:"componentWillUnmount",value:function(){console.log("PERSONS.js componentWillUnmount")}},{key:"render",value:function(){var e=this;return console.log("PERSONS.js rendering...."),this.props.persons.map((function(n,t){return Object(a.jsx)(f,{funkcja:function(){return e.props.clicked(t)},name:n.name,age:n.age,zmiana:function(t){return e.props.changed(t,n.id)}},n.id)}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return console.log("PERSONS.js getDerivedStateFromProps props: ",e),n}}]),t}(s.PureComponent),O=t(14),v=t.n(O),x=function(e){var n=Object(s.useRef)(null),t=Object(s.useContext)(b);console.log("[Cockpit]",t.authenticated),Object(s.useEffect)((function(){return console.log("Cockpit.js 1useEffect"),setTimeout((function(){alert("Saved Data")}),1e3),function(){console.log("Cockpit.js clean from 1useEffect")}}),[e.persons]),Object(s.useEffect)((function(){return console.log("Cockpit.js 2useEffect "),n.current.click(),function(){console.log("Cockpit.js clean from 2useEffect")}}),[]),Object(s.useEffect)((function(){return console.log("Cockpit.js 3useEffect "),function(){console.log("Cockpit.js clean from 3useEffect")}}));var o=[];e.personsLength<=2&&o.push(v.a.colorRed),e.personsLength<=1&&o.push(v.a.bold),o=o.join(" ");var c=[v.a.Guzik];return e.showPersons&&c.push(v.a.Red),Object(a.jsxs)("div",{className:v.a.Cockpit,children:[Object(a.jsxs)("h1",{children:[' To jest reactowa Aplikacja "',e.title,'"']}),Object(a.jsx)("p",{className:o,children:"ale dzia\u0142a na classach i Stylowana CSS Modules"}),Object(a.jsx)("button",{ref:n,className:c.join(" "),onClick:e.clicked,children:"(Poka\u017c/Schowaj) klasowe Elementy"}),Object(a.jsx)("button",{onClick:t.login,className:v.a.Guzik,children:"Log in"})]})},z=o.a.memo(x),P=function(e){return Object(a.jsx)("div",{className:e.classes,children:e.children})},C=t(20),y=t.n(C),S=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={persons:[{id:"sadf3dg",name:"Kuba",age:31},{id:"sdf4asa",name:"Anitka",age:25},{id:"saasda2",name:"Richard",age:33}],kolejnaZmienna:"inna zmienna",pokazPersons:!1,showCockpit:!0,changeCounter:0,authenticated:!1},a.zmianaImieniaHandler=function(e,n){var t=a.state.persons.findIndex((function(e){return e.id===n})),s=Object(l.a)({},a.state.persons[t]);s.name=e.target.value;var o=Object(i.a)(a.state.persons);o[t]=s,a.setState((function(e,n){return{persons:o,changeCounter:e.changeCounter+1}}))},a.usunPersonHandler=function(e){var n=Object(i.a)(a.state.persons);n.splice(e,1),a.setState({persons:n})},a.togglePersonHandler=function(){var e=a.state.pokazPersons;a.setState({pokazPersons:!e})},a.loginHandler=function(){a.setState({authenticated:!0})},console.log("App.js constructor"),a}return Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("App.js componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,n){return console.log("App.js shouldComponentUpdate"),!0}},{key:"componentDidUpdate",value:function(){console.log("App.js componentDidUpdate")}},{key:"render",value:function(){var e=this;console.log("App.js render");var n=null;return this.state.pokazPersons&&(n=Object(a.jsx)(k,{persons:this.state.persons,clicked:this.usunPersonHandler,changed:this.zmianaImieniaHandler})),Object(a.jsxs)(P,{classes:y.a.App,children:[Object(a.jsxs)("button",{className:y.a.Guzik,onClick:function(){e.state.showCockpit?e.setState({showCockpit:!1}):e.setState({showCockpit:!0})},children:["Poka\u017c/Ukryj Kokpit ",this.props.appTitle]}),Object(a.jsxs)(b.Provider,{value:{authenticated:this.state.authenticated,login:this.loginHandler},children:[this.state.showCockpit?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:this.state.changeCounter}),Object(a.jsx)(z,{title:this.props.appTitle,showPersons:this.state.pokazPersons,personsLength:this.state.persons.length,clicked:this.togglePersonHandler})]}):null,n]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,n){return console.log("App.js getDerivedStateFromProps props: ",e),n}}]),t}(s.Component),w=t(24),A=(t(42),t(25));function _(){var e=Object(w.a)(["\n\n\t\twidth: 70%;\n\t\tmargin:15px auto;\n\t\tborder: 1px solid #eee;\n\t\tbox-shadow: 0 2px 4px #ddd;\n\t\tpadding: 15px;\n\t\ttext-align: center;\n\t\t\n\n\t\tp {\n\t\t\tdisplay: inline;\n\t\t\tmargin: 20px;\n\t\t}\n\t\t@media (min-width: 500px){\n\t\t\twidth: 450px;\n\t\t}\n\n\t\t"]);return _=function(){return e},e}var R=A.a.div(_()),N=function(e){return Object(a.jsxs)(R,{children:[Object(a.jsxs)("p",{onClick:e.funkcja,children:["Jestem ",e.name," i mam ",e.age," lat!"]}),Object(a.jsx)("p",{children:e.children}),Object(a.jsx)("input",{type:"text",onChange:e.zmiana,value:e.name})]})};t(36);function H(){var e=Object(w.a)(["\n\n      background-color: ",";\n      color: white;\n      font: monospace;\n      border: 1px solid blue;\n      padding: 10px;\n      cursor: pointer;\n\n      &:hover {\n        background-color: ",";\n        color: black;\n      }\n\n  "]);return H=function(){return e},e}var E=A.a.button(H(),(function(e){return e.alt?"red":"green"}),(function(e){return e.alt?"salmon":"lightgreen"})),D=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).state={persons:[{id:"sadf3dg",name:"Kuba",age:31},{id:"sdf4asa",name:"Anitka",age:25},{id:"saasda2",name:"Richard",age:33}],kolejnaZmienna:"inna zmienna",pokazPersons:!1},e.zmianaImieniaHandler=function(n,t){var a=e.state.persons.findIndex((function(e){return e.id===t})),s=Object(l.a)({},e.state.persons[a]);s.name=n.target.value;var o=Object(i.a)(e.state.persons);o[a]=s,e.setState({persons:o})},e.usunPersonHandler=function(n){var t=Object(i.a)(e.state.persons);t.splice(n,1),e.setState({persons:t})},e.togglePersonHandler=function(){var n=e.state.pokazPersons;e.setState({pokazPersons:!n})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,n=null;this.state.pokazPersons&&(n=Object(a.jsx)("div",{children:this.state.persons.map((function(n,t){return Object(a.jsx)(N,{funkcja:function(){return e.usunPersonHandler(t)},name:n.name,age:n.age,zmiana:function(t){return e.zmianaImieniaHandler(t,n.id)}},n.id)}))}));var t=[];return this.state.persons.length<=2&&t.push("colorRed"),this.state.persons.length<=1&&t.push("bold"),t=t.join(" "),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:" To jest reactowa Aplikacja"}),Object(a.jsx)("p",{className:t,children:"ale dzia\u0142a na classach i Stylowana pakietem Styled-Components"}),Object(a.jsx)(E,{alt:this.state.pokazPersons,onClick:this.togglePersonHandler,children:"(Poka\u017c/Schowaj) klasowe Elementy"}),n]})}}]),t}(s.Component),F=t(33),I=Object(F.a)((function(e){return Object(a.jsxs)("div",{className:"persons",style:{"@media (min-width: 500px)":{width:"450px"}},children:[Object(a.jsxs)("p",{onClick:e.funkcja,children:["Jestem ",e.name," i mam ",e.age," lat!"]}),Object(a.jsx)("p",{children:e.children}),Object(a.jsx)("input",{type:"text",onChange:e.zmiana,value:e.name})]})})),U=t(39),M=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).state={persons:[{id:"sadf3dg",name:"Kuba",age:31},{id:"sdf4asa",name:"Anitka",age:25},{id:"saasda2",name:"Richard",age:33}],kolejnaZmienna:"inna zmienna",pokazPersons:!1},e.zmianaImieniaHandler=function(n,t){var a=e.state.persons.findIndex((function(e){return e.id===t})),s=Object(l.a)({},e.state.persons[a]);s.name=n.target.value;var o=Object(i.a)(e.state.persons);o[a]=s,e.setState({persons:o})},e.usunPersonHandler=function(n){var t=Object(i.a)(e.state.persons);t.splice(n,1),e.setState({persons:t})},e.togglePersonHandler=function(){var n=e.state.pokazPersons;e.setState({pokazPersons:!n})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,n={backgroundColor:"green",color:"white",font:"monospace",border:"1px solid blue",padding:"10px",cursor:"pointer",":hover":{backgroundColor:"lightgreen",color:"black"}},t=null;this.state.pokazPersons&&(t=Object(a.jsx)("div",{children:this.state.persons.map((function(n,t){return Object(a.jsx)(I,{funkcja:function(){return e.usunPersonHandler(t)},name:n.name,age:n.age,zmiana:function(t){return e.zmianaImieniaHandler(t,n.id)}},n.id)}))}),n.backgroundColor="red",n[":hover"]={backgroundColor:"salmon",color:"black"});var s=[];return this.state.persons.length<=2&&s.push("colorRed"),this.state.persons.length<=1&&s.push("bold"),s=s.join(" "),Object(a.jsx)(U.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:" To jest reactowa Aplikacja"}),Object(a.jsx)("p",{className:s,children:"ale dzia\u0142a na classach i Stylowana pakietem Radium"}),Object(a.jsx)("button",{style:n,onClick:this.togglePersonHandler,children:"(Poka\u017c/Schowaj) klasowe Elementy"}),t]})})}}]),t}(s.Component),T=Object(F.a)(M),K=t(34),L=function(e){return console.log("Person.js rendering..."),Object(a.jsxs)("div",{className:m.a.persons,children:[Object(a.jsxs)("p",{onClick:e.funkcja,children:["Jestem ",e.name," i mam ",e.age," lat!"]}),Object(a.jsx)("p",{children:e.children}),Object(a.jsx)("input",{type:"text",onChange:e.zmiana,value:e.name})]})},G=function(e){var n=Object(s.useState)({persons:[{name:"Kuba",age:31},{name:"Anitka",age:25},{name:"Richard",age:33}]}),t=Object(K.a)(n,2),o=t[0],c=t[1],r=Object(s.useState)("inna zmienna w innym stanie"),i=Object(K.a)(r,2),l=(i[0],i[1],function(e){c({persons:[{name:"Jakub",age:31},{name:"Anitka",age:27},{name:e,age:37}]})}),u=Object(s.useState)(!1),p=Object(K.a)(u,2),d=p[0],j=p[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:" To jest reactowa Aplikacja"}),Object(a.jsx)("p",{children:"ale dzia\u0142a na Funkcjach"}),Object(a.jsx)("button",{onClick:function(){j(!d)},className:"Guzik",children:"Wy\u015bwietl schowaj Funkcyjne Komponenty"}),!0===d?Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:l.bind(undefined,"Marcinek"),className:"Guzik",children:"Zmie\u0144 imi\u0119"}),Object(a.jsx)(L,{name:o.persons[0].name,age:o.persons[0].age}),Object(a.jsx)(L,{name:o.persons[1].name,age:o.persons[1].age,children:"I lubi\u0119 malowa\u0107!"}),Object(a.jsx)(L,{name:o.persons[2].name,age:o.persons[2].age,funkcja:function(){return l("Mi\u0142oszek")},zmiana:function(e){c({persons:[{name:"Jakub",age:31},{name:"Anitka",age:27},{name:e.target.value,age:37}]})}})]}):null]})},J=function(e){return console.log("PERSONS.js rendering...."),e.persons.map((function(n,t){return Object(a.jsx)(L,{funkcja:function(){return e.clicked(t)},name:n.name,age:n.age,zmiana:function(t){return e.changed(t,n.id)}},n.id)}))},W=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={persons:[{id:"sadf3dg",name:"Kuba",age:31},{id:"sdf4asa",name:"Anitka",age:25},{id:"saasda2",name:"Richard",age:33}],kolejnaZmienna:"inna zmienna",pokazPersons:!1},a.zmianaImieniaHandler=function(e,n){var t=a.state.persons.findIndex((function(e){return e.id===n})),s=Object(l.a)({},a.state.persons[t]);s.name=e.target.value;var o=Object(i.a)(a.state.persons);o[t]=s,a.setState({persons:o})},a.usunPersonHandler=function(e){var n=Object(i.a)(a.state.persons);n.splice(e,1),a.setState({persons:n})},a.togglePersonHandler=function(){var e=a.state.pokazPersons;a.setState({pokazPersons:!e})},console.log("App.js constructor"),a}return Object(p.a)(t,[{key:"componentWillMount",value:function(){console.log("App.js componentWillMount")}},{key:"componentDidMount",value:function(){console.log("App.js componentDidMount")}},{key:"render",value:function(){console.log("App.js render");var e=null;return this.state.pokazPersons&&(e=Object(a.jsx)(J,{persons:this.state.persons,clicked:this.usunPersonHandler,changed:this.zmianaImieniaHandler})),Object(a.jsxs)("div",{className:y.a.AppPF,children:[Object(a.jsx)(z,{title:this.props.appTitle,showPersons:this.state.pokazPersons,persons:this.state.persons,clicked:this.togglePersonHandler}),e]})}}],[{key:"getDerivedStateFromProps",value:function(e,n){return console.log("App.js getDerivedStateFromProps props: ",e),n}}]),t}(s.Component),Z=(t(98),function(e){return Object(a.jsxs)("div",{className:"userInput",children:[Object(a.jsxs)("h3",{children:["U\u017cytkownika imi\u0119 ",e.name]}),Object(a.jsx)("input",{type:"text",onChange:e.zmiana,value:e.name})]})}),B=(t(99),function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:"Output",style:{fontSize:"20px",fontFamily:"monospace"},children:["Imie u\u017cytkownika: ",e.imie]})})}),X=(t(100),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).state={imie:"Kuba Koder"},e.zmianaUser=function(n){e.setState({imie:n.target.value})},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"AppUsers",children:[Object(a.jsx)(Z,{name:this.state.imie,zmiana:this.zmianaUser}),Object(a.jsx)(B,{imie:this.state.imie})]})}}]),t}(s.Component)),Q=(t(101),function(e){var n="text zbyt kr\xf3tki";return e.dlugosc>=5&&(n="text wystarczaj\u0105co d\u0142ugi"),Object(a.jsx)("p",{children:n})}),Y=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).state={dlugosc:0,zawartosc:""},e.jakaDlugosc=function(n){var t=n.target.value;e.setState({dlugosc:t.length,zawartosc:t})},e.usunLiterke=function(n){var t=e.state.zawartosc.split("");t.splice(n,1);var a=t.join(""),s=a.length;e.setState({dlugosc:s,zawartosc:a})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,n=this.state.zawartosc.split("").map((function(n,t){return Object(a.jsx)("span",{onClick:function(){return e.usunLiterke(t)},children:n},t)}));return Object(a.jsxs)("div",{className:"literyDiv",children:[Object(a.jsx)("p",{children:"Wpisz se tu co\u015b..."}),Object(a.jsx)("input",{type:"text",onChange:this.jakaDlugosc,value:this.state.zawartosc}),Object(a.jsxs)("p",{children:["D\u0142ugo\u015b\u0107 wpisanego textu: ",this.state.dlugosc]}),Object(a.jsx)(Q,{dlugosc:this.state.dlugosc}),Object(a.jsx)("p",{children:"Kliknij se te tabliczki..."}),n]})}}]),t}(s.Component),q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),o(e),c(e)}))};r.a.render(Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(Y,{}),Object(a.jsx)(X,{}),Object(a.jsx)(S,{appTitle:"Person's class Manager"}),Object(a.jsx)(W,{appTitle:"Person's function Menager"}),Object(a.jsx)(G,{}),Object(a.jsx)(D,{}),Object(a.jsx)(T,{})]}),document.getElementById("root")),q()},14:function(e,n,t){e.exports={colorRed:"Cockpit_colorRed__19v_U",bold:"Cockpit_bold__3urf2",Cockpit:"Cockpit_Cockpit__snX-D",Guzik:"Cockpit_Guzik__ELpxe",Red:"Cockpit_Red__2ee36"}},20:function(e,n,t){e.exports={App:"App_App__1IQbR",AppPF:"App_AppPF__2sX0R",colorRed:"App_colorRed__lS2jU",bold:"App_bold__1NcCm",Guzik:"App_Guzik__1msXY",Red:"App_Red__341RS"}},23:function(e,n,t){e.exports={persons:"Person_persons__2Ef2m"}},36:function(e,n,t){},42:function(e,n,t){},84:function(e,n,t){},98:function(e,n,t){},99:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.619edd47.chunk.js.map