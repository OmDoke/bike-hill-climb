const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

const bikeImg = new Image();
bikeImg.src = "assets/bike.png";
const manImg = new Image();
manImg.src = "assets/man.png";
const mountainImg = new Image();
mountainImg.src = "assets/mountain.png";
const treeImg = new Image();
treeImg.src = "assets/tree.png";

const bike = { x: 50, y: 300, speed: 0, lift: -10, velocity: 0, acceleration: 0, maxSpeed: 5 };
const terrain = [
    { x: 0, y: 300 }, { x: 150, y: 250 }, { x: 300, y: 280 }, { x: 450, y: 230 }, { x: 600, y: 270 }, { x: 800, y: 300 }
];

const keys = {};
document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

function drawBike() {
    ctx.drawImage(bikeImg, bike.x, bike.y - 20, 40, 30);
    ctx.drawImage(manImg, bike.x, bike.y - 40, 30, 40);
}

function update() {
    if (keys["ArrowUp"] && bike.y > 250) bike.velocity = bike.lift;
    if (keys["ArrowRight"]) bike.acceleration = 0.2;
    if (keys["ArrowLeft"]) bike.acceleration = -0.2;
    physics.applyPhysics(bike);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTerrain(ctx, terrain, mountainImg, treeImg);
    update();
    drawBike();
    requestAnimationFrame(gameLoop);
}

gameLoop();
