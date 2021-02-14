// let arr1 = new Array();
// let arr2 = [];

// let arr3 = new Array(5);
// let arr4 = [5];
// let arr5 = Array.of(5);

// console.log('arr3',arr3);
// console.log('arr4',arr4);
// console.log('arr5',arr5);

// let arrNames = ['Ivan','Petro','Pavlo'];
// console.log(arrNames);
// console.log(arrNames[2]);
// console.log(arrNames.length);
// arrNames[2] = 'Alina';
// console.log(arrNames);
// arrNames[3] = 'Oksana';
// console.log(arrNames);
// arrNames[10] = 'Iryna';
// console.log(arrNames);
// console.log(arrNames[5]);

// let fruits = ['orange', 'apple'];
// let veggies = ['potato', 'tomato'];
// let salad = fruits.concat(veggies);
// // console.log('fruits', fruits);
// // console.log('veggies', veggies);
// console.log('salad', salad);

// salad.reverse();;
// console.log('----------- after reverse --------------');
// console.log('salad', salad);

// salad.sort();
// console.log('----------- after sort --------------');
// console.log('salad', salad);

// // [10,1,22,3,12,4].sort((a,b) => a - b)

// // let saladStr = salad.join();
// // console.log(saladStr);
// // console.log(saladStr.split(' '));

// // shift
// let shift = salad.shift();
// console.log('----------- after shift --------------');
// console.log('shift', shift);
// console.log('salad', salad);

// // unshift
// let unshift = salad.unshift('garlic');
// console.log('----------- after unshift --------------');
// console.log('unshift', unshift);
// console.log('salad', salad);

// // pop
// let pop = salad.pop();
// console.log('----------- after pop --------------');
// console.log('pop', pop);
// console.log('salad', salad);

// // push
// let push = salad.push('onion','milk');
// console.log('----------- after push --------------');
// console.log('push', push);
// console.log('salad', salad);

// let arrNumbers = [1,22,55,33,66,44];
// console.log(arrNumbers);
// let splice = arrNumbers.splice(1,0,'dsadsa','dsq');
// console.log('arrNumbers', arrNumbers);
// console.log('splice', splice);

// let arrNumbers = [1,22,55,33,66,44,55];
// for (let index = 0; index < arrNumbers.length; index++) {
//    console.log(arrNumbers[index]);
// }
// .forEach(callback(value,index,array))
// arrNumbers.forEach(function(value,index,array){
//     console.log(value,index,array);
// })
// arrNumbers.forEach(function(value){
//     console.log(value);
// })
// arrNumbers.forEach((value) => {
//     console.log(value);
// })

// let pos = arrNumbers.indexOf(55);
// console.log('indexOf =>', pos);
// console.log('arrNumbers', arrNumbers);

// let poslast = arrNumbers.lastIndexOf(55);
// console.log('lastIndexOf =>', poslast);
// console.log('arrNumbers', arrNumbers);

// let check = arrNumbers.includes(11);
// console.log(check);

// let slice = arrNumbers.slice(2);
// let slice = arrNumbers.slice(2,5);
// let slice = arrNumbers.slice(-4,-1);
// console.log('arrNumbers', arrNumbers);
// console.log('slice', slice);

// toString
// console.log(arrNumbers.toString());
// console.log(arrNumbers.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));

// let price = [699,799,999,1199];
// console.log('price', price);

// // map(callback(value, index, array))

// // let dollars = price.map(val => '$'+ val);
// // let dollars = price.map(function(val){
// //     val = '$' + val;
// //     return val;
// // });
// // console.log(dollars);
// let hryvnia = price.map(val => Math.round(val * 28.1) + ' грн');
// console.log(hryvnia);

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '$699'
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '$799'
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '$999'
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '$1199'
//     }
// ];

// console.log(phones);

// let phonesHR = phones.map(phone => {
//     // console.log(phone.price);
//     phone.price = phone.price.slice(1) * 28 + ' грн'
//     return phone
// })
// console.log(phonesHR);


// let price = [699,799,999,1199];
// console.log('price',price);
// let filter = price.filter(pr => pr < 1000);
// console.log(filter);

