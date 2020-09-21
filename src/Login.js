import React from "react";
import "./Login.css";
import {Link, useHistory } from "react-router-dom";

function Login(){
    return (
        <div className="login"> 
            <Link to="/">
                <img 
                   className="login_logo"
                   src="./images/EBSO.png"
                   alt=""
                />
            </Link>
            
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="text"/>
                    <button>Log In</button>
                </form>

                <p>
                    By signing in, you agree to EBSO's Conditions and Agreements. 
                    Please see our Privacy Notice for more information. 
                </p>
                <button>Register for a New Account</button>
            </div>
        </div>
    );
}

export default Login; 