import { useContext, useState } from "react";
import { AllContext } from "./context/allContext"
import { useParams, Link } from "react-router-dom";

function PoemDetail() {
    const { poems, comments, loggedIn } = useContext(AllContext)
    const { poemId } = useParams()
    const poem = poems.find(p => p.id === parseInt(poemId))
    const poemComments = comments.filter(comment => comment.poemId === parseInt(poemId))
    const [newComment, setNewComment] = useState("")



    // const handleAddComment = (e) => {
    //     e.preventDefault()

    //     const commentData = {
    //         content
    //     }
    // }



    if (!poem) return <p>Poem Not Found!</p>
    return (
        <div className="poem-detail">
            <h2>{poem.title}</h2>
            <p>{poem.content}</p>
            <h5>{poem.created_at}</h5>
            <ul>
                {poemComments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
            {loggedIn ? (
                <form onSubmit={handleAddComment}>
                    <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment...">
                        <button type="submit">Post comment</button>
                    </input>
                </form>
            ) : (
                <p>You need to <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to comment</p>
            )}
        </div>
    )
}

export default PoemDetail;