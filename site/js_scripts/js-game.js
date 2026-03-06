const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const sprites = new Image();
sprites.src = './sprits.png';

let frame = 0;

let x = 50;
let y = 300;
const width = 50;
const height = 50;
let speed = 5;

function drawCharacter() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, width, height)
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') x += speed;
    if(event.key === 'ArrowLeft') x -= speed;
    if(event.key === 'ArrowUp') y -= speed;
    if(event.key === 'ArrowDown') y += speed;
});

function drawAnimatedCharacter() {
    ctx.drawImage(sprites, frame * 48, 0, 48, 48, x, y, 48, 48);
    frame = (frame + 1) % 4;
}


function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharacter();
    requestAnimationFrame(gameLoop);
}


gameLoop();


