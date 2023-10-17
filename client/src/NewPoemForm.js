import { useState, useContext } from "react"
import { AllContext } from "./context/allContext"


function NewPoemForm() {
    const [ formData, setFormData ] = useState({
        title: "",
        content: ""
    }) 

    const { title, content } = formData

    const { setPoems } = useContext(AllContext)


    const submit = (e) => {
        e.preventDefault()

        
        const poem = {
            title,
            content
        }

        console.log(formData, poem)

        fetch("/poems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(poem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                console.log(data.errors)
            } else {
                setPoems(prevPoems => [...prevPoems, data])
            }
        })
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }



    return (
        <div>
            <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" value={title} name="title" onChange={changeHandler}/>

                <label>Content</label>
                <textarea value={content} name="content" onChange={changeHandler}></textarea>

                <input type="submit" value="Post Poem!" />
            </form>
        </div>
    )
}

export default NewPoemForm;