const arr = [1, 3, 32, 11, 4, 4, 57, 81, 9, 102, 111, 123, 132, 114, 151, 2, 3, 0, 3, 5, 4, 23];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp
    }
    return array;
}

console.log(selectionSort(arr))
console.log(arr.length)
console.log('count = ', count)