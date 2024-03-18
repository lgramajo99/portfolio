import './viwer.css'
import Footer from "../layout/footer/Footer";
import Sidebar from '../layout/sidebar/Sidebar';
import Frame from '../layout/frame/Frame';

function Viwer() {
    return (
        <main className="viwer">
            <Sidebar />
            <Frame />
            <Footer />
        </main>
    )
}

export default Viwer;