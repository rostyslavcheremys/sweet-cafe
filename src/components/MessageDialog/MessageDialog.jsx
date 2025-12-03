import { Dialog, DialogContent, DialogActions } from "@mui/material";

import { AppButton } from "../AppButton/AppButton.jsx";

import "./MessageDialog.css";

export const MessageDialog = ({ open, handleClose, message }) => {
    return (
        <Dialog className="message-dialog" open={open} onClose={handleClose}>
            <DialogContent className="message-dialog__content">
                <span className={`message-dialog__message`}>{message}</span>
            </DialogContent>
            <DialogActions className="message-dialog__actions">
                <AppButton label="OK" onClick={handleClose}/>
            </DialogActions>
        </Dialog>
    );
};