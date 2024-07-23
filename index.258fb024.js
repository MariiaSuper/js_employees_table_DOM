function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var n=document.querySelector("table");function t(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)}function r(e){var n=["name","position","office","age","salary"];Array.from(e.cells).forEach(function(e,t){e.dataset.columnName=n[t]})}document.addEventListener("DOMContentLoaded",function(){var a=function(e){document.querySelector(".notification")&&document.body.removeChild(document.querySelector(".notification"));var n=document.createElement("div");n.classList.add("notification"),n.setAttribute("data-qa","notification");var t=!0;return e.name.trim().length<4?(n.innerText="Error: Name must be at least 4 characters long.",document.body.appendChild(n),t=!1):e.position.trim().length?e.age<18||e.age>90?(n.innerText="Error: Age must be between 18 and 90.",t=!1):Number.isInteger(+e.salary)?0>=+e.salary?(n.innerText="Salary must be more than zero",t=!1):n.innerText="Success":(n.innerText="Salary must be a number",t=!1):(n.innerText="Error:Position should exist.",document.body.appendChild(n),t=!1),t?n.classList.add("success"):n.classList.add("error"),document.body.appendChild(n),setTimeout(function(){document.body.removeChild(n)},3e3),t},o=function(e){var t,r=n.querySelector("tbody"),a=Array.from(r.rows);d===e?m=(t="desc"===m)?"asc":"desc":(t=!0,m="asc"),d=e,a.sort(function(n,r){var a=n.cells[e].innerText,o=r.cells[e].innerText;return t?a.localeCompare(o,void 0,{numeric:!0}):o.localeCompare(a,void 0,{numeric:!0})}),a.forEach(function(e){return r.appendChild(e)})},c=function(e){return e.replaceAll(",","").replaceAll("$","")},i=function(n){if(!n.querySelector(".cell-input")){var r=n.dataset.columnName,o=n.closest("tr"),i={name:o.querySelector('[data-column-name="name"]').innerText,position:o.querySelector('[data-column-name="position"]').innerText,age:o.querySelector('[data-column-name="age"]').innerText,office:o.querySelector('[data-column-name="office"]').innerText,salary:c(o.querySelector('[data-column-name="salary"]').innerText)},u=n.innerText,s=document.createElement("input");s.type="text",s.className="cell-input",s.value="salary"===r?c(u):u,n.innerText="",n.appendChild(s),s.focus(),s.addEventListener("blur",function(){var o,c,l=s.value;a((o=function(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){e(n,t,r[t])})}return n}({},i),c=null!=(c=e({},r,l))?c:{},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(c)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(c,e))}),o))?n.innerText="salary"===r?t(l):l:n.innerText=u,n.querySelector(".cell-input")&&n.removeChild(n.querySelector(".cell-input"))}),s.addEventListener("keypress",function(e){"Enter"===e.key&&l(n,u,s.value)})}},l=function(e,n,t){e.querySelector(".cell-input")&&e.removeChild(e.querySelector(".cell-input"))},u=n.querySelectorAll("th"),s=n.querySelectorAll("tbody tr"),d=null,m="asc";u.forEach(function(e,n){e.addEventListener("click",function(){o(n)})}),s.forEach(function(e){e.addEventListener("click",function(){s.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")}),Array.from(e.cells).forEach(function(e,n){e.addEventListener("dblclick",function(){i(e)})}),r(e)});var p=document.createElement("form");p.classList.add("new-employee-form"),p.innerHTML='\n    <label>Name: <input name="name" type="text" data-qa="name"></label>\n    <label>Position: <input name="position" type="text" data-qa="position"></label>\n    <label>Office: \n      <select name="office" data-qa="office">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n    <label>Age: <input name="age" type="number" data-qa="age"></label>\n    <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n    <button type="submit">Save to table</button>\n  ',document.body.appendChild(p),p.addEventListener("submit",function(e){e.preventDefault();var o=p.querySelector('input[name="name"]').value,c=p.querySelector('input[name="position"]').value,l=p.querySelector('select[name="office"]').value,u=p.querySelector('input[name="age"]').value,d=p.querySelector('input[name="salary"]').value;if(a({name:o,position:c,office:l,age:u,salary:d})){var m=document.createElement("tr");m.innerHTML="\n        <td>".concat(o,"</td>\n        <td>").concat(c,"</td>\n        <td>").concat(l,"</td>\n        <td>").concat(u,"</td>\n        <td>").concat(t(d),"</td>\n      "),m.addEventListener("click",function(){s.forEach(function(e){return e.classList.remove("active")}),m.classList.add("active")}),Array.from(m.cells).forEach(function(e){e.addEventListener("dblclick",function(){i(e)})}),r(m),n.querySelector("tbody").appendChild(m),p.reset()}})});
//# sourceMappingURL=index.258fb024.js.map