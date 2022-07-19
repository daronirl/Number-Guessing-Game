
// variables
let message = document.querySelector('.message');
let score = 20
let highscore = 0;
const check = document.querySelector('.check');
let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// function to dispay messages
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}
 
 // click event to check if your number matches the secret number
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  
  // when there is no input
  if (!guess) {
    displayMessage('No Number!');
    
    // If you guess the right number
  } else if (guess === secretNumber) {
    displayMessage('Correct !');
    document.body.style.backgroundColor = 'green';
    number.textContent = secretNumber;

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
   
 // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
     
      // When you lose the game
  } else {
      displayMessage('You LOST!!!');
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
  }
    
  

  }


});


// Refreshes the page to try again
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   
} ) 