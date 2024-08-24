"use stric";

//* Imports
import Form from "./Form.js";

//* Instancias
const form = new Form();

export default class App {
    constructor() {}

    initApp() {
        form.inputVacios();
        form.cardNumber();
        form.sendForm();
        form.dateFormat();
        form.validateCVC();
    }
}
