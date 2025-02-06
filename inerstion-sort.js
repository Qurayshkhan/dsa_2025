const arr = [64, 34, 25, 12, 22, 11, 90, 5];

const insertionSort = (arr) => {
    n = arr.length - 1;

    // i=1 because in insertion sort algo we assume 1st element of the array is already sorted
    for (let i = 1; i <= n; i++) {
        let insertIndex = i;
        let currentValue = arr[i]; // store value of index i because we sort this key value to the other element of an array default value is (1) because 1st element of array assumed already sorted.
        let j = i - 1; // we assign value i-1 to j because we compare with previous value of the element an array if i = 1 then compare to 0 element.

        // currentValue > arr[j] based on we sort an array ascending or descending order j>=0 for number of comparison until the array will be sorted.
        while (currentValue < arr[j] && j >= 0) {
            arr[j + 1] = arr[j];
            insertIndex = j;
            j--;
        }
        arr[j + 1] = insertIndex;
    }
    console.log(arr);
}

insertionSort(arr);