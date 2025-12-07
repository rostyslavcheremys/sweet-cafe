import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
    Loader,
    SelectController,
    InputController,
    AppButton,
    MessageDialog
} from "../components";

import {
    useMessageDialog,
    useGet,
    useCheckout
} from "../hooks";

import {
    getCheckoutValues,
    getDeliveryValidation,
    getPickupTimeValidation,
    getCityValidation,
    getAddressValidation,
    getPhoneNumberValidation,
    getPaymentValidation,
    getNotesValidation
} from "../utils";

import {
    DELIVERY_OPTIONS,
    CITY_OPTIONS,
    PAYMENT_OPTIONS
} from "../constants";

import { CartAPI } from "../api";

export const Checkout = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        watch
    } = useForm({
        defaultValues: getCheckoutValues,
        mode: "onChange"
    });

    const {
        data,
        isLoading,
        error
    } = useGet(() => CartAPI.get(), []);

    const {
        onSubmitOrder,
        isSubmitting
    } = useCheckout(data?.cart_items, showMessage, navigate);

    const delivery = watch("delivery");

    return (
        <Loader
            isLoading={isLoading || isSubmitting}
            error={error}
            errorText="Failed to load page!"
        >
            <div className="page">
                <span className="page__title">Checkout</span>

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
                            rules={getPickupTimeValidation(15, { start: 9, end: 20 })}
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