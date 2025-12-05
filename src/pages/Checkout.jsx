import { useForm } from "react-hook-form";

import { SelectController } from "../components/FormControllers/SelectController.jsx";
import { InputController } from "../components/FormControllers/InputController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { useMessageDialog } from "../hooks/useMessageDialog.js";

import { getPickupTimeValidation } from "../utils/validations/pickupTime.js";
import { getDeliveryValidation } from "../utils/validations/delivery.js";
import { getCityValidation } from "../utils/validations/city.js";
import { getAddressValidation } from "../utils/validations/address.js";
import { getPaymentValidation } from "../utils/validations/payment.js";
import { getNotesValidation } from "../utils/validations/notes.js";

import { CHECKOUT_DEFAULT_VALUES}  from "../constants/checkout/checkoutDefaultValues.js";
import { DELIVERY_OPTIONS } from "../constants/checkout/deliveryOptions.js";
import { CITY_OPTIONS } from "../constants/checkout/cityOptions.js";
import { PAYMENT_OPTIONS } from "../constants/checkout/paymentOptions.js";

export const Checkout = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();


    const { control, handleSubmit, watch } = useForm({
        defaultValues: CHECKOUT_DEFAULT_VALUES,
        mode: "onChange"
    });

    const delivery = watch("delivery");

    const onSubmit = (data) => {
        console.log("Checkout:", data);
    };

    return (
        <div className="page">
            <span className="page__label">Checkout</span>

            <form className="page__forms" onSubmit={handleSubmit(onSubmit)}>
                <SelectController
                    control={control}
                    name="delivery"
                    label="Delivery*"
                    rules={getDeliveryValidation()}
                    options={DELIVERY_OPTIONS}
                />

                {delivery === "courier" && (
                    <>
                        <SelectController
                            control={control}
                            name="city"
                            label="City*"
                            rules={getCityValidation()}
                            options={CITY_OPTIONS}
                        />

                        <InputController
                            control={control}
                            name="address"
                            label="Address*"
                            rules={getAddressValidation()}
                        />
                    </>
                )}

                {delivery === "pickup" && (
                    <InputController
                        control={control}
                        name="time"
                        label="Pickup Time*"
                        rules={getPickupTimeValidation()}
                    />
                )}

                <SelectController
                    control={control}
                    name="payment"
                    label="Payment*"
                    rules={getPaymentValidation()}
                    options={PAYMENT_OPTIONS}
                />

                <InputController
                    control={control}
                    name="notes"
                    label="Notes"
                    rules={getNotesValidation()}
                />

                <div className="page__button">
                    <AppButton label="Confirm" type="submit"/>
                </div>
            </form>

            <MessageDialog
                open={messageOpen}
                handleClose={handleMessageClose}
                message={message}
            />
        </div>
    );
};
