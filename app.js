const initialPrice = document.querySelector(".initial-price");
const quantity = document.querySelector(".quantity");
const currentPrice = document.querySelector(".current-price");
const button = document.querySelector(".submit-btn");

function clickHandler(){
    var ini = initialPrice.value;
    var quan = quantity.value;
    var curr = currentPrice.value;
    calculateStocksResult(ini, quan, curr);
}

function calculateStocksResult(inital , quantity , current){
    console.log("hi")
}

button.addEventListener("click",clickHandler);