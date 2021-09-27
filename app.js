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
            output.style.backgroundColor = "red";
            output.style.color = "black";
            var loss = (initial - current) * quantity;
            var lossPercent = ((loss/(initial*quantity))*100).toFixed(2);
            displayMessage("The loss is "+loss+ " and the loss percentage is " + lossPercent);
        } else if (current > initial) {
            output.style.backgroundColor = "green";
            output.style.color = "black";
            var profit = (current - initial) * quantity;
            var profitPercent = ((loss/(initial*quantity))*100).toFixed(2);
            displayMessage("the profit is "+profit+ " and the profit percentage is " + profitPercent);
        } else {
            displayMessage("No pain No gain");
        }
    }
}

function displayMessage(message){
    output.innerText   = message;
}

button.addEventListener("click", clickHandler);