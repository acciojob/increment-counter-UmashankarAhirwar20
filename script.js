//your JS code here. If required.
let counterElement = document.getElementById("counter");

document.getElementById("incrementBtn").onclick = function () {
	let currentValue = parseInt(counterElement.textContent);

	alert(currentValue);

	counterElement.textContent = currentValue + 1;
}
