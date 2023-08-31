import home from '../assets/house-solid.svg';
import id from '../assets/id-card-solid.svg';


function TabBar() {
    return (
        <nav className='border border-yellow-50 h-[100%] top-auto'>
            <img src={home} alt="Inicio icono" />
            <img src={id} alt="Sobre mi" />
        </nav>
    )
}

export default TabBar;