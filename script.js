var passwordLength, numbers, lowerCase, upperCase, special;

//var to assign what Special Characters are as a string
var specialCharacters = "!@#$%^&*()";

//var for the button 
var generateBtn = document.querySelector("#generate");

//generate password button 
var generateButton = document.getElementById("generateBtn")
generateButton.addEventListener("click", createPassword);

// Write password to the #password input
function createPassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

      passwordText.value = password;
}

//prompts for user input
function generatePassword () {
  passwordLength = prompt("Please enter the number of characters (between 8 and 128) that you would like in your password:");

  numbers = confirm("Do you want numbers in your password?");

  lowerCase = confirm("Do you want to include lowercase letters in your password?");

  upperCase = confirm ("Do you want to include uppercase letters in your password?");

  special = confirm ("Do you want to include special characters in your password?");
};

//minimum amount of each should be 0

var minimumCount = 0;

//empty out the mimnimums for each var 
var minimumNumbers = "";
var minimumLowerCase = "";
var minimumUpperCase = "";
var minimumSpecialCharacters = "";

//functions to actually generate the password
let randomFunctions = [];
    if (numbers === true) {
        randomFunctions.push(functionArray.getNumbers);
    }

    if (lowerCase === true) {
        randomFunctions.push(functionArray.getLowerCases);
    }

    if(upperCase === true) {
        randomFunctions.push(functionArray.getUpperCases);
    }

    if(special === true) {
        randomFunctions.push(functionArray.getSpecialCharacters);
    }
    
  console.log(randomFunctions);


var functionArray = {

  getPasswordLength: function() {
    return passwordLength;
  },  
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
  },

  getSpecialCharacters: function() {
    return specialCharacters*(Math.floor(Math.random()*specialCharacters.length));
  },

};

console.log (functionArray);

//Check to ensure user selected ok for all prompts and uses empty minimums from above

/*if(numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount ++;
};

if (lowerCase === true) {
  minimumLowerCase = functionArray.getLowerCases();
  minimumCount ++;
};

if (upperCase === true) {
  minimumUpperCase = functionArray.getUpperCases();
  minimumCount ++;
};

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount ++;
}; */

//create an empty string variable in which to populate the password

var randomlyGeneratedPassword = "";

// for loop to get randomly generated characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = (Math.floor(Math.random()* 10) *4);
  
  randomlyGeneratedPassword += randomNumberPicked;
};

//Ensure all characters are added to the password

randomlyGeneratedPassword += minimumNumbers;
randomlyGeneratedPassword += minimumLowerCase;
randomlyGeneratedPassword += minimumUpperCase;
randomlyGeneratedPassword += minimumSpecialCharacters;

function getPassword() {
  return randomlyGeneratedPassword
};

/* function errorValidation (){
  if (numbers /=true) {
  alert ("Error: You must select at least one type of character!")
}

if (lowerCase /=true) {
  alert ("Error: You must select at least one type of character!")
}

if (upperCase /=true) {
  alert ("Error: You must select at least one type of character!")
}

if (special /=true) {
  alert ("Error: You must select at least one type of character!")
}
};
*/