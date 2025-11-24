import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { AppButton } from "../AppButton/AppButton.jsx";

import "./ItemDetails.css";

export const ItemDetails = ({ open, onClose, item }) => {
    const handleAddToCart = () => {
        console.log(item.title);
        onClose();
    };

    return (
        <Dialog className="item-details" open={open} onClose={onClose}>
            <DialogTitle className="item-details__title">
                {item.title}
                <IconButton className="item-details__button" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className="item-details__content">
                <img className="item-details__image" src={item.image} alt={item.title}/>
                <label className="item-details__description">{item.description}</label>

                <div className="item-details__details">
                    <label className="item-details__label">{item.size}</label>
                    <label className="item-details__label">{`$${item.price}`}</label>
                </div>
            </DialogContent>
            <DialogActions className="item-details__actions">
                <AppButton label="To Cart" onClick={handleAddToCart}/>
            </DialogActions>
        </Dialog>
    );
};