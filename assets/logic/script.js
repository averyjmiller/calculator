const input = document.querySelector("[data-input]");
const calculate = document.querySelector("[value=equal]");
const buttons = document.querySelector(".buttons");
const equation = document.querySelector(".equation");

buttons.addEventListener("click", function(e) {
  const btn = e.target;
  let value = btn.value;
  if(btn.classList.contains("numeric")) {
    if(value === "decimal") {
      value = ".";
    }
    input.value += value;
  } else if(btn.classList.contains("operator")) {
    equation.innerHTML += `${input.value} ${value} `;
    input.value = "";
  }
});

calculate.addEventListener("click", function() {
  console.log(input.value);
});

window.addEventListener("DOMContentLoaded", function() {
  input.focus();
});