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

        <div id="colors">
          <div className='color__group'>
            <div className="color__box">
              <div className="color bg-gray_light"> </div>
              <p>gray_light</p>
            </div>
            <div className="color__box">
              <div className="color bg-gray"> </div>
              <p>gray</p>
            </div>
            <div className="color__box">
              <div className="color bg-gray_dark"> </div>
              <p>gray_dark</p>
            </div>
            <div className="color__box">
              <div className="color bg-gray_darken"> </div>
              <p>gray_darken</p>
            </div>
          </div>

          <div className='color__group'>
            <div className="color__box">
              <div className="color bg-pistacho"> </div>
              <p>pistacho</p>
            </div>
            <div className="color__box">
              <div className="color bg-violet"> </div>
              <p>violet</p>
            </div>
            <div className="color__box">
              <div className="color bg-purple"> </div>
              <p>purple</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Styleguide