let bank = 1000;
let beerCount = 100;
let beerPrice = 45;
let cheepsPrice = 30;
let cheepsCount = 150;

function checkBeer() {
    return beerCount;
}

function checkBank() {
    return bank;
}

function checkCheeps() {
    return cheepsCount;
}

function sellBeer(count) {
    beerCount -= count;
    bank += beerPrice * count;
}

function sellCheeps(count) {
    cheepsCount -= count;
    bank += cheepsPrice * count;
}


export {checkBeer, checkCheeps, checkBank, sellBeer, sellCheeps};