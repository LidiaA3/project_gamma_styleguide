import './Accordion.scss'

function Accordion (props) {
    return (
        <>
            <details>
                <summary>{props.tittle}</summary>
                <div className="accordion__section">
                    {props.img}
                    {props.text}
                </div>
            </details>
        </>
    );
}

export default Accordion