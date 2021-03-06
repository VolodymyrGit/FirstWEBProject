class Robot {
    work(){
        console.log("Я Robot – я просто працюю");
    };
}

class CoffeRobot extends Robot {
    work(){
        console.log("Я CoffeRobot – я варю каву");
    }
}

class RobotDancer extends Robot {
    work(){
        console.log("Я RobotDancer – я просто танцюю");
    }
}

class RobotCoocker extends Robot {
    work(){
        console.log("Я RobotCoocker – я просто готую");
    }
}

let robotArray = [
    new Robot(),
    new CoffeRobot(),
    new RobotDancer(),
    new RobotCoocker()
];

robotArray.forEach(element => {
    element.work();
});

// Реалізувати у функціональному та прототипному стилі наступне задання: 
// Створити клас Robot від якого унаслідувати класами CoffeRobot, RobotDancer, RobotCoocker його властивості. В
// Robot створити метод work() , в якому слід описати роботу яку буде виконувати кожен з роботів. (тобто, work() 
// повинен бути пронаслідуваний)
// • Для Robot метод work() повинен виводити текст «Я Robot – я просто працюю». 
// • Для CoffeRobot метод work() повинен виводити текст «Я CoffeRobot – я варю каву». 
// • Для RobotDancer метод work() повинен виводити текст «Я RobotDancer – я просто танцюю». 
// • Для RobotCoocker метод work() повинен виводити текст «Я RobotCoocker – я просто готую». 
// • Створити екземпляри вищеописаних класів і викликати до кожного з них метод work(). 
// • Створити масив типу Robot, заповнити масив екземплярами вищеописаних класів. 
// Циклом for пройтись по всіх елементах масиву і викликати в кожного метод work().
// Всі виводи проводити на консоль.