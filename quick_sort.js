const arr = [64, 34, 25, 12, 22, 11, 90, 5];
const n = arr.length;
const quickSort = (arr, low, high) => {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
}
const partition = (arr, low, high) => {
    console.log(arr);

    let pivot = arr[low];
    let i = low + 1;
    let j = high;
    let temp;
    do {
        while (pivot >= arr[i]) {
            i++;
        }

        while (pivot < arr[j]) {
            j--;
        }
        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    } while (i < j);
    temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;

};

console.log(quickSort(arr, 0, n - 1));   