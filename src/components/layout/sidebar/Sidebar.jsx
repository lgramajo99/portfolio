import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
    return (
        <nav className="navbar">
            <NavLink to={'/'}>SOBRE MI</NavLink>
            <NavLink to={'experiencia-laboral'}>EXPERIENCIA LABORAL</NavLink>
            <NavLink to={'formacion-academica'}>ESTUDIOS</NavLink>
            <NavLink to={'portfolio'}>PORTFOLIO</NavLink>
            <NavLink to={'habilidades'}>HABILIDADES</NavLink>
            <NavLink to={'contactame'}>CONTACTAME</NavLink>
            <NavLink to={'#'}>INICIAR SECION</NavLink>
        </nav>
    )
}

export default Sidebar;