//Task1

const arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
const arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

function arraySum(myArray){
    let sum = 0;
    myArray.forEach(function(item) {
        sum += item
    })
    return sum
}
const sumOfArr1 = arraySum(arr1);
const sumOfArr2 = arraySum(arr2);
const sumOfBothArrays = sumOfArr1 + sumOfArr2

console.log(sumOfArr2, sumOfArr2, sumOfBothArrays)


//Task2
const arr3 = [23, 43, 12, 65, 34, 100, 1000]
const multiplyBy3 = arr3.map(function(item) {
    return item*3
})
console.log(multiplyBy3);

//Task3
const arr4 = [100, 43, 56, 78, 12, 43,56]

const result = arr4.filter(function(number){
   return number > 63;
})
console.log(result);



