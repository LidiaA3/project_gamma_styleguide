import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import IconEmail from "../../components/icons/IconEmail"
import Presentation from "../../components/presentation/Presentation"
import {skills} from "../../../portfolio-contents"
import IconBack from "../../components/icons/IconBack"
import Footer from "../../components/footer/Footer"

function About() {

    return (
      <>
        <div className="btnFixed">
          <Button isLink={true} goTo='/' text='volver' icon={<IconBack />} size='small' type='ternary' />
        </div>
        <Header />
        <Presentation />
        <main>
          <section className="section">
            <h3>Quién soy</h3>
            <p>Soy ingeniera en <span>Diseño Industrial y Desarrollo de Productos</span> con un Máster en <span>Artes Gráficas</span> y un postgrado en <span>Diseño y Desarrollo Interactivo Digital</span>. Durante mis estudios, he tenido la oportunidad de trabajar en proyectos desafiantes y enriquecedores, lo que me ha permitido desarrollar habilidades como la <span>capacidad de adaptarme con facilidad</span> a situaciones diversas y analizar los proyectos teniendo en cuenta todas las variantes posibles. Soy una persona muy <span>trabajadora y creativa,</span> siempre en busca de nuevos retos y aprendizajes. <span>Me encanta formarme y aprender cosas nuevas.</span> Además, me considero una persona <span>muy organizada</span> y siempre trato de mantener ese orden en todo lo que hago.</p>
          </section>

          <section className="section displayGrid">
            {skills.map((item) => <p key={item.toLowerCase()}>{item}</p>)}
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
        <Footer />
      </>
    )
  }
  
  export default About