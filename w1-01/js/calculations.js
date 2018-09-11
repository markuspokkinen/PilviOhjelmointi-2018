function multiplyBy() {
	console.log('multiply');
	// check the input
	var firstnum = document.getElementById('firstNumber').value;
	var secnum = document.getElementById('secondNumber').value;

	if (!isNaN(firstnum) && !isNaN(secnum)) {
		var res = firstnum * secnum;
		document.getElementById('result').innerHTML = res;
	} else {
		document.getElementById('result').innerHTML = 'Enter numbers';
	}

}

function divideBy() {
	// check the input
	var firstnum = document.getElementById('firstNumber').value;
	var secnum = document.getElementById('secondNumber').value;

	if (!isNaN(firstnum) && !isNaN(secnum)) {
		if (secnum === 0) {
			document.getElementById('result').innerHTML = 'cannot divide by zero';
		} else {
			var res = firstnum / secnum;
			document.getElementById('result').innerHTML = res;
		}
	}
	else {
		document.getElementById('result').innerHTML = 'Enter numbers';
	}

}

