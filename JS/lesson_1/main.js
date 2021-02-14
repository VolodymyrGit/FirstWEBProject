// alert('Hello JS');


/* Datatypes 
    - string => '', "", ``(es6)
    - number => 20, 20.1
    - boolean => true, false
    - null 
    - undefined
    - symbol(es6)
    - bigint(es9)
    - object => object, array
*/

// es => ecmascript
// es6 => ecmascript 2015 => 2016
// javascript, es6+

// Variables
// - var
// - let(es6)
// - const(es6)

// var a = 100; // number
// let b = 'Arsenal'; // string
// const c = false; // boolean

// alert(a);
// console.log(a);
// a = 200;
// console.log(a);
// // a = a + 50;
// a += 50;
// console.log(a);
// a = 'some text';
// console.log(a);
// var a = 'opacha';
// console.log(a);

// console.log(b); // let
// b = 'Arsenal FC';
// console.log(b);
// b = 1886;
// console.log(b);
// let b = 'opacha'; // error

// console.log(c); // const
// c =  true; // error

// console.log(q);
// let q = 10;

// let d; // undefined
// let e = null; // null
// let f = Symbol(); //symbol
// let g = BigInt(1n); // bigint

// let obj = {};
// let obj = new Object();

// let arr = [];
// let arr = new Array();

/* 
break 	do 	if	 switch	 typeof
case 	else	in	this	var let const
catch	false	instanceof	       throw     void
continue	finally	new	 true    while
default	for	null	try	with
delete	function	return
*/

// alert('Hello JS');
// let mes = confirm('Do you like coffee?');
// console.log(mes);

// console.log(confirm('Do you like coffee?'));
// console.log(prompt('write some text'));

// document.write('<h2 style="color: red"> dsadsadsadsa</h2>');

// let str1 = 'Hello';
// let str2 = str1;
// console.log(str2);


// let str1 = 'Hello';
// let str2 = ' world';
// let res = str1 + str2;
// console.log(res);

// let n1 = '10';
// let n2 = 2;
// console.log(n1 + n2);
// console.log(n1/n2);
// console.log(n1-n2);
// console.log(n1*n2);
// NaN => Not-a-Number

// console.log(1/0);
// NaN
// Infinity
// -Infinity

// console.log(typeof null);

// JS operators
// +, -, /, *, %, **(es6)
// =, ==, ===, !, !=, !==
// <, >, <=, >=, &&, ||
// Інкремент ++і і++
// Декремент --і і--

// let a = 1;
// let b = ++a;
// console.log('b', b);
// console.log('a', a);

// if(){ }
// else if(){}
// else{}

// let n1 = 10;
// let n2 = '10';
// if(n1 !== n2){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// false, null, undefined, '', 0

// let ask = prompt();
// if(!ask){
//     console.log('Empty string');
// }
// else{
//     console.log(ask);
// }

// switch (key) {
//     case value:
//         break;
//     case value1:
//     case value1:
//         break;
//     default:
//         break;
// }

// let country = prompt('write country car');
// switch (country) {
//     case 'germany':
//         console.log('BMW, AUDI, VW');
//         break;
//     case 'japan':
//     case 'south korea':
//         console.log('Kia, Hyundai, Nissan');
//         break;
//     default:
//         console.log('wrong country car');
//         break;
// }

// Цикли for, while, do..while, for..in, for..of, for..await

// let user = {
//     name: 'Ivan',
//     age: 25,
//     'date of birth': '01.01.2021',
//     status: true,
//     bank: null,
//     phones: ['+300000'],
//     address: {
//         city: 'Lviv',
//         street: 'Franka'
//     }
// };

// console.log(user);
// console.log(user.name);
// console.log(user['name']);
// console.log(user["date of birth"]);
// console.log(user.status);
// console.log(user.bank);
// console.log(user.car);
// console.log(user.phones[0]);
// console.log(user.address);
// console.log(user.address.street);

