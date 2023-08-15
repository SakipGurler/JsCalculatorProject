const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let screenIt = [];
let accumulateCalc = "";

function calculate(buttonValue) {
  if (buttonValue === "CLEAR") {
    screenIt = [];
    accumulateCalc = "";
    screenDisplay.textContent = "";
  } else if (buttonValue === "=") {
    try {
      const result = eval(accumulateCalc);
      screenDisplay.textContent = result;
    } catch (error) {
      screenDisplay.textContent = "Error";
    }
  } else {
    screenIt.push(buttonValue);
    accumulateCalc = screenIt.join("");
    screenDisplay.textContent = accumulateCalc;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    calculate(buttonValue);
  });
});
