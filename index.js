var h1 = document.querySelector("h1");
var mgs = document.querySelector("#mgs");
var you = document.querySelector("#you");
var computer = document.querySelector("#computer");
var draw = document.querySelector("#draw");
var reset = document.querySelector("#reset");
var select = document.querySelectorAll(".select");
var selectionList = ["rock", "paper", "scissor"];
var dCount = 0;
var cCount = 0;
var uCount = 0;

select.forEach((value, index) => {
  value.addEventListener("click", () => {
    var randomNum = Math.floor(Math.random() * 3);
    var clickVal = value.getAttribute("id");
    compSlecection = selectionList[randomNum];
    if (compSlecection == clickVal) {
      mgs.innerText = `Computer select ${compSlecection}`;
      h1.innerText = "Draw";
      dCount++;
    } else if (
      compSlecection !== "paper" &&
      compSlecection === "scissor" &&
      clickVal === "rock"
    ) {
      mgs.innerText = `Computer select ${compSlecection}`;
      h1.innerText = "You won";
      uCount++;
    } else if (
      compSlecection !== "scissor" &&
      compSlecection === "rock" &&
      clickVal === "paper"
    ) {
      mgs.innerText = `Computer select ${compSlecection}`;
      h1.innerText = "You won";
      uCount++;
    } else if (
      compSlecection !== "rock" &&
      compSlecection === "paper" &&
      clickVal === "scissor"
    ) {
      mgs.innerText = `Computer select ${compSlecection}`;
      h1.innerText = "You won";
      uCount++;
    } else {
      mgs.innerText = `Computer select ${compSlecection}`;
      h1.innerText = "Computer won";
      cCount++;
    }
    you.innerText = uCount;
    computer.innerText = cCount;
    draw.innerText = dCount;
  });
});
reset.addEventListener("click", () => {
  dCount = 0;
  cCount = 0;
  uCount = 0;

  mgs.innerText = "Click to start game";
  h1.innerText = "Welcome to Rock Paper Scissor";

  you.innerText = uCount;
  computer.innerText = cCount;
  draw.innerText = dCount;
});
