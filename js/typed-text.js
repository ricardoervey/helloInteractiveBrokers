var string = "> hello Interactive Brokers! my name is Ricardo Sanchez. i made this to introduce myself and express my interest in the web developer and designer position... scroll down for more...";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',50);

}
frameLooper();