/*
function greeting(name="Unknown"){
    return(`Hello, ${name}`)
}

const welcomeMessage = greeting()
console.log(welcomeMessage)
*/


function add(x, y, z) {//(x=0, y=0, z=0)
    return x + y + z
}

const threePlusFour = add(null, 3, 4)
console.log(threePlusFour)


function dailyWage(normalPay = 0, extraPay = 0, weekendPay = 0) {
    return normalPay + extraPay + weekendPay
}
console.log(dailyWage(1000));
console.log(dailyWage(1000, 250))
console.log(dailyWage(1000, 0, 1000))
/*
function isUnderAge(age){
    if(age <= 18){
        return true
    } else {
        return false
    }
}
// return age<=18 ? true : false
console.log(isUnderAge (19))
*/


