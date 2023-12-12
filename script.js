
//Creado clase calculadora

class Calculator{
    constructor(operand1Element, operand2Element){
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();
    }

    //Limpia mis operand de arriba y abajo
    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
    }

    //Actualiza mi pantalla
    updateUI(){
        const maxLength = 9;

        let operand2Display = this.operand2.toString();

        if(operand2Display.length > maxLength){
            operand2Display = operand2Display.slice(0, maxLength);
        }

        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = operand2Display;
    }

    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 === 0
            ? number
            : this.operand2.toString() + number;

        this.updateUI();
    }

    delete(){
        if(this.operand2 === 0) return;
        this.operand2 = +this.operand2.toString().slice(0, -1);

        this.updateUI();
    }

    operation(operator){
        if(this.operator){
            this.calc();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.updateUI();
    }

    calc(){
        this.verificarEasterEgg();
        switch(this.operator){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2;
            break;
            case "-":
                this.operand1 = +this.operand1 - +this.operand2;
            break;
            case "×":
                this.operand1 = +this.operand1 * +this.operand2;
            break;
            case "÷":
                this.operand1 = +this.operand1 / +this.operand2;
            break;
            case "%":
                this.operand1 = +this.operand1 * (+this.operand2 / 100);
            break;
        }
        this.operator = "";
        this.operand2 = 0;
        this.updateUI();
    }

    verificarEasterEgg() {
        if (this.operand2 === "3838") {
            alert("Te pinchis amo mi amor! ❤")
        }
    }

}

const operand1Element = document.querySelector("[data-operand-1]")
const operand2Element = document.querySelector("[data-operand-2]")
const allClearButton = document.querySelector("[data-all-clear]");
const numberButtons = document.querySelectorAll("[data-number]")
const deleteButton = document.querySelector("[data-delete]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(operand1Element, operand2Element);

allClearButton.addEventListener("click", () =>{
    calculator.clear();
})

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML);
    })
})

deleteButton.addEventListener('click', () =>{
    calculator.delete();
})

operationButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.operation(button.innerHTML);
    })
})

equalsButton.addEventListener('click', () =>{
    calculator.calc();
    //calculator.verificarEasterEgg();
}) 
