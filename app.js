const initialPrice = document.querySelector(".initial-price");
const quantity = document.querySelector(".quantity");
const currentPrice = document.querySelector(".current-price");
const button = document.querySelector(".submit-btn");
const output = document.querySelector(".output-box")

function clickHandler() {
    const ini = initialPrice.value;
    const quan = quantity.value;
    const curr = currentPrice.value;
    calculateStocksResult(ini, quan, curr);
}

function calculateStocksResult(initial, quantity, current) {
    if ((initial.length == 0) && (quantity.length == 0) && (current.length == 0)) {
        alert('Enter all the values');
    } else {
        if (initial > current) {
            var loss = (inital - current) * quantity;
            var lossPercent = (loss / inital) * 100;
            console.log("loss")
        } else if (current > initial) {
            var profit = (current - initial) * quantity;
            var profitPercent = (profit / initial) * 100;
            console.log("profit")
        } else {

        }
    }
}

button.addEventListener("click", clickHandler);