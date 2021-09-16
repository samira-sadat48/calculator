//main--------------------------------------------------------------
//display variable
const displayString     = document.getElementById("display-string");
document.getElementById("display-string").innerHTML = "0";

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
buttonZero.addEventListener('click', appendDisplayString, false);
buttonOne.addEventListener('click', appendDisplayString, false);
buttonTwo.addEventListener('click', appendDisplayString, false);
buttonThree.addEventListener('click', appendDisplayString, false);
buttonFour.addEventListener('click', appendDisplayString, false);
buttonFive.addEventListener('click', appendDisplayString, false);
buttonSix.addEventListener('click', appendDisplayString, false);
buttonSeven.addEventListener('click', appendDisplayString, false);
buttonEight.addEventListener('click', appendDisplayString, false);
buttonNine.addEventListener('click', appendDisplayString, false);

//-----------------------------------------------------------------------
//Click funtions to add to display string
function appendDisplayString(e)
{
    let number = this.textContent;
    console.log(number);
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
