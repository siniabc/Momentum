const clockContainer = document.querySelector(".js-clock"),
    hour = clockContainer.querySelector(".hour"),
    minute = clockContainer.querySelector(".minute"),
    second = clockContainer.querySelector(".second");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hour.innerText = hours < 10 ? "0" + hours : hours;
    minute.innerText = minutes < 10 ? "0" + minutes : minutes;
    second.innerText = seconds < 10 ? "0" + seconds : seconds;
}

function init() {
    //getTime();
    setInterval(getTime, 1000);
}

init();
