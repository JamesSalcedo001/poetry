import { useContext, useEffect } from "react";
import { AllContext } from "./context/allContext"
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

function PoemDetail() {
    const { poems, comments, loggedIn, setComments } = useContext(AllContext)
    const { poemId } = useParams()
    const poem = poems.find(p => p.id === parseInt(poemId))


    useEffect(() => {
        fetch(`/poems/${poemId}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[poemId])



    if (!poem) return <p>Poem Not Found!</p>
    return (
        <div className="poem-detail">
            <h2>{poem.title}</h2>
            <p>{poem.content}</p>
            <h5>{poem.created_at}</h5>
            <CommentList
            comments={comments}
            poemId={poemId}
            loggedIn={loggedIn}
            setComments={setComments}
            />
        </div>
    )
}

export default PoemDetail;