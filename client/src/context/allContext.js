import React, {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


const AllContext = React.createContext()

function AllContextProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [poems, setPoems] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState([])
    const [comments, setComments] = useState([])
    // const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            if (data.username) {
                setUser(data)
                setLoggedIn(true)
                fetchPoems()
            } else {
                setUser({})
                console.log(user)
                setLoggedIn(false)
                fetchPoems()
            }
        })
        .catch(error => {
            console.error("Error fetching user", error)
        })
    },[])


    const fetchPoems = () => {fetch("/poems").then(res => res.json()).then(data => setPoems(data))}

    // const fetchComments = () => {fetch("/comments").then(res => res.json()).then(data => setComments(data))}



    const login = (user) => {
        setUser(user)
        fetchPoems()
        // fetchComments()
        setLoggedIn(true)
        setErrors([])
    }

    //come back to this might be able to dry this up a bit

    const signup = (user) => {
        setUser(user)
        fetchPoems()
        // fetchComments()
        setLoggedIn(true)
        setErrors([])
    }


    const logout = () => {
        setUser({})
        setLoggedIn(false)
        navigate("/")
    }



    return (
        <AllContext.Provider value={{ user, poems, comments, loggedIn, logout, signup, login, errors, setErrors, setComments, setPoems }}>
            {children}
        </AllContext.Provider>
    )
}

export { AllContextProvider, AllContext };