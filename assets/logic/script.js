const input = document.querySelector("[data-input]");
const calculate = document.querySelector("[value=equal]");
const buttons = document.querySelector(".buttons");
const equation = document.querySelector(".equation");

function buttonHandler(e) {
  const btn = e.target;
  let value = btn.value;
  if(btn.classList.contains("numeric")) {
    numericHandler(value);
  } else if(btn.classList.contains("operator")) {
    operatorHandler(value);
  } else if(btn.value === "equal") {
    equalHandler();
  }
}

let solution;
let input1;
let input2;
let op;

function numericHandler(value) {
  input.value += value;
} 

function operatorHandler(value) {
  input1 = parseInt(input.value);
  op = value;

  equation.innerHTML += `${input.value} ${value} `;
  input.value = "";
}

function equalHandler() {
  equation.innerHTML = `${input1} ${op} ${input.value} =`;

  input2 = parseInt(input.value);
  switch(op) {
    case '+':
      solution = input1 + input2;
      break;
  }
  input.value = solution;
}

buttons.addEventListener("click", buttonHandler);

// calculate.addEventListener("click", function() {
//   console.log(input.value);
// });

window.addEventListener("DOMContentLoaded", function() {
  input.focus();
});