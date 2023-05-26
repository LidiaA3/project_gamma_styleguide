import "./Proyect.scss"
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import projects from "../../../portfolio-contents";
import IconBack from "../../components/icons/IconBack";

function Proyect() {

  const { id } = useParams();
  const thisProject = projects.find(item => item.id === id)

    return (
      <>
      <Header />
      <section className="proyect">
        <div className="proyect__img">
          <img src='https://fakeimg.pl/680x410/e8e8e8/909090?font=noto' alt={thisProject.tittle} />
        </div>
        <div className="proyect__contents">
          <h1 className="proyect__tittle">{thisProject.tittle}</h1>
          <h2 className="proyect__subtittle">{thisProject.subtittle}</h2>
          <p>{thisProject.description}</p>
          <div className="proyect__buttons">
            <Button isLink={true} goTo={thisProject.links.code} text='code' type='secondary' />
            <Button isLink={true} goTo={thisProject.links.demo} text='demo' type='primary' />
          </div>
        </div>
      </section>

      <main>
        <div className="btnFixed">
          <Button isLink={true} goTo='/' text='volver' icon={<IconBack />} size='small' />
        </div>
        <section className="section">
          <h3>Funcionalidades</h3>
          <ul className="list">
            {thisProject.features.map((item) => {
              return <li key={item} className="list__item">{item}</li>
            })}
          </ul>
        </section>

        <section className="section">
          <h3>Otros proyectos</h3>
          <div className="displayWrap">
            {projects.map((item) => {
              if(item.id !== id) {
                return <Button isLink={true} goTo={`/proyect/${item.id}`} text={item.tittle.toLowerCase()} icon={item.icon} type='secondary' size='small' key={item.id} />
              }
            })}
          </div>
        </section>
      </main>
      <Footer />
      </>
    )
  }
  
  export default Proyect