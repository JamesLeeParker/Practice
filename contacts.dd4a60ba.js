parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FewS":[function(require,module,exports) {
const e="http://localhost:3000/contacts",t=document.querySelector("#contacts"),a=document.querySelector("form");async function n(){c(await o()),a.addEventListener("submit",s),t.addEventListener("click",l)}const o=async(t="/",a="GET",n={})=>{const o={method:a,headers:{"Content-Type":"application/json; charset=UTF-8"}};"GET"!==a&&n&&(o.body=JSON.stringify(n));const i=await fetch(e+t,o);return i.json(i)},i=({name:e,lname:t,email:a,phone:n,age:o,id:i})=>`<li data-id="${i}"> \n    <p>Name: ${e}</p>\n    <p>Last name: ${t}</p>\n    <p>Email: ${a}</p>\n    <p>Phone: ${n}</p>\n    <p>Age: ${o}</p>\n    <button type="button" data-action='edit'>Edit</button>\n    <button type="button" data-action='del'>Delete</button>\n    </li>\n    `,c=e=>{t.innerHTML=e.map(i).join("")};async function s(e){e.preventDefault();const{name:n,lname:c,email:s,phone:l,age:r}=e.currentTarget.elements,d={name:n.value,lname:c.value,email:s.value,phone:l.value,age:r.value};if(a.elements.id.value){const e=await o(`/${a.elements.id.value}`,"PATCH",d);t.querySelector(`[data-id="${e.id}"]`).outerHTML=i(e)}else{const e=await o("/","POST",d);t.insertAdjacentHTML("beforeend",i(e))}}async function l(e){if("BUTTON"!==e.target.tagName)return;const t=e.target.closest("li"),n=Number(t.dataset.id);if("del"===e.target.dataset.action)await o(`/${n}`,"DELETE"),t.remove();else if("edit"===e.target.dataset.action){const e=await o(`/${n}`);Object.entries(e).forEach(([e,t])=>{a.elements[e].value=t})}}n();
},{}]},{},["FewS"], null)
//# sourceMappingURL=/Practice/contacts.dd4a60ba.js.map