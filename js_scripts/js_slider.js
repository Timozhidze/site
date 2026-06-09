const moveRightBtn = document.getElementById('moveRightBtn');
const moveLeftBtn = document.getElementById('moveLeftBtn');
const movingElement = document.querySelector('.moving-element');
const positions = ['translateX(0)', 'translateX(-33.33%)', 'translateX(-66.66%)'];
let currentIndex = 0;

function applyPosition() {
    movingElement.style.transform = positions[currentIndex];
}

moveRightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % positions.length;
    applyPosition();
});

moveLeftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + positions.length) % positions.length;
    applyPosition();
});