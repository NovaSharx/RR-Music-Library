import { FC, ReactElement } from 'react';
import GalleryItem from './GalleryItem';
import { Track } from '../types/Track';

interface GalleryProps {
    data: any,
}

const Gallery: FC<GalleryProps> = ({ data }): ReactElement => {

    const display = data.map((item: Track, index: number) => {
        return (
            <GalleryItem track={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
