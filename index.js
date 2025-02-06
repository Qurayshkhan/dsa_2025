const myArr = [7, 12, 9, 4, 11];
const getMinValueFromArray = (array) => {
    const arrayCount = array.length - 1;
    let minVal = array[0];
    for (let i = 0; i <= arrayCount; i++) {
        if (minVal > array[i]) {
            minVal = array[i];
        }
    }
    return minVal;
}
// console.log(getMinValueFromArray(myArr));

const findFibonacci = (n) => {

    let firstNumber = 0;
    let secondNumber = 1;
    for (let i = 0; i < n; i++) {
        let newNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = newNumber;
        console.log(newNumber);
    }

}

// console.log(findFibonacci(20));

let count = 2;
const findFibonacciWithRecursion = (firstNumber, secondNumber) => {
    if (count <= 19) {
        let newNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = newNumber;
        count += 1;
        findFibonacciWithRecursion(firstNumber, secondNumber);
        console.log(newNumber);
    } else {
        return;
    }
}

console.log(findFibonacciWithRecursion(0, 1));

const F = (n) => {

    if (n <= 1) {
        return n;
    } else {
        return F(n - 1) + F(n - 2);
    }
}

console.log(F(19));