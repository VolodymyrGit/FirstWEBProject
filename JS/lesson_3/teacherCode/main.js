// console.log(a);
// var a = 10;

// function sayHello(){
//     let phrase = 'hello';
//     console.log(phrase);
// }

// sayHello();
// console.log(phrase);

// for(let i=1; i<=10; i++){

// }
// console.log(i);

// LexicalEnvironment

// function sayHello(name){
//     // LexicalEnvironment { name: 'Ivan' }
//     let phrase = `hello ${name}`;
//      // LexicalEnvironment { name: 'Ivan', phrase: 'Hello Ivan' }
//     console.log(phrase);
//     // LexicalEnvironment {}
// }

// sayHello('Ivan');
// sayHello('Petro');

// let count = 0;
// function counter(){
//     count++;
//     console.log(count);
// }

// counter();
// counter();
// counter();

// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }

// let bannerClick = counter();
// console.log(bannerClick);
// bannerClick();
// bannerClick();
// bannerClick();

// let addBtnClick = counter();
// addBtnClick();
// addBtnClick();

// IIFE

// const MODULE = (function(){
//     let publicNumber = 10;
//     let privateString = 'Some text';
//     function showMessage(){
//         return privateString;
//     }
//     return {
//         number: publicNumber,
//         showMessage: showMessage
//     }
// }());

// console.log(MODULE);
// console.log(MODULE.number);
// console.log(MODULE.showMessage());

// const SHOP = (function(){
//     let bank = 1000;
//     let beerCount = 100;
//     let beerPrice = 45;

//     function checkBeer(){
//         return beerCount;
//     }

//     function checkBank(){
//         return bank;
//     }

//     function sellBeer(count){
//         beerCount -= count;
//         bank += beerPrice * count;
//     }

//     return {
//         beerCount: checkBeer,
//         checkBank: checkBank,
//         sellBeer: sellBeer
//     }
// }());

// console.log(SHOP);
// console.log('Beer count =>', SHOP.beerCount());
// console.log('Bank =>', SHOP.checkBank());
// SHOP.sellBeer(10);
// console.log('Beer count =>', SHOP.beerCount());
// console.log('Bank =>', SHOP.checkBank());

// import { checkBank } from './shop.js';
// import { checkBeer } from './shop.js';
// import { sellBeer } from './shop.js';

// console.log('Beer count =>', checkBeer());
// console.log('Bank =>', checkBank());
// sellBeer(10);
// console.log('Beer count =>', checkBeer());
// console.log('Bank =>', checkBank());

// import * as SHOP from './shop.js';

// console.log(SHOP);
// console.log('Beer count =>', SHOP.checkBeer());
// console.log('Bank =>', SHOP.checkBank());
// SHOP.sellBeer(10);
// console.log('Beer count =>', SHOP.checkBeer());
// console.log('Bank =>', SHOP.checkBank());
// SHOP.sellChips(10);
// console.log('Chips count =>', SHOP.checkChips());
// console.log('Bank =>', SHOP.checkBank());

// import * as SHOP from './shop.js';

// console.log(SHOP);
// console.log('Beer count =>', SHOP.checkProduct('beer'));
// console.log('Chips count =>', SHOP.checkProduct('chips'));
// console.log('Bank =>', SHOP.checkBank());
// SHOP.sell('beer', 20);
// SHOP.sell('chips', 10);
// console.log('Beer count =>', SHOP.checkProduct('beer'));
// console.log('Chips count =>', SHOP.checkProduct('chips'));
// console.log('Bank =>', SHOP.checkBank());

// function User(userName, userSurname){
//     // this => {}
//     this.name = userName;
//     this.surname = userSurname;
//     // returt this
// }

// let user1 = new User('Ivan', 'Ivanov');
// console.log(user1);

// let user2 = {
//     name: 'Ivan',
//     surname: 'Ivanov'
// };

// function User(userName, userSurname){
//     this.name = userName;
//     this.surname = userSurname;
// }

// User.prototype.showInfo = function(){
//     console.log(`${this.name} ${this.surname}`);
// }

// let user1 = new User('Ivan', 'Ivanov');
// console.log(user1);
// user1.showInfo();

// class User {
//     constructor(userName, userSurname){
//         this.name = userName;
//         this.surname = userSurname;
//     }
// }

// let us = new User('Petro','Petriv');
// console.log(us);


// class User {
//     constructor(userName, userSurname){
//         this.name = userName;
//         this.surname = userSurname;
//     }
//     showInfo(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// let us = new User('Petro','Petriv');
// console.log(us);
// us.showInfo();
// console.log(Object.getOwnPropertyNames(User.prototype));

// class User{
//     #year;
//     constructor(userName, userSurname, userAge){
//         this.name = userName;
//         this.surname = userSurname;
//         this.#year = this.#setYear(userAge);
//     }

//     getYear(){
//         return this.#year;
//     }

