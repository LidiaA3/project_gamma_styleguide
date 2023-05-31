import './Styleguide.scss'
import StyNav from "./StyNav"
import Button from '../components/button/Button'
import StyColorCard from './StyColorCard'
import IconEmail from '../components/icons/IconEmail'
import Accordion from '../components/accordion/Accordion'
import IconHome from './icons/IconHome'

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
            <p>General attributes <code>type=''|'secondary'|'ternary' status=''|'disable' isLink=true|false</code></p>
            <div className="stySection__item">
              <p>Others <code>size='x-big'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='x-big' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='x-big' />
              <Button text='Email' icon={<IconEmail/>} type='ternary' size='x-big' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='x-big' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='x-big' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size='big'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='big' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='big' />
              <Button text='Email' icon={<IconEmail/>} type='ternary' size='big' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='big' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='big' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size=''</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='' />
              <Button text='Email' icon={<IconEmail/>} type='ternary' size='' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='' status='disable' />
            </div>
            <div className="stySection__item">
              <p>Others <code>size='small'</code></p>
              <Button text='Email' icon={<IconEmail/>} type='primary' size='small' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='small' />
              <Button text='Email' icon={<IconEmail/>} type='ternary' size='small' />
              <Button text='Email' icon={<IconEmail/>} type='primary' size='small' status='disable' />
              <Button text='Email' icon={<IconEmail/>} type='secondary' size='small' status='disable' />
            </div>
            <p>Links <code>isLink=true</code> for size <code>btn--$size</code> if secondary or ternary <code>type='secondary'|'ternary'</code> Target of link <code>target=''|'_blank'</code></p>
            <div className="stySection__item">
              <Button isLink={true} text='Email link' icon={<IconEmail/>} type='primary' size='small' />
              <Button isLink={true} text='Email link' icon={<IconEmail/>} type='secondary' />
              <Button isLink={true} text='Email link' icon={<IconEmail/>} type='ternary' size='small' />
            </div>
            <p>Parameters for buttons <code>text | icon | type | size | status | handleClick</code></p>
            <p>Parameters for links <code>text | icon | type | size | isLink | goTo | target</code></p>
          </section>
        </article>

        <article>
          <h4>Accordion component</h4>
          <code>&lt;Accordion/&gt; properties: tittle | img(optional) | text</code>
          <Accordion tittle='Accordion component with image tittle' img='http://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante sollicitudin habitasse ligula morbi dictumst, litora nisl sapien semper tortor ridiculus fusce blandit class mus maecenas venenatis nascetur. Rhoncus metus eget purus ridiculus pulvinar dictumst ut per erat penatibus aenean, tempor fusce nam sapien himenaeos donec fringilla in interdum facilisi, lacus lobortis semper suspendisse inceptos nisl laoreet dictum vel phasellus.' />
          <Accordion tittle='Accordion component without image tittle' text='Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante sollicitudin habitasse ligula morbi dictumst, litora nisl sapien semper tortor ridiculus fusce blandit class mus maecenas venenatis nascetur. Rhoncus metus eget purus ridiculus pulvinar dictumst ut per erat penatibus aenean, tempor fusce nam sapien himenaeos donec fringilla in interdum facilisi, lacus lobortis semper suspendisse inceptos nisl laoreet dictum vel phasellus.' />
        </article>

        <article id="form">
          <h3>Form assets</h3>
          <h4>Text inputs</h4>
            <div className="inputgroup">
                <label htmlFor="text">Short text:
                <input id="text" type="text" placeholder="Write something" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="l-text">Large text:
                <textarea id="l-text" name="" cols="20" rows="3" placeholder="This is a large text where you could type whatever."></textarea>
                </label>
            </div>
            
            <div className="inputgroup">
                <label htmlFor="email">Email:
                <input type="email" name="" id="email" placeholder="ejemplo@ejemplo.com" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="password">Password:
                <input type="password" name="" id="password" placeholder="Set your password" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="search">Search:
                <input type="search" name="" id="search" placeholder="Search something" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="url">Set an URL:
                <input type="url" name="" id="url" placeholder="https://www.google.es/"/>
                </label>
            </div>


          <h4>Number inputs</h4>
            <div className="inputgroup">
                <label htmlFor="number">Set a number:
                <input type="number" name="" id="number" placeholder="5382" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="tel">Set your phone:
                <input type="tel" name="" id="tel" placeholder="628 657 426" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="date">Set a date:
                <input type="date" name="" id="date" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="time">Set a time:
                <input type="time" name="" id="time" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="datetime-local">Set date and time:
                <input type="datetime-local" name="" id="datetime-local" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="week">Set a week:
                <input type="week" name="" id="week" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="month">Set a month:
                <input type="month" name="" id="month" />
                </label>
            </div>


          <h4>Select inputs</h4>
            <div className="inputgroup">
                <label htmlFor="radio1">opt1:
                <input type="radio" name="opps" id="radio1" />
                </label>
                <label htmlFor="radio2">opt2:
                <input type="radio" name="opps" id="radio2" />
                </label>
                <label htmlFor="radio3">opt3:
                <input type="radio" name="opps" id="radio3" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="checkbox1">check1:
                <input type="checkbox" name="" id="checkbox1" />
                </label>
                <label htmlFor="checkbox2">check2:
                <input type="checkbox" name="" id="checkbox2" />
                </label>
                <label htmlFor="checkbox3">check3:
                <input type="checkbox" name="" id="checkbox3" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="range">Set a range:
                <input type="range" name="" id="range" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="color">Set a color:
                <input type="color" name="" id="color" defaultValue="#851A50" />
                </label>
            </div>

            <div className="inputgroup">
                <label htmlFor="select">Select an option:
                <select name="" id="select" defaultValue='1'>
                    <option defaultValue='1' disabled>Select an option</option>
                    <optgroup label="Option 1:">
                        <option defaultValue=''>Option 1.1</option>
                        <option defaultValue=''>Option 1.2</option>
                        <option defaultValue=''>Option 1.3</option>
                    </optgroup>
                    <optgroup label="Option 2:">
                        <option defaultValue=''>Option 2.1</option>
                        <option defaultValue=''>Option 2.2</option>
                        <option defaultValue=''>Option 2.3</option>
                    </optgroup>
                </select>
                </label>
            </div>

            
          <h4>File inputs</h4>
            <div className="inputgroup">
                <label htmlFor="file">Enter a file:
                <input type="file" name="" id="file" />
                </label>
            </div>


          <h4>Button inputs</h4>
            <div className="inputgroup">
                <input className="btn" type="submit" defaultValue="submit" />
                <input className="btn" type="button" defaultValue="button" />
                <input className="btn" type="reset" defaultValue="reset" />
                <input className="btn" type="image" id="image" alt="awesome" height="32px" src="icons/awesome.png" />
            </div>


          <h4>Progress state</h4>
            <div className="inputgroup">
              <label htmlFor="state">Progress state:
              <progress id="state" min="0" max="100" value="70" readOnly> 70% </progress>
              </label>
            </div>
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