import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import { Menu } from "./components/Menu/Menu.jsx"
import { Login } from  "./components/Login/Login.jsx";
import { Signup } from "./components/Signup/Signup.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Checkout } from "./components/Checkout/Checkout.jsx"
import { Orders } from "./components/Orders/Orders.jsx";
import { OrderDetails } from "./components/OrderDetails/OrderDetails.jsx";
import { Edit } from "./components/Edit/Edit.jsx";

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Menu />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="/order/id" element={<OrderDetails />} />
                    <Route path="edit" element={<Edit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}