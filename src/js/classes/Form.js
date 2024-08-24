"use stric";

//* Imports
import UI from "./UI.js";

//* Instancias
const ui = new UI();

const mistakes = {
    vacio : [],
    formatWrong : false,
    yearWrong : false, 
    cvcWrong : false
};

export default class Form {
    constructor () {}

    sendForm() {
        const form = document.querySelector(".form");
        const inputs = document.querySelectorAll(".input");
        const inputNumber = document.querySelector("#number");
        
        form.addEventListener("submit", e => {
            e.preventDefault();

            for(let input of inputs) {
                this.validateInput(input);
            }

            this.validateNumber(inputNumber);
            
            if(mistakes.vacio.length === 0 && mistakes.formatWrong === false && mistakes.yearWrong === false && mistakes.cvcWrong === false) ui.successCode();
        })
        
    }

    inputVacios() {
        const inputs = document.querySelectorAll(".input");

        for(let input of inputs) {
            input.addEventListener("keyup", () => {
                this.validateInput(input);
            });
        }
    }

    cardNumber() {
        const inputNumber = document.querySelector("#number");

        inputNumber.addEventListener("keyup", e => {
            if(e.target.value && e.key !== "Backspace") {
                e.target.value = ui.formatearNumero(e.target.value);
            }
            
            this.validateNumber(e.target);
        });
    }

    validateInput(input) {
        if(input.value === "") {
            let msg = "Can't be blank";
            const err = ui.imprimirAlerta(msg, input);


            ui.resetDataCard(input);
            
            if(err) mistakes.vacio.push(input.name);
            return;
        } 

        let newArray = mistakes.vacio.filter(word => word !== input.name);

        mistakes.vacio = [...newArray];

        ui.realTimeCard(input);
        
        if(input.id !== "year" && input.id !== "cvc") ui.limpiarAlerta(input);

    }

    validateNumber(input) {
        let numero = input.value;
        let error = 0;

        for (let i = 0; i < numero.length; i++) {
            if(!parseInt(numero[i]) && numero[i] !== " " && numero[i] !== "0") {
                let msg = "Wrong format, numbers only";
                const err = ui.imprimirAlerta(msg, input);
                error++;
                mistakes.formatWrong = err;
            } else if (numero.length < 19) {
                let msg = "Wrong format";
                const err = ui.imprimirAlerta(msg, input);
                error++;
                mistakes.formatWrong = err;
            }
        }

        if (error === 0 && mistakes.formatWrong) mistakes.formatWrong = false;
    }

    validateDate(input) {
        let fecha = new Date().getFullYear().toString();
        fecha = `${fecha[2]}${fecha[3]}`;

        let fechaMin = parseInt(fecha) - 5;
        let fechaMax = parseInt(fecha) + 5;

        if(input.value < fechaMin || input.value > fechaMax) {
            let msg = "Year wrong";
            ui.imprimirAlerta(msg, input);
            mistakes.yearWrong = true;
            return;
        } 

        mistakes.yearWrong = false;
        ui.limpiarAlerta(input);
    }

    validateCVC() {
        const inputCVC = document.querySelector("#cvc");

        inputCVC.addEventListener("keyup", e => {
            if(e.target.value.length <= 2) {
                let msg = "CVC wrong";
                ui.imprimirAlerta(msg, e.target);
                mistakes.cvcWrong = true;
                return;
            }

            ui.limpiarAlerta(e.target);
            mistakes.cvcWrong = false;
        });
    }

    dateFormat() {
        const inputMonth = document.querySelector("#date");
        const inputYear = document.querySelector("#year");

        inputMonth.addEventListener("keydown", e => {
            if(e.key !== "Backspace") {
                let element = e.target;

                element.value = ui.addZero(element.value);

                if(element.value.length > 1 && element.value[1] === "1" && parseInt(e.key) < 3) {
                    element.value = ui.formatDate(element.value, e.key);
                }
            } 
            
            if(e.key === "Backspace") e.target.value = "";
        });

        inputYear.addEventListener("keydown", e => {
            if(e.key !== "Backspace") {
                let element = e.target;

                element.value = ui.addZero(element.value);

                if(element.value.length > 1 && element.value[0] === "0") {
                    element.value = ui.formatDate(element.value, e.key);
                }

                this.validateDate(element);
            }

            if(e.key === "Backspace") e.target.value = "";
        });
    }
}