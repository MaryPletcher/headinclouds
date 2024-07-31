let animationId;

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function slide() {
    const elem = document.getElementById("cloud");
    const rect = elem.getBoundingClientRect();
    let ogPos = rect.left;
    let pos = ogPos;

    clearInterval(animationId);
    let randomFloat = getRandomFloat(8,15);
    animationId = setInterval(frame, randomFloat);

    function frame() {
        if (pos >= window.innerWidth) {
            pos = -200;
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

function startAnimation() {
    slide(); // Start the animation
}

