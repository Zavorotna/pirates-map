function teoremPifagor(e,t,n,o){const r=t-e,c=o-n;return Math.sqrt(r*r+c*c)}function rand(e,t){return Math.floor(Math.random()*(t-e+1))+e}window.addEventListener("load",(function(){const e=document.querySelector("#mapImage"),t=rand(0,e.width-80),n=rand(0,e.height-80),o=document.querySelector("#coordinate"),r=document.querySelector("#click"),c=document.querySelector("#prize"),l=document.querySelector("#symbolsContainer");let i=0;c.style.top=n+"px",c.style.left=t+"px",e.addEventListener("click",(function(a){if(i++,i>=15)return void alert("Гру закінено, тобі не вдалося знайти скарб");const d=e.getBoundingClientRect(),s=(a.clientX-d.left).toFixed(0),u=(a.clientY-d.top).toFixed(0),m=document.createElement("span");m.className="map-symbol",console.log(m),m.style.top=u+"px",m.style.left=s+"px",m.textContent="X",r.innerHTML+=`<p>Координати кліка: x= ${s}, y= ${u}</p>`;const p=teoremPifagor(t,s,n,u);o.innerHTML=`Вiдстань до скарбу  ${p.toFixed(0)} m`,p<=25&&(c.style.display="block",alert("Вітаю! Ти справжній пірат, ти знайшов скарб")),l.appendChild(m);const y=function(e,t,n,o){const r=n-e,c=o-t;let l=180*Math.atan2(c,r)/Math.PI;return l<0&&(l+=360),l}(t,n,s,u);console.log(`Кут між скарбом і кліком: ${y} градусів`)}))}));