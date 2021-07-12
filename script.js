// globalVariables
    //Questions
var charactersQ = ("How many Characters would you like in your Password? Plase enter a number between 8 and 128.");
var upperQ = ("Would you like to inlclude Upper Case letters in your password?")
var lowerQ = ("Would you like to inlclude Lower Case letters in your password?");
var numberQ = ("Would you like to inlclude Numbers in your password?");
var specialQ = ("Would you like to inlclude Speical characters in your password?");
    
    // Answers
var charactersA = undefined;
var upperA = undefined;
var lowerA = undefined;
var numberA = undefined; 
var specialA = undefined;

    //Letters and Symbols
var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

    // Misc
var finalPassword = undefined
// Assignment code here
var genButton = document.getElementById("generate");
genButton.onclick = function(){
  questions();
  generatePassword()
  
};

// Ask the basic questions, and Logs answer.
function questions (){

var charactersA = Number(window.prompt(charactersQ,""));
  if (charactersA<= 128 && charactersA >= 8){
    window.alert("Great Choice!")
  }
  else{
    window.alert("Not Valid Entry. Please try again.");
    return (
      false
    );
  }

var upperA = window.confirm(upperQ);

var lowerA = window.confirm(lowerQ);

var numberA = window.confirm(numberQ);

var specialA = window.confirm(specialQ);

console.log("characters",charactersA, "\n","upper",upperA, "\n", "lower",lowerA, "\n","number",numberA, "\n","special",specialA);
}


// Get references to the #generate element

var randomFunc = {
  lower: getRandomLower(),  
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
}
function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() { 
  return symbols[Math.floor(Math.random() * symbols.length)];
};
// Write password to the #password input, how long will it be +true or false

function generatePassword(){
  var answers = [{upperA}, {lowerA}, {numberA}, {specialA}]
  
  console.log (answers);
};

  

// Add event listener to generate button

