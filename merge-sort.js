const my_array = [3, 7, 6, -10, 15, 23.5, 1001, 55, -13];
const n = my_array.length;
const mergeSort = (arr, low, high) => {

    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
    return arr;
}

const merge = (arr, low, mid, high) => {

    let i = low;
    let j = mid + 1;
    let k = low;
    let brr = new Array(high - low + 1)


    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            brr[k] = arr[i];
            i++;
            k++;
        } else {
            brr[k] = arr[j];
            j++;
            k++;
        }
    }
    while (i <= mid) {
        brr[k] = arr[i];
        i++;
        k++;
    }
    while (j <= high) {
        brr[k] = arr[j];
        j++;
        k++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = brr[i];
    }
}

console.log(mergeSort(my_array, 0, n - 1));