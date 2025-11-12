import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ImageIcon from "@mui/icons-material/Image";

import { FormField } from "../FormField/FormField.jsx";

import "./AppTable.css";

export const AppTable = ({
                             columns,
                             rows,
                             onIncreaseQuantity,
                             onDecreaseQuantity,
                             onDeleteCartItem,
                             onViewOrder,
                             editItem,
                             onDeleteItem,
                             onEditItem,
                             onSaveItem,
                             onAddItem,
                             newItem,
                             setNewItem,
                             showActions = true,
                             showTotal = false,
                         }) => {

    const total = rows.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

    const formatPrice = (price) => {
        return price.toFixed(2) + " $";
    };

    return (
        <div className="app-table">
            <TableContainer className="app-table__container">
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col.field} className={`app-table__cell head ${col.align || ''}`}>
                                    {col.headerName}
                                </TableCell>
                            ))}
                            {showActions && <TableCell className="app-table__cell head">Actions</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newItem &&
                            <TableRow>
                                {columns.map((col) => (
                                    <TableCell key={`new-${col.field}`}>
                                        <div className="app-table__fields">
                                            <FormField
                                                className="app-table__add-field"
                                                value={newItem[col.field] ?? ""}
                                                onChange={(e) =>
                                                    setNewItem({ ...newItem, [col.field]: e.target.value })
                                                }
                                            />
                                        </div>
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <div className="app-table__icon-container">
                                        <IconButton onClick={() => onAddItem(newItem)}>
                                            <AddIcon/>
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        }
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((col) => (
                                    <TableCell key={col.field} className={`app-table__cell ${col.align || ''}`}>
                                        {editItem === row.id ? (
                                            <div className="app-table__fields">
                                                <FormField
                                                    className="app-table__edit-field"
                                                    name={col.field}
                                                    value={row[col.field] ?? ""}
                                                    onChange={(e) => {
                                                        const updated = { ...row, [col.field]: e.target.value };
                                                        onEditItem(updated);
                                                    }}
                                                />
                                            </div>
                                        ) : col.field === "quantity" ? (
                                            showActions ? (
                                                <div className="app-table__icon-container">
                                                    <IconButton className="app-table__button-icon" onClick={() => onDecreaseQuantity?.(row)}><RemoveIcon /></IconButton>
                                                    <span className="app-table__quantity">{row.quantity}</span>
                                                    <IconButton className="app-table__button-icon" onClick={() => onIncreaseQuantity?.(row)}><AddIcon /></IconButton>
                                                </div>
                                            ) : (
                                                <span className="app-table__quantity">{row.quantity}</span>
                                            )
                                        ) : col.field === "price" ? (
                                            formatPrice(row.price || 0)
                                        ) : col.field === "total" ? (
                                            formatPrice((row.price || 0) * (row.quantity || 1))
                                        ) : col.field === "image" ? (
                                            row.image ? (
                                                <img className="app-table__image" src={row.image} alt={row.name}/>
                                            ) : (
                                                <IconButton> <ImageIcon /> </IconButton>
                                            )
                                        ) : (
                                            row[col.field]
                                        )}
                                    </TableCell>
                                ))}
                                {showActions && (
                                    <TableCell>
                                        <div className="app-table__icon-container">
                                            {onDeleteCartItem && (
                                                <IconButton onClick={() => onDeleteCartItem?.(row)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            )}

                                            {onViewOrder && (
                                                <IconButton onClick={() => onViewOrder(row)}>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            )}

                                            {editItem === row.id ? (
                                                <>
                                                    <IconButton onClick={() => onSaveItem?.(row)}>
                                                        <SaveIcon/>
                                                    </IconButton>
                                                    {onDeleteItem && (
                                                        <IconButton onClick={() => onDeleteItem?.(row)}>
                                                            <DeleteIcon/>
                                                        </IconButton>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {onEditItem && (
                                                        <IconButton onClick={() => onEditItem?.(row)}>
                                                            <EditIcon/>
                                                        </IconButton>
                                                    )}
                                                    {onDeleteItem && (
                                                        <IconButton onClick={() => onDeleteItem?.(row)}>
                                                            <DeleteIcon/>
                                                        </IconButton>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                        {showTotal && (
                            <TableRow>
                                <TableCell className="app-table__cell head left">Total Price</TableCell>
                                <TableCell/>
                                <TableCell/>
                                <TableCell/>
                                <TableCell className="app-table__cell head">{formatPrice(total)}</TableCell>
                                {showActions && <TableCell/>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};