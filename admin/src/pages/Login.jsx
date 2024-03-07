import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {

    const authContextValue = useContext(AuthContext);
    const handleLogin = authContextValue.handleLogin;

    const [credentials, setCredentials] = useState({ email: "", password: "" });



    function handleCredentialsChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    function handleSubmit(e) {
        e.preventDefault();

        handleLogin(credentials);

    }


    return (
        <>
            <h2>Giriş yap</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" value={credentials.email} onChange={handleCredentialsChange} />

                <input type="password" name="password" id="" value={credentials.password} onChange={handleCredentialsChange} />

                <button type="submit">Giriş yap</button>
            </form>
        </>
    )
}