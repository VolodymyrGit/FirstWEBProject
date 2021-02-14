let bank = 1000;
// let beerCount = 100;
// let beerPrice = 45;
// let chipsCount = 150;
// let chipsPrice = 39;
let shop = {
    beer: {
        count: 100,
        price: 45
    },
    chips: {
        count: 150,
        price: 30
    }
}

function checkProduct(name){
    return shop[name].count;
}

// function checkBeer() {
//     return beerCount;
// }

// function checkChips() {
//     return chipsCount;
// }

function checkBank() {
    return bank;
}

function sell(name, count){
    shop[name].count -= count;
    bank += shop[name].price * count
}

// function sellBeer(count) {
//     beerCount -= count;
//     bank += beerPrice * count;
// }

// function sellChips(count) {
//     chipsCount -= count;
//     bank += chipsPrice * count;
// }

// export { checkBeer, checkBank, sellBeer, sellChips, checkChips };
export { checkBank, checkProduct, sell };