/*
    #Syftes med arrayer.
    Många värden i en variabel
    Mindre kod
    Strukturerad kod
    Lättare att jobba med
*/

const names = [
    "John",
    "Jane",
    "Adam",
    "Eve",
    "Santana",
    "Maria",
    "Sven",
    "Eric"
]
// names.forEach( function(name, index, myArray) {// не можна міняти порядок name,index
//     console.log(name, index, myArray);// можна міняти порядок name, index
// })

function multiplyBy2(x) {
  //  console.log(x*2);
}

const ages = [34, 32, 21, 56, 43, 12];

ages.forEach(multiplyBy2);


/*
array.map()
*/

const greeting = names.map(function (name) {
    return `Hej ${name}`
})

// console.log(greeting);
// console.log(greeting[2]);

let doesExist = false
names.forEach(function(name) {
    if(name === "Pelle") {
        doesExist = true
    }
})

//console.log(doesExist);

/*
indexOf
*/

//console.log(names.indexOf("Eve"))

doesExist = names.indexOf("Eve") < 0 ? false : true
//console.log(doesExist)

//console.log(names);
//console.log(names.reverse());

/*
    .filter()
*/

const result = names.filter(function(name) {
    return name.length > 4
})
console.log(result);

// const result1 = age.filter(function(age) {
//     return age < 18
// })
// console.log(result1);

const lowerCaseNames = names.map(function(name) {
    return name.toLowerCase()
})
console.log(lowerCaseNames);

const filterOn = "sVen"
const filteredArray = names.filter(function(name) {
    return name.toLowerCase() === filterOn.toLowerCase()
})
console.log(filteredArray);




