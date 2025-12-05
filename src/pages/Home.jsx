import { useRef } from "react";

import { SpinningDonut } from "../components/SpinningDonut/SpinningDonut.jsx";

import { useSparks } from "../hooks/useSparks.js";

export const Home = () => {
    const sparksRef = useRef(null);

    useSparks(sparksRef, { count: 100, color: "var(--main-color)", size: 7, speed: 2 });

    return (
        <div className="page">
            <div className="page__sparks" ref={sparksRef}></div>

            <label className="page__label-welcome">Want something sweet?</label>

            <SpinningDonut />
        </div>
    );
};
