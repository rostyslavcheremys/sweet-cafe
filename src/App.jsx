import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Menu } from "./pages/Menu.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Checkout } from "./pages/Checkout.jsx"
import { Orders } from "./pages/Orders.jsx";
import { OrderDetails } from "./pages/OrderDetails.jsx";
import { Edit } from "./pages/Edit.jsx";
import { Account } from "./pages/Account.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/order/:id" element={<OrderDetails />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/account" element={<Account />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}