import { useParams } from "react-router-dom";

import { Loader, OrderDetailsTable } from "../components";

import { useGet } from "../hooks";

import {
    mapOrderDetailsRows,
    getTotalPrice,
    getErrorText
} from "../utils";

import { ORDERS_DETAILS_COLUMNS } from "../constants";

import { OrdersAPI } from "../api";

export const OrderDetails = () => {
    const { id } = useParams();

    const {
        data: order,
        isLoading,
        error
    } = useGet(() => OrdersAPI.getById(id), [id]);

    const rows = mapOrderDetailsRows(order?.order_items || []);

    return (
        <Loader
            isLoading={isLoading}
            error={!!error || !isLoading && rows.length === 0}
            errorText={
                getErrorText({
                    errorFirst: error,
                    textFirst: "Failed to load page!",
                    errorSecond: !isLoading && rows.length === 0,
                    textSecond: "No order details found!"
                })
            }
        >
            <div className="page">
                <span className="page__title">{`Order: ${id}`}</span>

                <OrderDetailsTable
                    rows={rows}
                    columns={ORDERS_DETAILS_COLUMNS}
                    totalPrice={getTotalPrice(rows)}
                />
            </div>
        </Loader>
    );
};
