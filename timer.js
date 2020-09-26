
const changeMin = document.getElementById("time_min");

const changeSec = document.getElementById("time_sec");

changeMin.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		updateTimer();
	}
});

changeSec.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		updateTimer();
	}
});

function updateTimer() {
	let h2Ele = document.getElementById("time_left");

	let min = parseInt(changeMin.value);
	let sec = parseInt(changeSec.value);


	if(typeof(min) !== "number" || min < 1) {
		min = 0;
	}
	if(typeof(sec) !== "number" || sec < 1) {
		sec = 0;
	}
	h2Ele.innerHTML = "Time Left: " +  min.padStart(2,'0') + ":" + sec.padStart(2,'0')
}