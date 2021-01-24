const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const intLiId = parseInt(li.id);
    const cleanToDos = toDos.filter(function (todo) {
        return todo.id !== intLiId;
    });
    cleanToDos.forEach(function (todo) {
        if (todo.id > intLiId) {
            todo.id -= 1;
        }
    });
    toDos = cleanToDos;
    saveToDos();
    toDos = [];
    toDoList.innerHTML = "";
    loadToDos();
}

function paintToDo(text) {
    const list = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteToDo);
    span.classList.add("toDoSpan");
    span.innerText = text;

    list.appendChild(span);
    list.appendChild(delBtn);
    list.id = newId;

    toDoList.appendChild(list);
    const toDoObject = {
        text: text,
        id: newId,
    };

    toDos.push(toDoObject);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const lodedToDos = localStorage.getItem(TODOS_LS);
    if (lodedToDos !== null) {
        const parsedToDos = JSON.parse(lodedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
