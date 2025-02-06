const my_array = [10, 12, 15, 18];
const n = my_array.length;
const element = 17;
const index = 3;
const capacity = 100;

const insertElementInArray = (arr, n, element, index, capacity) => {
    // if (n >= capacity) {
    //     return -1;
    // }
    for (let i = n - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = element;
    return arr;
}

console.log(insertElementInArray(my_array, n, element, index, capacity));