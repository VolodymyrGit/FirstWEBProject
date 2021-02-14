// let nums = [1,5,-3,50,12,89,3,-44,92,20,0,-74,47,7,10,-2,6,-9,4,100,80,7,8,1,99];

// let sortedNums = nums.sort((a, b) => b - a);
// console.log(sortedNums);

// let numsReverse = nums.sort((a, b) => a - b);
// console.log(numsReverse);

// 1.Створити масив чисел, де буде не менше 20 значень, серед них повиннні бути як
// позитивні так і негативні значення.

// Відсортувати даний масив
// а). від найменшого до найбільшого
// б). від найбільшого до найменшого
// ------------------------------------------------------------------------------------------------------------------

// let positiveWithZero = [];
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] > 0) {
//         if((nums[i] % 10) == 0) {
//             positiveWithZero.push(nums[i]);
//         }
//     }
// }

// console.log(positiveWithZero);

// let negativeNums = [];
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] < 0) {
//         negativeNums.push(nums[i]);
//     }
// }

// console.log(negativeNums);
// 2. відфільтрувати лише позитивні (із нулем )та лише негативні в окремі масиви.
// ------------------------------------------------------------------------------------------------------------------

// class Student {
//     constructor(age, groupName) {
//         this.age = age;
//         this.groupName = groupName;
//     }
// }

// let students = [new Student(11, "C"),
//     new Student(40, "JavaAdvanced"),
//     new Student(15, "Pyton"),
//     new Student(22, "C++"),
//     new Student(18, "Pyton"),
//     new Student(27, "C#"),
//     new Student(70, "Pyton"),
//     new Student(21, "HR"),
//     new Student(18, "JavaCore"),
//     new Student(31, "СomplexJavaCourse")];

// console.log(students);

// function makeAnArrayFromStudentsGroupName(array) {
//     let newArray = [];
//     array.forEach(element => { newArray.push(element.groupName); });
//     return newArray;
// }

// let newArray = makeAnArrayFromStudentsGroupName(students);
// console.log("\nМасив з назв Груп :");
// console.log(newArray);

// function calculateTheTotalValueOfAgeForAllObjects(array) {
//     let newArray = [];
//     array.forEach(element => { newArray.push(element.age); });
//     let countAge = 0;
//     newArray.forEach(element => {
//         countAge += element;
//     });
//     return countAge;
// }

// let countAge = calculateTheTotalValueOfAgeForAllObjects(students);
// console.log("\nСумарний вік студентів - " + countAge);


// function findOutIfThereAreUnderageStudentsInTheGroup(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].age < 18) {
//             count ++;
//             if(count === 1) {
//                 console.log("Неповнолітні студети :");
//             }
//             console.log("Student from course - " + array[i].groupName + ", вік - " + array[i].age);
//         }
//     }
//     if(count === 0) {
//         console.log("Неповнолітніх студентів немає.");
//     }
// }


// console.log("");
// findOutIfThereAreUnderageStudentsInTheGroup(students);
// 3) Створити масив із 10 об’єктів Student {
// age: <some data> ,
// groupName: <some data>
// }
// а) створити окремий масив який матиме лише groupName для всіх об’єктів
// б) порахувати сумарне значення age для всіх об'єктів
// в) визначити чи є неповнолітні студенти в групі і вивести відповідне повідомлення
// Пункти a,б,в - мають бути реалізованими через ФУНКЦІЇ