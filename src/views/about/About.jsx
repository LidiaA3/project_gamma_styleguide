import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import IconEmail from "../../components/icons/IconEmail"
import Presentation from "../../components/presentation/Presentation"
import {skills} from "../../../portfolio-contents"

function About() {

    return (
      <>
        <Header />
        <Presentation />
        <main>
          <section className="section">
            <h3>Quién soy</h3>
            <p>Soy ingeniera en Diseño Industrial y Desarrollo de Productos con un Máster en Artes Gráficas y un postgrado en Diseño y Desarrollo Interactivo Digital. Durante mis estudios, he tenido la oportunidad de trabajar en proyectos desafiantes y enriquecedores, lo que me ha permitido desarrollar habilidades como la capacidad de adaptarme con facilidad a situaciones diversas y analizar los proyectos teniendo en cuenta todas las variantes posibles. Soy una persona muy trabajadora y creativa, siempre en busca de nuevos retos y aprendizajes. Me encanta formarme y aprender cosas nuevas. Además, me considero una persona muy organizada y siempre trato de mantener ese orden en todo lo que hago.</p>
          </section>

          <section className="section displayGrid">
            {skills.map((item) => <p>{item}</p>)}
          </section>

          <section className="section">
            <h3>Contacto</h3>
            <p>Si quieres ponerte en contacto conmigo o saber más sobre mí puedes enviarme un correo a la siguiente dirección o pulsar en el botón. Si prefieres las redes sociales, puedes encontrarlas en el footer de la página.</p>
            <p className="color-burdeos">lidiaaullana@gmail.com</p>
            <div className="section section--right">
              <Button isLink={true} goTo='mailto:lidiaaullana@gmail.com' text='Contáctame' icon={<IconEmail />} />
            </div>
          </section>
        </main>

      </>
    )
  }
  
  export default About