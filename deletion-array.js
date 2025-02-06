const my_array = [7, 8, 12, 27, 88];
const size = my_array.length;
const index = 1;

const deletionElement = (arr, size, index) => {
    for (i = index; i < size; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = size - 1
    return arr;
}

console.log(deletionElement(my_array, size, index));
