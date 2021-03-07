const body = document.querySelector("body");

const IMG_NUMBER = 3;
//보여줄 이미지의 갯수 
function paintImage(imgNumber) {
    const image = new Image(); //이미지 객체화
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //body.appendChild(image); //appendChild 특정 내부 마지막에 어떤 element를 추가하고자 할 경우 사용.
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