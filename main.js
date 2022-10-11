class Calculator {
  sum(num1, num2) {
    return num1 + num2;
  }
  minus(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

class Display {
  constructor(displayBefore, displayActual) {
    this.displayActual = displayActual;
    this.displayBefore = displayBefore;
    this.calculatorN = new Calculator();
    this.valueActual = "";
    this.valueBefore = "";
    this.typeOperation=undefined;
    this.sign={
      sum: '+',
      minus: '-',
      multiply: 'x',
      divide: '/'
    }
  }

  addNumber(number) {
    if (number === "." && this.valueActual.includes(".")) {
      return;
    }

    this.valueActual = this.valueActual.toString() + number.toString();
    this.printValue();


  }

  deleteNumber() {
    this.valueActual = this.valueActual.toString().slice(0, -1);
    this.printValue();
  }

  printValue() {
    this.displayActual.textContent = this.valueActual;
    this.displayBefore.textContent = `${this.valueBefore} ${this.sign[this.typeOperation] || ''}`;
  }

  deleteAll() {
    this.valueActual = "";
    this.valueBefore = "";
    this.typeOperation="";
    this.printValue();
  }

  calculate() {
    const valueBefore = parseFloat(this.valueBefore);
    const valueActual = parseFloat(this.valueActual);

    if( isNaN(valueBefore) || isNaN(valueActual)){
      return
    }
    this.valueActual=this.calculatorN[this.typeOperation](valueBefore,valueActual);
  }

  operationsType(type){

    this.typeOperation !=="equal" && this.calculate();
    this.typeOperation = type;
    this.valueBefore=this.valueActual || this.valueBefore;
    this.valueActual="";
    this.printValue();
  }

}

const theme = document.querySelector("#theme");

const numbers = document.querySelectorAll(".number");

const operation = document.querySelectorAll(".operation");
console.log(operation)

const displayBefore = document.querySelector("#displayBefore");

const displayActual = document.querySelector("#displayActual");

const calculadoraN = new Calculator();

const display = new Display(displayBefore, displayActual);

const circle=document.querySelector("#circle")

const style=document.querySelector("#style")

let count=1;

numbers.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    display.addNumber(boton.innerHTML);
  });
});

operation.forEach((boton)=>{
  boton.addEventListener("click", (e)=>{
    display.operationsType(boton.value)
  })
})

circle.addEventListener("click", e=>{

  if (count===1){
    style.href="mainOne.css"
    count=2;
  } else if( count===2){
    style.href="mainTwo.css"
    count=3
  } else {
    style.href="mainThree.css"
    count=1
  }
})

