import { Link } from 'react-router-dom';
import './Button.scss'

/**
 * 
 * @param {text | icon | type | size | status | handleClick | isLink | goTo} props 
 * @returns 
 */

function Button(props) {
    return (
        <>
            {props.isLink ? 
                <Link to={props.goTo} className={`btn linkAsBtn ${props.type === 'secondary' ? 'btn--secondary' : ''} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`}>
                    {props.icon === '' ? '' : props.icon}
                    {props.text === '' ? '' : props.text}
                </Link>
            :
                <button onClick={props.handleClick} className={`btn ${props.type === 'secondary' ? 'btn--secondary' : ''} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`} type="button" disabled={props.status === 'disable' ? true : false}>
                    {props.icon === '' ? '' : props.icon}
                    {props.text === '' ? '' : props.text}
                </button>
            }
        </>
    );
}

export default Button