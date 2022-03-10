let message1 = 'Oops! You push the wrong button! Try again!'
let message2 = 'Nice try! But this button is not the right one ;)'
let message3 = 'BooYaaah! You chose the right one :) Congratulations! You are the champion!'

function resetGame() {
	let temp;
	temp = message1;
	message1 = message3;
	message3 = temp;
	temp = message1;
	message1 = message2;
	message2 = temp;
}

function firstButton() {
	alert(message1);
}

function secondButton() {
	alert(message2);
}

function thirdButton() {
	alert(message3);
}