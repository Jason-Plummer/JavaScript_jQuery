function calculator(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Must enter a valid number!");
        // return;
    }

    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return console.log("Cannot divide by zero!");
            }
        default:
            return console.log("Invalid operator!")
    }
}



