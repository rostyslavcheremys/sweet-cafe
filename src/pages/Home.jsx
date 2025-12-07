import { useRef } from "react";

import { SpinningDonut } from "../components";

import { useSparks } from "../hooks";

export const Home = () => {
    const sparksRef = useRef(null);

    useSparks(sparksRef, { count: 100, color: "var(--main-color)", size: 7, speed: 2 });

    return (
        <div className="page">
            <div className="page__sparks" ref={sparksRef}></div>

            <span className="page__title-welcome">Want something sweet?</span>

            <SpinningDonut />
        </div>
    );
};
