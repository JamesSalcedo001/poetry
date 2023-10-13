import {useState} from "react"

function Navigation() {
    const [loggedIn, setLoggedIn] = useState(false)


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