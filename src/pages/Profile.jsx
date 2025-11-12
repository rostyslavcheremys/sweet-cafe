import { useNavigate } from "react-router-dom";

import { AppButton } from "../components/AppButton/AppButton.jsx";

import "../styles/pages.css";

export const Profile = () => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/edit");
    }

    const handleAccount = () => {
        navigate("/account");
    }

    const handleOrders = () => {
        navigate("/orders");
    }

    const handleSignOut = () => {}

    return (
        <div className="page">
            <label className="page__label">Welcome, Name!</label>

            <div className="page__button">
                <AppButton label="Edit" onClick={handleEdit}/>
            </div>

            <div className="page__button">
                <AppButton label="Account" onClick={handleAccount}/>
            </div>

            <div className="page__button">
                <AppButton label="Orders" onClick={handleOrders}/>
            </div>

            <div className="page__button">
                <AppButton label="Sign Out" onClick={handleSignOut}/>
            </div>
        </div>
    );
}