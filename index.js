
let getCode = document.getElementById("getCode");
let result = document.getElementById("encode"); 
let result_2 = document.getElementById("decode");
getCode.innerHTML = "Str = '" + str + "'";

function security() {
  let txt;
  let person = prompt("Enter Your Name:");
  if (person === null || person === "") {
    txt = "Welcome unknown person to the Enigma Machine version 3.7";
  } else {
    txt = "Welcome " + person + " to the Enigma Machine version 3.7";
  }
    document.getElementById("security").innerHTML = txt;
}
  
//encoding function
function encode() { 
  result.innerHTML = window.btoa(str); 
} 

//decoding function
function decode() { 
  result_2.innerHTML = window.atob(str); 
} 

//code or text prompt function
function enterText() {
str = prompt("enter your text for encoding");
document.getElementById("ans").innerHTML = str;
}

//translation function 
function enterCode() {
str = prompt("enter your code for translation");
document.getElementById("ans_2").innerHTML = str;
}

function typewriter() {
  let audio = new Audio("sounds/typewriter.mp3");
  audio.play();
}

function display() {
  let audio = new Audio("sounds/type_paperout.mp3");
  audio.play()
}
  