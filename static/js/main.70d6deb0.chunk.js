(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),s=n(3),r=n(5),l=n(4),i=n(1),u=n.n(i),d=(n(12),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={date:new Date},t.timerId=0,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){return t.setState({date:new Date})}),1e3),console.log("Started")}},{key:"componentDidUpdate",value:function(t){var e=t.name,n=this.props.name;t.name!==this.props.name&&console.log("Old name ".concat(e," changed to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),console.log("Stopped")}},{key:"render",value:function(){var t=this.state.date,e=this.props.name,n=t.toLocaleTimeString();return console.log(n),Object(d.jsxs)("div",{className:"clock__info",children:[Object(d.jsx)("h2",{className:"clock__time",children:"CLOCKNAME: ".concat(e)}),Object(d.jsx)("h1",{className:"clock__time",children:n})]})}}]),n}(u.a.Component),h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={hasClock:!0,name:1},t.randomName=setInterval((function(){return t.setState({name:Math.floor(300*Math.random()+1)})}),3300),t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=document.getElementById("clear"),n=document.getElementById("start");e&&e.addEventListener("click",(function(){return t.setState({hasClock:!1})})),n&&n.addEventListener("click",(function(){return t.setState({hasClock:!0})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.randomName)}},{key:"render",value:function(){var t=this.state.hasClock;return Object(d.jsxs)("div",{className:"clock",children:[t?Object(d.jsx)(m,{name:this.state.name}):Object(d.jsx)("div",{className:"clock__info"}),Object(d.jsxs)("div",{className:"clock__bottom",children:[Object(d.jsx)("button",{type:"button",id:"clear",className:"clock__button",disabled:!this.state.hasClock,children:"Clear"}),Object(d.jsx)("button",{type:"button",id:"start",className:"clock__button",disabled:this.state.hasClock,children:"Start"})]})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70d6deb0.chunk.js.map