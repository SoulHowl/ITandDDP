let form = document.querySelector('.form-1'),
    all_inputs = document.querySelector('text-lg'),
    email_input = document.querySelector('.text-lg-email'),
    pass_input = document.querySelector('.text-lg-password');

// document.querySelector('#signup').onClick = function (event){
//     event.preventDefault();
//     console.log("Work")
// }
console.log(all_inputs)
form.onsubmit = function (){
    console.log("work");
    let mail_val = email_input.value,
        pass_val = pass_input.value;

    all_inputs.forEach( function (input){
        if (input.value === ''){
            input.classList.add('error')
            console.log("input not filled")
        } else {
            input.classList.remove('error')
        }
    })
    return false;
}

function login(event){
    event.preventDefault()
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    responsePromise = apiLogin(email, password)
    responsePromise.then(response => {
        alert('Welcome back')
        window.location.replace("rating.html");
    });
}


function signUp(event){
    event.preventDefault()
    var email = document.getElementById('sign-email').value;
    var password = document.getElementById('sign-password').value;
    responsePromise = apiSignUp(email, password)
    responsePromise.then(response => {
        alert('Hello')
        window.location.replace("info.html");
    });
}