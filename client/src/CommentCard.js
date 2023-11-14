
function CommentCard({comment}) {
    return (
        <div className="comment-card">
            <h3>{comment.content}</h3>
            <h5>Posted by: {comment.user.username}</h5>
        </div>
    )
}

export default CommentCard;