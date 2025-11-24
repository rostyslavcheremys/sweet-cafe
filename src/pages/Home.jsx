import { SpinningDonut } from "../components/SpinningDonut/SpinningDonut.jsx";

import "../styles/pages.css";

export const Home = () => {
    return (
        <div className="page">
            <label className="page__label-welcome">Want something sweet?</label>

            <SpinningDonut />
        </div>
    );
};
