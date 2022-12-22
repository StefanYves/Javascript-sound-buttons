var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var audio1 = new Audio("audio1.mp3");

btn1.addEventListener("click", playsound);

function playsound() {
  audio1.play();
}
