import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props){
    let [view, setView] = useState(false)

    
    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/artist/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}

export default GalleryItem
