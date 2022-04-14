'use strict'

window.onload = () => {
    document.getElementById('add').addEventListener('click', add);
    
    document.getElementById('subtract').addEventListener('click', subtract);
    
    document.getElementById('multiply').addEventListener('click', multiply);

    document.getElementById('divide').addEventListener('click', divide);
}

/**
 * Event handler that adds the two operands and writes the results
 * @param {MouseEvent} event event that triggers the function
 */
const add = (event) => {
    const x = getInput('input1');
    const y = getInput('input2');

    const result = x + y;

    writeResult(result);
}

/**
 * Event handler that subtracts the two operands and writes the results
 * @param {MouseEvent} event event that triggers the function
 */
const subtract = (event) => {
    const x = getInput('input1');
    const y = getInput('input2');

    const result = x - y;

    writeResult(result);
}

/**
 * Event handler that multiplies the two operands and writes the results
 * @param {MouseEvent} event event that triggers the function
 */
const multiply = (event) => {
    const x = getInput('input1');
    const y = getInput('input2');

    const result = x * y;

    writeResult(result);
}

/**
 * Event handler that divides the two operands and writes the results
 * Does not allow for division by 0
 * @param {MouseEvent} event event that triggers the function
 */
const divide = (event) => {
    const x = getInput('input1');
    const y = getInput('input2');

    let result = x / y;

    if (y === 0) {
        result = 'Error: Cannot divide by 0';
    }

    writeResult(result);
}

/**
 * Retrieves user input as a number
 * @param {String} id operand id
 * @returns {Number}
 */
const getInput = (id) => {
    return Number(document.getElementById(id).value);
}

/**
 * Writes a result to the DOM
 * @param {String} result calculation result
 */
const writeResult = (result) => {
    document.getElementById('output').innerHTML = result;
}
