import { useContext } from "react";
import { AllContext } from "./context/allContext"
import { useNavigate, NavLink } from "react-router-dom";

function Navigation() {
    const { loggedIn, logout } = useContext(AllContext)
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