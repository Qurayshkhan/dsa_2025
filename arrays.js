const arr = [7, 12, 9, 4, 11];
const arrayMinValue = (arr) => {
    minValue = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            return minValue;
        }
    }
}
// console.log(arrayMinValue(arr));