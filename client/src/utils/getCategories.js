import axios from 'axios';

const getCategories = async () => {
    const res = await axios.get('https://news-next-server.vercel.app/categories');
    return res.data.data[0].data;
};

export default getCategories;