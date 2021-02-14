let employeeSalaries = {
    employee1: 12000,
    employee2: 10000,
    employee3: 15000,
    employee4: 100000,
    employee5: 5000
};

let sumSalaries = 0;
for (const key in employeeSalaries) {
    console.log(employeeSalaries[key]);
    sumSalaries = sumSalaries + employeeSalaries[key];
}
console.log(sumSalaries);
// 2) Є об'єкт employeeSalaries із зарплатами працівників.
// Напишіть код, який виведе суму всіх зарплат працівників . Якщо об'єкт порожній, то
// результат повинен бути 0.