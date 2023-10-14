import { useContext } from "react";
import { AllContext } from "./context/allContext"

function PoemDetail({poemId}) {
    const { poems } = useContext(AllContext)
    const poem = poems.find(p => p.id === poemId)

    if (!poem) return <p>Poem Not Found!</p>
    return (
        <div className="poem-detail">
            <h2>{poem.title}</h2>
            <p>{poem.content}</p>
            <h5>{poem.created_at}</h5>
        </div>
    )
}

export default PoemDetail;