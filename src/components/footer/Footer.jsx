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
                    <IconCodepen />
                    <IconTwitter />
                    <IconGithub />
                </section>
                <a href="mailto:lidiaaullana@gmail.com">lidiaaullana@gmail.com</a>
                <p className='footer__copy'><IconCopy /> Lidia Aullana</p>
            </footer>
        </>
    );
}

export default Footer