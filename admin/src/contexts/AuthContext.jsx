import { createContext } from "react";
import { useState } from "react";
import { login } from "../Api";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);


export function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({ userIsAllowed: false })

    const navigate = useNavigate(); //React Router'ın useNavigate custom hook'u navigate edebilmen için bir fonksiyon döndürür

    function handleLogin(credentials) {
        console.log(credentials);
        //credential gönder
        login(credentials)
            .then(() => {
                /* giriş hakkı */
                setAuth({ userIsAllowed: true });
                navigate("/");

            })
            .catch((err) => { /* giriş hakkı yok*/
                console.log(err, "Hatalı durum");
            })

    }


    function handleLogout() {
        setAuth({ userIsAllowed: false });
    }


    return (
        <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>

    )



}