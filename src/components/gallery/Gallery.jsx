import { useState } from 'react';
import './Gallery.scss';

function Gallery () {

    const [srcImg, setSrcImg] = useState('');
    const [textImg, setTextImg] = useState('');
    const [showExpandGallery, setShowExpandGallery] = useState(false);

    function expandImg(obj) {
        setSrcImg(obj.url);
        setTextImg(obj.text);
        setShowExpandGallery(true);
    }

    return (
        <>
        <div className="gallery">
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/600x600', text: 'Text 1'})} src="http://via.placeholder.com/600x600" alt="Text 1" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/400x400', text: 'Text 2'})} src="http://via.placeholder.com/400x400" alt="Text 2" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/400x400', text: 'Text 3'})} src="http://via.placeholder.com/400x400" alt="Text 3" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/600x600', text: 'Text 4'})} src="http://via.placeholder.com/600x600" alt="Text 4" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/500x500', text: 'Text 5'})} src="http://via.placeholder.com/500x500" alt="Text 5" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/600x600', text: 'Text 6'})} src="http://via.placeholder.com/600x600" alt="Text 6" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/800x800', text: 'Text 7'})} src="http://via.placeholder.com/800x800" alt="Text 7" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/600x600', text: 'Text 8'})} src="http://via.placeholder.com/600x600" alt="Text 8" />
            <img className='gallery__img' onClick={() => expandImg({url: 'http://via.placeholder.com/600x600', text: 'Text 9'})} src="http://via.placeholder.com/600x600" alt="Text 9" />
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