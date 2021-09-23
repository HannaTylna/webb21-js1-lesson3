// let i = 0
// while (i < 10) {
//     console.log(`hej ${i}`)
//     i++;
// }

// var myArray = ["John", "Doe", "Jane", "Adam", "Eve"]


// for (let i = 0; i < myArray.length; i++){
//     console.log(`Iteraction ${myArray[i]}`)
// }

//const isEven = number => number % 2 == 0

var myArray = [16, 17, 19, 23, 30, 2, 7]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`${element} is an even number? ${isEven(element)}`)
// }

let totalAge = 0

// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i] === 19){
//         continue; //break
//     }
//     console.log(myArray[i]);
// }

const voters = [];
const nonVoters = [];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if(element < 18){
        nonVoters.push(element)
    }else {
        voters.push(element);
    }
}

console.log(`voters`, voters);
console.log(`nonvoters`, nonVoters);
//console.log(myArray);
// for (let i = 0; i < myArray.length; i++) {
//     totalAge += myArray[i];
// }

// console.log(totalAge);

