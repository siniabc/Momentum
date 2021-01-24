const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    toDo = document.querySelector(".js-toDoContainer");
// get from HTML
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
// for JS functions

function paintGreetings(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    toDo.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}! \nCheck your Todo-List`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    //paintGreetings(currentValue);
    saveName(currentValue);
    loadName();
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}
function init() {
    loadName();
}

init();
