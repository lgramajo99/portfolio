import './frame.css';
import Portal from "../../portal/Portal";
import Profile from "../../profile/Profile";
import { Route, Routes } from 'react-router-dom';
import About from '../../../page/About';

function Frame() {
    return (
        <section className="frame">
            <Profile />
            <Portal />
        </section>
    )
}

export default Frame;