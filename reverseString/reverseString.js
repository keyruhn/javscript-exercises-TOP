const reverseString = function(string) {

    let output = "";

    string = string.split('');
    string = string.reverse();

    string = string.toString();

    for (char in string) {
        string = string.replace(',','');
    }



    output = string;



    return output;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
