const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15]
let count = 0

function binarySearch (arr, item) {
    let start = arr[0] // Находим начало и конец массива
    let end = arr.length
    let middle; // Вводим две вспомогательные переменные
    let found = false
    let position = -1 // Переменная для определения позиции, если элемент не найден, вернемм -1
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor(start + end) / 2
        if (arr[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 6), count)
//Сложность агоритма O(log2n) - где n === array.length - максимальное число операций. Поэтому count = 4