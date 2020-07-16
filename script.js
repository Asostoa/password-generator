// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  /* var password=generatePassword();*/
  var passwordText = document.querySelector("#password");
  var superLibrary = [];


  //in here we ask the use how long he wants his password

   passwordLenght = prompt("how many characters you want in your password?");

  //we make sure that the users choose a length that is correct
  if (passwordLenght < 8 || passwordLenght >= 126) {
    //alert("you choose your password to be " + passwordLenght)
    alert("you need a password betewn 8 and 125 characters");
   // passwordLenght = prompt("how many characters you want in your password?");
  } else {
   // alert("do something");
    // in here we create separate libraries if the uiser accept
     yesUpperCase = confirm("Will you like upper case characters in your password? ");
    if (yesUpperCase) {
      superLibrary = superLibrary.concat(myLibrary.upper)
    }
    var yesLowerCase = confirm("Will you like lower case characters in your password? ");
    if (yesLowerCase) {
      superLibrary = superLibrary.concat(myLibrary.lower)
    }
    var yesSpecialCharacter = confirm("Will you like special characters in your password? ");
    if (yesSpecialCharacter) {
      superLibrary = superLibrary.concat(myLibrary.symbol)
    }
    var yesNumber = confirm("Will you like numbers in your password? ");
    if (yesNumber) {
      superLibrary = superLibrary.concat(myLibrary.number)
    }

    //in here we create a random password with the choises that the user confirm
    var password = '';
    var confirmOpt = password.length;
    console.log('you chose ' + confirmOpt + ' options');
    var newPasswordLength = passwordLenght - confirmOpt;
    for (var i = 0; i < newPasswordLength; i++) {
      password += superLibrary[getRandomNumber(superLibrary.length)];
    }
    passwordText.value = password;

  }
}
//in here we create a random number wich we use to create a random password
function getRandomNumber(limit) {
  var basicRandom = Math.random();
  var randomToLimit = basicRandom * limit;
  var randomFloored = Math.floor(randomToLimit);
  return randomFloored;
}
//this are our libraries
var myLibrary = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z",],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  symbol: [".", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "/", "<", ">", ":", ",", "?"],
  number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
