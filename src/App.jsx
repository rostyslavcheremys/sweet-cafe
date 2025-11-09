import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import { Menu } from "./components/Menu/Menu.jsx"
import { Login } from  "./components/Login/Login.jsx";
import { Signup } from "./components/Signup/Signup.jsx";
import { Checkout } from "./components/Checkout/Checkout.jsx"

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="menu" element={<Menu />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}