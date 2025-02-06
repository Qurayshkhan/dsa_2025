const myArray = [2, 3, 0, 2, 3, 2];

const maxNumber = (arr) => {
    const n = arr.length;
    let max = 0;
    for (i = 0; i <= n - 1; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
const countSort = (arr) => {
    const n = arr.length;
    const max = maxNumber(arr);
    const count = [];
    //init count array to 0 as per count sort rule
    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }


    for (let i = 0; i < n; i++) {
        count[arr[i]] = count[arr[i]] + 1;
    }

    let i = 0; // counter for count array
    let j = 0; // counter for given array

    while (i <= max) {
        if (count[i] > 0) {
            arr[j] = i;
            count[i] = count[i] - 1;
            j++;
        } else {
            i++;
        }
    }

    return arr;

}
console.log(countSort(myArray));
