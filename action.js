let turn = "x";
let array = [];
let o_count = 0;
let x_count = 0;

function play(id) {
  const cell = document.getElementById(id);
  if (cell.innerHTML === "") {
    cell.innerHTML = turn;
    turn = turn === "x" ? "o" : "x";
    winner();
  }
}

function winner() {
  for (let i = 1; i < 10; i++) {
    array[i] = document.getElementById(`item_${i}`).innerHTML;
  }

  const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let combo of winCombos) {
    const [a, b, c] = combo;
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      won(array[a]);
      return;
    }
  }

  if (array.slice(1).every(cell => cell !== "")) {
    tie();
  }
}

function won(winner) {
  document.getElementById("title").textContent = `${winner.toUpperCase()} WON`;
  result(winner);
  setTimeout(restart, 1500);
}

function tie() {
  document.getElementById("title").textContent = "TIE";
  setTimeout(restart, 1500);
}

function result(winner) {
  if (winner === "x") {
    x_count++;
    document.getElementById("1").textContent = `Player X: ${x_count}`;
  } else {
    o_count++;
    document.getElementById("2").textContent = `Player O: ${o_count}`;
  }
}

function restart() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(`item_${i}`).innerHTML = "";
  }
  document.getElementById("title").textContent = "XO Game";
  turn = "x";
}
