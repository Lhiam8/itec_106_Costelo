function play(playerChoice) {
    playerChoice = playerChoice.toUpperCase();
    var choices = ['ROCK', 'PAPER', 'SCISSORS'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result;
    var playerChoseText = `PLAYER CHOSE: ${playerChoice}.`;
    var computerChoseText = `COMPUTER CHOSE: ${computerChoice}.`;
    if (playerChoice === computerChoice) {
    result = "It's a tie!";
    document.getElementById('result').className = 'tie';
    } else if (
    (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
    result = "You win!";
    document.getElementById('result').className ='win';
    } else {
    result = "You lose!";
    document.getElementById('result').className ='lose';
    }
    document.getElementById('playerChoice').innerText = playerChoseText;
    document.getElementById('computerChoice').innerText = computerChoseText;
    document.getElementById('result').innerText = `${result}`;
   }
   