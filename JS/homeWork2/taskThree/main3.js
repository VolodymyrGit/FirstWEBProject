function math(number1 = 1, number2 = 1, operation) {
    if (operation == "*") {
        console.log(number1 + "*" + number2 + "=" + (number1 * number2));
    }
    else if (operation == "/") {
        console.log(number1 + "/" + number2 + "=" + (number1 / number2));
    }
    else if (operation == "+") {
        console.log(number1 + "+" + number2 + "=" + (number1 + number2));
    }
    else if (operation == "-") {
        console.log(number1 + "-" + number2 + "=" + (number1 - number2));
    }
};
let number1 = prompt("Enter first number");
let number2 = prompt("Enter second number");
let operation = prompt("Enter some of this operation (* / + -)");
try {
    if (number1 == false || number2 == false || operation == false) {
        throw new SyntaxError("Ooops");
    }
    math(number1, number2, operation)
} catch (error) {
    console.log(error.message);
}
// 3) Напишіть функцію, яка прийматиме два числа і тип операції над ними (множення
// ділення, додавання віднімання). Передбачити відловлювання exceptions за умови
// некоретних вхідних даних.