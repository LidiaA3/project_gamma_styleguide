import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Firstsight from "../../components/firstsight/Firstsight"
import IconMine from "../../components/icons/IconMine"
import IconCreative from "../../components/icons/IconCreative"
import PIconContactbook from "../../components/icons/PIconContactbook"
import PIconRockpaperscissors from "../../components/icons/PIconRockpaperscissors"
import PIconTictactoe from "../../components/icons/PIconTictactoe"
import PIconTodoapp from "../../components/icons/PIconTodoapp"
import PIconGuessword from "../../components/icons/PIconGuessword"
import PIconLoginshop from "../../components/icons/PIconLoginshop"
import { useContext } from "react"
import { ContentsContext } from "../../App"


function Home() {

  const projects = useContext(ContentsContext).myprojects;

    return (
      <>
        <Header />
        <main>
          <section className="section section--full">
            <Firstsight tittle='¡Descubre mis proyectos sobre diseño y desarrollo!' subtittle='haz click en ellos para ver más' />
          </section>
          <section className="section">
            <h3>Quién soy</h3>
            <p>¡Hola! Soy diseñadora de productos, diseñadora gráfica, diseñadora web y frontend. Si quieres conocer más sobre mí pulsa el botón y conóceme mejor.</p>
            <div className="section section--right">
              <Button isLink={true} goTo='/about' text='Conóceme' icon={<IconMine />} />
            </div>
          </section>
          <section className="section">
            <h3>Proyectos frontend</h3>
            <div className="displayGrid">
              {projects.map((item) => {
                return <Button isLink={true} goTo={`/proyect/${item.id}`} text={item.tittle.toLowerCase()} icon={<item.icon/>} type='secondary' size='display' key={item.id} />
              })}
            </div>
          </section>
          <section className="section">
            <h3>También diseño</h3>
            <p>También soy diseñadora y como tal tengo proyectos más creativos donde no existe código. Si quieres ver proyectos más creativos puedes acceder a la sección de diseño pulsando en el siguiente botón.</p>
            <div className="section section--right">
              <Button isLink={true} goTo='/design' text='Ver diseños' icon={<IconCreative />} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Home
  