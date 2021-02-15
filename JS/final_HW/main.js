let number1 = document.getElementById('number1');

let number2 = document.getElementById('number2');

let calc = document.querySelector('.calculationResult');
console.log(calc);


function adding() {
    calc.textContent = parseFloat(number1.value) + parseFloat(number2.value);
}


function subtraction() {
    calc.textContent = parseFloat(number1.value) - parseFloat(number2.value);
}


function multiplication() {
    calc.textContent = parseFloat(number1.value) * parseFloat(number2.value);
}


function division() {
    calc.textContent = parseFloat(number1.value) / parseFloat(number2.value);
}