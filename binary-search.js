const my_array = [2, 3, 7, 7, 11, 15, 25];
const n = my_array.length;

const binarySearch = (arr, n, element) => {
    let low = 0;
    let high = n;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] == element) {
            return mid;
        }
        if (arr[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

console.log(binarySearch(my_array, n - 1, 15));