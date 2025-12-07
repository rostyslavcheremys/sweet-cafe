import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { AppButton } from "../AppButton/AppButton.jsx";
import { MessageDialog } from "../MessageDialog/MessageDialog.jsx";

import { usePost } from "../../hooks/usePost.js";
import { useMessageDialog } from "../../hooks/useMessageDialog.js";

import { getUnit } from "../../utils/items/getUnit.js";
import { formatPrice } from "../../utils/formatters/formatPrice.js";

import { addToCart } from "../../../api.js";

import "./ItemDetails.css";

export const ItemDetails = ({ open, item, onClose }) => {
    const { postData, isLoading } = usePost((payload) => addToCart(payload.menu_item_id, payload.quantity));

    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const handleAddToCart = async () => {
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