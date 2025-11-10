import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./AppTable.css";

export const AppTable = ({
                             columns,
                             rows,
                             onAdd,
                             onRemove,
                             onDelete,
                             onView,
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
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((col) => (
                                    <TableCell key={col.field} className={`app-table__cell ${col.align || ''}`}>
                                        {col.field === "quantity" ? (
                                            <div className="app-table__icon-container">
                                                <IconButton className="app-table__button-icon" onClick={() => onRemove?.(row)}><RemoveIcon /></IconButton>
                                                <span className="app-table__quantity">{row.quantity}</span>
                                                <IconButton className="app-table__button-icon" onClick={() => onAdd?.(row)}><AddIcon /></IconButton>
                                            </div>
                                        ) : col.field === "price" ? (
                                            formatPrice(row.price || 0)
                                        ) : col.field === "total" ? (
                                            formatPrice((row.price || 0) * (row.quantity || 1))
                                        ) : (
                                            row[col.field]
                                        )}
                                    </TableCell>
                                ))}

                                {showActions && (
                                    <TableCell>
                                        <div className="app-table__icon-container">
                                            {onDelete ? (
                                                <IconButton onClick={() => onDelete?.(row)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            ) : onView ? (
                                                <IconButton onClick={() => onView?.(row)}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                            ) : null}
                                        </div>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}

                        {showTotal && (
                            <TableRow>
                                <TableCell className="app-table__cell head left">Total Price</TableCell>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell className="app-table__cell head">{formatPrice(total)}</TableCell>
                                {showActions && <TableCell />}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};