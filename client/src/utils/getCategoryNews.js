import axios from "axios";

const getCategoryNews = async (categoryId) => {
    const res = await axios.get(`https://news-next-server.vercel.app/news?category=${categoryId}`, {
        cache: 'no-store'
    });
    return res.data.data;
};

export default getCategoryNews;