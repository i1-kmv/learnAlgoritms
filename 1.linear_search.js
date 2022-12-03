const array = [1, 2, 5, 6, 8, 4, 3, 9,]
let count = 0

function linearSearch (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        count += 1
        if (arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 6), count)
//Сложность агоритма O(n) - где n === array.length - максимальное число операций.