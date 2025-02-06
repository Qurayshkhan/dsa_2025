const unsortedArray = [8, 16, 19, 15, 2, 17, 4, 11, 6, 1, 7, 13, 5, 3, 9, 12, 14, 20, 18, 10];
let nthValue = unsortedArray.length - 1;
for (let i = 0; i <= nthValue; i++) {
    for (let j = 0; j <= nthValue - i; j++) {
        if (unsortedArray[j] > unsortedArray[j + 1]) {
            let tempValue = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j + 1];
            unsortedArray[j + 1] = tempValue;
        }
    }
}

console.log(unsortedArray);

// Optimize Bubble Sort
const partialSwapArray = [1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let arrayLength = partialSwapArray.length - 1;
for (let i = 0; i <= arrayLength; i++) {
    let isSwap = false;
    for (let j = 0; j <= arrayLength - i; j++) {
        if (partialSwapArray[j] > partialSwapArray[j + 1]) {
            let newNumber = partialSwapArray[j];
            partialSwapArray[j] = partialSwapArray[j + 1];
            partialSwapArray[j + 1] = newNumber;
            isSwap = true;
        }
    }
    if (!isSwap) {
        break;
    }
}
console.log("🚀 ~ partialSwapArray:", partialSwapArray);







