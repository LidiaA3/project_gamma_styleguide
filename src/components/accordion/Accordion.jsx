import './Accordion.scss'

function Accordion (props) {
    return (
        <>
            <details>
                <summary>{props.tittle}</summary>
                <div className="accordion__section">
                    {props.img && <img src={props.img} alt="" />}
                    <p>{props.text} {props.url && <a target='_blank' href={props.url}>{props.urlText}</a>}</p>
                </div>
            </details>
        </>
    );
}

export default Accordion