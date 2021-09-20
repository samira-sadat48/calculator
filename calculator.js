//main--------------------------------------------------------------
//display variable
let firstNumber = 0;
let secondNumber = 0;
let operation = "";

let displayStringBottom     = "0";
let displayStringTop        = "";
document.getElementById("display-string-top").innerHTML = displayStringTop;
document.getElementById("display-string-bottom").innerHTML = displayStringBottom;

//button variables
const buttonZero        = document.getElementById("zero");
const buttonOne         = document.getElementById("one");
const buttonTwo         = document.getElementById("two");
const buttonThree       = document.getElementById("three");
const buttonFour        = document.getElementById("four");
const buttonFive        = document.getElementById("five");
const buttonSix         = document.getElementById("six");
const buttonSeven       = document.getElementById("seven");
const buttonEight       = document.getElementById("eight");
const buttonNine        = document.getElementById("nine");
const buttonAdd         = document.getElementById("add");
const buttonSubtract    = document.getElementById("subtract");
const buttonMultiply    = document.getElementById("multiply");
const buttonDivide      = document.getElementById("divide");
const buttonEquals      = document.getElementById("equals");
const buttonClear       = document.getElementById("clear");

//button event listeners
buttonZero.addEventListener('click', appendDisplayStringBottom, false);
buttonOne.addEventListener('click', appendDisplayStringBottom, false);
buttonTwo.addEventListener('click', appendDisplayStringBottom, false);
buttonThree.addEventListener('click', appendDisplayStringBottom, false);
buttonFour.addEventListener('click', appendDisplayStringBottom, false);
buttonFive.addEventListener('click', appendDisplayStringBottom, false);
buttonSix.addEventListener('click', appendDisplayStringBottom, false);
buttonSeven.addEventListener('click', appendDisplayStringBottom, false);
buttonEight.addEventListener('click', appendDisplayStringBottom, false);
buttonNine.addEventListener('click', appendDisplayStringBottom, false);

buttonAdd.addEventListener('click', appendDisplayStringTop, false);
buttonAdd.addEventListener('click', storeFirstNumberandOperation, false);
buttonMultiply.addEventListener('click', appendDisplayStringTop, false);
buttonMultiply.addEventListener('click', storeFirstNumberandOperation, false);
buttonSubtract.addEventListener('click', appendDisplayStringTop, false);
buttonSubtract.addEventListener('click', storeFirstNumberandOperation, false);
buttonDivide.addEventListener('click', appendDisplayStringTop, false);
buttonDivide.addEventListener('click', storeFirstNumberandOperation, false);

buttonEquals.addEventListener('click',calculateEquation, false);
//buttonEquals.addEventListener('click',appendDisplayStringTop, false);
buttonClear.addEventListener('click', resetDisplayStrings, false);

//-----------------------------------------------------------------------
//Event functions
//On number button click
function appendDisplayStringBottom(e)
{
    let nextStringCharacter = this.textContent;
    console.log(nextStringCharacter);

    if(displayStringBottom === "0")
    {
        displayStringBottom = nextStringCharacter;
    }
    else
    {
        displayStringBottom += nextStringCharacter; 
    }

    document.getElementById("display-string-bottom").innerHTML = displayStringBottom;
}

//on operation button click
function appendDisplayStringTop(e)
{   
    console.log('event click')
    displayStringTop = displayStringBottom + this.textContent;
    document.getElementById("display-string-top").innerHTML = displayStringTop;
}

function storeFirstNumberandOperation(e)
{
    firstNumber = parseInt(displayStringBottom);
    operation = this.textContent;
    resetBottomDisplayString();
}

//on equals button click
function calculateEquation(e)
{
    secondNumber = parseInt(displayStringBottom);
    result = operate(firstNumber,operation,secondNumber);
    displayStringBottom = result;
    document.getElementById("display-string-bottom").innerHTML = displayStringBottom;
}

function resetDisplayStrings(e)
{
    resetBottomDisplayString();
    resetTopDisplayString();
}

//----------------------------------------------------------------------------

//local functions
function resetBottomDisplayString()
{
    displayStringBottom = "0";
    document.getElementById("display-string-bottom").innerHTML = displayStringBottom;
}

function resetTopDisplayString()
{
    displayStringTop = "";
    document.getElementById("display-string-top").innerHTML = displayStringTop;
}


//Operation Functions
function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function operate(num1,operator,num2)
{
    switch(operator)
    {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            console.log("Not a legal operator!");
            return null;
    }
}
