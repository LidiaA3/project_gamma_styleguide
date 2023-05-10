import { Link } from 'react-router-dom';
import './Button.scss'

function Button() {
    return (
        <>
            <button className='btn' type="button">Primary</button>
            <button className='btn btn--secondary' type="button">Secondary</button>
            <button className='btn btn--cta' type="button">CTA</button>
            <hr />
            <Link className='btn'>Primary</Link>
            <Link className='btn btn--secondary'>Secondary</Link>
            <Link className='btn btn--cta'>CTA</Link>
        </>
    );
}

export default Button