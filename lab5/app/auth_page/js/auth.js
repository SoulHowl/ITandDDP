import {apiLogin, apiSignUp, auth, onChanged} from "./firebase_module.js";

let form = document.querySelector('.form-1'),
    email_input = document.querySelector('#email'),
    pass_input = document.querySelector('#password'),
    button_signup = document.querySelector("#signup"),
    button_login = document.querySelector("#login");



button_login.addEventListener('click',(e)=> {
    e.preventDefault()
    console.log("Listener")
    var email = email_input.value;
    var password =  pass_input.value;
    let responsePromise = apiLogin(email, password)
    responsePromise.then(response => {
        alert('Welcome back')
        window.location.replace("user.html");
    }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
    });
});

button_signup.addEventListener('click',(e)=> {
    e.preventDefault()
    var email = email_input.value;
    var password =  pass_input.value;
    let is_validated = validate(email, password);
    if(is_validated === 0){
        let responsePromise = apiSignUp(email, password)
        responsePromise.then(response => {
            alert('Hello')
            window.location.replace("user.html");
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    else if(is_validated === -1){
        alert("incorrect mail input")
    }
    else if(is_validated === -2){
        alert("your password is too short")
    }
});

function validate(mail, pass){
    let emailregex = /[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com/;
    if(!emailregex.test(mail)){
        return -1;
    }
    if (pass.length < 8){
        return -2;
    }
    return 0;
}

auth.onAuthStateChanged((user) => {onChanged(user)});
