import { Route, Routes } from "react-router-dom"
import Home from "./views/home/Home"
import About from "./views/about/About"
import Styleguide from "./styleguide/Styleguide"
import './scss/global.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/styleguide' element={ <Styleguide /> } />
      </Routes>
    </>
  )
}

export default App
