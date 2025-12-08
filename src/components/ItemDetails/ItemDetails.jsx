import {useNavigate} from "react-router-dom";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
} from "../../libs/mui.js";

import { CloseIcon } from "../../libs/mui-icons.js";

import {
    AppButton,
    MessageDialog
} from "../";

import {
    usePost,
    useMessageDialog
} from "../../hooks";

import {
    getUnit,
    formatPrice
} from "../../utils";

import { CartAPI } from "../../api";

export const ItemDetails = ({ open, item, onClose }) => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { postData, isLoading } = usePost((payload) => CartAPI.addItem(payload.menu_item_id, payload.quantity));

    const handleAddToCart = async () => {
        const user = JSON.parse(localStorage.getItem("user") || null);

        if (!user || !user.id) {
            showMessage("Please log in or sign up to add item!", () => {
                navigate("/login");
            });
            return;
        }

        try {
            await postData({ menu_item_id: item.id, quantity: 1 });
            onClose();
        } catch {
            showMessage("Failed to add item to cart!");
        }
    };

    return (
        <>
            <Dialog className="item-details" open={open} onClose={onClose}>
                <DialogTitle className="item-details__title">
                    {item.name}
                    <div className="item-details__close-icon">
                        <IconButton className="item-details__button" onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent className="item-details__content">
                    <img className="item-details__image" src={item.image_url || "images/placeholder.webp"} alt={item.name}/>
                    <label className="item-details__description">{item.description}</label>

                    <div className="item-details__details">
                        <span className="item-details__label">{item.size} {getUnit(item)}</span>
                        <span className="item-details__label">{formatPrice(item.price)}</span>
                    </div>
                </DialogContent>
                <DialogActions className="item-details__actions">
                    <AppButton label="To Cart" onClick={handleAddToCart} disabled={isLoading}/>
                </DialogActions>
            </Dialog>

            <MessageDialog
                open={messageOpen}
                handleClose={handleMessageClose}
                message={message}
            />
        </>
    );
}