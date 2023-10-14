import { useContext } from "react";
import AllContext from "./context/allContext";
import PoemPreview from "./PoemPreview";

function PoemsList() {
    const { poems } = useContext(AllContext)

    return (
        <div className="poems-list">
            {poems.map(poem => (
                <PoemPreview key={poem.id} poem={poem}/>
            ))}
        </div>
    )
}

export default PoemsList;