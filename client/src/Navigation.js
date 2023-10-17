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
            <div>
                {user.admin ? 
                <NavLink to="/poem_new">
                    <button>Create New Poem</button>
                </NavLink> : null}

                <NavLink to="/">
                    <button>Home</button>
                </NavLink>
                <button onClick={logOutUser}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to="/login">
                    <button>Log In</button>
                </NavLink>

                <NavLink to="/signup">
                    <button>Sign Up</button>
                </NavLink>
            </div>
        )
    }
}

export default Navigation;