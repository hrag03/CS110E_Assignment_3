
function isPrime(number) {
    if (number <= 1)
        return false;
    if (number % 2 === 0 && number > 2)
        return false;
    const rootNumber = Math.sqrt(number);
    for (let i = 3; i <= rootNumber; i += 1) {
        if (number % i === 0)
            return false;
    }
    return true;
}

function primesBetween(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(isPrime(8));
console.log(primesBetween(2, 50));

