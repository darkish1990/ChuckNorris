(this["webpackJsonpchuck-norris-jokes"]=this["webpackJsonpchuck-norris-jokes"]||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(24),n(13)),l=(n(25),n(4)),u=n(9),s=n(8),m=(n(26),function(e){var t=e.jokeListCategories,n=e.clickedDemlimiter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(s.a,{to:"/",isActive:function(e){return!!e&&"/"===e.pathname}},"All"),t?t.map((function(e){return r.a.createElement(s.a,{to:"/"+e,key:e},e.toUpperCase())})):r.a.createElement("div",null),r.a.createElement("select",{onChange:function(e){return n(e)}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Pick"),Object(u.a)(Array(10)).map((function(e,t){return r.a.createElement("option",{key:t},t+1)})))))}),f=(n(32),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},e.joke?e.joke.joke.replace(/&quot;/g,'"'):null))});n(33);var k=function(e){var t,n=Object(l.e)(),a=n.category,c=n.delimiter;if(a=a||e.category,c=c||e.delimiter,!e.jokeList)return null;if("All"===a)t=function(e){var t=[];return Object.keys(e).reduce((function(t,n){return t.push.apply(t,Object(u.a)(e[n])),t}),t),t}(e.jokeList);else if(e.jokeList[a]&&e.jokeList[a].length>0&&c&&((t=e.jokeList[a].slice()).length=c),!t)return null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a.toUpperCase()),t.map((function(e,t){return r.a.createElement(f,{joke:e,key:t})})))},h=n(2),j=Object(h.a)();var d=function(){var e,t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(10),s=Object(i.a)(u,2),f=s[0],h=s[1];return Object(a.useEffect)((function(){fetch("http://api.icndb.com/jokes/").then((function(t){return t.json().then((function(t){e=t.value;var n,a={};e&&e.forEach((function(e){n=e.categories&&e.categories.length?e.categories[0]:"none",a[n]=a[n]||[],a[n].push(e)}));var r={};Object.keys(a).sort().forEach((function(e){r[e]=a[e]})),o(r)}))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(l.b,{history:j},r.a.createElement(m,{jokeListCategories:Object.keys(c),clickedDemlimiter:function(e){var t=e.target.value;t&&h(t)}}),r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{category:"All",jokeList:c,delimiter:f})}}),r.a.createElement(l.a,{path:"/:category"},r.a.createElement(k,{jokeList:c,delimiter:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e20eb987.chunk.js.map