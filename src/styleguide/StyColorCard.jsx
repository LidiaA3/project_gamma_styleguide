import CopyToClipboard from "react-copy-to-clipboard";
import IconCopy from "./icons/IconCopy";

// title || text || hexcode

function StyColorCard (props) {
    return (
        <>
            <div className="styColorCard">
                <div className={'styColorCard__color color-bg-' + props.title}></div>
                <div className="styColorCard__contents">
                    <div className="styColorCard__header">
                        <h6 className="styColorCard__tittle">{props.title}</h6>
                        <CopyToClipboard text={props.title} style={{cursor:'pointer'}}>
                            <span className='styColorCard__icon'><IconCopy /></span>
                        </CopyToClipboard>
                    </div>
                    <div className="colorColorCard__main">
                        <p className="font-family-mono colorColorCard__text">{props.text}</p>
                        <p>{props.hexcode}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StyColorCard