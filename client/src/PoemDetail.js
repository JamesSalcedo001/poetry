import { useContext, useState, useEffect } from "react";
import { AllContext } from "./context/allContext"
import { useParams, Link } from "react-router-dom";

function PoemDetail() {
    const { poems, comments, loggedIn, setComments } = useContext(AllContext)
    const { poemId } = useParams()
    const poem = poems.find(p => p.id === parseInt(poemId))
    const poemComments = comments.filter(comment => comment.poem.id === parseInt(poemId))
    const [newComment, setNewComment] = useState("")


    useEffect(() => {
        fetch(`/poems/${poemId}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[poemId])

    const handleAddComment = (e) => {
        e.preventDefault()

        if(!newComment) return;

        const commentData = {
            content: newComment
        }

        fetch(`/poems/${poemId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to post comment")
            }
            return res.json()
        })
        .then(data => {
            if (data.errors) {
                console.error("Error adding comment", data.errors)
            } else {
                setComments(prevComments => [...prevComments, data])
                setNewComment("")
            }
        })
    }



    if (!poem) return <p>Poem Not Found!</p>
    return (
        <div className="poem-detail">
            <h2>{poem.title}</h2>
            <p>{poem.content}</p>
            <h5>{poem.created_at}</h5>
            <ul>
                {poemComments.map(comment => (
                    <li key={comment.id}>{comment.content} - <span>Posted by: {comment.user.username}</span></li>
                ))}
            </ul>
            {loggedIn ? (
                <form onSubmit={handleAddComment}>
                    <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment...">
                    </input>
                    <button type="submit">Post comment</button>
                </form>
            ) : (
                <p>You need to <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to comment</p>
            )}
        </div>
    )
}

export default PoemDetail;