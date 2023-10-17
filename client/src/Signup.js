import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AllContext } from "./context/allContext"

function Signup() {
    const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    }) 

    const [errors, setErrors] = useState([])
    const { signup } = useContext(AllContext)
    const navigate = useNavigate()
    const { username, password } = formData

    function submit(e) {
        e.preventDefault()
        const formDataObj = {
            username,
            password
        }

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate("/")
            } else {
                setFormData({
                    username: "",
                    password: ""
                })
                const errorList = user.errors.map(e => <h3 key={e}>{e}</h3>)
                setErrors(errorList)
                setTimeout(() => { setErrors([])}, 2000)
            }
        })
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }




    return (
        <div>
            <form id="signup-form" onSubmit={submit}>
                <label htmlFor="username"></label>
                <input className="formInput" type="text" name="username" onChange={changeHandler} value={username} />

                <label htmlFor="password"></label>
                <input className="formInput" type="password" name="password" onChange={changeHandler} value={password} />

                <input className="formInput" type="submit" name="" value="Sign Up!" />
            </form>
            {errors ? <ul className="errors">{errors}</ul> : null }
        </div>
    )
}

export default Signup;