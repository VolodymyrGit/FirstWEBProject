let pas = prompt("Please enter the password");

if (pas == "pass123") {
    console.log("You are authorized");
} else if (pas == "admin") {
    console.log("You are authorized like admin");
} else {
    console.log("Wrong password");
}
// 4)
// Користувача просять ввеcти пароль. Нехай правильним паролем буде “pass123”.
// Є 3 варіанти розвитку подій :
// користувач вводить правильний пароль, виводимо, що він авторизований
// користувач вводить admin , виводимо, що він авторизований як адмін
// користувач вводить щось інще - виводимо - неправильний пароль.
//----------------------------------------------------------------------------------------
// 5)
// Вивести 10 перших чисел з ряду Фібоначі
console.log("\nFibonacci sequence");
let num = 0;
let num1 = 1;
console.log(num);
for (let i = 0; i < 4; i++) {    
    num = num + num1;
    console.log(num);
    num1 = num1 + num;
    console.log(num1);
}
console.log(num + num1);