import { useParams } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppTable } from "../components/AppTable/AppTable.jsx";

import { useGet } from "../hooks/useGet.js";

import { mapOrdersDetailsRows } from "../utils/mappers/mapOrdersDetailsRows.js";
import { getTotalPrice } from "../utils/items/getTotalPrice.js";

import { ORDERS_DETAILS_COLUMNS } from "../constants/tableColumns/ordersDetailsColumns.js";

import { getOrderById } from "../../api.js";

export const OrderDetails = () => {
    const { id } = useParams();

    const { data: order, isLoading, error } = useGet(() => getOrderById(id), [id]);

    const rows = mapOrdersDetailsRows(order?.order_items || []);

    return (
        <Loader
            isLoading={isLoading}
            error={!!error || (!isLoading && rows.length === 0)}
            errorText={error ? "Failed to load order!" : "No order found!"}
        >
            <div className="page">
                <span className="page__label">{`Order: ${id}`}</span>

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
