
function fibonacciGenerator (n) {
    var selector = n;
    var first = 0;
    var second = 1;
    var fibArray = [0,1];
    
    for (let i = 0; i < (selector - 2); i++) {
        fibArray.push(fibArray[first] + fibArray[second]);
        first++;
        second++;
    }

    return fibArray.slice(0,selector);
}





/* The solution below was from my first time through the exercise */
/*

function fibonacciGenerator (n) {
    let fibonacciArray = [];

    let currentNumber = 0;
    let previousNumber = 0;
    let lastNumber = 0;
    let nextNumber = 1;
    let firstIncrement = 1;
    let startNumber = 0;
    
    while (n > 0) {
        if (fibonacciArray.length === 0) {
            fibonacciArray.push(startNumber);
            n--;
             
        } else if (fibonacciArray.length < 2) {
            fibonacciArray.push(firstIncrement)            
            n--;
        } else {
            lastNumber = fibonacciArray[fibonacciArray.length - 1]
            previousNumber = fibonacciArray[fibonacciArray.length - 2]
            nextNumber = lastNumber + previousNumber;
            fibonacciArray.push(nextNumber);
            n--;
        }           
    }    
    return fibonacciArray;
}

*/
