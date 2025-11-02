import { Outlet } from "react-router-dom";

import { Header } from "/src/components/Header/Header.jsx";
import { Footer } from "/src/components/Footer/Footer.jsx";

export const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
