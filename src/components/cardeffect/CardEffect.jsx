import './CardEffect.scss';

function CardEffect () {
    return(
        <div className="cardEffect">
            <div className="cardEffect__card">
                <img src="/card_design_1.webp" alt="" />
            </div>
            <div className="cardEffect__card">
                <img src="/card_design_2.webp" alt="" />
            </div>
            <div className="cardEffect__card">
                <img src="/card_design_3.webp" alt="" />
            </div>
        </div>
    );
}

export default CardEffect