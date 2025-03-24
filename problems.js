const data = [25, 17, 40, 63, 25, 54, 70];
function mean(arr) {
    // Use reduce to sum all the values in the array.
    let sum = arr.reduce((a, b) => a + b, 0);
    // for (let i = 0; i <= arr.length - 1; i++) {
    //     sum += arr[i];
    // }
    // Divide the total sum by the length of the array to get the mean.
    return sum / arr.length;
}


function median(arr) {
    // Sort the array in ascending order.
    const arrSorted = arr.sort((a, b) => a - b);

    // If the array length is even, return the average of the two middle numbers.
    // Otherwise, return the middle element.
    return arrSorted.length % 2 === 0
        ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) / 2
        : arrSorted[Math.floor(arrSorted.length / 2)];
}

// const meanValue = mean(data);
const medianValue = median(data);
// console.log(medianValue);


function calculateMode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (const num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes.length === arr.length ? [] : modes; // No mode if all elements appear equally
}

const mode = calculateMode(data);
console.log(mode);
