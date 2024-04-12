import UserContext from "../Context/UserContext";
import React from "react";

const UserProfile = () => {
    const { user } = React.useContext(UserContext)
    if (!user) return (
        <div>Please Login</div>
    )
    else return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome { user}</h2>
        </div>
    )
}

export default UserProfile;