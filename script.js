let love = 50;
let energy = 80;
let level = 1;
let exp = 0;

function feed() {
  love += 5;
  energy -= 5;
  exp += 5;

  update();
}

function play() {
  if (energy >= 10) {
    love += 10;
    energy -= 10;
    exp += 10;

    update();
  } else {
    alert("体力が足りない！");
  }
}

function sleepPet() {
  energy += 20;

  if (energy > 100) {
    energy = 100;
  }

  update();
}

function update() {
  document.getElementById("love").textContent = love;
  document.getElementById("energy").textContent = energy;
  document.getElementById("level").textContent = level;
}
