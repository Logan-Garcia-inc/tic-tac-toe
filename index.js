let winner=false
function restart(){
for (var i=0; i<=9; i++){
board.data[`s${i}`]=""
document.querySelector(".result").textContent="result:"
board.updateDisplay()
winner=0
board.turn=true
}
}
function innitSpots(){
for (let i = 1; i < 10; i++) {
  let target = document.getElementsByClassName(`s${i}`)[0]
  target.addEventListener("click", function(e) {
  if (!winner){
    let dataPosition = board.data[`${e.target.classList[1]}`]
    
    if (!dataPosition) {
      board.data[`${e.target.classList[1]}`] = playTurn();
      board.checkForWinner()
    }
    
    console.log(board.data)

  }})
}}
function playTurn() {
  if (board.turn) {
    return player1.team

  } else {
    return player2.team
  }

}
const player = (name, team) => {
  return {
    name,
    team,
  }
}
const player1 = player("player1", "X");
const player2 = player("player2", "O");


const Board = () => {
const updateDisplay = () => {
    for (var i = 1; i <= 9; i++) {
      document.querySelector(`.s${i}`).textContent = data[`s${i}`]
    }

  }
  function win() {
    if (turn) {
      console.log("player 1 wins")
      document.querySelector(".result").textContent = "Player 1 wins."
    } else {
      console.log("player 2 wins")
      document.querySelector(".result").textContent = "Player 2 wins."
    }
    winner=true
 }
  const checkForWinner = () => {
  updateDisplay()
    if (data["s1"] == data["s2"] && data["s2"] == data["s3"] && data["s3"] !== "") {
      win()
    }
    if (data["s4"] == data["s5"] && data["s5"] == data["s6"] && data["s6"] !== "") {
      win()
    }
    if (data["s7"] == data["s8"] && data["s8"] == data["s9"] && data["s9"] !== "") {
      win()
    }
    if (data["s1"] == data["s4"] && data["s4"] == data["s7"] && data["s7"] !== "") {
      win()
    }
    if (data["s2"] == data["s5"] && data["s5"] == data["s8"] && data["s8"] !== "") {
      win()
    }
    if (data["s3"] == data["s6"] && data["s6"] == data["s9"] && data["s9"] !== "") {
      win()
    }
    if (data["s1"] == data["s5"] && data["s5"] == data["s9"] && data["s9"] !== "") {
      win()
    }
    if (data["s3"] == data["s5"] && data["s5"] == data["s7"] && data["s7"] !== "") {
      win()
    }
board.turn = !board.turn
  }
  
  let turn = true;
  let data = {
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: ""
  }


  return {
    data,
    turn,
    updateDisplay,
    checkForWinner
  }
}
const board = Board()



// init spots

innitSpots()
