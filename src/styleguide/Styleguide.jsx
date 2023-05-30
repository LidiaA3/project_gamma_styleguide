import './Styleguide.scss'
import StyNav from "./StyNav"
import Button from '../components/button/Button'
import StyColorCard from './StyColorCard'
import IconEmail from '../components/icons/IconEmail'
import Accordion from '../components/accordion/Accordion'

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
        <div className="header styheader">
            <h1 className="header__tittle stytittle">Styleguide</h1>
            <h2 className="header__subtittle stysubtittle">&lt; portfolio's Lidia /&gt;</h2>
        </div>
        <StyNav />

        <article id="colors">
          <h3>Color palette</h3>
          <p>To use the color in scss <code>var(--color-burdeos_light)</code>. For use it as class <code>color-burdeos_light | color-bg-burdeos_light</code></p>
          <section className='colorSection'>
            {colorArray.map((color) => {
              return <StyColorCard key={color.code} title={color.name} text={color.text} hexcode={color.code} />
            })}
          </section>
        </article>

        <article id="font-family">
          <h3>Font family</h3>
          <p>To use the fonts in scss <code>$font_display | $font_mono | $font_main</code>. For use it as class <code>font-family-$font</code></p>
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
            <h1>Here is an h1</h1>
            <h2>Here is an h2</h2>
            <h3>Here is an h3</h3>
            <h4>Here is an h4</h4>
            <h5>Here is an h5</h5>
            <h6>Here is an h6</h6>
            <p className='p-big'>This is a big paragraph <code>className='p-big'</code></p>
            <p>This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur ad odit ea asperiores laudantium rem optio nostrum officiis totam, et a. Molestiae suscipit maiores nostrum saepe soluta exercitationem repellat.</p>
            <small>This is an small</small>

            <p className='p-big'>This is a list <code>className='list' & className='list__item'</code></p>
            <ul className='list'>
              <li className="list__item">Design</li>
              <li className="list__item">About</li>
              <li className="list__item">Frontend</li>
            </ul>
          </div>
        </article>
        
        <article id='buttons'>
          <h3>Buttons and Links</h3>
          <section className="stySection">
            <p>General attributes <code>type=''|'secondary' status=''|'disable' isLink=true|false</code></p>
            <div className="stySection__item">
              <p>Others <code>size='x-big'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='x-big' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='x-big' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='x-big' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='x-big' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size='big'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='big' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='big' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='big' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='big' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size=''</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size='small'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='small' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='small' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='small' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='small' status='disable' />
            </div>
            <p>Links <code>isLink=true</code> for size <code>btn--$size</code> if secondary <code>type='secondary'</code></p>
            <div className="stySection__item">
              <Button text='Email link' icon={<IconEmail/>} type='primary' size='small' />
              <Button text='Email link' icon={<IconEmail/>} type='secondary' />
            </div>
            <p>Parameters for buttons <code>text | icon | type | size | status | handleClick</code></p>
            <p>Parameters for links <code>text | icon | type | size | isLink | goTo</code></p>
          </section>
        </article>

        <article>
          <Accordion tittle='Accordion component tittle with image' img='http://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante sollicitudin habitasse ligula morbi dictumst, litora nisl sapien semper tortor ridiculus fusce blandit class mus maecenas venenatis nascetur. Rhoncus metus eget purus ridiculus pulvinar dictumst ut per erat penatibus aenean, tempor fusce nam sapien himenaeos donec fringilla in interdum facilisi, lacus lobortis semper suspendisse inceptos nisl laoreet dictum vel phasellus.' />
          <Accordion tittle='Accordion component tittle' text='Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante sollicitudin habitasse ligula morbi dictumst, litora nisl sapien semper tortor ridiculus fusce blandit class mus maecenas venenatis nascetur. Rhoncus metus eget purus ridiculus pulvinar dictumst ut per erat penatibus aenean, tempor fusce nam sapien himenaeos donec fringilla in interdum facilisi, lacus lobortis semper suspendisse inceptos nisl laoreet dictum vel phasellus.' />
          <Accordion tittle='Accordion component tittle' text='Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante sollicitudin habitasse ligula morbi dictumst, litora nisl sapien semper tortor ridiculus fusce blandit class mus maecenas venenatis nascetur. Rhoncus metus eget purus ridiculus pulvinar dictumst ut per erat penatibus aenean, tempor fusce nam sapien himenaeos donec fringilla in interdum facilisi, lacus lobortis semper suspendisse inceptos nisl laoreet dictum vel phasellus.' />
        </article>

        <article id="form">
          <h3>Form assets</h3>
          <input type="text" />
          <input type="button" />
          <input type="checkbox" />
          <input type="radio" />
        </article>

        <article id='grid'>
          <h3>Grid structure</h3>
          <p>Determine a container with <code>className='grid'</code>. Each item goes with <code>className='grid__item--$number'</code>. Each number corresponds to 1fr. Total of grid container 12fr.</p>
          <div className="grid">
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
            <div className="grid__item--1"></div>
          </div>
          <div className="grid">
            <div className="grid__item--2"></div>
            <div className="grid__item--3"></div>
            <div className="grid__item--3"></div>
            <div className="grid__item--4"></div>
          </div>
          <div className="grid">
            <div className="grid__item--2"></div>
            <div className="grid__item--4"></div>
            <div className="grid__item--6"></div>
          </div>
          <div className="grid">
            <div className="grid__item--4"></div>
            <div className="grid__item--4"></div>
            <div className="grid__item--4"></div>
          </div>
          <div className="grid">
            <div className="grid__item--2"></div>
            <div className="grid__item--5"></div>
            <div className="grid__item--5"></div>
          </div>
          <div className="grid">
            <div className="grid__item--6"></div>
            <div className="grid__item--6"></div>
          </div>
          <div className="grid">
            <div className="grid__item--12"></div>
          </div>
        </article>

        
      </div>
      </>
    )
  }
  
  export default Styleguide