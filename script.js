const cells = document.querySelectorAll(".cell");
const resBtn = document.querySelector(".res-btn");
const newGame = document.querySelector(".new-game");
const popup = document.querySelector(".popup");

let mover = document.querySelector(".mover");
let winner = document.querySelector(".winner");
let move = 0;

mover.innerHTML = "сейчас ходят " + "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = () => {
    if (cells[i].innerHTML == "") {
      move % 2 == 0 ? (cells[i].innerHTML = "X") : (cells[i].innerHTML = "O");
      move % 2 == 0
        ? (cells[i].style.color = "#b01c1c")
        : (cells[i].style.color = "#1d25b5");
      move % 2 == 0
        ? (mover.innerHTML = "сейчас ходят " + "O")
        : (mover.innerHTML = "сейчас ходят " + "X");
      playAudio("./assets/click.mp3");
      move++;
      check();
      console.log(move);
    }
  };
}

const check = () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    console.log(move);
    if (
      cells[arr[i][0]].innerHTML == "X" &&
      cells[arr[i][1]].innerHTML == "X" &&
      cells[arr[i][2]].innerHTML == "X"
    ) {
      popup.style.display = "flex";
      winner.innerHTML = "Победили крестики";
      playAudio("./assets/win.mp3");
    } else if (
      cells[arr[i][0]].innerHTML == "O" &&
      cells[arr[i][1]].innerHTML == "O" &&
      cells[arr[i][2]].innerHTML == "O"
    ) {
      popup.style.display = "flex";
      winner.innerHTML = "Победили нолики";
      playAudio("./assets/win.mp3");
    } else if (move == 9) {
      popup.style.display = "flex";
      winner.innerHTML = "НИЧЬЯ";
      playAudio("./assets/tie.mp3");
    }
  }
};

resBtn.addEventListener("click", () => {
  location.reload();
});
newGame.addEventListener("click", () => {
  location.reload();
});

playAudio = (url) => {
  new Audio(url).play();
};
