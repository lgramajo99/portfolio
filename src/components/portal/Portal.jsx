import { Outlet } from 'react-router-dom';
import './portal.css';

function Portal() {
    return (
        <section className="page">
            <Outlet />
        </section>
    )
}

export default Portal;