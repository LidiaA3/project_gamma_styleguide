import './Styleguide.scss'
import Header from '../components/header/Header'
import Nav from "./StyNav"
import Button from '../components/button/Button'
import StyColorCard from './StyColorCard'

function Styleguide() {

    const colorArray = [
      {name: 'gray_darken', code: '#0D0E30', text: 'Color neutro. Escala de grises para toda la web'},
      {name: 'gray_dark', code: '#667C8F', text: 'Color neutro. Escala de grises para toda la web'},
      {name: 'gray', code: '#A3B1BD', text: 'Color neutro. Escala de grises para toda la web'},
      {name: 'gray_light', code: '#DFE4E8', text: 'Color neutro. Escala de grises para toda la web'},
      {name: 'gray_lighter', code: '#F3F3F3', text: 'Color neutro. Escala de grises para toda la web'},
      {name: 'yellow_darken', code: '#CA7F02', text: 'Color de acento utilizado para destacar algunos componentes'},
      {name: 'yellow_dark', code: '#F29802', text: 'Color de acento utilizado para destacar algunos componentes'},
      {name: 'yellow', code: '#FDB235', text: 'Color de acento utilizado para destacar algunos componentes'},
      {name: 'yellow_light', code: '#FECD7C', text: 'Color de acento utilizado para destacar algunos componentes'},
      {name: 'yellow_lighter', code: '#FEDEA9', text: 'Color de acento utilizado para destacar algunos componentes'},
      {name: 'burdeos_darken', code: '#3C0C24', text: 'Color principal de la web. Usado en la mayoría de componentes'},
      {name: 'burdeos_dark', code: '#551133', text: 'Color principal de la web. Usado en la mayoría de componentes'},
      {name: 'burdeos', code: '#851A50', text: 'Color principal de la web. Usado en la mayoría de componentes'},
      {name: 'burdeos_light', code: '#C02673', text: 'Color principal de la web. Usado en la mayoría de componentes'},
      {name: 'burdeos_lighter', code: '#E476AD', text: 'Color principal de la web. Usado en la mayoría de componentes'},
      {name: 'cadet_blue_darken', code: '#161853', text: 'Color secundario de la web. Usado en la mayoría de componentes secundarios'},
      {name: 'cadet_blue_dark', code: '#21247D', text: 'Color secundario de la web. Usado en la mayoría de componentes secundarios'},
      {name: 'cadet_blue', code: '#3136B9', text: 'Color secundario de la web. Usado en la mayoría de componentes secundarios'},
      {name: 'cadet_blue_light', code: '#6A6DD7', text: 'Color secundario de la web. Usado en la mayoría de componentes secundarios'},
      {name: 'cadet_blue_lighter', code: '#A6A8E7', text: 'Color secundario de la web. Usado en la mayoría de componentes secundarios'}
    ];

    return (
      <>
      <div className='styleguide'>
        <div className="header">
            <h1 className="header__tittle">Styleguide</h1>
            <h2 className="header__subtittle">&lt; portfolio's Lidia /&gt;</h2>
        </div>
        <Nav />

        <article id="colors">
          <h3>Color palette</h3>
          <section className='colorSection'>
            {colorArray.map((color) => {
              return <StyColorCard key={color.code} title={color.name} text={color.text} hexcode={color.code} />
            })}
          </section>
        </article>

        <article id="font-family">
          <h3>Font family</h3>
          <section className="fontSection">
            <div className="styTypoCard font-family-display">
              <span className="styTypoCard__typo">A</span>
              <p>Alice</p>
            </div>

            <div className="styTypoCard  font-family-mono">
              <span className="styTypoCard__typo">A</span>
              <p>Cutive Mono</p>
            </div>

            <div className="styTypoCard font-family-main">
              <span className="styTypoCard__typo">A</span>
              <p>Imprima</p>
            </div>
          </section>
        </article>

        <article id='typography'>
          <h3>Typographic hierarchy</h3>
          <div className="stySection">
            <h1>Así se ve un h1</h1>
            <h2>Así se ve un h2</h2>
            <h3>Así se ve un h3</h3>
            <h4>Así se ve un h4</h4>
            <h5>Así se ve un h5</h5>
            <h6>Así se ve un h6</h6>
            <p className='p-big'>This is a big paragraph</p>
            <p>This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur ad odit ea asperiores laudantium rem optio nostrum officiis totam, et a. Molestiae suscipit maiores nostrum saepe soluta exercitationem repellat.</p>
            <small>This is an small</small>
          </div>
        </article>
        
        <article id='buttons'>
          <h3>Buttons and Links</h3>
          <Button />
        </article>

        
      </div>
      </>
    )
  }
  
  export default Styleguide