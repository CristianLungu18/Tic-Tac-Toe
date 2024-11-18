const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const gameBox0 = document.querySelector(".game-box0");
const gameBox1 = document.querySelector(".game-box1");
const gameBox2 = document.querySelector(".game-box2");
const gameBox3 = document.querySelector(".game-box3");
const gameBox4 = document.querySelector(".game-box4");
const gameBox5 = document.querySelector(".game-box5");
const gameBox6 = document.querySelector(".game-box6");
const gameBox7 = document.querySelector(".game-box7");
const gameBox8 = document.querySelector(".game-box8");
const nextBtn = document.querySelector(".next-btn");
const text = document.querySelector(".status-text");

let playerStatus = "";
let computerStatus = "";

resetBtn.classList.add("visibility");
gameBox0.classList.add("disabled");
gameBox1.classList.add("disabled");
gameBox2.classList.add("disabled");
gameBox3.classList.add("disabled");
gameBox4.classList.add("disabled");
gameBox5.classList.add("disabled");
gameBox6.classList.add("disabled");
gameBox7.classList.add("disabled");
gameBox8.classList.add("disabled");

let computer = 0;
let gameArray = [
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

let counter = 0;
