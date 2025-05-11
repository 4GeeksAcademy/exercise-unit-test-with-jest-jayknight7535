// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
function fromEuroToDollar(){
    return euro * 1.07
}
function fromDollarToYen(dollar){
    return dollar * 146.26
}
function fromYenToPound(yen){
    return yen * 0.00555
}