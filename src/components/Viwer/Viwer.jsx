import './viwer.css'
import Footer from "../Footer/Footer";
import Paginator from "../Paginator/Paginator";
import Sidebar from '../Sidebar/Sidebar';

function Viwer() {
    return (
        <main className="viwer">
            <Sidebar />
            <Paginator />
            <Footer />
        </main>
    )
}

export default Viwer;