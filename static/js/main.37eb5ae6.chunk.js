(this.webpackJsonpeggs=this.webpackJsonpeggs||[]).push([[0],{38:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){e.exports=t(63)},51:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),s=t.n(r),c=(t(50),t(51),t(43)),i=t(5),o=t(29),u=t(28),m=t(15),h=t(10),d=t(11),p=t(14),g=t(13),v=(t(38),function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"timeUntilDone",value:function(){var e=this.missingChickens()/this.chickensHatchingPerMinte()*6e4;return{daysUntilFinished:Math.floor(e/864e5),hoursUntilFinished:Math.floor(e%864e5/36e5),minutesUntilFinished:Math.floor(e%36e5/6e4)}}},{key:"missingChickens",value:function(e){return this.props.endGoal-this.props.currentChickens}},{key:"chickensHatchingPerMinte",value:function(){return this.props.chickensPerMinute*this.props.habitats}},{key:"render",value:function(){var e=this.timeUntilDone(),a=e.daysUntilFinished,t=e.hoursUntilFinished,n=e.minutesUntilFinished,r=this.missingChickens();return l.a.createElement("div",{className:"goals"},l.a.createElement("h3",null,"Chickens remaining"),l.a.createElement("h1",null,r.toLocaleString()),l.a.createElement("h3",null,"Goal reached in"),l.a.createElement("h2",null,l.a.createElement("span",null,a)," days, ",l.a.createElement("span",null,t)," hours and ",l.a.createElement("span",null,n)," minutes"))}}]),t}(l.a.Component)),E=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).inputField=function(e){n.setState(Object(m.a)({},e.target.name,Math.round(e.target.value))),localStorage.setItem("eggs.".concat(e.target.name),e.target.value)},n.state={endGoal:0,currentChickens:0,chickensPerMinute:0,habitats:4},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(e){for(var a=0;a<localStorage.length;a++){var t=localStorage.key(a);t.includes("eggs.")&&this.setState(Object(m.a)({},t.split("eggs.").pop(),localStorage.getItem(t)))}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"eggs"},"Eggs Inc. calculator"),l.a.createElement("main",null,l.a.createElement(v,this.state),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,"Chicken goal:"),l.a.createElement("input",{name:"endGoal",onChange:this.inputField,value:this.state.endGoal,type:"number",pattern:"[0-9]*"})),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,"Current:"),l.a.createElement("input",{name:"currentChickens",onChange:this.inputField,value:this.state.currentChickens,type:"number",pattern:"[0-9]*"})),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,"Hatch pr. min"),l.a.createElement("input",{name:"chickensPerMinute",onChange:this.inputField,value:this.state.chickensPerMinute,type:"number",pattern:"[0-9]*"})),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,"Habitats"),l.a.createElement("input",{name:"habitats",onChange:this.inputField,value:this.state.habitats,type:"number",pattern:"[0-9]*"}))))}}]),t}(l.a.Component),f=(t(39),t(25)),k=t(41),y=t(34),b=t(16),w=t.n(b),O=(t(53),function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;Object(h.a)(this,t),(n=a.call(this,e)).inputField=function(e){var a=Math.round(e.target.value);switch(e.target.name){case"endGoal":case"currentAverage":n.setState(Object(m.a)({},e.target.name,a)),localStorage.setItem("walkative.".concat(e.target.name),a);break;default:var t={date:e.target.name,meters:a},l=n.state.walks,r=l.find((function(e){var a=e.date;return t.date===a}));r?r.meters=t.meters:l.push(t),n.setState({walks:l}),localStorage.setItem("walkative.walks",JSON.stringify(l))}n.props.update()},n.fullwalks=function(){for(var e=[],a=n.state,t=a.fromMoment,l=a.daysPassed,r=a.currentAverage,s=a.walks,c=void 0===s?[]:s,i=t.clone(),o=function(a){var t=i.format("Y-MM-DD"),n=c.find((function(e){var a=e.date;return t===a})),l={date:t,meters:n?n.meters:r,auto:!n};e.push(l),i.add(1,"d")},u=0;u<l;u++)o();return e},n.dayOfWalk=function(){return n.fullwalks().map((function(e){return l.a.createElement("div",{className:"dayofWalk",style:{fontStyle:e.auto?"italic":""}},l.a.createElement("span",null,e.date),l.a.createElement("input",{name:e.date,onChange:n.inputField,value:e.meters,type:"number",pattern:"[0-9]*"}))}))};var r=w()([2020,0]),s=w()([2021,0]).diff(r,"days"),c=w()().diff(r,"days");return n.state={endGoal:3e3,currentAverage:2400,daysthisYear:s,daysPassed:c,fromMoment:r,walks:[]},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(e){for(var a=0;a<localStorage.length;a++){var t=localStorage.key(a);t.includes("walkative.")&&this.setState(Object(m.a)({},t.split("walkative.").pop(),JSON.parse(localStorage.getItem(t))))}}},{key:"render",value:function(){return l.a.createElement("div",{className:"goals ".concat(this.props.open?"open":"")},l.a.createElement("div",null,l.a.createElement("span",null,"Meters per day"),l.a.createElement("input",{name:"endGoal",onChange:this.inputField,value:this.state.endGoal,type:"number",pattern:"[0-9]*"})),l.a.createElement("div",null,l.a.createElement("span",null,"Default average"),l.a.createElement("input",{name:"currentAverage",onChange:this.inputField,value:this.state.currentAverage,type:"number",pattern:"[0-9]*"})),l.a.createElement("hr",null),this.dayOfWalk())}}]),t}(l.a.Component)),S=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;Object(h.a)(this,t),(n=a.call(this,e)).goalsOpen=function(){n.setState({goalsOpen:!n.state.goalsOpen})},n.fullwalks=function(){for(var e=0,a=n.state,t=a.fromMoment,l=a.daysPassed,r=a.currentAverage,s=a.walks,c=void 0===s?[]:s,i=t.clone(),o=function(a){var t=i.format("Y-MM-DD"),n=c.find((function(e){var a=e.date;return t===a}));e+=n?n.meters:r,i.add(1,"d")},u=0;u<l;u++)o();return e},n.update=function(){for(var e=0;e<localStorage.length;e++){var a=localStorage.key(e);a.includes("walkative.")&&n.setState(Object(m.a)({},a.split("walkative.").pop(),JSON.parse(localStorage.getItem(a))))}};var l=w()([2020,0]),r=w()([2021,0]).diff(l,"days"),s=w()().diff(l,"days");return n.state={endGoal:3e3,currentAverage:0,daysthisYear:r,daysPassed:s,goalsOpen:!1,walks:[],fromMoment:l},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(e){this.update()}},{key:"render",value:function(){var e=this.fullwalks(),a=this.state,t=a.daysPassed,n=a.endGoal,r=a.daysthisYear,s=a.goalsOpen,c=e/t/1e3,i=(c*(r-t)+e)/1e3,o=n*r,u=(o-e)/(r-t)/1e3,m=n/1e3*t,h=e/o*100,d=c/n*100,p=e<m,g=(o-e)/1e3;return console.log(o,e),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"walks"},"Walk Motivator",l.a.createElement(k.a,{onClick:this.goalsOpen,variant:"success"},s?"-":"+")),l.a.createElement("main",null,l.a.createElement(O,{open:s,update:this.update}),l.a.createElement(f.a,{controls:"false"},l.a.createElement(f.a.Item,null,l.a.createElement("div",{className:"box"},l.a.createElement(f.a.Caption,null,l.a.createElement("h2",null,"You have walked ",l.a.createElement("span",{className:p&&"notReached"},e/1e3," km")," this year"),l.a.createElement("h4",null,"The goal is ",l.a.createElement("span",null,m," km")),l.a.createElement("h2",null,"That would be ",l.a.createElement("span",{className:p&&"notReached"},i.toFixed(2)," km")," in a year"),l.a.createElement("h4",null,"Walk ",l.a.createElement("span",null,o/1e3," km")," this year!"),l.a.createElement("h2",null,"You still need to walk ",l.a.createElement("span",{className:g>0&&"notReached"},g.toFixed(2)," km")," this year"),l.a.createElement(y.a,{variant:"success",now:h})))),l.a.createElement(f.a.Item,null,l.a.createElement("div",{className:"box"},l.a.createElement(f.a.Caption,null,l.a.createElement("h2",null,"The current average is ",l.a.createElement("span",{className:p&&"notReached"},c.toFixed(2)," km")," per day"),l.a.createElement("h4",null,"The goal is ",l.a.createElement("span",null,n/1e3," km")," per day"),l.a.createElement("h2",null,"Want to succeed?"),l.a.createElement("h4",null,"Start walking ",l.a.createElement("span",null,u.toFixed(2)," km")," every day"),l.a.createElement("h2",null,"You are so close!"),l.a.createElement(y.a,{variant:"success",now:d})))))))}}]),t}(l.a.Component);t(56);function C(){return l.a.createElement("main",null,l.a.createElement("h2",null,"Home"))}function M(){return l.a.createElement(c.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(o.a,{expand:"lg",variant:"dark"},l.a.createElement(o.a.Brand,{href:"#"},"Peters Stuff"),l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(u.a,{className:"mr-auto"},l.a.createElement(u.a.Link,{href:"#"},"Home"),l.a.createElement(u.a.Link,{href:"#eggs"},"Eggs"),l.a.createElement(u.a.Link,{href:"#walks"},"Walks")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/eggs"},l.a.createElement(E,null)),l.a.createElement(i.a,{path:"/walks"},l.a.createElement(S,null)),l.a.createElement(i.a,{path:"/"},l.a.createElement(C,null))),l.a.createElement("footer",null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.37eb5ae6.chunk.js.map