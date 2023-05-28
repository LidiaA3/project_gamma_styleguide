import Accordion from "../../components/accordion/Accordion"
import AnimationText from "../../components/animationtext/AnimationText"
import Button from "../../components/button/Button"
import CardEffect from "../../components/cardeffect/CardEffect"
import Footer from "../../components/footer/Footer"
import Gallery from "../../components/gallery/Gallery"
import Header from "../../components/header/Header"
import IconBack from "../../components/icons/IconBack"
import IconStyle from "../../components/icons/IconStyle"
import './Design.scss'

function Design() {

    return (
      <>
        <Header />
        <section className="designWeb">
          <AnimationText />
          <Button optionalClasses='designWeb__btn' isLink={true} goTo='/styleguide' text='Ver la guía de estilo' icon={<IconStyle />} type='secondary' size='x-big' />
        </section>
        <main className="main--margin">
          <div className="btnFixed">
            <Button isLink={true} goTo='/' text='volver' icon={<IconBack />} size='small' />
          </div>

          <section className="section">
            <h3>Diseño de tarjetas con efecto de ratón</h3>
            <CardEffect />
            <h4>EFECTO DE PERSPECTIVA</h4>
            <p>Diseño de tarjetas con efecto de perspectiva que se anima la hacer hover sobre ellas. No dudes en pasar el ratón por encima o clicar sobre ellas si estás usando un dispositivo táctil.</p>
          </section>
          <section className="section">
            <h3>Diseño gráfico y maquetación</h3>
            <Gallery />
            <hr />
            <Accordion tittle='Description basic' text='Lorem ipsum large text' />
            <Accordion tittle='Description basic' text='Lorem ipsum large text' />
            <Accordion tittle='Description basic' text='Lorem ipsum large text' />
          </section>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Design