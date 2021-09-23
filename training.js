/* function searchPerson(name=Unknown){
    return (`Is here ${name}?`)
}
console.log(searchPerson("Theo")); */

/* TASK1-2
function sayHi(name, greeting=undefined){
    return (`${greeting} ${name}`)
}
console.log(sayHi("Jonas")) */

/* TASK3
function multiply(x, y){
    return x * y
}
console.log(multiply(5, 9)); */

/* TASK4
function isEvenNumber(number){
    return number%2 == 0 ? true : false
}
console.log(isEvenNumber(8)); */

/* TASK5
function allowedToVote(age){
    if(age >= 18){
        return ("Du får rösta!")
    }else{
        return ("Du får inte rösta ännu")
    }
}
console.log(allowedToVote(16));
console.log(allowedToVote(18));
console.log(allowedToVote(25)); */

/* TASK6
function allowedToVote(age){
    return age >= 18 ? "Du får rösta!" : "Du får inte rösta ännu"
}
console.log(allowedToVote(16));
console.log(allowedToVote(18));
console.log(allowedToVote(25)); */

/* const arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
const arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

function arraySum(myArray){
    let sum = 0;
    myArray.forEach(function(item){
        sum += item;
    })
    return sum
}
const sumOfBothArrays = arraySum(arr1) + arraySum(arr2)
console.log(arraySum(arr1), arraySum(arr2), sumOfBothArrays); */


/* const arr3 = [23, 43, 12, 65, 34, 100, 1000]
const multiplyBy3 = arr3.map(function(item){
    return item * 3
})
console.log(multiplyBy3);  */

/* const arr4 = [100, 43, 56, 78, 12, 43, 56]
const result = arr4.filter(item => item > 63)
console.log(result); */

students = [
    { birthYear: 1980, marks: 100 },
    { birthYear: 1979, marks: 60 },
    { birthYear: 1990, marks: 70 },
    { birthYear: 2000, marks: 85 },
    { birthYear: 2010, marks: 62 },
    { birthYear: 1967, marks: 49 },
    { birthYear: 1949, marks: 30 },
    { birthYear: 1996, marks: 83 },
    { birthYear: 2001, marks: 19 },
]

/* function getAge(student) {
    return 2021 - student.birthYear
} */

function getGrade(student) {
    const marks = student.marks
    if(marks === 100) {
        return "A"
    } else if (marks < 100 && marks >= 90) {
        return "B"
    } else if (marks < 90 && marks >= 80) {
        return "C"
    } else if (marks < 80 && marks >= 70) {
        return "D"
    } else if (marks < 70 && marks >= 60) {
        return "E"
    } else if (marks < 60) {
        return "F"
    }
}

function getStudentsWithGrade(grade) {
    const filteredStudents = students.filter(function(student) {
        return getGrade(student) === grade
    })
    return filteredStudents
}

const grades = ["A", "B", "C", "D", "E", "F"]

const gradedStudents = grades.map(function(grade){
    return getStudentsWithGrade(grade)
})

console.log(gradedStudents)
