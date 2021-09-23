const ages = [21, 45, 56, 73, 18, 12, 23, 23, 45]

let sumOfAges = 0;

for (let i = 0; i < ages.length; i++){
    sumOfAges += ages[i];
}

const averageAge = sumOfAges / ages.length;
const roundedAverageAge = Math.ceil(averageAge);

console.log (`Average age is ${roundedAverageAge}`);