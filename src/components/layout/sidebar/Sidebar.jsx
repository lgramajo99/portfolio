import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { bagsuitcase, home, useridcard, star, graduationcap, sendemail, store } from '../../../assets/icons';

function Sidebar() {

    return (
        <nav className="navbar">
            <NavLink exact to={'/'} className={'navlink'}
                title='Ir al apartado sobre mí'
                tabIndex={1}
                aria-label='Sobre mi'>
                <img src={useridcard} alt="Icono de sobre mi" className='icon' />
                <span>SOBRE MI</span>
            </NavLink>

            <NavLink exact to={'experiencia-laboral'} className={'navlink'}
                title='Ir al apartado experiencia laboral'
                tabIndex={2}
                aria-label="Experiencia laboral">
                <img src={store} alt="Icono de Experiencia laboral" className='icon' />
                <span>EXPERIENCIA LABORAL</span>
            </NavLink>

            <NavLink exact
                to={'formacion-academica'} className={'navlink'}
                title='Ir al apartado estudios'
                tabIndex={3}
                aria-label='Estudios'>
                <img src={graduationcap} alt="Icono de Estudios" className='icon' />
                <span>ESTUDIOS</span>
            </NavLink>

            <NavLink exact
                to={'portfolio'} className={'navlink'}
                title='Ir al apartado portfolio'
                tabIndex={4}
                aria-label='Porfolio'>
                <img src={bagsuitcase} alt="Icono de Portfolio" className='icon' />
                <span>PORTFOLIO</span>
            </NavLink>

            <NavLink exact
                to={'habilidades'} className={'navlink'}
                title='Ir al apartado habilidades'
                tabIndex={5}
                aria-label='Habilidades'>
                <img src={star} alt="Icono de Habilidades" className='icon' />
                <span>HABILIDADES</span>
            </NavLink>

            <NavLink exact
                to={'contactame'} className={'navlink'}
                title='Ir al apartado contactarme'
                tabIndex={6}
                aria-label='Contactame'>
                <img src={sendemail} alt="Icono de contactame" className='icon' />
                <span>CONTACTAME</span>
            </NavLink>

            <NavLink exact
                to={'login'} className={'navlink'}
                title='Ir al apartado iniciar sesión'
                tabIndex={7}
                aria-label='Iniciar sesión'>
                <img src={home} alt="Icono de Inicio de sesión" className='icon' />
                <span>INICIAR SECION</span>
            </NavLink>
        </nav >
    )
}

export default Sidebar;