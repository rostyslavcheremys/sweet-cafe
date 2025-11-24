import { Categories } from "../components/Categories/Categories.jsx";
import { ItemCards } from "../components/ItemCards/ItemCards.jsx";

import "../styles/pages.css";

export const Home = () => {
    return (
        <div className="page">
            <Categories />
            <ItemCards />
        </div>
    );
};
