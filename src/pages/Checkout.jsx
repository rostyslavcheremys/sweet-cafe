import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { SelectController } from "../components/FormControllers/SelectController.jsx";
import { InputController } from "../components/FormControllers/InputController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { useMessageDialog } from "../hooks/useMessageDialog.js";
import { useGet } from "../hooks/useGet.js";
import { useCheckout } from "../hooks/useCheckout.js";

import { getCheckoutValues } from "../utils/forms/getCheckoutValues.js";
import { getPickupTimeValidation } from "../utils/validations/pickupTime.js";
import { getDeliveryValidation } from "../utils/validations/delivery.js";
import { getCityValidation } from "../utils/validations/city.js";
import { getAddressValidation } from "../utils/validations/address.js";
import { getPhoneNumberValidation } from "../utils/validations/phoneNumber.js";
import { getPaymentValidation } from "../utils/validations/payment.js";
import { getNotesValidation } from "../utils/validations/notes.js";

import { DELIVERY_OPTIONS } from "../constants/options/deliveryOptions.js";
import { CITY_OPTIONS } from "../constants/options/cityOptions.js";
import { PAYMENT_OPTIONS } from "../constants/options/paymentOptions.js";

import { getCart } from "../../api.js";

export const Checkout = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { control, handleSubmit, watch } = useForm({
        defaultValues: getCheckoutValues,
        mode: "onChange"
    });

    const delivery = watch("delivery");

    const { data, isLoading, error } = useGet(getCart, []);

    const { onSubmitOrder, isSubmitting } = useCheckout(data?.cart_items, showMessage, navigate);

    return (
        <Loader
            isLoading={isLoading || isSubmitting}
            error={error}
            errorText="Failed to load cart!"
        >
            <div className="page">
                <span className="page__label">Checkout</span>

                <form className="page__forms" onSubmit={handleSubmit(onSubmitOrder)}>
                    <SelectController
                        control={control}
                        name="delivery"
                        label="Delivery*"
                        rules={getDeliveryValidation()}
                        options={DELIVERY_OPTIONS}
                    />

                    {delivery === "by courier" && (
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
                            type="time"
                            label="Pickup Time*"
                            rules={getPickupTimeValidation()}
                        />
                    )}

                    <InputController
                        control={control}
                        name="phone"
                        label="Phone Number*"
                        rules={getPhoneNumberValidation()}
                    />

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
                        <AppButton
                            label="Confirm"
                            type="submit"
                            disabled={isLoading || isSubmitting}
                        />
                    </div>
                </form>

                <MessageDialog
                    open={messageOpen}
                    handleClose={handleMessageClose}
                    message={message}
                />
            </div>
        </Loader>
    );
};