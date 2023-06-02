import Accordion from "../../components/accordion/Accordion"
import AnimationText from "../../components/animationtext/AnimationText"
import Button from "../../components/button/Button"
import CardEffect from "../../components/cardeffect/CardEffect"
import Footer from "../../components/footer/Footer"
import Gallery from "../../components/gallery/Gallery"
import Header from "../../components/header/Header"
import IconBack from "../../components/icons/IconBack"
import IconStyle from "../../components/icons/IconStyle"
import { galleryImgs } from '../../../portfolio-contents';
import { accordionGallery } from "../../../portfolio-contents"
import './Design.scss'

function Design() {

    return (
      <>
        <div className="btnFixed">
          <Button isLink={true} goTo='/' text='volver' icon={<IconBack />} size='small' type='ternary' />
        </div>
        <Header />
        <section className="designWeb">
          <AnimationText />
          <Button target='_blank' optionalClasses='designWeb__btn' isLink={true} goTo='/styleguide' text='Ver la guía de estilo' icon={<IconStyle />} type='secondary' size='x-big' />
        </section>
        <main>
          <section className="section">
            <h3>Diseño de tarjetas con efecto de ratón</h3>
            <h4>EFECTO DE PERSPECTIVA</h4>
            <p>Diseño de tarjetas con efecto de perspectiva que se anima la hacer hover sobre ellas. No dudes en pasar el ratón por encima o clicar sobre ellas si estás usando un dispositivo táctil.</p>
            <CardEffect />
          </section>
          <section className="section">
            <h3>Diseño gráfico y maquetación</h3>
            <Gallery galleryImgs={galleryImgs} />
            <hr />
            {accordionGallery.map((item) => {
              return <Accordion key={item.tittle} img={item.src} tittle={item.tittle} text={item.text} url={item.url} urlText={item.urlText} />
            })}
          </section>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Design