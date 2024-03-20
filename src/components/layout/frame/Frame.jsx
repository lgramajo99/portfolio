import './frame.css';
import Portal from "../../portal/Portal";
import Profile from "../../profile/Profile";

function Frame() {
    return (
        <section className="frame">
            <Profile />
            <Portal />
        </section>
    )
}

export default Frame;