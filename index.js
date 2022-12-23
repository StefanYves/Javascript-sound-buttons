var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var audio1 = new Audio("audio1.mp3");
var audio2 = new Audio("audio2.mp3");
var audio3 = new Audio("audio3.mp3");

btn1.addEventListener("click", checkEngineSound);
btn2.addEventListener("click", hazardLightsSound);
btn3.addEventListener("click", lockUnlockSound);

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

    let interval = setInterval(function () {
      if (img2.hasAttribute("hidden")) {
        img2.removeAttribute("hidden");
      } else {
        img2.setAttribute("hidden", "");
      }
    }, 500);

    audio2.onended = function () {
      clearInterval(interval);
      img2.setAttribute("hidden", "");
    };
  }
}

let lock = true;

function lockUnlockSound() {
  let img3 = document.getElementById("img3");

  audio3.play();

  if (lock) {
    img3.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/61/61457.png"
    );
    lock = false;
  } else {
    img3.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Unlock_icon.svg/1200px-Unlock_icon.svg.png"
    );
    lock = true;
  }
}
