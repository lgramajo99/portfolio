import { NavLink } from 'react-router-dom';
import './sidebar.css';


function Sidebar() {
    return (
        <nav className="navbar">
            <NavLink to={'#'}>SOBRE MI</NavLink>
            <NavLink to={'#'}>EXPERIENCIA LABORAL</NavLink>
            <NavLink to={'#'}>ESTUDIOS</NavLink>
            <NavLink to={'#'}>PORTFOLIO</NavLink>
            <NavLink to={'#'}>HABILIDADES</NavLink>
            <NavLink to={'#'}>CONTACTAME</NavLink>
            <NavLink to={'#'}>INICIAR SECION</NavLink>
        </nav>
    )
}

export default Sidebar;