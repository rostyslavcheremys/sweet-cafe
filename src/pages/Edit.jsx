import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {FormSelect, Loader, EditMenuTable, MessageDialog} from "../components";

import {useGet, useMessageDialog} from "../hooks";

import { getEditMenuValues } from "../utils/";

import { EDIT_MENU_COLUMNS } from "../constants";

import { CategoriesAPI, MenuAPI } from "../api";

export const Edit = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [rows, setRows] = useState([]);
    const [editItemId, setEditItemId] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);

    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const {
        control: editControl,
        reset: resetEditForm,
        getValues: getEditValues,
    } = useForm({ mode: "onChange" });

    const {
        control: newControl,
        watch: watchNew,
        reset: resetNewForm,
        getValues: getNewValues
    } = useForm({
        defaultValues: { new: getEditMenuValues() },
        mode: "onChange",
    });

    const newItem = watchNew("new");

    const {
        data: categories,
        isLoading: categoriesLoading,
        error: categoriesError
    } = useGet(() => CategoriesAPI.getAll(), []);

    const {
        data: items,
        isLoading: itemsLoading,
        error: itemsError
    } = useGet(() => selectedCategory
        ? MenuAPI.getByCategory(selectedCategory)
        : Promise.resolve([]), [selectedCategory]
    );

    useEffect(() => {
        if (categories?.length && !selectedCategory) {
            setSelectedCategory(categories[0].id);
        }
    }, [categories]);

    useEffect(() => {
        setRows(items || []);
        setEditItemId(null);
        setIsAddingNew(false);
        resetNewForm({ new: getEditMenuValues(selectedCategory) });
    }, [items, selectedCategory, resetNewForm]);

    const handleEdit = (row) => {
        setEditItemId(row.id);
        resetEditForm({ [row.id]: row });
    };

    const handleSave = async (row) => {
        try {
            const updated = getEditValues()[row.id] || row;

            const payload = {
                ...updated,
                price: Number(updated.price),
                size: Number(updated.size) || 0,
                available_quantity: Number(updated.available_quantity) || 0,
            };

            const res = await MenuAPI.update(row.id, payload);
            const updatedItem = res?.menu_item || res;

            setRows((prev) => prev.map((i) => (i.id === row.id ? updatedItem : i)));
            setEditItemId(null);
        } catch {
            showMessage("Failed to save!");
        }
    };

    const handleCancelEdit = () => {
        setEditItemId(null);
        resetEditForm();
    };

    const handleDelete = async (row) => {
        if (!window.confirm("Delete this item?")) return;

        try {
            await MenuAPI.delete(row.id);
            setRows((prev) => prev.filter((i) => i.id !== row.id));
        } catch {
            showMessage("Failed to delete!");
        }
    };

    const handleStartAdd = () => {
        resetNewForm({ new: getEditMenuValues(selectedCategory) });
        setIsAddingNew(true);
    };

    const handleCancelAdd = () => {
        setIsAddingNew(false);
    };

    const handleSaveAdd = async () => {
        const values = getNewValues().new;

        try {
            const payload = {
                ...values,
                price: Number(values.price),
                size: Number(values.size) || 0,
                available_quantity: Number(values.available_quantity) || 0,
                category_id: Number(selectedCategory),
            };

            const res = await MenuAPI.create(payload);
            const createdItem = res?.menu_item || res;

            setRows((prev) => [...prev, createdItem]);
            resetNewForm({ new: getEditMenuValues(selectedCategory) });
            setIsAddingNew(false);
        } catch (e) {
            console.error(e);
            alert(e.message || "Помилка при створенні");
        }
    };

    return (
        <Loader
            isLoading={categoriesLoading || itemsLoading}
            error={categoriesError || itemsError}
            errorText="Failed to load page!"
        >
            <div className="page">
                <span className="page__title">Edit Menu</span>

                <div className="page__forms edit">
                    <FormSelect
                        label="Category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(Number(e.target.value))}
                        options={categories?.map((c) => ({ value: c.id, label: c.name })) || []}
                    />
                </div>

                <EditMenuTable
                    controlEdit={editControl}
                    controlNew={newControl}
                    columns={EDIT_MENU_COLUMNS}
                    rows={rows}
                    editItem={editItemId}
                    newItem={newItem}
                    isAddingNew={isAddingNew}
                    onEditItem={handleEdit}
                    onCancelEdit={handleCancelEdit}
                    onSaveItem={handleSave}
                    onDeleteItem={handleDelete}
                    onStartAddItem={handleStartAdd}
                    onCancelAddItem={handleCancelAdd}
                    onSaveAddItem={handleSaveAdd}
                    allowAddItem
                />
            </div>

            <MessageDialog
                open={messageOpen}
                handleClose={handleMessageClose}
                message={message}
            />
        </Loader>
    );
};