"use stric";

//* Imports

//* Instancias

//* Selectors

export default class UI {
    constructor () {}

    successCode() {
        const container = document.querySelector(".container_form");

        const containerSuccess = document.createElement("DIV");
        const containerImg = document.createElement("DIV");
        const imgSuccess = document.createElement("IMG");
        const titleSuccess = document.createElement("H3");
        const messageSuccess = document.createElement("P");
        const btnSuccess = document.createElement("BUTTON");

        containerSuccess.classList.add("success");
        containerImg.classList.add("success_illustration");
        titleSuccess.classList.add("success_title");
        messageSuccess.classList.add("success_message");
        btnSuccess.classList.add("success_btn");

        imgSuccess.src = "assets/images/icon-complete.svg";
        imgSuccess.alt = "Ilustracon del completado correctamente"
        titleSuccess.textContent = "Thank you!"
        messageSuccess.textContent = "We've added your card details";
        btnSuccess.textContent = "Continue";

        btnSuccess.addEventListener("click", ()=> {
            window.location.reload();
        });

        containerImg.appendChild(imgSuccess);

        containerSuccess.appendChild(containerImg);
        containerSuccess.appendChild(titleSuccess);
        containerSuccess.appendChild(messageSuccess);
        containerSuccess.appendChild(btnSuccess);

        this.limpiarHTML(container);
        container.appendChild(containerSuccess);
    }

    imprimirAlerta(msg, input) {
        this.limpiarAlerta(input);

        const alerta = document.createElement("P");
        alerta.classList.add("alerta");
        alerta.textContent = msg;
        input.classList.add("alerta_input");
        
        input.parentElement.appendChild(alerta);

        return true;
    }

    resetDataCard(input) {
        let elementCard = document.querySelector(`#illustration_card-${input.id}`);

        let data = {
            name : "Jane Appleseed",
            number : "0000 0000 0000 0000",
            month : "00",
            year : "00",
            cvc : "000"
        }

        elementCard.textContent = data[input.name];
    }

    realTimeCard(input) {
        let elementCard = document.querySelector(`#illustration_card-${input.id}`);

        elementCard.textContent = input.value;
    }

    formatearNumero(numero) {
        let newNumber = "";

        for (let i = 0; i < numero.length; i++) {
            numero[i] === " " ? newNumber = newNumber : newNumber += numero[i];
            
            if(i === 3 || i === 8 || i === 13) newNumber += " ";
        }
       
        return newNumber;
    }

    formatDate(numero, key) {
        return numero[1].concat(key)
    }

    addZero(numero) {
        if(numero.length < 2) {
            return "0".concat(numero);
        } 
        return numero;
    }

    limpiarAlerta(input) {
        const alertaPrevia = input.parentElement.querySelector(".alerta");

        if(alertaPrevia) {
            alertaPrevia.remove();
            input.classList.remove("alerta_input");
        }
    }

    limpiarHTML(nodo) {
        while(nodo.firstElementChild) nodo.firstElementChild.remove();
    }
}