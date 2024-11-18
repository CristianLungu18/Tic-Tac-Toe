gameBox0.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox0.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox0.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox0);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});
gameBox1.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox1.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox1.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox1);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});
gameBox2.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox2.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox2.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox2);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox3.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox3.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox3.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox3);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox4.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox4.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox4.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox4);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox5.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox5.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox5.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox5);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox6.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox6.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox6.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox6);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox7.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox7.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox7.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox7);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});

gameBox8.addEventListener("click", () => {
  playerStatus = "lost";
  if (gameBox8.textContent) {
    alert("This field is already taken!");
    return;
  }
  gameBox8.textContent = `X`;
  let indexBox = gameArray.indexOf(gameBox8);
  gameArray.splice(indexBox, 1);
  checkForX();
  computerTurn();
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
});
