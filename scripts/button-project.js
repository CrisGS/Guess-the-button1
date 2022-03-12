let loseMessage1 = 'Oops! You push the wrong button! Try again!'
let loseMessage2 = 'Nice try! But this button is not the right one ;)'
let winMessage = 'BooYaaah! You chose the right one :) Congratulations! You are the champion!'
let loseMessage3 = "Hey! Don't give up! Maybe the next choice will be the right one"

let randomNumber = Math.floor((Math.random() * 3) + 1);

function resetGame() {
	randomNumber = Math.floor((Math.random() * 3) + 1);
  let temp;
	temp = loseMessage1;
	loseMessage1 = loseMessage3;
	loseMessage3 = temp;
	temp = loseMessage1;
	loseMessage1 = loseMessage2;
	loseMessage2 = temp;
}

function firstButton() {
	if (randomNumber === 1) {
  	alert(winMessage);
  } else {
  	alert (loseMessage1);
  }
}

function secondButton() {
	if (randomNumber === 2) {
  	alert(winMessage);
  } else {
  	alert (loseMessage2);
  }
}

function thirdButton() {
	if (randomNumber === 3) {
  	alert(winMessage);
  } else {
  	alert (loseMessage3);
  }
}
