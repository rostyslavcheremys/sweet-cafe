import { useNavigate } from "react-router-dom";

import { Loader, OrdersTable } from "../components";

import { useGet } from "../hooks";

import {
    mapOrdersRows,
    getErrorText
} from "../utils";

import { ORDERS_COLUMNS } from "../constants";

import { OrdersAPI } from "../api";

export const Orders = () => {
    const navigate = useNavigate();

    const {
        data,
        isLoading,
        error
    } = useGet(() => OrdersAPI.getAll(), []);

    const rows = mapOrdersRows(data?.orders);

    const handleOrderDetails = (orderId) => {
        navigate(`/order/${orderId}`);
    };

    return (
        <Loader
            isLoading={isLoading}
            error={!!error || !isLoading && rows.length === 0}
            errorText={
                getErrorText({
                    errorFirst: error,
                    textFirst: "Failed to load page!",
                    errorSecond: !isLoading && rows.length === 0,
                    textSecond: "No orders found!"
                })
            }
        >
            <div className="page">
                <span className="page__title">Orders</span>

                <OrdersTable
                    rows={rows}
                    columns={ORDERS_COLUMNS}
                    onViewOrder={(row) => handleOrderDetails(row.id)}
                />
            </div>
        </Loader>
    );
};