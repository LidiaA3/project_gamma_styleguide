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
          <p>This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur ad odit ea asperiores laudantium rem optio nostrum officiis totam, et a. Molestiae suscipit maiores nostrum saepe soluta exercitationem repellat.</p>
          <small>This is an small</small>
        </div>

        <div id="colors">
          <div className='color__group'>
            <div className="color__box">
              <div className="color color-bg-gray_light"> </div>
              <p>gray_light</p>
            </div>
            <div className="color__box">
              <div className="color color-bg-gray"> </div>
              <p>gray</p>
            </div>
            <div className="color__box">
              <div className="color color-bg-gray_dark"> </div>
              <p>gray_dark</p>
            </div>
            <div className="color__box">
              <div className="color color-bg-gray_darken"> </div>
              <p>gray_darken</p>
            </div>
          </div>

          <div className='color__group'>
            <div className="color__box">
              <div className="color color-bg-pistacho"> </div>
              <p>pistacho</p>
            </div>
            <div className="color__box">
              <div className="color color-bg-violet"> </div>
              <p>violet</p>
            </div>
            <div className="color__box">
              <div className="color color-bg-purple"> </div>
              <p>purple</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Styleguide