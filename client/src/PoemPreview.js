import { Link } from "react-router-dom"

function PoemPreview({ poem }) {
    return (
        <div className="poem-preview">
            <h3><Link className="poem-links" to={`/poems/${poem.id}`}>{poem.title}</Link></h3>
            <p>{poem.content ? poem.content.substring(0, 100) + "..." : "Content not available"}</p>
        </div>
    )
}

export default PoemPreview;