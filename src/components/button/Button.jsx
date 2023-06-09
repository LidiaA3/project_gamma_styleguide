import { Link } from 'react-router-dom';
import './Button.scss'

/**
 * 
 * @param {text | icon | type | size | status | handleClick | isLink | goTo | target | optionalClasses} props 
 * @returns 
 */

function Button(props) {

    function handleLink () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {props.isLink ? 
                <Link onClick={handleLink} to={props.goTo} target={props.target ? props.target : '_self'} className={`btn linkAsBtn ${props.optionalClasses} ${props.type === '' ? '' : `btn--${props.type}`} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`}>
                    {props.icon === '' ? '' : props.icon}
                    {props.text === '' ? '' : props.text}
                </Link>
            :
                <button onClick={props.handleClick} className={`btn ${props.optionalClasses} ${props.type === '' ? '' : `btn--${props.type}`} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`} type="button" disabled={props.status === 'disable' ? true : false}>
                    {props.icon === '' ? '' : props.icon}
                    {props.text === '' ? '' : props.text}
                </button>
            }
        </>
    );
}

export default Button