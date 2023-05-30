import './Footer.scss';
import IconCodepen from '../icons/IconCodepen';
import IconGithub from '../icons/IconGithub';
import IconTwitter from '../icons/IconTwitter';
import IconCopy from '../icons/IconCopy';

function Footer() {
    return (
        <>
            <footer className="footer">
                <section className="footer__rrss">
                    <a className='color-gray_lighter' href="https://codepen.io/LidiaA3"><IconCodepen /></a>
                    <a className='color-gray_lighter' href="https://twitter.com/lidiaA3_99"><IconTwitter /></a>
                    <a className='color-gray_lighter' href="https://github.com/LidiaA3"><IconGithub /></a>
                </section>
                <a href="mailto:lidiaaullana@gmail.com">lidiaaullana@gmail.com</a>
                <p className='footer__copy'><IconCopy /> Lidia Aullana</p>
            </footer>
        </>
    );
}

export default Footer