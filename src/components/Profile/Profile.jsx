import { useNavigate } from "react-router-dom";

import { AppButton } from "../AppButton/AppButton.jsx";

import "./Profile.css";

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
        <div className="profile">
            <div className="profile__container">
                <label className="profile__label">Welcome, Name!</label>

                <div className="profile__button">
                    <AppButton label="Edit" onClick={handleEdit}/>
                </div>

                <div className="profile__button">
                    <AppButton label="Account" onClick={handleAccount}/>
                </div>

                <div className="profile__button">
                    <AppButton label="Orders" onClick={handleOrders}/>
                </div>

                <div className="profile__button">
                    <AppButton label="Sign Out" onClick={handleSignOut}/>
                </div>
            </div>
        </div>
    );
}