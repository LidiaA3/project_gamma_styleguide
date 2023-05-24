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


function Home() {

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
              <Button isLink={true} goTo='/proyect' text='contact book' icon={<PIconContactbook />} type='secondary' size='display' />
              <Button isLink={true} goTo='/proyect' text='rock paper scissors' icon={<PIconRockpaperscissors />} type='secondary' size='display' />
              <Button isLink={true} goTo='/proyect' text='tic tac toe' icon={<PIconTictactoe />} type='secondary' size='display' />
              <Button isLink={true} goTo='/proyect' text='to do app' icon={<PIconTodoapp />} type='secondary' size='display' />
              <Button isLink={true} goTo='/proyect' text='guess the word' icon={<PIconGuessword />} type='secondary' size='display' />
              <Button isLink={true} goTo='/proyect' text='login shop' icon={<PIconLoginshop />} type='secondary' size='display' />
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
  