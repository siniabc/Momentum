const body = document.querySelector("body");

const imagesNumber = 4;

function genRandom() {
    const randomNumber = Math.ceil(Math.random() * imagesNumber);
    return randomNumber;
}

function paintImage(number) {
    const image = new Image();
    image.src = `Images/${number}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();
