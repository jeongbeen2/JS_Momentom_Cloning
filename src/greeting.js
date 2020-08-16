const greetForm = document.querySelector(".js-form"),
greetInput = greetForm.querySelector("input"),
greeting = document.querySelector(".js-greetings"),
nameReset = document.querySelector(".js-reset"),
greetToDo = document.querySelector(".toDoInput"),
greetBox = document.querySelector(".greet-box");

const USER_LS = "currentUser",
SHOWING_CN = "showing",
DISAPPEAR = "disappear";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function askForName() {
    greetForm.classList.add(SHOWING_CN);
    greetForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    greetInput.value = "";
    nameReset.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    greetForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!
    How are you feeling today?`;
    greetForm.style.display = "none";
    greetToDo.classList.add(SHOWING_CN);
    nameReset.style.display = "flex";
}

function resetFn(){
    localStorage.clear();
    greeting.innerText = "";
    greetForm.style.display = "flex";
    nameReset.style.display = "none";
    greeting.classList.remove(SHOWING_CN);
    greetToDo.classList.remove(SHOWING_CN);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName() 
    } else{
        paintGreeting(currentUser);
    }

}

function init(){
    loadName();
    nameReset.addEventListener("click",resetFn);
}

init();
