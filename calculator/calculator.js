 
function calculate(num) {
    calculator.screen.value += num;
}
function equals() {
    calculator.screen.value = eval(document.calculator.screen.value);
}

function clean() {
    calculator.screen.value = "";
}
