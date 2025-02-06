const arr = [7, 12, 9, 11, 3];
const n = arr.length;

const selectionSort = (arr) => {
    for (let i = 0; i <= n; i++) {

        // min =i because we assume the first element of the array in minimum value
        let min = i;

        for (j = i + 1; j <= n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log(arr);

        if (min != i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
console.log(selectionSort(arr));  