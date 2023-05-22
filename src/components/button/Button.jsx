import { Link } from 'react-router-dom';
import './Button.scss'

function Button() {
    return (
        <>
            <button className='btn' type="button">Primary</button>
            <button className='btn btn--secondary' type="button">Secondary</button>
            <button className='btn btn--x-big' type="button">CTA</button>
            <hr />
            <button className='btn' disabled>Primary</button>
            <button className='btn btn--secondary' disabled>Secondary</button>
            <button className='btn btn--small'>CTA</button>
            <hr />
            <Link className='btn' disabled>Primary</Link>
            <Link className='btn btn--secondary' disabled>Secondary</Link>
            <Link className='btn btn--small'>CTA</Link>
        </>
    );
}

export default Button