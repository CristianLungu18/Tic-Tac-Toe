const computerTurn = () => {
  counter++;
  let myNumber = Math.floor(Math.random() * gameArray.length);
  let randomBox = gameArray[myNumber];
  randomBox.textContent = `O`;
  gameArray.splice(myNumber, 1);
  computerStatus = "lost";
  checkForO();
  if (counter === 5 && computerStatus === "win") {
    text.textContent = "The computer won the game!";
    gameBox0.classList.add("disabled");
    gameBox1.classList.add("disabled");
    gameBox2.classList.add("disabled");
    gameBox3.classList.add("disabled");
    gameBox4.classList.add("disabled");
    gameBox5.classList.add("disabled");
    gameBox6.classList.add("disabled");
    gameBox7.classList.add("disabled");
    gameBox8.classList.add("disabled");
    resetBtn.classList.remove("visibility");
  }
  if (counter === 5 && computerStatus !== "win") {
    text.textContent = "Draw!";
    text.classList.remove("color-red");
    text.classList.remove("color-green");
    gameBox0.classList.add("disabled");
    gameBox1.classList.add("disabled");
    gameBox2.classList.add("disabled");
    gameBox3.classList.add("disabled");
    gameBox4.classList.add("disabled");
    gameBox5.classList.add("disabled");
    gameBox6.classList.add("disabled");
    gameBox7.classList.add("disabled");
    gameBox8.classList.add("disabled");
    resetBtn.classList.remove("visibility");
  }
  if (computerStatus === "win" && playerStatus === "win") {
    text.textContent = "Draw!";
    text.classList.remove("color-red");
    text.classList.remove("color-green");
    gameBox0.classList.add("disabled");
    gameBox1.classList.add("disabled");
    gameBox2.classList.add("disabled");
    gameBox3.classList.add("disabled");
    gameBox4.classList.add("disabled");
    gameBox5.classList.add("disabled");
    gameBox6.classList.add("disabled");
    gameBox7.classList.add("disabled");
    gameBox8.classList.add("disabled");
    resetBtn.classList.remove("visibility");
  }
  if (counter === 5 && playerStatus === "win") {
    text.textContent = "Congratulations, you won the game!";
    resetBtn.classList.remove("visibility");
  }
};
