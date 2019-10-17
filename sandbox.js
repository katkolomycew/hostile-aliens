var ship = document.getElementById("ship"),
	x = document.body.clientWidth / 2;
var start = 0,
	time = 10000,
	score = 0,
	store = window.localStorage;
function move(event) {
	x = event.clientX - 12;
}
function drawShip() {
	ship.style.left = x + "px";
	var lship = document.getElementById("left"),
		rship = document.getElementById("right"),
		tship = document.getElementById("front"),
		bship = document.getElementById("back");
	lship.style.left = (x - 2) + "px";
	rship.style.left = (x + 22) + "px";
	tship.style.left = (x + 8) + "px";
	bship.style.left = (x + 2) + "px";
}
function fire() {
	var a = document.createElement("div");
	a.setAttribute("class", "missile");
	a.setAttribute("style", "left: " + (x + 11) + "px;");
	document.body.appendChild(a);
}
function debris() {
	var b = document.createElement("div");
	b.setAttribute("class", "object");
	b.setAttribute("style", "left: " + Math.round(Math.random() * document.body.clientWidth) + "px; border-radius: " + Math.round(Math.random() * 21) + "%;");
	document.body.appendChild(b);
}
function checkHit() {
	for(var i = 0; i < document.getElementsByClassName("object").length; i++) {
		for(var x = 0; x < document.getElementsByClassName("missile").length; x++) {
			if(document.getElementsByClassName("missile")[x].offsetLeft >= document.getElementsByClassName("object")[i].offsetLeft && document.getElementsByClassName("missile")[x].offsetLeft <= document.getElementsByClassName("object")[i].offsetLeft + document.getElementsByClassName("object")[i].clientWidth && document.getElementsByClassName("missile")[x].offsetTop >= document.getElementsByClassName("object")[i].offsetTop && document.getElementsByClassName("missile")[x].offsetTop <= document.getElementsByClassName("object")[i].offsetTop + document.getElementsByClassName("object")[i].clientHeight) {
				document.getElementsByClassName("object")[i].outerHTML = "";
				document.getElementsByClassName("missile")[x].outerHTML = "";
				score++;
			} else{}
		}
	}
}
function chs() {
	if(!store.getItem("highscore-PZLmXe")) {
		store.setItem("highscore-PZLmXe", 0);
	}
	else if(store.getItem("highscore-PZLmXe") < score) {
		store.setItem("highscore-PZLmXe", score);
	} else{}
}
function checkOut() {
	for(var c = 0; c < document.getElementsByTagName("div").length; c++) {
		if(document.getElementsByTagName("div")[c].offsetTop > document.body.clientHeight + 50 || document.getElementsByTagName("div")[c].offsetTop < -100) {
			document.getElementsByTagName("div")[c].outerHTML = "";
		} else{}
	}
}
function checkTime() {
	if(time === 0) {
		start = 0;
	}
	else if(time <= 3000) {
		document.getElementById("time").style.color = "red";
	}
	else {
		document.getElementById("time").style.color = "white";
	}
}
setInterval(function() {
	drawShip();
	checkHit();
	chs();
	checkOut();
	checkTime();
	document.getElementById("score").innerHTML = score;
	document.getElementById("highscore").innerHTML = store.getItem("highscore-PZLmXe");
	document.getElementById("time").innerHTML = time;
	if(start === 1) {
		time--;
	}
	else {
		time = 10000;
	}
}, 1);
setInterval(function() {
	if(start === 1) {
		document.getElementById("start").style.zIndex = "-3";
		debris();
	}
	else {
		document.getElementById("start").style.zIndex = "3";
		score = 0;
	}
}, 210);