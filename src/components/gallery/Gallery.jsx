import { useState } from 'react';
import './Gallery.scss';
import { galleryImgs } from '../../../portfolio-contents';

function Gallery () {

    const [srcImg, setSrcImg] = useState('');
    const [textImg, setTextImg] = useState('');
    const [showExpandGallery, setShowExpandGallery] = useState(false);

    function expandImg(obj) {
        setSrcImg(obj.src);
        setTextImg(obj.text);
        setShowExpandGallery(true);
    }

    return (
        <>
        <div className="gallery">
            {galleryImgs.map((item) => {
                return <img className='gallery__img' onClick={() => expandImg(item)} src={item.src} alt={item.text} />
            })}
        </div>
        {showExpandGallery && <div className="expandGallery">
            <span className='expandGallery__btn' onClick={() => setShowExpandGallery(false)}>&times;</span>
            <img src={srcImg} alt={textImg} />
            <p className='expandGallery__text'>{textImg}</p>
        </div>}
        </>
    );
}

export default Gallery