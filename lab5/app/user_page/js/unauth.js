import {logout, auth, onChanged} from "./firebase_module.js";
let form = document.querySelector('.form-1'),
    button_logout = document.querySelector("#logout"),
    edit_mail = document.querySelector("#email_info"),
    edit_country = document.querySelector("#country"),
    edit_city = document.querySelector("#city");

function get_user_info(){
    let mail_from_storage = localStorage.getItem("mail")
    let country_from_storage = localStorage.getItem("country")
    let city_from_storage = localStorage.getItem("city")
    edit_mail.innerHTML= `<p>Email: ${mail_from_storage}</p>`
    edit_country.innerHTML= `<p>Country: ${country_from_storage}</p>`
    edit_city.innerHTML= `<p>City: ${city_from_storage}</p>`
}

button_logout.addEventListener('click',(e)=> {
    e.preventDefault()
    localStorage.clear()
    logout()
});

auth.onAuthStateChanged((user) => {onChanged(user);
    get_user_info()});