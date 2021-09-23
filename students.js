students = [
    {birthYear: 1980, marks: 100 },
    {birthYear: 1979, marks: 60 },
    {birthYear: 1980, marks: 70 },
    {birthYear: 2000, marks: 85 },
    {birthYear: 2010, marks: 62 },
    {birthYear: 1967, marks: 49 },
    {birthYear: 1949, marks: 30 },
    {birthYear: 1996, marks: 83 },
    {birthYear: 2001, marks: 19 },
]

function getAge(student) {
    return 2021 - student.birthYear
}


function getGrade(student){
    const marks = student.marks
    if(marks === 100){
        return 'A'
    } else if (marks < 100 && marks >= 90){
        return 'B'
    } else if (marks < 90 && marks >= 80){
        return 'C'
    } else if (marks < 80 && marks >= 70){
        return 'D'
    } else if (marks < 70 && marks >= 60){
        return 'E'
    } else if (marks < 60){
        return 'F'
    }
}

function getStudentsWithGrade(grade) {
    const filteredStudents = students.filter(function(student) {
        return getGrade(student) === grade
    })
    return filteredStudents
}
const grades = ["A", "B", "C", "D", "E", "F"]

const gradedStudents = grades.map(function(grade) {
    return getStudentsWithGrade(grade)
})

console.log(gradedStudents)
// students.forEach(function(student){
//     console.log(getAge(student), getGrade(student))    
// })

// const failedStudents = students.filter(function(student) {
//     return getGrade(student) === "F"
// })
// console.log(failedStudents)

