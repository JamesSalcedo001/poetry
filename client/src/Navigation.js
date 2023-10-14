import {useState} from "react"
// import { useContext } from "react";
// import AllContext from "./context/allContext";

function Navigation() {
    const [loggedIn, setLoggedIn] = useState(true)
    // const { loggedIn } = useContext(AllContext)



    if (loggedIn) {
        return (
            <div>
                <button>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        )
    }
}

export default Navigation;