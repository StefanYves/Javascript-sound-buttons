var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var audio1 = new Audio("audio1.mp3");
var audio2 = new Audio("audio2.mp3");

btn1.addEventListener("click", checkEngineSound);
btn2.addEventListener("click", hazardLightsSound);

function checkEngineSound() {
  let img1 = document.getElementById("img1");
  let hidden = true;

  if (hidden) {
    audio1.play();
    img1.removeAttribute("hidden");
    hidden = false;

    audio1.onended = function () {
      img1.setAttribute("hidden", "");
    };
  }
}

function hazardLightsSound() {
  let img2 = document.getElementById("img2");
  let hidden = true;

  if (hidden) {
    audio2.play();
    img2.removeAttribute("hidden");
    hidden = false;

    audio2.onended = function () {
      img2.setAttribute("hidden", "");
    };
  }
}
