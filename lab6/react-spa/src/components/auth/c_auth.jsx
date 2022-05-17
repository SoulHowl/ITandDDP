import React, {useRef} from 'react';
import { login, signUp} from "../all/api/firebase";
import {useAuth} from "../all/api/useAuth";
import User from "../user/c_user";

const Auth=()=> {
    const {isSignedIn} = useAuth()
    const email = useRef("dsf");
    const password = useRef("asdfs");
    function loginn(e) {
        e.preventDefault()
        login(email.current.value, password.current.value).then((res) => {
            console.log(res.user);
        })
            .catch((e) => {
                console.log(e.message)
            })
    }
    function signupp(e) {
        e.preventDefault()
        signUp(email.current.value, password.current.value).then((res) => {
            console.log(res);
        })
            .catch((e) => {
                console.log(e.message)
            })
    }
    if(!isSignedIn){
        return (
            <section className="wrapper">
                <section className="background">
                </section>
                <form className="form-1">
                    <input className="text-lg"  id="email" type="email" placeholder="Input email" ref={email}/>
                    <input className="text-lg" id="password" type="password" placeholder="Input password" ref={password}/>
                    <section className="button-group">
                        <button className="text-x1" id="signup" type="submit" onClick={signupp}>Sign up</button>
                        <button className="text-x1" id="login" type="submit" onClick={loginn}>Log in</button>
                    </section>
                </form>
            </section>
        );
    }else{ return <div className="under-root"><Navbar /><User/></div>}

}

export default Auth;