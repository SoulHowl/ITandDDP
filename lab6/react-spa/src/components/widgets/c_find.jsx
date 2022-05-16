import React, {useEffect,useState} from 'react';


function C_find() {
    return (
        <section className="top-banner">
            <div className="container-find">
                <form className="find-form">
                    <input  type="text" placeholder="Search for a city" autoFocus/>
                    <button className="button-find" type="submit">SUBMIT</button>
                    <span className="msg"></span>
                </form>
            </div>
        </section>
    );

}

export default C_find;