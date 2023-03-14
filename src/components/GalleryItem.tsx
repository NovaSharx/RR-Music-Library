import { useState, FC, ReactElement } from 'react'
import { Track } from '../types/Track'

interface GalleryItemProps {
    track: Track,
}

const GalleryItem: FC<GalleryItemProps> = ({ track }): ReactElement => {
    let [view, setView] = useState<boolean>(false)

    const simpleView = (): ReactElement => {
        return (
            <div style={{
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin': '2px',
                'position': 'relative'
            }}>
                <h3>{track.trackName}</h3>
                <h4>{track.collectionName}</h4>
            </div>
        )
    }

    const detailView = (): ReactElement => {
        return (
            <div style={{
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin': '2px',
                'position': 'relative',
                'backgroundImage': `url(${track.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>{track.trackName}</h2>
                <h3>{track.collectionName}</h3>
                <h4>{track.primaryGenreName}</h4>
                <h4>{track.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
            style={{ 'display': 'inline-block' }}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem;
