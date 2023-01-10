const sumAll = function(num1, num2) {

    // declares array and lower and higher variable
    const initialArray = [num1, num2];
    let min, max;

    // returns error if input is a negative number or not a number
    if (Number(num1) !== num1 || Number(num2) !== num2
        || num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    // assigns value to min and max variable based on whether num1 or num2 are bigger
    if (num1 < num2) {
        min = num1;
        max = num2;
    }
    else if (num1 > num2) {
        max = num1;
        min = num2;
    }

    // creates another array with the first index as min and the second as max
    const array = [min, max]

    // inserts values between the lower and higher value into the array (these values aren't sorted)
    for (let i = ++min; i < max; i++) {
        array.push(i);
    }

    // sorts the array with the new input values. this output is given to 'array'
    sorted = array.sort(function(a, b) {
        return a - b;
    })


    // iterates through array and adds current element value to the sum of previous elements
    // this output is assigned as 'total'
    const total = array.reduce((a, b) => a + b, 0);


    // return output as 'total' 
    return total;

};

// Do not edit below this line
module.exports = sumAll;
