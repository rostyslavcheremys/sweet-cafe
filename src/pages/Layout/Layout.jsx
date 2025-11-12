import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../..//components/Footer/Footer.jsx";

import "./Layout.css";

export const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
