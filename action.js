window.onload = function () {
    let turn = "x";
    let o_count = 0;
    let x_count = 0;
    const cells = document.querySelectorAll(".cell");
  
    cells.forEach(cell => {
      cell.onclick = () => {
        if (cell.textContent === "") {
          cell.textContent = turn;
          cell.classList.add(`played-${turn}`);
          turn = turn === "x" ? "o" : "x";
          checkWinner();
        }
      };
    });
  
    function checkWinner() {
      const array = [];
      for (let i = 1; i < 10; i++) {
        array[i] = document.getElementById(`item_${i}`).textContent;
      }
  
      const winCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
      ];
  
      for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
          return handleWin(array[a]);
        }
      }
  
      if (array.slice(1).every(cell => cell !== "")) {
        return handleTie();
      }
    }
  
    function handleWin(winner) {
      const title = document.getElementById("title");
      title.textContent = `${winner.toUpperCase()} WINS 🎉`;
      title.style.color = winner === "x" ? "#ff3c3c" : "#0077ff";
      
      if (winner === "x") {
        document.getElementById("1").textContent = `Player X: ${++x_count}`;
      } else {
        document.getElementById("2").textContent = `Player O: ${++o_count}`;
      }
  
      setTimeout(resetBoard, 2000);
    }
  
    function handleTie() {
      const title = document.getElementById("title");
      title.textContent = "It's a TIE 🤝";
      title.style.color = "#555";
      setTimeout(resetBoard, 2000);
    }
  
    function resetBoard() {
      for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(`item_${i}`);
        cell.textContent = "";
        cell.classList.remove("played-x", "played-o");
      }
      document.getElementById("title").textContent = "XO Game";
      document.getElementById("title").style.color = "#222";
      turn = "x";
    }
  };
  