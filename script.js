'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct Number! 🎊';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 0;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   When No Input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number Selected!';
    displayMessage('⛔ No Number Selected!');

    // when guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '🎊🎊 Congratulation !! You Win🎉🎉';
    displayMessage('🎊🎊 Congratulation !! You Win🎉🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'ಥ_ಥ You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
    // Guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'ಥ_ಥ You Lose';
      document.querySelector('.score').textContent = 0;
    }

    // guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'ಥ_ಥ You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('body').style.backgroundColor;
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.highscore').textContent = highScore;
});
