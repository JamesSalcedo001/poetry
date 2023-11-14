import { Link } from "react-router-dom";
import { useState } from "react"
import CommentCard from "./CommentCard";


function CommentList({ loggedIn, comments, setComments, poemId}) {

        const poemComments = comments.filter(comment => comment.poem.id === parseInt(poemId))
        const [newComment, setNewComment] = useState("")


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

    return (
        <div className="comments-container">
           
            {loggedIn ? (
                <form onSubmit={handleAddComment}>
                    <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment...">
                    </input>
                    <button type="submit">Post comment</button>
                </form>
            ) : (
                <p>You need to <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to comment</p>
            )}
             <ul className="comments">
                {poemComments.map(comment => ( <CommentCard key={comment.id} comment={comment}/> ))}
            </ul>
        </div>
    )
}

export default CommentList;