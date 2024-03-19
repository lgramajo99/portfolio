import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { bagsuitcase, home, useridcard, star, graduationcap, sendemail, store } from '../../../assets/icons';

function Sidebar() {

    return (
        <nav className="navbar">
            <NavLink to={'/'} className={'navlink'}>
                <img src={useridcard} alt="" className='icon' />
                <span>SOBRE MI</span>
            </NavLink>

            <NavLink to={'experiencia-laboral'} className={'navlink'}>
                <img src={store} alt="" className='icon' />
                <span>EXPERIENCIA LABORAL</span>
            </NavLink>

            <NavLink to={'formacion-academica'} className={'navlink'}>
                <img src={graduationcap} alt="" className='icon' />
                <span>ESTUDIOS</span>
            </NavLink>

            <NavLink to={'portfolio'} className={'navlink'}>
                <img src={bagsuitcase} alt="" className='icon' />
                <span>PORTFOLIO</span>
            </NavLink>

            <NavLink to={'habilidades'} className={'navlink'}>
                <img src={star} alt="" className='icon' />
                <span>HABILIDADES</span>
            </NavLink>

            <NavLink to={'contactame'} className={'navlink'}>
                <img src={sendemail} alt="" className='icon' />
                <span>CONTACTAME</span>
            </NavLink>

            <NavLink to={'#'} className={'navlink'}>
                <img src={home} alt="" className='icon' />
                <span>INICIAR SECION</span>
            </NavLink>
        </nav>
    )
}

export default Sidebar;