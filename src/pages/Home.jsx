import { useNavigate } from "react-router-dom";

import "../styles/pages.css";

export const Home = () => {
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate("/menu");
    }

    return (
        <div className="page">
            <label className="page__welcome">Want something sweet?</label>

            <div className="sprinkles">
                {Array.from({ length: 40 }).map((_, i) => (
                    <span key={i} style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        backgroundColor: [
                            '#f1c40f','#e74c3c','#9b59b6','#3498db','#1abc9c','#f39c12','#e67e22','#2ecc71'
                        ][Math.floor(Math.random() * 8)],
                        animationDelay: `${Math.random() * 4}s`
                    }}></span>
                ))}
            </div>

            <div className="donut-wrapper" onClick={handleMenu}>
                <div className="donut"></div>
                <span className="page__hint">Click me!</span>
            </div>
        </div>
    );
};
