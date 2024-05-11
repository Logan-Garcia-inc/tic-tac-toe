function restart(){
	main();
  updateDisplay({
      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
      s7: "",
      s8: "",
      s9: ""
    });
    
    document.querySelector(".result").textContent = "result: ";
}
function win(turn) {
  if (turn) {
    console.log("player 1 wins");
    document.querySelector(".result").textContent = "Player 1 wins.";
  } else {
    console.log("player 2 wins");
    document.querySelector(".result").textContent = "Player 2 wins.";
  }
  
  
}

class Board {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    //turn true is player 1
    var spotArray = document.querySelectorAll(".spot");
    for (var spotIndex = 0; spotIndex < spotArray.length; spotIndex++) {
      spotArray[spotIndex].addEventListener("click", (e) => {
        var position = e.target.classList[1];
        if (this.checkValidTurn(position)==true  && this.checkWin(this.data)==false) {
          this.playTurn(position);
        }});
        }
    
    this.data = {
      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
      s7: "",
      s8: "",
      s9: ""
    };
    this.turn = true;
  }
  checkValidTurn(position) {
    return !this.data[position];
  }
  
  playTurn(position) {
    if (this.turn) {
      this.data[position] = player1.team;

    } else {
      this.data[position] = player2.team
    }
    if (this.checkWin(this.data)){
    win(this.turn);
    }
    this.turn = !this.turn;
    updateDisplay(this.data);

  }
  checkWin(data) {
function allEqual(val1,val2,val3){
	return val1 == val2 && val2 == val3 && val3 != "";
}
    if (allEqual(data["s1"], data["s2"],data["s3"])  || allEqual(data["s4"],data["s5"],data["s6"]) || allEqual(data["s7"], data["s8"], data["s9"]) || allEqual(data["s1"], data["s4"], data["s7"]) ||allEqual(data["s2"], data["s5"], data["s8"]) ||allEqual(data["s3"], data["s6"], data["s9"]) ||allEqual(data["s1"], data["s5"], data["s9"]) ||allEqual(data["s3"], data["s5"], data["s7"])) {
      
      return true;
    }
    return false;
  }
}

function updateDisplay(data) {
  for (var i = 1; i <= 9; i++) {
    document.querySelector(`.s${i}`).textContent = data[`s${i}`] || "";
  }
}

class player {
  constructor(name, team) {
    this.name = name;
    this.team = team;
  }
}


function main() {
  player1 = new player("player1", "X");
  player2 = new player("player2", "O");
  var board = new Board(player1, player2);


}

main();
