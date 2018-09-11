let targetNumber = Math.floor(Math.random() * 10) + 1;
var count = 0;

function init() {
	document.getElementById('but').addEventListener('click', function (event) {
		event.preventDefault();
		check(document.getElementsByName('number')[0].value);

	});
}

function check(value) {
	if (count > 5) {
		showLoss();
	} else if (parseInt(value) === parseInt(targetNumber)) {
		showWin();
	} else {
		showError();
	}
	count++;
}

function showWin() {
	console.log('You Win');
}

function showError() {
	console.log('You Guessed Wrong');
}

function showLoss() {
	console.log('You Lose');
}

init();
