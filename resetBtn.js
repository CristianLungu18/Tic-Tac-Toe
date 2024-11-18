resetBtn.addEventListener("click", () => {
  counter = 0;
  gameArray = [];
  gameArray = [
    gameBox0,
    gameBox1,
    gameBox2,
    gameBox3,
    gameBox4,
    gameBox5,
    gameBox6,
    gameBox7,
    gameBox8,
  ];
  playerStatus = "";
  computerStatus = "";
  resetBtn.classList.add("visibility");
  startBtn.classList.remove("visibility");
  gameBox0.textContent = "";
  gameBox1.textContent = "";
  gameBox2.textContent = "";
  gameBox3.textContent = "";
  gameBox4.textContent = "";
  gameBox5.textContent = "";
  gameBox6.textContent = "";
  gameBox7.textContent = "";
  gameBox8.textContent = "";
  text.textContent = "";

  startBtn.classList.remove("visiblity");
  gameBox0.classList.remove("disabled");
  gameBox1.classList.remove("disabled");
  gameBox2.classList.remove("disabled");
  gameBox3.classList.remove("disabled");
  gameBox4.classList.remove("disabled");
  gameBox5.classList.remove("disabled");
  gameBox6.classList.remove("disabled");
  gameBox7.classList.remove("disabled");
  gameBox8.classList.remove("disabled");

  gameBox0.classList.remove("color-red");
  gameBox1.classList.remove("color-red");
  gameBox2.classList.remove("color-red");
  gameBox3.classList.remove("color-red");
  gameBox4.classList.remove("color-red");
  gameBox5.classList.remove("color-red");
  gameBox6.classList.remove("color-red");
  gameBox7.classList.remove("color-red");
  gameBox8.classList.remove("color-red");

  gameBox0.classList.remove("color-green");
  gameBox1.classList.remove("color-green");
  gameBox2.classList.remove("color-green");
  gameBox3.classList.remove("color-green");
  gameBox4.classList.remove("color-green");
  gameBox5.classList.remove("color-green");
  gameBox6.classList.remove("color-green");
  gameBox7.classList.remove("color-green");
  gameBox8.classList.remove("color-green");

  gameBox0.classList.add("disabled");
  gameBox1.classList.add("disabled");
  gameBox2.classList.add("disabled");
  gameBox3.classList.add("disabled");
  gameBox4.classList.add("disabled");
  gameBox5.classList.add("disabled");
  gameBox6.classList.add("disabled");
  gameBox7.classList.add("disabled");
  gameBox8.classList.add("disabled");

  text.classList.remove("color-red");
  text.classList.remove("color-green");
});
