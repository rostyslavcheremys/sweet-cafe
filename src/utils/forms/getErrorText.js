export const getErrorText = ({ errorFirst, textFirst, errorSecond, textSecond }) => {
    if (errorFirst) return textFirst;
    if (errorSecond) return textSecond;
    return "";
};