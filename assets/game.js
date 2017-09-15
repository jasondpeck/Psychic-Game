  //variables for a-z choices, wins, losses, guesses left, and what the user guessed
  var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var wins = 0;
  var loss = 0;
  var guessesLeft = 10;
  var guessesSoFar = [];

  //function for capturing the user's key input
  document.onkeyup = function(event) {
    var guess = event.key;
    guessesSoFar.push(guess);
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  //if/else statements inside function 
    if (guess === computerChoice) {
      wins++;
      guessesLeft = 10;
    }
    else {
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      loss++;
      guessesLeft = 10;
  }

  //user input and results populate in the html
  var html = "<p>Guess what letter I'm thinking of:</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + loss + "</p>" +
      "<p>Guesses Left: " + guessesLeft + "</p>" +
      "<p>Your Guesses so far: " + guessesSoFar.join() + "</p>";
        
    document.getElementById("main").innerHTML = html;
  }