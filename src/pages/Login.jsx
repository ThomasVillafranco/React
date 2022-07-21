import React, { useRef } from "react";
import "@styles/Login.scss";
import Logo from "@logos/logo_yard_sale.svg";
const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const formData = new FormData(form.current);
        const data ={
            username: formData.get("email"),
            password: formData.get("password")

        }
        console.log(data);
    }


    return (
        <div className="Login">
        <div className="Login-container">
            <img src={Logo} alt="logo"
            className="logo"/>
             
                <form action="/" className="form" ref ={form}>
                    <label for="email" 
                    className="label">Email address</label>
                    <input type="text"
                    name="email" placeholder="plazti@example.com"
                    className="input input-email"/>
                    
                    <label for="password" 
                    className="label">Password</label>
                    <input type="password"
                    name="password" placeholder="*********"
                    className="input input-password"/>
                    <button  
                    onClick={handleSubmit}
                    className="primary-button login-button">
                    Log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button singup-button" 
                
                >Sing up 
                </button>
        </div>

    </div>
    );
}

export default Login;