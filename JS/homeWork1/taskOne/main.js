let num = prompt("Please enter some number");
let sum = 0;
let finalString = "";

for (let i = 0; i <= num; i++) {
    if (i != 0 && i != num) {
        finalString = finalString + i + "+";
    }
    else if (i == num) {
        finalString = finalString + i;
    }
    sum = sum + i;
}

console.log(finalString + " = " + sum);
// 1)
// Користувач вводить число, а програма виводить суму всіх чисел від 0 до
// числа яке ввів користувач включно. Наприклад введене число 5 , програма має
// вивести : 1+2+3+4+5 = 15