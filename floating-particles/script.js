const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray;

function Particle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
}

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Particle.prototype.update = function () {
  if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;

  this.draw();
};

function init() {
  particleArray = [];
  for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 20;
    let x = Math.random() * (innerWidth - radius * 2);
    let y = Math.random() * (innerHeight - radius * 2);
    let dx = Math.random() * 0.4 - 0.2;
    let dy = Math.random() * 0.4 - 0.2;
    let color = "white";
    particleArray.push(new Particle(x, y, dx, dy, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  init();
});
