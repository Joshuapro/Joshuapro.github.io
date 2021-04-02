const detection = document.querySelector("body");
const result = document.querySelector("#result");
let target;
let user;
let counter = 1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function generateRandom() {
  target = getRandomInt(10);
  target = target.toString();
  return target;
}

target = generateRandom();
console.log(target);
detection.addEventListener("keydown", (key) => {
  console.log(key.key);
  user = key.key;
  result.textContent = "Let's see if " + user.toString() + " is correct......";
  setTimeout(function () {
    if (user.toString() === target) {
      correctInput();
    } else {
      counter += 1;
      incorrect();
    }
  }, 1500);
});

function correctInput() {
  result.textContent = "You got it in just " + counter.toString() + " tries!";
  detection.setAttribute("style", "animation-name:winning;");
  document.getElementById("win").setAttribute("style", "display:inline");
}

function incorrect() {
    if (parseInt(target) < user){
        result.textContent = user.toString() + " is too large, Try again";
    }else{
        result.textContent = user.toString() + " is too low, Try again";
    }
}
