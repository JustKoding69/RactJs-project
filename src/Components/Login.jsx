import React, { useState } from "react";
import UserContext from "../Context/UserContext";

const LoginUser = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser, user } = React.useContext(UserContext)
    const handleClick = (e) => {
        e.preventDefault();
        setUser(username, password);
        console.log("Clicked")
        console.log(user)
    }
    return (
        <div>
        <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Username" />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password" />
            <button type="submit" onClick={handleClick}>Submit</button>
        </div>
    )
}

export default LoginUser;