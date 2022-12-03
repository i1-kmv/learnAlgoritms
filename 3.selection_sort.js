//Алгоритм выбора - сортировка выбором
let array = [6, 8, 34, 11, 12, 4, 7, 8, 14, 155, 18, 32, -1, 22, 155, -2, -5, 11, 134, 123, 133, 122, 111, 222, 333]
let count = 0

function selectionSort(arr) {
    for (let i = 0; i <= arr.length; i++) {
        let indexMin = i
        for (let j = i+1; j <= arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}

console.log(selectionSort(array)) // скорость O(n*n)
console.log(count)