import { useNavigate } from "react-router-dom";

export const SpinningDonut = () => {
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate("/menu");
    }

    return (
        <div className="spinning-donut" onClick={handleMenu}>
            <div className="donut"></div>
            <span className="donut__hint">Click me!</span>
        </div>
    );
};