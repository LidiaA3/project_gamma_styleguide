import './Firstsight.scss'

function Firstsight(props) {
    return (
        <div className='firstsight'>
            <h1 className='firstsight__tittle'>{props.tittle}</h1>
            <h2 className='firstsight__subtittle'>{props.subtittle}</h2>
        </div>
    );
}

export default Firstsight