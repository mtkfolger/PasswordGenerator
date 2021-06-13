const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const symbols = "!@#$%^&*()"


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert ("Want to create a new password?")
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  var password = "";
  for (var i=0; i<length; i++) {
    getRandomCharacter(lowercase)
  }  
  return password
}

function getRandomCharacter (characters) {
  return  Math.floor (Math.random()*characters.length)

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
