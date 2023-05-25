import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import projects from "../../../portfolio-contents";

function Proyect() {

  const { id } = useParams();
  const thisProject = projects.find(item => item.id === id)

    return (
      <>
      <Header />
      <main>
        <h1>{thisProject.tittle}</h1>
        <h2>{thisProject.subtittle}</h2>
        <img src={thisProject.image} alt={thisProject.tittle} />
        <p>{thisProject.description}</p>
        <Button isLink={true} goTo={thisProject.links.code} text='code' type='secondary' />
        <Button isLink={true} goTo={thisProject.links.demo} text='demo' type='primary' />

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
          {projects.map((item) => {
            if(item.id !== id) {
              return <Button isLink={true} goTo={`/proyect/${item.id}`} text={item.tittle.toLowerCase()} icon={item.icon} type='secondary' key={item.id} />
            }
          })}
        </section>
      </main>
      <Footer />
      </>
    )
  }
  
  export default Proyect