// Kevin Fry
// SDI 1306
// Project 4
// My Library of String, Number, and Array testing

////////////////////////////////////////////////////////////////////////////////
// Does a string follow a 123-456-7890 pattern like a phone number?
var testPhoneNumberPattern = function(phoneNumber){
    var thisPhoneNumber = phoneNumber.split("-");
    // console.log(thisPhoneNumber);
    if (thisPhoneNumber.length === 3) {
        // array size is correct
        // console.log("The phone number has two dashes, as required.");
        if ((thisPhoneNumber[0].length === 3) && (thisPhoneNumber[1].length === 3) && (thisPhoneNumber[2].length === 4)) {
            // each part of the phone number contains the correct number of characters
            // console.log("The characters follow the correct pattern.");
            if ( !(isNaN(thisPhoneNumber[0])) && !(isNaN(thisPhoneNumber[1])) && !(isNaN(thisPhoneNumber[2])) ){
                // a false not is true
                // console.log("All the required numbers ARE numbers.");
                return true;
            } else {
                // console.log("All the required number ARE NOT numbers!");
                return false;
            }
        } else {
            // characters do not follow the correct pattern
            return false;
        }
    } else {
        // array size is wrong
        // console.log("The phone number format is wrong.");
        return false;
    }
};

var myPhoneNumberTest = "123-456-7890";
boolPhoneNumber = testPhoneNumberPattern(myPhoneNumberTest);
console.log("It's " + boolPhoneNumber + " that \"" + myPhoneNumberTest + "\" meets our phone number requirements.");

////////////////////////////////////////////////////////////////////////////////
// Does a string follow an aaa@bbb.ccc pattern like an email address?

