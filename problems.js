function calculateMean(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function calculateMedian(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);

    return sortedArr.length % 2 === 0
        ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
        : sortedArr[mid];
}

function calculateMode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[num]);
    });

    for (const key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    return modes.length === arr.length ? "No mode" : modes;
}

// Example usage:
const numbers = [1, 2, 3, 3, 4, 5, 6, 6, 6, 7];

// console.log("Mean:", calculateMean(numbers));
// console.log("Median:", calculateMedian(numbers));
// console.log("Mode:", calculateMode(numbers));

// convert decimal to binary.

const decimalToBinary = (number) => {

    let binaryNumber = "";
    let reminder;

    while (number > 0) {
        reminder = number % 2;
        binaryNumber = reminder + binaryNumber;
        number = Math.floor(number / 2);
    }

    if (binaryNumber == "") {
        binaryNumber += 0;
    }
    console.log(binaryNumber);


}

decimalToBinary(10);
decimalToBinary(0);

const starPattern = (number) => {
    for (let i = 0; i < number; i++) {
        let row = "";
        for (let j = 0; j < i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
starPattern(4);

