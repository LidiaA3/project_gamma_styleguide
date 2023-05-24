import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContentsContext } from "../../App";
import Button from "../../components/button/Button";

function Proyect() {

  const { id } = useParams();
  const projects = useContext(ContentsContext).myprojects;
  const thisProject = projects.find(item => item.id === id)

    return (
      <>
        <h1>{thisProject.tittle}</h1>
        <h2>{thisProject.subtittle}</h2>
        <img src={thisProject.image} alt={thisProject.tittle} />
        <p>{thisProject.description}</p>
        <Button isLink={true} goTo={thisProject.links.code} text='code' type='secondary' />
        <Button isLink={true} goTo={thisProject.links.demo} text='demo' type='primary' />

        <h3>Funcionalidades</h3>
        <ul className="list">
          {thisProject.features.map((item) => {
            return <li className="list__item">{item}</li>
          })}
        </ul>

        <h3>Otros proyectos</h3>
        <section className="section">
          {projects.map((item) => {
            if(item.id !== id) {
              return <Button isLink={true} goTo={`/proyect/${item.id}`} text={item.tittle.toLowerCase()} icon={item.icon} type='secondary' key={item.id} />
            }
          })}
        </section>
      </>
    )
  }
  
  export default Proyect