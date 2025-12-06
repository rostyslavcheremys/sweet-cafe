export const formatPickupTime = (timeStr) => {
    if (!timeStr) return null;

    const now = new Date();

    const [hours, minutes] = timeStr.split(":").map(Number);

    const date = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes,
        0
    );

    return date.toISOString();
};
