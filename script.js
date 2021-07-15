// globalVariables
//Questions
var charactersQ = ("How many Characters would you like in your Password? Plase enter a number between 8 and 128.");
var upperQ = ("Would you like to inlclude Upper Case letters in your password?")
var lowerQ = ("Would you like to inlclude Lower Case letters in your password?");
var numberQ = ("Would you like to inlclude Numbers in your password?");
var specialQ = ("Would you like to inlclude Speical characters in your password?");

// Answers
var charactersA = null;
var upperA = null;
var lowerA = null;
var numberA = null;
var specialA = null;

//Letters and Symbols
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Misc
var finalPassword = null;
// Assignment code here
var genButton = document.getElementById("generate");
genButton.onclick = function () {
  questions();
  generatePassword();

};

// Ask the basic questions, and Logs answer.
function questions() {

  charactersA = Number(window.prompt(charactersQ, ""));
  if (charactersA <= 128 && charactersA >= 8) {
    window.alert("Great Choice!")
  }
  else {
    window.alert("Not Valid Entry. Please try again.");
    return false;
  }

  upperA = window.confirm(upperQ);

  lowerA = window.confirm(lowerQ);

  numberA = window.confirm(numberQ);

  specialA = window.confirm(specialQ);

  console.log("characters", charactersA, "\n", "upper", upperA, "\n", "lower", lowerA, "\n", "number", numberA, "\n", "special", specialA);
}


// Get references to the #generate element

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
};
//Random number betwenn
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input, how long will it be +true or false
function generatePassword() {
  var answers = [upperA, lowerA, numberA, specialA]
  console.log(answers);
  var passwordF = []
  for (let i = 0; i < charactersA; i++) {
    console.log("loop number", i)
    var randomNum = getRandomInt(4)
    console.log(randomNum);
    if (randomNum === 0 && answers[0] === true) {
      passwordF.push(getRandomUpper())
    }
    else if (randomNum === 1 && answers[1] === true) {
      passwordF.push(getRandomLower())
    }
    else if (randomNum === 2 && answers[2] === true) {
      passwordF.push(getRandomNumber())
    }
    else if (randomNum === 3 && answers[3] === true) {
      passwordF.push(getRandomSymbol())
    }
    else{
    i--
    }
    console.log("password", passwordF)
  }
  //creating a string from passswordF 
  var passwordString = (passwordF.toString())
  console.log(passwordString)
  //puting that string into the password box ask google web API. 
  
};




// Add event listener to generate button

