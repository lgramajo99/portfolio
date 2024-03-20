
import { brightness, moonLigth, dictionarylanguage, dribbble, github, linkedin, paypal } from '../../../assets/icons';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <section className='changes'>
                <button type='button' className='footer-button' title='Cambiar theme mode '>
                    <img src={moonLigth && brightness} className='icon' alt="Dark or light mode" />
                </button>

                <button type='button' className='footer-button' title='Español / English'>
                    <img className='icon' src={dictionarylanguage} alt="ES/EN" />
                </button>
            </section>

            <section className='social'>
                <hr />
                <a href="#" rel="noopener noreferrer" title='Ir a dibbble'>
                    <img src={dribbble} className='icon' alt="dribbble" />
                </a>

                <hr />
                <a href="https://www.linkedin.com/in/lucianogramajo/" rel="noopener noreferrer" title='Ir a linkedIn'>
                    <img src={linkedin} className='icon' alt="linkedin" />
                </a>

                <hr />
                <a href="https://github.com/lgramajo99/" target='_blank' rel="noopener noreferrer" title='Ir a github'>
                    <img src={github} className='icon' alt="github" />
                </a>

                <hr />
                <a href="#" target='_blank' rel="noopener noreferrer" title='Ir a paypal'>
                    <img src={paypal} className='icon' alt="paypal" />
                </a>
                <hr />
            </section>
            <span></span>
        </footer >
    )
}
export default Footer;