//     showInfo(){
//         console.log(`${this.name} ${this.surname}`);
//     }

//     #setYear(age){
//         return new Date().getFullYear() - age;
//     }
// }

// let us = new User('Petro','Petriv', 23);
// console.log(us);
// console.log(us.getYear());


// function CoffeeMachine(power, waterAmount){
//     console.log(`Coffee machine was created with power: ${power}`);

//     function getBoilTime(){
//         let time = 0.1 * power * waterAmount;
//         console.log(`Time: ${time} ms`);
//         return time;
//     }

//     function onReady(){
//         console.log('Coffee is ready');
//     }

//     this.run = function(){
//         setTimeout(onReady, getBoilTime());
//     }
// }

// let machine = new CoffeeMachine(100, 200);
// machine.run();

// function CoffeeMachine(power, waterAmount){
//     console.log(`Coffee machine was created with power: ${power}`);
//     const WATER_HEAT_CAPACITY = 4200;
//     function getBoilTime(){
//         let time = WATER_HEAT_CAPACITY * waterAmount / power;
//         console.log(`Time: ${time} ms`);
//         return time;
//     }

//     function onReady(){
//         console.log('Coffee is ready');
//     }

//     this.run = function(){
//         setTimeout(onReady, getBoilTime());
//     }
// }

// let machine = new CoffeeMachine(100, 200);
// machine.run();

// function CoffeeMachine(power){
//     console.log(`Coffee machine was created with power: ${power}`);
//     this.waterAmount = 0;
//     let self = this;
//     const MAX_AMOUNT = 1500;
//     const WATER_HEAT_CAPACITY = 4200;
//     function getBoilTime(){
//         let time = WATER_HEAT_CAPACITY * self.waterAmount / power;
//         console.log(`Time: ${time} ms`);
//         return time;
//     }

//     function onReady(){
//         console.log('Coffee is ready');
//     }

//     this.run = function(){
//         setTimeout(onReady, getBoilTime());
//     }
//     self.setWaterAmount = function(amount){
//         if(amount < 0) throw new Error('Amount should be positive');
//         if(amount > MAX_AMOUNT) throw new Error(`Amount should be less then ${MAX_AMOUNT}`);
//         else{
//             self.waterAmount = amount;
//             console.log(`${amount} of water was added`);
//         }
//     }
// };

// let machine = new CoffeeMachine(100);
// machine.setWaterAmount(20);
// machine.run();

// let animal = {
//     eats: true,
//     sleep: true
// }

// let rabbit = {
//     jumps: true
// }

// console.log('animal', animal);
// console.log('rabbit', rabbit);

// console.log(rabbit.jumps);
// console.log(rabbit.eats);

// let animal = {
//     eats: true,
//     sleep: true
// }

// let rabbit = {
//     __proto__: animal,
//     jumps: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal

// let rabbit = {
//     jumps: true
// }

// Object.setPrototypeOf(rabbit, animal);

// console.log('animal', animal);
// console.log('rabbit', rabbit);

// console.log(rabbit.jumps);
// console.log(rabbit.eats);


// function Person(name) {
//     this.name = name;
// }
// Person.prototype.walk = function(){
//     console.log(`${this.name} is walking`);
// }

// function Programmer(name, programmingLanguage){
//     Person.call(this, name);
//     this.programmingLanguage = programmingLanguage;
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.writeCode = function(){
//     console.log(`${this.name} is coding in ${this.programmingLanguage}`);
// }

// let pp = new Programmer('Pablo', 'Javascript');
// pp.walk();
// pp.writeCode();

// console.log(pp instanceof Programmer);
// console.log(pp instanceof Person);

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     walk(){
//         console.log(`${this.name} is walking`);
//     }
// }

// class Programmer extends Person{
//     constructor(name, programmingLanguage){
//         super(name);
//         this.programmingLanguage = programmingLanguage;
//     }
//     writeCode(){
//         console.log(`${this.name} is coding in ${this.programmingLanguage}`);
//     }
//     walk(){
//         super.walk();
//         console.log('wqewqewqeq');
//     }
// }

// let pp = new Programmer('Alina', 'Java');
// pp.walk();
// pp.writeCode();
// console.log(pp instanceof Programmer);
// console.log(pp instanceof Person);

class SoundPlayer {
    constructor(sound){
        this.sound = sound;
    }
    on(){
        console.log(`Player is on`);
    }
    off(){
        console.log(`Player is off`);
    }
}

class CassetPlayer extends SoundPlayer{
    constructor(sound){
        super(sound);
    }
    scrollSound(time, direction){
        console.log(`Scroll sound time: ${time}, direction: ${direction}`);
    }
}

let cs = new CassetPlayer('track #17');
console.log(cs);
cs.on();
cs.scrollSound('10s', 'right');
cs.off();

class CDPlayer extends CassetPlayer {
    // constructor(sound){
    //     super(sound);
    // }
}