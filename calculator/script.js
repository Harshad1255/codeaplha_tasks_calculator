const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/\%]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (e) {
    display.value = 'Error';
  }
}

function power() {
  try {
    let base = eval(display.value);
    let exponent = prompt("Enter the exponent:");
    if (exponent !== null) {
      display.value = Math.pow(base, parseFloat(exponent));
    }
  } catch (e) {
    display.value = 'Error';
  }
}

