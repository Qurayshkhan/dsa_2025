const my_array = [3, 7, 6, -10, 15, 23.5, 1001, 55, -13];
const n = my_array.length;

const linearSearch = (arr, n, element) => {
    for (let i = 0; i <= n - 1; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}

const searchIndex = linearSearch(my_array, n, -14);
// console.log(my_array[searchIndex], searchIndex);


