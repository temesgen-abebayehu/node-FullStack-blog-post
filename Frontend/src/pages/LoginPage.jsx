import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";



const LoginPage = (() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        } catch (e) {
            setError(e.message);
        }
    }


    return (
        <div className="container">
            <h2>Login Page</h2>
            {error && (<p className="error-message">{error}</p>)}
            <input
                value={email}
                type="text"
                placeholder="Type Your email"
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                value={password}
                placeholder="Type Your password"
                onChange={p => setPassword(p.target.value)}
            />
            <button onClick={login}>Login</button>
            <Link to="/create-account">Don't have an accout? click here</Link>
        </div>
    );
});

export default LoginPage;