(()=>{"use strict";const e=function(e,t,n,l,o){for(let c=0;c<n;c++)for(let n=0;n<l;n++){const l=e[c][n];t.beginPath(),t.rect(n*o,c*o,o,o),t.fillStyle=l?"black":"white",t.fill(),t.stroke()}},t=document.querySelector("#screen"),n=t.getContext("2d"),l=document.querySelector("#start"),o=document.querySelector("#pause");t.width=500,t.height=500;let c=null;const i=new Audio("./decision1.mp3");let r,a=new Array(50).fill(null).map((()=>new Array(50).fill(null).map((()=>!!Math.floor(2*Math.random())))));function u(t){void 0===r&&(r=t),t-r>=500&&(a=function(e,t,n){const l=e.map((e=>[...e]));for(let o=0;o<t;o++)for(let t=0;t<n;t++){const n=[e[o-1]?.[t-1],e[o-1]?.[t],e[o-1]?.[t+1],e[o]?.[t-1],e[o]?.[t+1],e[o+1]?.[t-1],e[o+1]?.[t],e[o+1]?.[t+1]].filter((e=>e)).length;e[o][t]?l[o][t]=2===n||3===n:l[o][t]=3===n}return l}(a,50,50),e(a,n,50,50,10),r=void 0),c=requestAnimationFrame(u)}t.addEventListener("click",(function(l){const o=t.getBoundingClientRect(),c=l.clientX-o.left,r=l.clientY-o.top,u=Math.floor(r/10),d=Math.floor(c/10);a[u][d]=!a[u][d],i.cloneNode().play(),e(a,n,50,50,10)})),l.addEventListener("click",(()=>{c||u()})),o.addEventListener("click",(()=>{c&&(cancelAnimationFrame(c),c=null)})),e(a,n,50,50,10)})();