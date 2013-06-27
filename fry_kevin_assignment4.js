// Kevin Fry
// SDI 1306
// Project 4
// My Library of String, Number, and Array testing

// VARIABLES
// string variables
var myPhoneNumberTest = "215-888-2295";
var myEmailTest = "kevinjfry@gmail.com";
var myURLTest = "https://www.fryintl.com/";
var myStringToUpperCase = "i would like to convert every word to uppercase";
var myOldString = "0,1,2,3,4,5,6,7,8,9";
var myOldSeparator = ",";
var myNewSeparator = "/";

// number variables
var myMoney = 2.1;

// array variables


////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////
// STRING FUNCTIONS
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

////////////////////////////////////////////////////////////////////////////////
// Title-case a string (split into words, then uppercase the first letter of each word)
var funcUcFirstMyWords = function(stringToUpperCase){
    // toUpperCase()	Converts a string to uppercase letters
    // change the words into an array and uppercase the first letter of each string in the array
    var words = stringToUpperCase.split(" ");
    // charAt()	Returns the character at the specified index
    // toUpperCase()	Converts a string to uppercase letters
    //var myReturnArray = Array();
    var myReturnString = "";
    for (i=0; i<words.length; i++){
        //
        var chars = words[i].split("");
        for(ii=0; ii<chars.length; ii++){
            if(ii === 0){
                myReturnString = myReturnString + chars[ii].toUpperCase();
            } else {
                myReturnString = myReturnString + chars[ii];
            }
            // end output of character
        }
        // end output of word
        myReturnString = myReturnString + " ";
    }
    //console.log(myReturnString);
    return myReturnString.trim();
};

////////////////////////////////////////////////////////////////////////////////
// Given a string that is a list of things separated by a given string, as well 
// as another string separator, return a string with the first separator changed
// to the second: "a,b,c" + "," + "/" → "a/b/c".
var funcChangeStringSeparator = function(oldString,oldSeparator,newSeparator){
    var thisReturnString = "";
    var theseValues = oldString.split(oldSeparator);
    for (i=0; i<theseValues.length; i++){
        thisReturnString = thisReturnString + theseValues[i];
        if (!(i === (theseValues.length - 1))){
            thisReturnString = thisReturnString + newSeparator;
        }
    }
    return thisReturnString;
};

////////////////////////////////////////////////////////////////////////////////
// NUMBER FUNCTIONS
////////////////////////////////////////////////////////////////////////////////
// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var funcFormatToMoney = function(theFloater){
    var myReturnMoney = theFloater.toFixed(2);
    return myReturnMoney;
};

////////////////////////////////////////////////////////////////////////////////
// Fuzzy-match a number: is the number above or below a number within a certain percent?
var funcFuzzyMatch = function(number1, number2, percentage){
    // [the number, above||below, another number, with a certain percent]
    // ex. number1 > number2 within 10%
    // fuzzy logic is blowing my mind
    // first, let's see what number is greater
    var difference;
    var highNumber;
    var thePercentage;
    if (number1 > number2){
        // num1 > num2
        difference = number1-number2;
        highNumber = number1;
        thePercentage = number2/number1;
    } else if (number1 < number2) {
        // num1 < num2
        difference = number2-number1;
        highNumber = number2;
        thePercentage = number2/number1;
    } else {
        // num1 = num2
        difference = 0;
        highNumber = 0;
        thePercentage = 0;
    }
    
    
    
    console.log("");
};




boolPhoneNumber = testPhoneNumberPattern(myPhoneNumberTest);
boolEmail = testEmailPattern(myEmailTest);
boolURL = testURL(myURLTest);
strMyUCWords = funcUcFirstMyWords(myStringToUpperCase);
strMyNewString = funcChangeStringSeparator(myOldString, myOldSeparator, myNewSeparator);

numMoneyReformat = funcFormatToMoney(myMoney);

console.log("It's " + boolPhoneNumber + " that \"" + myPhoneNumberTest + "\" meets our phone number requirements.");
console.log("It's " + boolEmail + " that \"" + myEmailTest + "\" meets our e-mail requirements.");
console.log("It's " + boolURL + " that \"" + myURLTest + "\" meets our url requirements.");
console.log("We're changing \"" + myStringToUpperCase + "\", to uppercase, as seen here: \"" + strMyUCWords + "\".");
console.log("We're changing \"" + myOldString + "\", from the old separator ("+myOldSeparator+"), to use a new separator ("+myNewSeparator+"), as seen here: \"" + strMyNewString + "\".");

console.log("If we're charged " + myMoney + " for something, we're actually paying $" + numMoneyReformat + " for it.");
