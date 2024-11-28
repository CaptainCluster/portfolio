export const calculateTimeDifference = (startDate: Date, endDate: Date) => {
    const differenceYears   = endDate.getFullYear() - startDate.getFullYear();
    const differenceMonths  = endDate.getMonth() - startDate.getMonth();
    return differenceYears * 12 + differenceMonths + 1;
}
