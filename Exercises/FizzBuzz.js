var numberArray = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        numberArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
        numberArray.push("Fizz");
    } else if (i % 5 === 0) {
        numberArray.push("Buzz");
    } else {
        numberArray.push(i);
    }
}

console.log(numberArray);
