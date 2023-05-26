// Gets a random choice from the computer. Result given to variable = computerSelection
function getComputerChoice () {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    return choice = myArray[Math.floor(Math.random()*myArray.length)];
  }

  // Plays a round of RPS by comparing choices to return a returns a value that indicates a winner, The value is returned to the variable = roundResult
  function playRound (playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) return 0;

    else if ((playerSelection==='Rock') && (computerSelection==='Scissors') ||
      (playerSelection==='Paper') && (computerSelection==='Rock') ||
      (playerSelection==='Scissors') && (computerSelection==='Paper')) {
      return 1;
      }
    else {
      return -1;
    }
  }

  // Uses winning value to announce winner of single round. Call variables as parameters in order to use them.
  function roundWinner(playerSelection, computerSelection, roundResult) {
    if (roundResult === 1) {
      return 'You win ' + playerSelection + ' beats ' + computerSelection;
    } else if (roundResult === -1) {
      return 'You lose ' + computerSelection + ' beats ' + playerSelection;
    } else if (roundResult === 0) {
      return 'It\'s a Draw!';
    }
  }

  //Plays 5 round game 
  function game() {
    //incremental variables
    let playerScore=0, computerScore=0, roundCounter=0;

    // Loops for 5 rounds
    // while (roundCounter<5) {
      // Ask caps insesnitive choice from the player and returns selection
      //const playerChoice = prompt("Choose: Rock, Paper, or Scissors?");
      //const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
      
      //Using JS event listenr
      let playerSelection;
      const choiceBtns = document.querySelectorAll('.choiceBtn')
      choiceBtns.forEach(button => button.addEventListener("click", () => {
      playerSelection = button.textContent;

      // Results of computer choice function and single round winner function as variables
      const computerSelection = getComputerChoice();
      let roundResult = playRound (playerSelection, computerSelection);

      // Increments score and round number with winner value
      if (roundResult === 1) {
        playerScore++;
      } else if (roundResult === -1) {
      computerScore++;
      }
      if (roundResult === 1 || roundResult ===-1 || roundResult===0) {
        roundCounter++;
      }

      // Announce round results to console.log
      let roundAnnouncement = roundWinner(playerSelection, computerSelection, roundResult);
      console.log(`Player chooses ${playerSelection} and Computer chooses ${computerSelection}`);
      console.log(`Round ${roundCounter} : ${roundAnnouncement}`);
    //  console.log(`Player Score: ${playerScore} / Computer Score: ${computerScore}`);

      }));
    }

    // Game function announces winner after 5 rounds
    //if (roundCounter===5) { 
    //  if (playerScore > computerScore) {
    //    return "Player wins the game!";
    //  } else if (playerScore < computerScore) {
    //    return "Computer wins the game!";
    //  } else if(playerScore === computerScore) 
    //    return 'The game ended in a tie!';
    //}
  //}

  game ();