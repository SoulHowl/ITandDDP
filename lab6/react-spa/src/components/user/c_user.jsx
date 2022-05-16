import React, {useState, useEffect} from 'react';
import {useAuth} from "../all/api/useAuth";
import { logout} from "../all/api/firebase";
import Load from "../loading/loading";

function User() {
    const {isSignedIn} = useAuth()
    const [mail,setMail] = useState("Not loaded")
    const [country,setCountry] = useState("Not loaded")
    const [city,setCity] = useState("Not loaded")
    function logoutt(e) {
        e.preventDefault()
        logout().then((res) => {
            console.log('Sign Out');
            localStorage.clear();
            window.location.reload();
        })
            .catch((e) => {
                console.log(e.message)
            })
    }
    useEffect(()=>{
        console.log()
        setMail("Email: " +localStorage.getItem("mail"))
        setCity("City: " + localStorage.getItem("city"))
        setCountry("Country:" + localStorage.getItem("country"))
    },[])
    if (isSignedIn){

    return (

        <div id="main-content" className="user-page">

    <section className="wrapper-user">
        <form className="form-user" >
            <div className="text-lg" id="email_info"><p>{mail}</p></div>
            <div className="text-lg" id="country"><p>{country}</p></div>
            <div className="text-lg" id="city"><p>{city}</p></div>
            <section className="button-group-user">

                <button className="text-logout" id="logout" type="submit" onClick={logoutt}>Log out</button>

            </section>
        </form>
    </section>
        </div>
    );
    }else{
        return <Load />

    }
}

export default User;