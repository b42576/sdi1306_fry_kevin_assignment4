// Kevin Fry
// SDI 1306
// Project 4
// My Library of String, Number, and Array testing

var myPhoneNumberTest = "215-888-2295";
var myEmailTest = "kevinjfry@gmail.com";
var myURLTest = "https://www.fryintl.com/"

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


////////////////////////////////////////////////////////////////////////////////
// Does a string follow an aaa@bbb.ccc pattern like an email address?
var testEmailPattern = function(eMailAddress){
    //
    var thisEmailAddress = eMailAddress.split("@");  // seperate user from domain
    var userEmail = thisEmailAddress[0];
    var userDomain = thisEmailAddress[1].split(".");
    var domainName = userDomain[0];
    var domainLtd = userDomain[1];
    
    // construct email address from the variables
    var constructEmail = userEmail + "@" + domainName + "." + domainLtd;
    
    // check email address reconstruction and compare it to the inputed email address
    if (constructEmail === eMailAddress) {
        // email addresses match, has @ and . in the right spots
        // The full domain name may not exceed the length of 253
        // http://en.wikipedia.org/wiki/Domain_Name_System
        // 63 characters in the maximum length of a "label" (part of domain name separated by dot)
        // .travel seems to be the longist ltd
        // research comes from http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
        if ((domainName.length <= 63) && (domainLtd.length <= 6) &&
            (domainName.length >= 2) &&  (domainLtd.length >= 2)  && (userEmail.length >= 1 )){
            return true;
        } else {
            return false;
        }
        
    } else {
        // email addresses do not match
        return false;
    }
};

////////////////////////////////////////////////////////////////////////////////
// Is the string a URL? (Does it start with http: or https:?)
var testURL = function(url){
    thisURL = url.split("//");
    if ((thisURL[0] === "http:") || (thisURL[0] === "https:")) {
        return true;
    } else {
        return false;
    }
};




boolPhoneNumber = testPhoneNumberPattern(myPhoneNumberTest);
boolEmail = testEmailPattern(myEmailTest);
boolURL = testURL(myURLTest);


console.log("It's " + boolPhoneNumber + " that \"" + myPhoneNumberTest + "\" meets our phone number requirements.");
console.log("It's " + boolEmail + " that \"" + myEmailTest + "\" meets our e-mail requirements.");
console.log("It's " + boolURL + " that \"" + myURLTest + "\" meets our url requirements.");
