function calculateBMI(weight, height) {
    return Math.floor((weight / Math.pow(height, 2)));
}

console.log(calculateBMI(65, 1.8));
