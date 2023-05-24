import { Route, Routes } from "react-router-dom"
import Home from "./views/home/Home"
import About from "./views/about/About"
import Proyect from "./views/proyect/Proyect"
import Design from "./views/design/Design"
import Styleguide from "./styleguide/Styleguide"
import './scss/global.scss'
import React, { useState, useEffect } from "react"

export const ContentsContext = React.createContext({
  myprojects: []
})


function App() {

  const [projects, setProjects] = useState([]);

  useEffect(()=> {
    fetch('./portfolio-contents.json')
      .then(data => data.json())
      .then(res => setProjects(res))
  }, [])

  return (
    <>
    <ContentsContext.Provider value={{myprojects:projects}}>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/proyect/:id' element={ <Proyect /> } />
        <Route path='/design' element={ <Design /> } />
        <Route path='/styleguide' element={ <Styleguide /> } />
      </Routes>
    </ContentsContext.Provider>
    </>
  )
}

export default App
