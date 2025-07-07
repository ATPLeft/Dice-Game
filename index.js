function rollDice() {
  // For Image1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", "assets/" + randomDiceImage1);

  // For Image2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", "assets/" + randomDiceImage2);

  // Show winner message
  var title = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "WINNER! Player 1 🎉";
  } else if (randomNumber1 === randomNumber2) {
    title.innerHTML = "DRAW!! 🤝";
  } else {
    title.innerHTML = "WINNER! Player 2 🎉";
  }
}