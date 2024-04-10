let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")




let turnO = true; // playerX playerO

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// resetGame 
const resetGame = () => {
    turnO = true;
    enabledBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    // condition
    if (turnO === true) {
      box.innerText = "O";
      box.style.color = "green"
      turnO = false;
    } else {
        box.innerText = "X";
        box.style.color = "red"
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// disabled the all box
const disabledBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// enabled the all box
const enabledBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner = () => {
  for (const pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    } 
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);