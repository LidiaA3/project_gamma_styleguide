import './Button.scss'

/**
 * 
 * @param {text | icon | type | size | status | handleClick} props 
 * @returns 
 */

function Button(props) {
    return (
        <>
            <button onClick={props.handleClick} className={`btn ${props.type === 'secondary' ? 'btn--secondary' : ''} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`} type="button" disabled={props.status === 'disable' ? true : false}>
                {props.icon === '' ? '' : props.icon}
                {props.text === '' ? '' : props.text}
            </button>
        </>
    );
}

export default Button