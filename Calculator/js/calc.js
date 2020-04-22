let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');


function buttonClick(value) {
    if (isNaN(value)) {
        //this is not a number
        handleSymbol(value);
    } else (isNaN(value))

    Console.log(value);
}

function handleSymbol(){}
function handleNumber () {}
function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function (event) {
        buttonClick (event.target.innerText);
    })
} 
init();