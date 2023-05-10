import './Button.scss'

function Button() {
    return (
        <>
            <button className='btn' type="button">Primary</button>
            <button className='btn btn--secondary' type="button">Secondary</button>
            <button className='btn btn--cta' type="button">CTA</button>
        </>
    );
}

export default Button