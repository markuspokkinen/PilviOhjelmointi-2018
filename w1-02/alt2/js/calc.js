function getNumber(id) {
    return parseInt(document.getElementById(id).value);
}

function setResult(result) {
    document.getElementById("result").innerHTML = result;
}

function plus() {
    setResult(getNumber("firstValue") + getNumber("secondValue"));
}

function mult() {
    setResult(getNumber("firstValue") * getNumber("secondValue"));
}
function subt() {
	setResult(getNumber("firstValue") - getNumber("secondValue"));
}
function divs() {
	if (getNumber("secondValue") === 0) {
		setResult("Cannot Divide by Zero");
	} else {
		setResult(getNumber("firstValue") / getNumber("secondValue"));
	}
}