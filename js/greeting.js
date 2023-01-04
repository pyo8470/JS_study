const loginForm=document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();

    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username)
    //localStorage.clear();
}
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
    // show the greeting
}
