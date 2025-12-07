import { useParams } from "react-router-dom";

import { Loader, AppTable } from "../components";

import { useGet } from "../hooks";

import {
    mapOrdersDetailsRows,
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

    const rows = mapOrdersDetailsRows(order?.order_items || []);

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

                <AppTable
                    rows={rows}
                    columns={ORDERS_DETAILS_COLUMNS}
                    totalPrice={getTotalPrice(rows)}
                    showTotal={true}
                    showActions={false}
                />
            </div>
        </Loader>
    );
};
