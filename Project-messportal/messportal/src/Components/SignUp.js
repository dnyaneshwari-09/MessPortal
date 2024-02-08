import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const onButtonClick = () => {
        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }
        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }
        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
        // Authentication calls will be made here...  

        // Check if email has an account associated with it
        // checkAccountExists(accountExists => {
        //     // If yes, log in 
        //     if (accountExists)
        //         logIn()
        localStorage.setItem("user", email);
        navigate("/home");
        navigate(0);
        //     else
        //     // Else, ask user if they want to create a new account and if yes, then log in
        //         if (window.confirm("An account does not exist with this email address: " + email + ". Do you want to create a new account?")) {
        //             logIn()
        //         }
        // })     
    }

    return <div className={"mainContainer"}>
        <label className="errorLabel"></label>
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Re-type password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Sign up"} />
        </div>
        
    </div>
}

export default SignUp