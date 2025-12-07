import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppTable } from "../components/AppTable/AppTable.jsx";

import { useGet } from "../hooks/useGet.js";

import { mapOrdersRows } from "../utils/mappers/mapOrdersRows.js";

import { ORDERS_COLUMNS } from "../constants/tableColumns/ordersColumns.js";

import { getOrders } from "../../api.js";

export const Orders = () => {
    const navigate = useNavigate();

    const { data, isLoading, error } = useGet(getOrders, []);

    const rows = mapOrdersRows(data?.orders);

    const handleOrderDetails = (orderId) => {
        navigate(`/order/${orderId}`);
    };

    return (
        <Loader
            isLoading={isLoading}
            error={!!error || (!isLoading && rows.length === 0)}
            errorText={error ? "Failed to load orders!" : "No orders found!"}
        >
            <div className="page">
                <span className="page__label">Orders</span>

                <AppTable
                    rows={rows}
                    columns={ORDERS_COLUMNS}
                    showActions={true}
                    onViewOrder={(row) => handleOrderDetails(row.id)}
                />
            </div>
        </Loader>
    );
};