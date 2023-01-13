
// Reverse a string
const reverseAString = (str) => {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Hmmm, thats no good"
    }
    const totalItems = str.length - 1
    
    let backwards = []
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    
    console.log(backwards)
    return backwards.join('')
}
console.log(reverseAString("this is a string"))

//Built in methods
const reverse2 = (str) => {
    return str.split('').reverse().join('')
}

//Using the spread operator
const reverse3 = (str) => {
    return [...str].reverse().join('')
}

console.log(reverse3('Whats this all about!'))