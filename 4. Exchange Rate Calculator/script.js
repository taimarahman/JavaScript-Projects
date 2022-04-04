const currencyEl_one  = document.getElementById('currency-one');
const currencyEl_two  = document.getElementById('currency-two');
const amountEl_one  = document.getElementById('amount-one');
const amountEl_two  = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch rate and update the dom
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(``)
}

// Event listensers
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
currencyEl_two.addEventListener('input', calculate)

swap.addEventListener('click', ()=> {
    const temp = currencyEl_one;
    currencyEl_one = currencyEl_two;
    currencyEl_two = temp;
    calculate();
})
// calculate();