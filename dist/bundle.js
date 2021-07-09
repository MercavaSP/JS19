(()=>{"use strict";var e=document.querySelector("menu"),t=document.querySelector("body");function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o,a,c,i,l,s,u,m,d,f,v,y,p,h,g,b,S,E,L,q,w,A,T,x,C;!function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");function o(e){return e<10&&(e="0"+e),e}var a=setInterval((function(){var e,c,i,l=(e=(new Date("10 july 2021").getTime()-(new Date).getTime())/1e3,c=Math.floor(e%60),i=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:i,seconds:c});t.textContent=o(l.hours),n.textContent=o(l.minutes),r.textContent=o(l.seconds),l.timeRemaining<0&&(clearInterval(a),t.textContent="00",n.textContent="00",r.textContent="00")}),1e3)}(),S=-50,E=!1,L=function t(){b=requestAnimationFrame(t),S<0?(S++,e.style.transform="translate(".concat(2*S,"%)")):cancelAnimationFrame(b)},q=function(){e.style.transform="translate(-100%)",S=-50,E=!1,cancelAnimationFrame(b)},w=function(t,n){var r=t.target;r.closest(".menu")?(E=!0,n?e.style.transform&&"translate(0%)"===e.style.transform?q():b=requestAnimationFrame(L):e.style.transform&&"translate(0%)"===e.style.transform?q():(e.style.transform="translate(0%)",S=-50)):(r.closest("menu")&&r.closest("A")||!r.closest("menu")&&E)&&q()},A=function(e){w(e,!0)},T=function(e){w(e,!1)},x=[],C=function(){x.push(setTimeout((function(){x.forEach((function(e){return clearTimeout(e)})),window.innerWidth>=768?(t.addEventListener("click",A),t.removeEventListener("click",T)):(t.addEventListener("click",T),t.removeEventListener("click",A))}),500))},window.addEventListener("resize",C),window.addEventListener("load",C),function(){var e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),r=document.querySelector(".popup-close");e.style.display="block",e.style.transform="translateY(-100%)",t.style.transform="translateX(-100%)";var o=function(r){t.style.transition="".concat(r),n.forEach((function(n){return n.addEventListener("click",(function(){t.style.transform="translateX(0%)",e.style.transform="translateY(0%)"}))}))},a=[],c=function(){a.push(setTimeout((function(){a.forEach((function(e){return clearTimeout(e)})),window.innerWidth>=768?o("1s"):o("")}),500))};c(),window.addEventListener("resize",c),r.addEventListener("click",(function(){e.style.transform="translateY(-100%)",t.style.transform="translateX(-100%)"}))}(),p=document.querySelector(".service-header"),h=p.querySelectorAll(".service-header-tab"),g=document.querySelectorAll(".service-tab"),p.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab")).classList.contains("service-header-tab")&&h.forEach((function(e,n){e===t&&function(e){for(var t=0;t<g.length;t++)e===t?(h[t].classList.add("active"),g[t].classList.remove("d-none")):(h[t].classList.remove("active"),g[t].classList.add("d-none"))}(n)}))})),l=document.querySelectorAll(".portfolio-item"),s=document.querySelector(".portfolio-dots"),u=document.querySelector(".portfolio-content"),m=0,d=function(e,t,n){e[t].classList.remove(n)},f=function(e,t,n){e[t].classList.add(n)},v=function(){d(l,m,"portfolio-item-active"),d(i,m,"dot-active"),++m>=l.length&&(m=0),f(l,m,"portfolio-item-active"),f(i,m,"dot-active")},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(v,e)},u.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(d(l,m,"portfolio-item-active"),d(i,m,"dot-active"),t.matches("#arrow-right")?m++:t.matches("#arrow-left")?m--:t.matches(".dot")&&i.forEach((function(e,n){e===t&&(m=n)})),m>=l.length&&(m=0),m<0&&(m=l.length-1),f(l,m,"portfolio-item-active"),f(i,m,"dot-active"))})),u.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(c)})),u.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&y()})),function(){for(var e=0;e<l.length;e++){var t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),s.append(t)}i=document.querySelectorAll(".dot")}(),y(1500),o=document.getElementById("command"),a=document.querySelector(".calc-block"),o.addEventListener("mouseover",(function(e){var t=e.target;t.matches(".command__photo")&&(t.dataset.first=t.src,t.src=t.dataset.img)})),o.addEventListener("mouseout",(function(e){var t=e.target;t.matches(".command__photo")&&(t.src=t.dataset.first,t.removeAttribute("data-first"))})),a.addEventListener("input",(function(e){var t=e.target;t.matches("INPUT")&&(t.value=t.value.replace(/\D/,""))})),function(){var e=document.querySelector("body");e.addEventListener("input",(function(e){var t=e.target;"insertFromPaste"!==e.inputType?t.matches("#form2-name,#form1-name")?t.value=t.value.replace(/[^а-я\s\-]/i,""):t.matches("#form2-email,#form1-email")?t.value=t.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi,""):t.matches("#form2-phone,#form1-phone")?t.value=t.value.replace(/[^\d\+]/g,""):t.value=t.value.replace(/[^а-я\s\d\.\,\?\!\;\:\(\)\"\-]/i,""):t.value=""})),e.addEventListener("focusout",(function(e){var t=e.target;if(t.value&&(t.matches("#form2-name,#form2-message,#form1-name")?(t.value=t.value.replace(/^\s+|\s+$/g,""),t.value=t.value.replace(/\s{2,}/g," ")):t.matches("#form2-email,#form1-email")&&(t.value=t.value.replace(/^\-+|\-+$/g,""),t.value=t.value.replace(/\-{2,}/g,"-")),t.matches("#form2-name,#form1-name,#form3-name")&&t.value)){var n=t.value;(n=n.split(" ")).forEach((function(e,t){return n[t]=e[0].toUpperCase()+e.substring(1).toLowerCase()})),n=n.join(" "),t.value=n}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total"),i=function(){var t=0,i=1,l=1,s=n.options[n.selectedIndex].value,u=+r.value;o.value>1&&(i+=(o.value-1)/10),a.value&&a.value<5?l*=2:a.value&&a.value<10&&(l*=1.5),s&&u&&(t=e*s*u*i*l),c.textContent=t};t.addEventListener("change",(function(e){var t=e.target;t!==n&&t!==r&&t!==a&&t!==o||i()}))}(100),function(){var e=document.querySelectorAll("form"),t=document.createElement("div");t.classList.add("status-message");var o=function(){var e=document.querySelector(".status-message");e&&setTimeout((function(){e.remove()}),5e3)};e.forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;"user_phone"===t.name&&(t.style&&(t.style.border="none"),t.value=t.value.replace(/[^\+\d]/g,""),/^\+?(\d){0,18}$/g.test(t.value)||(t.value=t.value.substring(0,t.value.length-1))),"user_name"!==t.name&&"user_message"!==t.name||(t.value=t.value.replace(/[^а-я ]/gi,""))})),e.addEventListener("submit",(function(a){a.preventDefault();var c,i,l=(c=a.target.elements,function(e){if(Array.isArray(e))return r(e)}(c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||n(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"user_phone"===e.name}));if(!((i=l)[0].value.replace("+","").length<8&&(function(e,t){var n=e.parentNode;if(!(n=n.querySelector(".input-error"))){var r='<div class="input-error" style="color: red;">'.concat("Минимум 8 цифр","</div>");e.style.border="2px solid red",e.insertAdjacentHTML("beforebegin",r);var o=document.querySelector(".input-error");setTimeout((function(){o.remove(),e.removeAttribute("style")}),5e3)}}(i[0]),1))){e.appendChild(t),t.style.cssText="font-size: 2rem;\n              color: #fff; ";var s=new FormData(e);t.textContent="Загрузка...";var u,m={},d=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}(s.entries());try{for(d.s();!(u=d.n()).done;){var f=u.value;m[f[0]]=f[1]}}catch(e){d.e(e)}finally{d.f()}(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),mode:"cors"})})(m).then((function(n){if(200!==n.status)throw"error !!! ";t.style.cssText="font-size: 2rem;\n              color: green; ",o(),t.textContent="Спасибо! Мы с вами свяжемся!",e.reset()})).catch((function(){t.style.cssText="font-size: 2rem;\n              color: red; ",o(),t.textContent="Что то пошло не так..."}))}}))}))}()})();