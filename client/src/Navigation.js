import { useContext } from "react";
import { AllContext } from "./context/allContext"
import { useNavigate, NavLink } from "react-router-dom";

function Navigation() {
    const { loggedIn, logout, user} = useContext(AllContext)
    const navigate = useNavigate()

    const logOutUser = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            logout()
            navigate("/")
        })
    }



    if (loggedIn) {
        return (
            <div className="nav-container">
                {user.admin ? 
                <NavLink className="nav-links" to="/poem_new">
                    <button className="nav-buttons">Create New Poem</button>
                </NavLink> : null}

                <NavLink className="nav-links" to="/">
                    <button className="nav-buttons">Home</button>
                </NavLink>
                <button className="nav-buttons" onClick={logOutUser}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div className="nav-container">
                <NavLink className="nav-links" to="/">
                    <button className="nav-buttons">Home</button>
                </NavLink>
                <NavLink className="nav-links" to="/login">
                    <button className="nav-buttons">Log In</button>
                </NavLink>

                <NavLink className="nav-links" to="/signup">
                    <button className="nav-buttons">Sign Up</button>
                </NavLink>
            </div>
        )
    }
}

export default Navigation;