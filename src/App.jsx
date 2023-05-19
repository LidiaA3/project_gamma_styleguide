import { Route, Routes } from "react-router-dom"
import Home from "./views/home/Home"
import About from "./views/about/About"
import Proyect from "./views/proyect/Proyect"
import Design from "./views/design/Design"
import Styleguide from "./styleguide/Styleguide"
import './scss/global.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/proyect' element={ <Proyect /> } />
        <Route path='/design' element={ <Design /> } />
        <Route path='/styleguide' element={ <Styleguide /> } />
      </Routes>
    </>
  )
}

export default App
