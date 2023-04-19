let display = document.querySelector('.display');

function addToDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
}

function calculate() {
    let result = eval(display.textContent);
    display.textContent = result;
}
