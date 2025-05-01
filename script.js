const boxes = document.querySelectorAll("button");
const body = document.body;
console.log(boxes);
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn0 = true;
for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    checkWinners();
  });
}

const checkWinners = () => {
  for (let pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1 !=="" && pos2!=="" && pos3!=""){
        if (pos1 === pos2 && pos2 === pos3) {
            body.innerHTML = `Winner is ${pos1}`
        }
    }
    
  }
};
