import { Outlet } from "react-router-dom";

import { Header } from "/src/components/Header/Header.jsx";
import { Footer } from "/src/components/Footer/Footer.jsx";

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
