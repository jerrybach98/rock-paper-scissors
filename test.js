// toggle sound button
let sound = document.getElementById('sound');
let audio = document.querySelector('.audio');
sound.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    sound.setAttribute("src", "./images/unmute.png");
  } else {
    audio.pause();
    sound.setAttribute("src", "./images/mute.png");
  }
});

//restart button
const restart = document.querySelector('.restart');
restart.addEventListener("click", () => {
  window.location.reload()
});

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
    return 'You win! ';
  } else if (roundResult === -1) {
    return 'You lose! ';
  } else if (roundResult === 0) {
    return 'It\'s a Draw!';
  }
}

  //Plays 5 round game 
function game() {
  //incremental variables
  let playerScore=0, computerScore=0, roundCounter=0;

  //Using JS button event listenr / loops code
  let playerSelection;
  const choiceBtns = document.querySelectorAll('[data-selection]')
  choiceBtns.forEach(button => button.addEventListener("click", () => {
  playerSelection = button.dataset.selection;

    // add image of results
    const results = document.querySelector('.results');
    const playerImg = document.createElement('img');
    results.innerHTML = '';
    playerImg.src = `./images/${playerSelection.toLowerCase()}.png`;
    results.appendChild(playerImg);
    playerImg.classList.add('resultImg');
    playerImg.style.height = "150px";

    // automatically play music on button click
    if (roundCounter === 0 && sound.getAttribute("src") !== "./images/mute.png") {
      audio.play();
    };

    // Results of computer choice function and single round winner function as variables
    const computerSelection = getComputerChoice();
    let roundResult = playRound (playerSelection, computerSelection);

    // Computer selection image generation
    const moguImg = document.createElement('img');
    moguImg.src = `./images/m${computerSelection.toLowerCase()}.png`;
    results.appendChild(moguImg);
    moguImg.classList.add('resultImg');
    moguImg.style.width = "75px";

    // Increments score and round number with winner value
    if (roundResult === 1) {
      playerScore++;
    } else if (roundResult === -1) {
    computerScore++;
    }
    if (roundResult === 1 || roundResult ===-1 || roundResult===0) {
      roundCounter++;
    }

    // Announce round results HTML
    let roundAnnouncement = roundWinner(playerSelection, computerSelection, roundResult);
    const prompt = document.querySelector('.prompt');
    prompt.innerHTML = '';

      const round = document.createElement('p');
      round.textContent = `${roundAnnouncement}`;
      prompt.appendChild(round);
      round.classList.add('rules');

      const choice = document.createElement('p');
      choice.textContent= `Player chooses ${playerSelection} and Mogu chooses ${computerSelection}`;
      prompt.appendChild(choice);

      const score = document.querySelector('.score');
      score.innerHTML = '';

      const player = document.createElement('p');
      player.innerHTML = `PLAYER: ${playerScore}`;
      score.appendChild(player);
      player.style.margin = '26px 60px';

      const mogu = document.createElement('p');
      mogu.innerHTML = `MOGU: ${computerScore}`;
      score.appendChild(mogu);
      mogu.style.margin = '26px 60px';

    // Game function announces winner after 5 rounds
    if (playerScore===5 || computerScore===5) { 
      let winner;
      if (playerScore > computerScore) {
        winner = 'You win the game!';
      } else if (playerScore < computerScore) {
        winner = 'Mogu wins the game!';
      } else if(playerScore === computerScore) 
        winner = 'The game ended in a tie!';
      const popUp = document.querySelector('.popUp');
      const gameWinner = document.createElement('p');
      gameWinner.textContent = winner;
      popUp.insertBefore(gameWinner, restart);
      popUp.style.visibility = 'visible';

      //disable buttons at end
      const buttons = document.querySelectorAll('.choiceBtn');
      buttons.forEach((buttons) => {
          buttons.disabled = true;
      })

    }
  }));
}

game ();



// change results to paw pictures
// ui for results
// popup 