// let arrNames = ['Alina', 'Oksana','Ira'];
// let longName = arrNames.filter(name => name.length >=5);
// console.log(longName);

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '699'
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '799'
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '999'
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '1199'
//     }
// ];

// let filterPhone = phones.filter(phone => phone.price >= 900);
// console.log(filterPhone);

// reduce((previousValue, currentValue, currentIndex, array))

// let price = [699,799,999,1199];
// console.log('price',price);

// let sum = price.reduce((total, elem) => total + elem, 0);
// console.log(sum);

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '699'
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '799'
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '999'
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '1199'
//     }
// ];

// let sum = phones.reduce((total, phone) => total + +phone.price, 0)
// console.log(sum);

// let num = '100.99px';
// let n1 = parseInt(num);
// console.log(n1);
// let n2 = parseFloat(num);
// console.log(n2);
// let n3 = +num;
// console.log(n3);

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '699',
//         count: 4
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '799',
//         count: 3,
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '999',
//         count: 2
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '1199',
//         count: 1
//     }
// ];

// let sum = phones
//     .reduce((total, phone) => total + phone.price*phone.count, 0)

// console.log(sum);

// let price = [699,799,999,1199];
// price.reduce((previousValue,currentValue,currentIndex,array)=>{
//     console.log('previousValue', previousValue);
//     console.log('before', previousValue,currentValue,currentIndex,array);
//     previousValue = previousValue + currentValue;
//     console.log('after',previousValue,currentValue,currentIndex,array);
//     return previousValue
// }, 0)

// let some = price.reduce((prev, current) => {
//     if(current < 900){
//         prev.push(current)
//     }
//     return prev
// }, []);

// console.log(some);

// [].reduceRight

// // some(callback(value, index, array))
// let price = [699,799,999,1199];
// let some = price.some(elem => elem > 2000);
// console.log(some);

// every(callback(value, index, array))
// let price = [699,799,999,1199];
// let every = price.every(elem => elem > 100);
// console.log(every);

// let price = [699,799,999,1199];
// let index = price.findIndex(elem => elem === 999);
// console.log(index);

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '699',
//         count: 4
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '799',
//         count: 3,
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '999',
//         count: 2
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '1199',
//         count: 1
//     }
// ];

// let index = phones.findIndex(phone => phone.id === 2);
// console.log(index); 


// let price = [699,799,999,1199];
// // let elem = price.find(elem => elem > 700);
// let elem = price.find((value, index) => {
//     if(value > 700){
//         console.log(index);
//         return value
//     }
// });
// console.log(elem);

// let price = [699,799,999,1199];
// let iterator = price.values();
// // for (const value of iterator) {
// //     console.log(value);
// // }
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let price = [699,799,999,1199];
// let iterator = price.entries();
// for (const value of iterator) {
//     console.log(value);
// }
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let price = [699,799,[999,1199]];
// console.log(price);
// let newPrice = price.flat();
// console.log(newPrice);

// let price = [699,799,[999,1199]];
// console.log(price);
// let newPrice = price.flatMap(x => [x * 2]);
// console.log(newPrice);

// function factorial(x){
//     let result = 1;
//     for(let i=x; i>=1; i--){
//         result = result * i
//     }
//     console.log(result);
// }

// factorial(5);

// function factorial(x){
//     if(x<=1){
//         return 1
//     }
//     return x * factorial(x - 1);
// }

// console.log(factorial(5));

// const factorial = x => x <= 1 ? 1 : x * factorial(x - 1);
// console.log(factorial(6));

// let phones = [
//     {
//         id: 1,
//         name: 'iPhone 12 Mini',
//         price: '699',
//         count: 4
//     },
//     {
//         id: 2,
//         name: 'iPhone 12',
//         price: '799',
//         count: 3,
//     },
//     {
//         id: 3,
//         name: 'iPhone 12 Pro',
//         price: '999',
//         count: 2
//     },
//     {
//         id: 4,
//         name: 'iPhone 12 Pro Max',
//         price: '1199',
//         count: 1
//     }
// ];

// let sum = phones
//     .filter(phone => phone.price > 900)
//     .map(phone => phone.price * 28)
//     .reduce((total, price) => total + price, 0);
// console.log(sum);