// let user = {
//     name: 'Ivan',
//     age: 25
// };
// console.log(user);
// user.name = "Petr";
// user.city = 'Lviv';
// console.log(user);
// delete user.age;
// console.log(user);

// let user = {
//     name: 'Ivan',
//     age: 25,
//     city: 'Lviv'
// };

// for (const key in user) {
//     console.log(key, user[key]);
// }

// let user = {
//     name: 'Ivan',
//     age: 25,
//     city: 'Lviv',
//     showName(){
//         // console.log('Name: ' + this.name);
//         console.log(`Name: ${this.name} $`);
//     }
// };

// user.showName();

// Object.defineProperty(user, 'showName', {
//     writable: false,
//     configurable: false, 
//     enumerable: false
// })

// for (const key in user) {
//     console.log(key, user[key]);
// }

// function User(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// User.prototype.showName = function() {
//     console.log('Name: ' + this.name);
//     console.log(`Name: ${this.name} $`);
// }

// let us = new User('Ivan', 22, 'Kyiv');
// console.log(us);

// function Declaration, expression, arrow(es6), construction, generator

// Declaration

// function nameFunc(param?, param1?...){
//     тіло функції
// }

// function sayHello(){
//     console.log('Hello JS');
// }

// sayHello();

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// sayHello('Ivan');
// sayHello('Petro');
// sayHello();

// function sayHello(name, sname){
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello('Ivan', 'Ivanov');

// function sayHello(name, sname){
//     if(!sname){
//         console.log(`Hello ${name}`);
//     }
//     else{
//         console.log(`Hello ${name} ${sname}`);
//     }
// }

// sayHello('Ivan', 'Ivanov');
// sayHello('Ivan');

// function sayHello(name, sname){
//     name = name || 'Guest';
//     sname = sname || 'Guestovych';
//     console.log(`Hello ${name} ${sname}`);
// }

// function sayHello(name='Guest', sname='Guestovych'){
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello('Ivan', 'Ivanov');
// sayHello('Ivan');
// sayHello();

// function sayHello(name){
//     console.log(`Hello ${name.toUpperCase()}`);
// }
// sayHello('Ivan');
// sayHello();

// function sum(){
//     console.log(arguments);
//     for (let index = 0; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// sum(1,2,3);


// function sum(...arg){
//     console.log(arguments);
//     console.log(arg);
// }
// sum(1,2,3);

// let str = 'Hello';
// console.log(str.charAt(0));
// console.log(str[0]);

// function sayHello(){
//     return `Hello JS`;
// }

// function sayHello(name){
//     if(!name){
//         return `Hello`;
//     }
//     else{
//         return `Hello ${name}`;
//     }
// }
// console.log(sayHello('Ivan'));

// Expression
// let name = function(){}

// sayHello();
// let sayHello = function(){
//     console.log('Hello JS');
// }

// let sayHello = function(name){
//     if(!name){
//         return `Hello`;
//     }
//     else{
//         return `Hello ${name}`;
//     }
// }
// console.log(sayHello('Ivan'));

// let sayHello = function(name){
//     return !name ? `Hello` : `Hello ${name}`
// }
// console.log(sayHello('Ivan'));

// Arrow
// let name = () => {}
// let sum = (a,b) => a + b;

// let sayHello = name => !name ? `Hello` : `Hello ${name}`;
// console.log(sayHello('Ivan'));

// let myName = prompt('write your name');
// if (myName == 'admin') {
//     let password = prompt('write your password');
//     if (password == 'master') {
//         console.log('welcome');
//     } 
//     else if (myName == null) {
//         console.log('canceled');
//     } 
//     else {
//         console.log('wrong password');
//     }
// } 
// else if (myName == null) {
//     console.log('canceled');
// } 
// else {
//     console.log('other');
// }

// Error
// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// throw new Error('some text')

// try {
//     throw new Error('some text')
// } catch (error) {
//     console.log(error);
// }
// finally {
//     console.log('works');
// }