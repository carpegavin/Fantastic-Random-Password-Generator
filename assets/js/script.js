var generateBtn = document.querySelector("#generate");

function writePassword() {
  
generatePassword()
}

function generatePassword() {

  var passwordCharacters = [];
  var finalPassword = [];

  var passwordLength = parseInt(prompt("Your password can be from 8-128 characters.\nWhat shall you choose, Captain?"));
    if (passwordLength > 8 && passwordLength < 128 || !passwordLength) {
      alert ("Great first step! Your pass is gonna be " + passwordLength + " characters long")
    } else {
      alert ("You need a different password length!");
      // I can't figure out how to loop if the user gives a number outside of the parameter set.
      // for(var i = 0; i < lowerCase.length; i++);
    } 
    
  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var a1 = new Array();
  a1 = lowerCase.split("");
  var userWantLowerCase = confirm("Are ya gonna be outrageous and use a \nlower case letter?");
    if (userWantLowerCase){
      for(var i = 0; i < lowerCase.length; i++)
      passwordCharacters.push(lowerCase[i])};

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var a2 = new Array();
  a2 = upperCase.split("");
  var userWantUppercase = confirm("C'mon already are you gonna use an \nuppercase letter?");
    if (userWantUppercase){
      for(var i = 0; i < upperCase.length; i++)
      passwordCharacters.push(upperCase[i])};

  var numbers = "0123456789";
  var a3 = new Array();
  a3 = numbers.split("");
  var userWantUppercase = confirm("Oooh get crazy and maybe use a \nnumber?");
    if (userWantUppercase){
      for(var i = 0; i < numbers.length; i++)
      passwordCharacters.push(numbers[i])};

  var symbols = "!@#$%^&*()<>?";
  var a4 = new Array();
  a4 = symbols.split("");
  var userWantSymbol = confirm("No way NO WAY are you gonna use a \nspecial symbol?");
    if (userWantSymbol){
      for(var i = 0; i < symbols.length; i++)
      passwordCharacters.push(symbols[i])};


      for(var i = 0; i < passwordLength; i++){
  var index = Math.floor(Math.random()*passwordCharacters.length);
  finalPassword = finalPassword+passwordCharacters[index];
  console.log (index);

}

document.querySelector("#password").value = finalPassword;
alert ("Click OK for your new ULTRA secure password! \nI knew you could do it, champ!");
}

generateBtn.addEventListener("click", writePassword);









