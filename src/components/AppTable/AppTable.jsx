import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppButton } from "../AppButton/AppButton.jsx";

import "./AppTable.css";

export const AppTable = () => {
    const rows = [
        { id: 1, name: "Coca-Cola", size: "500 ml", price: 0.5, quantity: 1 },
        { id: 2, name: "Mineral Water", size: "500 ml", price: 0.5, quantity: 2 },
        { id: 3, name: "Pepsi", size: "500 ml", price: 0.55, quantity: 1 },
        { id: 4, name: "Orange Juice", size: "300 ml", price: 1.2, quantity: 1 },
        { id: 5, name: "Apple Juice", size: "300 ml", price: 1.1, quantity: 2 },
        { id: 6, name: "Lemonade", size: "400 ml", price: 0.9, quantity: 1 },
        { id: 7, name: "Iced Tea", size: "400 ml", price: 1.0, quantity: 3 },
        { id: 8, name: "Espresso", size: "50 ml", price: 1.5, quantity: 1 },
        { id: 9, name: "Cappuccino", size: "200 ml", price: 2.0, quantity: 2 },
        { id: 10, name: "Latte", size: "250 ml", price: 2.2, quantity: 1 },
        { id: 11, name: "Green Tea", size: "300 ml", price: 1.3, quantity: 2 },
        { id: 12, name: "Black Tea", size: "300 ml", price: 1.2, quantity: 1 },
        { id: 13, name: "Hot Chocolate", size: "200 ml", price: 1.8, quantity: 2 },
        { id: 14, name: "Milkshake", size: "350 ml", price: 2.5, quantity: 1 },
        { id: 15, name: "Water Sparkling", size: "500 ml", price: 0.6, quantity: 3 },
        { id: 16, name: "Energy Drink", size: "250 ml", price: 2.0, quantity: 1 },
        { id: 17, name: "Smoothie", size: "300 ml", price: 3.0, quantity: 2 },
        { id: 18, name: "Herbal Tea", size: "250 ml", price: 1.4, quantity: 1 },
        { id: 19, name: "Coconut Water", size: "400 ml", price: 2.2, quantity: 1 },
        { id: 20, name: "Ginger Ale", size: "500 ml", price: 1.0, quantity: 2 },
    ];

    const total = rows.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="app-table">
            <TableContainer className="app-table__container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="app-table__head-right">Product</TableCell>
                            <TableCell className="app-table__head">Size</TableCell>
                            <TableCell className="app-table__head">Price</TableCell>
                            <TableCell className="app-table__head">Quantity</TableCell>
                            <TableCell className="app-table__head">Total</TableCell>
                            <TableCell className="app-table__head">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="app-table__text-right">{row.name}</TableCell>
                                <TableCell className="app-table__text">{row.size}</TableCell>
                                <TableCell className="app-table__text">
                                    {row.price.toFixed(2)} $
                                </TableCell>
                                <TableCell>
                                    <IconButton className="app-table__button-quantity">
                                        <RemoveIcon />
                                    </IconButton>

                                    <span className="app-table__quantity">{row.quantity}</span>

                                    <IconButton className="app-table__button-quantity">
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell className="app-table__text">
                                    {(row.price * row.quantity).toFixed(2)} $
                                </TableCell>
                                <TableCell>
                                    <div className="app-table__button-delete">
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell className="app-table__head-right">Total Price</TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell className="app-table__head">
                                {total.toFixed(2)} $
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>

                <div className="app-table__button">
                    <AppButton label="Checkout" />
                </div>
            </TableContainer>
        </div>
    );
};