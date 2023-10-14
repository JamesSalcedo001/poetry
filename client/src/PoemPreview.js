import { Link } from "react-router-dom"

function PoemPreview({ poem }) {
    return (
        <div className="poem-preview">
            <h3><Link to={`/poems/${poem.id}`}>{poem.title}</Link></h3>
            <p>{poem.content.substring(0, 100)}...</p>
        </div>
    )
}

export default PoemPreview;