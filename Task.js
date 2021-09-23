function sayHi(name, greeting) {
    return (`${greeting} ${name} `)
}

const message = sayHi("Hanna", "Hello");
console.log(message);


function mathMultiplication(x, y) {
    return x * y
}
console.log(mathMultiplication(3, 4));

// function isEvennumber(number){
//     return number % 2 == 0
// }

const isEvennumber = (number) => {
    return number % 2 == 0
}
console.log(isEvennumber(7));
console.log(isEvennumber(2));
console.log(isEvennumber(0));
console.log(isEvennumber(-1));

// function isDividebleByThree(number){
//     return number % 3 === 0
// }

const isDividebleByThree = number => number % 3 === 0 ? `Ja ${number} är delbart` : `Nej ${number} är inte delbart`

console.log(isDividebleByThree(9));
console.log(isDividebleByThree(10));



// function allowedToVote(age){
//     return age>=18 ? "You are allowed to vote" : "You are not allowed to vote"
// }

const allowedToVote = (age) => {
    return age >= 18 ? "You are allowed to vote" : "You are not allowed to vote"
}

console.log(allowedToVote(17));
console.log(allowedToVote(21));

