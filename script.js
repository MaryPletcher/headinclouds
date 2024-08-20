let animationId;

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function slide() {

    elements = document.querySelectorAll(".cloud");
    elements.forEach((elem) => {
        const rect = elem.getBoundingClientRect();
        let ogPos = rect.left;
        let pos = ogPos;

        // clearInterval(animationId);
        let randomFloat = getRandomFloat(10,20);
        animationId = setInterval(frame, randomFloat);

        function frame() {
            if (pos >= window.innerWidth) {
                pos = -200;
            } else {
                pos++;
                elem.style.left = pos + 'px';
            }
        }
    })

}

window.onload = function() {
    slide();
  };
