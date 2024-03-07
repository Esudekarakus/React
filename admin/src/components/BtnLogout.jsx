import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function BtnLogout() {
    const authContextValue = useContext(AuthContext);
    const userIsAllowed = authContextValue.auth.userIsAllowed;
    const handleLogout = authContextValue.handleLogout;

    if (userIsAllowed) {
        return (
            <button onClick={(e) => { handleLogout() }}>Çıkış Yap {userIsAllowed ? "izinli" : "izinsiz"}</button>
        )
    }

    return null;


}