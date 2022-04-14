//For use with JS Calculator Exercise (Calculatron 3000!)

//create function and event listener for addition button

const additionButton = document.querySelector(".addition")
const add = () =>{
    first=Number(calculatron.first.value);
    second=Number(calculatron.second.value);
    result=first+second;
    calculatron.result.value=result;
}
    additionButton.addEventListener ('click', add);

//create function and event listener for subtraction button

const subtractionButton = document.querySelector(".subtraction")
const subtract = () =>{
    second=Number(calculatron.second.value);
    first=Number(calculatron.first.value);
    result=first-second;
    calculatron.result.value=result;
}
    subtractionButton.addEventListener ('click', subtract);

//create function and event listener for multiplication button

const multiplicationButton = document.querySelector(".multiplication")
const multiply = () =>{
    first=Number(calculatron.first.value);
    second=Number(calculatron.second.value);
    result=first*second;
    calculatron.result.value=result;
}
    multiplicationButton.addEventListener ('click', multiply);

//create function and event listener for division button

const divisionButton = document.querySelector(".division")
const divide = () =>{
    first=Number(calculatron.first.value);
    second=Number(calculatron.second.value);
    
//create error message if dividing by zero
    if (Number(calculatron.second.value)===0){
        result="Error: Cannot divide by 0";
    }
    else {result=first/second;}
    calculatron.result.value=result;
}
    divisionButton.addEventListener ('click', divide);
