/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operators = ['+', '-', '*', '/'];
    
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        if (operators.includes(token)) {
            let firstOperand = Number(stack.pop());
            let secondOperand = Number(stack.pop());
            let result = 0;

            if (token === '+') {
                result = secondOperand + firstOperand;
            } else if (token === '-') {
                result = secondOperand - firstOperand; // Subtract first from second
            } else if (token === '*') {
                result = secondOperand * firstOperand;
            } else if (token === '/') {
                result = Math.trunc(secondOperand / firstOperand); // Perform integer division
            }
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }
    
    return stack[0];
};
