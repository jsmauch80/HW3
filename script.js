
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

const lc ="abcdefghijklmnopqrstuvwxyz";
//Array reference
const uc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const spec ="#$%&()*+<=>?@";

const num = "0123456789";

let allChar = "";

// Prompt questions and answer section
function generatePassword() {
  console.log("btn was clicked")
  let pwdLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowerCase characters?");
    if(lowerCase){
      allChar += lc
    };
    let upperCase = confirm("Would you like to use upperCase characters?");
    if (upperCase){
      allChar += uc
    };
    let specialCharacters = confirm("Would you like to use specialCharacters?");
    if (spec){
      allChar += spec
    };
    let numbers = confirm("Would you like to use numbers?");
    if (num){
      allChar += num
    };
    //console.log("promt worked")
    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  let pwd = "";
  for (let i=0; i<pwdLength; i++){
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return pwd
}


function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)