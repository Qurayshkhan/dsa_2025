const my_array = [64, 34, 25, 12, 22, 93, 11, 90, 5, 11, 12, 4, 4, 600, 99, 100];
const str = "hay";
const n = my_array.length;

const bubbleSort = (arr, n) => {
    for (let i = 0; i <= n - 1; i++) {
        let swap = false;
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}
// console.log(bubbleSort(my_array, n));
const selectionSort = (arr, n) => {
    for (let i = 0; i <= n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
// console.log(selectionSort(my_array, n));
const insertionSort = (arr, n) => {
    for (let i = 1; i <= n - 1; i++) {
        let key = arr[i];
        let j = i - 1;
        while (arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// console.log(insertionSort(my_array, n));
const quickSort = (arr, low, high) => {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
}
const partition = (arr, low, high) => {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;
    let temp;
    do {
        if (arr[i] <= pivot) {
            i++;
        }
        if (arr[j] > pivot) {
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
}
// console.log(quickSort(my_array, 0, n - 1));
const maxNumber = (arr, n) => {
    let max = 0;
    for (let i = 0; i <= n - 1; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}
const countSort = (arr, n) => {
    let max = maxNumber(arr, n);
    let count = [];
    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i <= n - 1; i++) {
        count[arr[i]] = count[arr[i]] + 1;
    }
    let i = 0;
    let j = 0;
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
// console.log(countSort(my_array, n));
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
    let brr = new Array(high - low + 1);
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            brr[k] = arr[i];
            i++
            k++
        } else {
            brr[k] = arr[j];
            j++
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
// console.log(mergeSort(my_array, 0, n - 1));
const insertInArray = (arr, n, index, element) => {
    for (let i = n - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = element;
    return arr;
}
// console.log(insertInArray(my_array, n, 3, 222));
const deleteInArray = (arr, n, index) => {
    for (let i = index; i <= n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = n - 1;
    return arr;
}
// console.log(deleteInArray(my_array, n, 3));
const linearSearch = (arr, n, element) => {
    for (let i = 0; i <= n - 1; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch(my_array, n, 90));
const binarySearch = (arr, n, element) => {
    arr = mergeSort(arr, 0, n - 1);
    let low = 0;
    let high = n - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === element) {
            return mid;
        }
        if (arr[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
// console.log(binarySearch(my_array, n, 90));
const removeDuplicate = (arr, n) => {
    let index = 0;
    let newArr = [];
    for (let i = 0; i <= n - 1; i++) {
        let item = linearSearch(arr, n, arr[i]);
        if (item === i) {
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}
// console.log(removeDuplicate(my_array, n));
const capitalLetter = (string) => {
    let str = string.toLowerCase();
    let newArr = [];
    for (let i = 0; i <= str.length - 1; i++) {
        let letters = "";
        for (let j = 0; j <= str.length - 1; j++) {
            if (i === j) {
                letters += str[j].toUpperCase();
            } else {
                letters += str[j];
            }
        }
        newArr[i] = letters;
    }
    return newArr;
}
// console.log(capitalLetter(str));
const maxThreeNumber = (arr, n) => {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }
    return [first, second, third];
}
// console.log(maxThreeNumber(my_array, n));









