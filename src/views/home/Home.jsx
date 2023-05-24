import { Link } from "react-router-dom"
import Button from "../../components/button/Button"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import PIconContactbook from "../../components/icons/PIconContactBook"
import Firstsight from "../../components/firstsight/Firstsight"
import IconMine from "../../components/icons/IconMine"
import IconCreative from "../../components/icons/IconCreative"
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
              <Link className="btn linkAsBtn" to='/about'><IconMine />Conóceme</Link>
            </div>
          </section>
          <section className="section">
            <h3>Proyectos frontend</h3>
            <div className="displayGrid">
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconContactbook />contact book</Link>
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconRockpaperscissors />rock paper scissors</Link>
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconTictactoe />tic tac toe</Link>
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconTodoapp />to do app</Link>
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconGuessword />guess the word</Link>
              <Link to='/proyect' className="btn linkAsBtn btn--secondary btn--display"><PIconLoginshop />login shop</Link>
            </div>
          </section>
          <section className="section">
            <h3>También diseño</h3>
            <p>También soy diseñadora y como tal tengo proyectos más creativos donde no existe código. Si quieres ver proyectos más creativos puedes acceder a la sección de diseño pulsando en el siguiente botón.</p>
            <div className="section section--right">
              <Link className="btn linkAsBtn" to='/design'><IconCreative />Ver diseños</Link>
            </div>
          </section>
        </main>
        <section className="section"> {/*delete when finished*/}
          <Link to='/about'>About</Link>
          <Link to='/proyect'>Proyect template</Link>
          <Link to='/design'>Proyect design</Link>
          <Link to='/styleguide'>Styleguide</Link>
        </section>
        <Footer />
      </>
    )
  }
  
  export default Home
  