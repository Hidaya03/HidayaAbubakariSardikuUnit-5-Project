let submitButton = document.querySelector(".submitButton")
let muscularChicken = document.querySelector(".muscular-chicken")
let nosyChicken = document.querySelector(".nosy-chicken")
let warChicken = document.querySelector(".war-chicken")
let swaggerchicken = document.querySelector(".swagger-chicken")
let resultMessage = document.querySelector(".result-message")

submitButton.onclick = function() {
  let firstChoice = Number(document.querySelector(".firstchoice").value);
  let secondChoice = document.querySelector(".secondchoice").value;
  console.log("submit")
  let chickenResult = ""
  if(firstChoice < 10 && secondChoice === "crusty feet" ) {
    console.log("muscular chicken") 
    muscularChicken.style.display = "block" // show muscular chicken picture
    chickenResult="muscular chicken"
  } else if (firstChoice >= 10 && secondChoice === "even crustier feet"){
    // show nosy chicken picture
    console.log("nosy chicken")
    chickenResult= "nosy chicken"
    nosyChicken.style.display = "block"
  } else if (firstChoice < 10 && secondChoice === "even crustier feet") {
    // show tired chicken picture
    console.log("war chicken")
    warChicken.style.display = "block"
    chickenResult= "war chicken"
  } else if (firstChoice >= 10 && secondChoice === "crusty feet") {
    // show swagger chicken picture
    console.log("swagger chicken")
    swaggerchicken.style.display = "block"
    chickenResult= "swagger chicken"
  }else {
    console.log("input correctly")
  }
  resultMessage.innerHTML = " you would like to have " + firstChoice + " kids" + "you are a " + chickenResult + " type of chicken"
}

