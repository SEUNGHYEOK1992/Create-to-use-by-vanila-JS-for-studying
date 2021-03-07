const body = document.querySelector("body");

function paintImage(imgNumber) {
    const image = new image();
    img.src = `images/${imagNumber + 1}.jpg`
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();