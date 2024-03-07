import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function ProtectedRoute() {

    const authContextVal = useContext(AuthContext); //{ auth:{userIsAllowed:false}, handleLogin, handleLogout  } 
    const isUserAllowed = authContextVal.auth.userIsAllowed;

    if (!isUserAllowed) {

        return <Navigate to="/giriş" />

    }

    return (
        <div className="me-the-protector">Me the protector<Outlet /></div>
    )
}