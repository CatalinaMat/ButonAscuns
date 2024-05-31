var buttons = [1, 2, 3];
var winnerButton = buttons[1];
function checkWinner(buttonNumber) {
	var message = document.getElementById('message');
	if (buttonNumber === winnerButton) {
		message.innerText = "Castigator";
	} else {
    message.innerText = "Necastigator";
  }
}
