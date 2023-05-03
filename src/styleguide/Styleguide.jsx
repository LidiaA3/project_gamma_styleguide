import Button from '../components/button/Button'
import './Styleguide.scss'
import Nav from "./StyNav"

function Styleguide() {

    return (
      <div className='styleguide'>
        <h1>This is the Styleguide</h1>
        <Nav />
        <Button />

        <div className="section">
          <h2>Así se ve un h2</h2>
          <h3>Así se ve un h3</h3>
          <h4>Así se ve un h4</h4>
          <h5>Así se ve un h5</h5>
          <h6>Así se ve un h6</h6>
        </div>
      </div>
    )
  }
  
  export default Styleguide