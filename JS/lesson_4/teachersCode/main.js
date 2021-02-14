// console.log(document);
// console.log(document.body);
// console.dir(document.body.children);
// console.dir(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);
// console.log(document.body.children);
// for(let i=0; i<document.body.children.length; i++){
//     console.log(document.body.children[i]);
// }
// console.log(document.body.parentElement);

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// let box = document.getElementById('box');
// console.log(box);
// console.log(box.innerHTML);
// console.log(box.textContent);
// console.log(box.innerText);
// console.log(box.outerHTML);
// box.innerHTML += '<h1>Some text</h1>'
// box.innerHTML = '<h1>Some text</h1>';
// box.textContent = '<h1>Some text</h1>';
// box.innerText = '<h1>Some text</h1>';
// box.outerHTML = '<h1>Some text</h1>';

// let link = document.getElementById('link');
// console.log(link);
// console.dir(link);
// console.log(link.href);
// link.href = 'https://www.google.com';
// link.setAttribute('href', 'https://www.google.com');
// link.textContent = 'google';
// link.style.color = 'red';
// link.style.fontSize = '25px';
// link.style.cssText = 'color: red; font-size: 25px';
// link.classList.add('red', 'shadow');
// link.classList.remove('shadow', 'red');
// link.classList.toggle('red');
// link.classList.toggle('red');
// console.log(link.classList.contains('red'));
// console.log(link.className);
// link.className = 'shadow';
// link.classList.add('red');
// link.setAttribute('class', 'shadow');
// link.setAttribute('target', '_blank');

// .setAttribute('attr', 'value')
// .getAttribute('attr')
// .hasAttribute('attr')
// .removeAttribute('attr')

// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('rel'));
// console.log(link.hasAttribute('href'));
// console.log(link.hasAttribute('rel'));
// link.removeAttribute('href');

// console.log(link);

// let btn = document.getElementById('btn');
// console.log(btn.dataset);
// console.log(btn.dataset.name);
// console.log(btn.dataset.id);

// let textElem = document.getElementsByClassName('text');
// console.log(textElem);

// console.log(textElem);
// console.log(textElem[0]);
// console.log(textElem[1]);
// textElem.style.color = 'red'
// textElem[0].style.color = 'red'
// textElem[1].style.color = 'red'
// for(let i=0; i<textElem.length; i++){
//     textElem[i].style.color = 'red'
// }

// for (const elem of textElem) {
//     elem.style.color = 'red'
// }
// console.log(textElem.item(0));
// console.log(textElem.item(1));

// let someTag = document.getElementsByTagName('p');
// console.log(someTag);

// let userName = document.getElementsByName('userName');
// console.log(userName);

// let myBox = document.querySelector('#box');
// console.log(myBox);

// let myText = document.querySelector('.text');
// console.log(myText);

// let myText = document.querySelector('.text+p');
// console.log(myText);

// let myBox = document.querySelector('#box h1');
// console.log(myBox);

// let myText = document.querySelectorAll('.text, a, #box>h1');
// console.log(myText);

// MouseEvent
// KeyboardEvent
// FormsEvent
// DocumentEvent/Window

// MouseEvent
// click

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// const ADD_BTN = document.querySelector('.add');
// ADD_BTN.onclick = function(){
//     sayHello('Petro')
// }

// ADD_BTN.onclick = function(){
//     console.log('click 1');
// }

// ADD_BTN.onclick = function(){
//     console.log('click 2');
// }

// ADD_BTN.addEventListener('click', function(){
//     console.log('click 1');
// })

// ADD_BTN.addEventListener('click', function(){
//     console.log('click 2');
// })

// function showDate() {
//     const dd = new Date();
//     let hh = dd.getHours();
//     let mm = dd.getMinutes();
//     let ss = dd.getSeconds();
//     if (hh < 10) {
//         hh = '0' + hh;
//     }
//     if (mm < 10) {
//         mm = '0' + mm;
//     }
//     if (ss < 10) {
//         ss = '0' + ss
//     }
//     console.log(`${hh}:${mm}:${ss}`);
// }

// function zero(number){
//     if(number<10){
//         return '0'+number
//     }
//     return number
// }

// function zero(number){
//     return number<10 ? '0'+number : number
// }

// const zero = number => number < 10 ? '0' + number : number;

// let count = 0;
// function showDate() {
//     const dd = new Date();
//     let hh = zero(dd.getHours());
//     let mm = zero(dd.getMinutes());
//     let ss = zero(dd.getSeconds());
//     console.log(`${hh}:${mm}:${ss}`);
//     count++;
//     if(count==5){
//         ADD_BTN.removeEventListener('click', showDate)
//     }
// }

// ADD_BTN.addEventListener('click', showDate)

// ADD_BTN.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(this);
// })

// ADD_BTN.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(this);
// })

// const BOX = document.querySelector('.box');
// console.log(BOX);
// BOX.addEventListener('dblclick', function(){
//     alert('works')
// })

// BOX.addEventListener('mouseover', function(){
//     this.style.backgroundColor = 'red'
// })

// BOX.addEventListener('mouseout', function(){
//     this.style.backgroundColor = ''
// })

// BOX.addEventListener('mousedown', function(){
//     this.style.width = '350px';
//     this.style.height = '350px';
// })

// BOX.addEventListener('mouseup', function(){
//     this.style.width = '';
//     this.style.height = '';
// })

// BOX.addEventListener('mousemove', function(){
//     console.log('move works');
// })

// const BALL = document.querySelector('.ball');

// window.addEventListener('keydown', function(event){
//     // console.log(event);
//     if(event.code === 'ArrowUp' ){
//         const OFFSET = BALL.offsetTop;
//         BALL.style.top = OFFSET - 10 + 'px';
//     }
//     if(event.code === 'ArrowDown' ){
//         const OFFSET = BALL.offsetTop;
//         BALL.style.top = OFFSET + 10 + 'px';
//     }
//     if(event.code === 'ArrowLeft' ){
//         const OFFSET = BALL.offsetLeft;
//         BALL.style.left = OFFSET - 10 + 'px';
//     }
//     if(event.code === 'ArrowRight' ){
//         const OFFSET = BALL.offsetLeft;
//         BALL.style.left = OFFSET + 10 + 'px';
//     }
// })

// const TITLE =document.querySelector('.title');

// window.addEventListener('scroll', function(){
//     // console.log(window.scrollY);
//     // if(window.scrollY> 500){
//     //     alert('wwww')
//     // }
//     TITLE.style.fontSize = 20 + window.scrollY/100 + 'px';
// })

// const USER_LOGIN = document.querySelector('.userLogin');
// USER_LOGIN.addEventListener('focus', function(){
//     console.log('focus works');
// })

// USER_LOGIN.addEventListener('blur', function(){
//     console.log('blur works');
// })

// USER_LOGIN.addEventListener('change', function(){
//     console.log('change works');
//     // console.log(this.value);
// })

// const H2 = document.querySelector('h2')

// USER_LOGIN.addEventListener('input', function(){
//     // console.log('input works');
//     H2.textContent = this.value;
// })

// let formSignIn = document.querySelector('.formSignIn');
// formSignIn.addEventListener('submit', function(event){
//     console.log(event);
// })

// setTimeout(() => {
//     document.write('<h1>setTimeout</h1>')
// }, 1000);

// setInterval(() => {
//     document.write('<h1>setInterval</h1>')
// }, 1000);