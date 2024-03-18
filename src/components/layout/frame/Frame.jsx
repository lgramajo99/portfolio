import './frame.css';
import Paginator from "../../paginator/Paginator";
import Profile from "../../profile/Profile";

function Frame() {
    return (
        <section className="frame">
            <Profile />
            <Paginator />
        </section>
    )
}

export default Frame;