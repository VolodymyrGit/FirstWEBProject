// let products = ["Phone", "Hoover", "Radio", "Laptop"];
// console.log(products[products.length-1]);

// 1. У нас є масив products. Скільки в ньому елементів - не знаємо, але можемо прочитати з products.length.
// Напишіть код для отримання останнього елемента products.
//-------------------------------------------------------------------------------------------------------------------

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles.splice(-2,1,"Classic");
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rep", "Reggae");
// console.log(styles);

// 2. Створіть масив styles з елементами «Джаз», «Блюз».
// * Додайте в кінець значення «Рок-н-Ролл»
// * Замініть передостаннє значення на «Класика». 
//   Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
// * Видаліть перше значення масиву і виведіть його на консоль.
// * Додайте в початок значення «Реп» і «Реггі».
//-------------------------------------------------------------------------------------------------------------------

// function find(arr, value) {
//    for (let i = 0; i < arr.length; i++) {
//        if(arr[i] == value) {
//            return i;
//        }
//    }
//    return -1;
// }

// let a = [1,3,5,7,9,0,8,6,5,4,2];
// console.log(a);
// console.log(find(a, 5));

// Максимум:
// 3. Створіть функцію find (arr, value), яка шукає в масиві arr значення value і повертає його номер, 
// якщо знайдено, або -1, якщо не знайдено.
//-------------------------------------------------------------------------------------------------------------------

// function filterRange(array, a, b) {
//     let newArray = [];
//     for (let i = a; i < b; i++) {
//         newArray.push(array[i]);
//     }
//     return newArray;
// }

// let a = [1,3,5,7,9,0,8,6,5,4,2];
// console.log(a);

// let newArray = filterRange(a, 3, 6);
// console.log(newArray);

// 4.Створіть функцію filterRange (array, a, b), яка приймає масив чисел array і повертає новий масив, 
// який містить тільки числа з array з діапазону від a до b → [a, b] - проміжки включаються.
//-------------------------------------------------------------------------------------------------------------------

// let s = "my-short-string";
// console.log(a.camelize(s));

// let a = ["my", "short", "string"];
// console.log(a.join);

// function camelize(str) {
//     return str
//         .split("-")
//         .map((val, index) => {
//             if(index > 0){
//                 return val.charAt(0).toUpperCase() +val.slice(1).toLowerCase()
//             }
//             return val
//         })
//         .join(' ')
// }
// console.log(camelize('my-short-string'));
// 5. Напишіть функцію camelize (str), яка перетворює такі рядки «my-short-string» в «myShortString».
// Тобто, дефіси видаляються, а всі слова після них отримують велику літеру.