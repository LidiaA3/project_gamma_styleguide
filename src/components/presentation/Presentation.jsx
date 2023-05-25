import './Presentation.scss'

function Presentation () {
    return (
        <>
            <section className="presentation">
                <div className="presentation__contents">
                    <p className="p-big color-yellow_dark">¡Hola!</p>
                    <h1 className="presentation__name">Me llamo Lidia Aullana</h1>
                    <p className="p-big">Soy frontend y diseñadora de productos, gráfica y web. Si quieres saber más sobre mí no dudes en hacer scroll.</p>
                </div>
                <div className="presentation__img">
                    <img src="/imagenpropia.webp" alt="Imagen personal de perfil" />
                </div>
            </section>
            <section className="presentation__claim">
                <p className='presentation__text'>Soy una persona muy trabajadora y creativa. Me gusta formarme y aprender cosas nuevas. Tengo una gran capacidad de aprendizaje. Además, soy muy organizada y siempre trato de mantener ese orden en todo lo que hago.</p>
            </section>
        </>
    );
}

export default Presentation