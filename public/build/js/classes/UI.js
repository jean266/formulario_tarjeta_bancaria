export default class UI{constructor(){}successCode(){const e=document.querySelector(".container_form"),t=document.createElement("DIV"),a=document.createElement("DIV"),n=document.createElement("IMG"),r=document.createElement("H3"),l=document.createElement("P"),s=document.createElement("BUTTON");t.classList.add("success"),a.classList.add("success_illustration"),r.classList.add("success_title"),l.classList.add("success_message"),s.classList.add("success_btn"),n.src="assets/images/icon-complete.svg",n.alt="Ilustracon del completado correctamente",r.textContent="Thank you!",l.textContent="We've added your card details",s.textContent="Continue",s.addEventListener("click",(()=>{window.location.reload()})),a.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(l),t.appendChild(s),this.limpiarHTML(e),e.appendChild(t)}imprimirAlerta(e,t){this.limpiarAlerta(t);const a=document.createElement("P");return a.classList.add("alerta"),a.textContent=e,t.classList.add("alerta_input"),t.parentElement.appendChild(a),!0}resetDataCard(e){document.querySelector(`#illustration_card-${e.id}`).textContent={name:"Jane Appleseed",number:"0000 0000 0000 0000",month:"00",year:"00",cvc:"000"}[e.name]}realTimeCard(e){document.querySelector(`#illustration_card-${e.id}`).textContent=e.value}formatearNumero(e){let t="";for(let a=0;a<e.length;a++)" "===e[a]||(t+=e[a]),3!==a&&8!==a&&13!==a||(t+=" ");return t}formatDate(e,t){return e[1].concat(t)}addZero(e){return e.length<2?"0".concat(e):e}limpiarAlerta(e){const t=e.parentElement.querySelector(".alerta");t&&(t.remove(),e.classList.remove("alerta_input"))}limpiarHTML(e){for(;e.firstElementChild;)e.firstElementChild.remove()}}