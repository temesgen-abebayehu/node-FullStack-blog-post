import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const CreateAccountPage = (() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if(password !== confirmPassword){
                setError("Password and confirmPassword doesn't match");
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        } catch (e) {
            setError(e.message);
        }
    }


    return (
        <div className="container">
            <h2>Create Account</h2>
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
            <input 
                type="password" 
                value={confirmPassword}
                placeholder="Re-Type Your password"
                onChange={p => setConfirmPassword(p.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
            <Link to="/login">Already have acount? LOGIN Here</Link>
        </div>
    );
});

export default CreateAccountPage;