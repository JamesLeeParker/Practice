parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FewS":[function(require,module,exports) {
const e="http://localhost:3000/contacts",n=document.querySelector("#contacts"),t=document.querySelector("form"),a=(n="/",t="GET",a={})=>{const o={method:t,headers:{"Content-Type":"application/json; charset=UTF-8"}};return"GET"!==t&&a&&(o.body=JSON.stringify(a)),fetch(e+n,o).then(e=>e.json())},o=({name:e,lname:n,email:t,phone:a,age:o,id:l})=>`<li data-id="${l}"> \n    <p>Name: ${e}</p>\n    <p>Last name: ${n}</p>\n    <p>Email: ${t}</p>\n    <p>Phone: ${a}</p>\n    <p>Age: ${o}</p>\n    </li>\n    `,l=e=>{n.innerHTML=e.map(o).join("")};function m(e){e.preventDefault();const{name:t,lname:l,email:m,phone:p,age:c}=e.currentTarget.elements,i={name:t.value,lname:l.value,email:m.value,phone:p.value,age:c.value};a("/","POST",i).then(e=>{n.insertAdjacentHTML("beforeend",o(e))})}a().then(e=>l(e)),t.addEventListener("submit",m);
},{}]},{},["FewS"], null)
//# sourceMappingURL=/Practice/contacts.b4709978.js.map