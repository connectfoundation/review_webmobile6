export const getNightValueFromDateString = ({ startDateString, endDateString }) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
};
