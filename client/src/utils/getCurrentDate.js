export function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-us', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
}