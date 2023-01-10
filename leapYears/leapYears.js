const leapYears = function(year ) {

    let output;


    // if year is divisible by 4 and not divisible by 100 then it is a leap year 
    // however, years divisible by 400 are always leap years


    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        output = true;
    }

    else {
        output = false;
    }

    return output;

    // not divisible by 100 unless divisible by 400
};

// Do not edit below this line
module.exports = leapYears;
