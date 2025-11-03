import { useState } from "react";

import { FormField } from "../FormField/FormField.jsx";
import { FormSelect } from "../FormField/FormSelect.jsx";
import { AppButton } from "../AppButton/AppButton.jsx";

import "./Checkout.css";

export const Checkout = () => {
    const [delivery, setDelivery] = useState("");
    const [city, setCity] = useState("");
    const [payment, setPayment] = useState("");

    return (
        <div className="checkout">
            <div className="checkout__container">
                <label className="checkout__label">Checkout</label>

                <div className="checkout__forms">
                    <FormSelect
                        label="Delivery"
                        name="delivery"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        options={[
                            { value: "courier", label: "By Courier" },
                            { value: "pickup", label: "Pickup at Cafe" },
                        ]}
                    />

                    {delivery === "courier" && (
                        <>
                            <FormSelect
                                label="City"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                options={[
                                    { value: "cherkasy", label: "Cherkasy" },
                                    { value: "kyiv", label: "Kyiv" },
                                    { value: "lviv", label: "Lviv" },
                                    { value: "odessa", label: "Odessa" },
                                ]}
                            />

                            <FormField
                                label="Address"
                                type="text"
                                name="address"
                            />
                        </>
                    )}

                    {delivery === "pickup" && (
                        <>
                            <FormField
                                label="Time"
                                type="text"
                                name="time"
                            />
                        </>
                    )}

                    <FormSelect
                        label="Payment"
                        name="payment"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        options={[
                            { value: "card", label: "Card" },
                            { value: "cash", label: "Cash" },
                        ]}
                    />

                    <FormField
                        label="Notes"
                        type="text"
                        name="notes"
                    />

                    <div className="checkout__button">
                        <AppButton label="Confirm"/>
                    </div>
                </div>
            </div>
        </div>
    );
}