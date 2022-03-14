let randomNumber = Math.floor((Math.random() * 3) + 1);

function resetGame() {
	randomNumber = Math.floor((Math.random() * 3) + 1);
}

function firstButton() {
	if (randomNumber === 1) {
  	alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
  	alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}

function secondButton() {
	if (randomNumber === 2) {
  	alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
  	alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}

function thirdButton() {
	if (randomNumber === 3) {
  	alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
  	alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}
