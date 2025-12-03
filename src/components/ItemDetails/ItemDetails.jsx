import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { AppButton } from "../AppButton/AppButton.jsx";

import imagePlaceholder from "../../assets/placeholder.webp";

import "./ItemDetails.css";

export const ItemDetails = ({ open, item, onClose }) => {
    const handleAddToCart = () => onClose();

    return (
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
                <img className="item-details__image" src={item.image_url || imagePlaceholder} alt={item.name}/>
                <label className="item-details__description">{item.description}</label>

                <div className="item-details__details">
                    <label className="item-details__label">{item.size}</label>
                    <label className="item-details__label">{`$${item.price.toFixed(2)}`}</label>
                </div>
            </DialogContent>
            <DialogActions className="item-details__actions">
                <AppButton label="To Cart" onClick={handleAddToCart}/>
            </DialogActions>
        </Dialog>
    );
}