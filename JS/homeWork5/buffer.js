let someString = "";

function add(text) {
    someString += text;
}

function print() {
    console.log(someString);
}

function clear(params) {
    someString = "";
}

export {add, print, clear};