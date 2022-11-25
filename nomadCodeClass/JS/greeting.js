const loginInput= document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${username}!`;
}

function onLoginBtnSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USER_NAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    paintGreeting(username);
} 

loginForm.addEventListener("submit",onLoginBtnSubmit);

const saveUsername = localStorage.getItem(USER_NAME_KEY);
if(saveUsername === null){  
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginBtnSubmit);
}else{
    paintGreeting(saveUsername);
}