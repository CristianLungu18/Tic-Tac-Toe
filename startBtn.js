startBtn.addEventListener("click", () => {
  text.textContent = "";
  startBtn.classList.add("visibility");
  gameBox0.classList.remove("disabled");
  gameBox1.classList.remove("disabled");
  gameBox2.classList.remove("disabled");
  gameBox3.classList.remove("disabled");
  gameBox4.classList.remove("disabled");
  gameBox5.classList.remove("disabled");
  gameBox6.classList.remove("disabled");
  gameBox7.classList.remove("disabled");
  gameBox8.classList.remove("disabled");
  computerTurn();
  if (computerStatus === "win" && playerStatus === "win") {
    text.classList.remove("color-red");
    text.classList.remove("color-green");
    text.textContent = "Draw!";
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
