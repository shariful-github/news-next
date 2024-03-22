import axios from "axios";

const getNewsById = async (newsId) => {
    const res = await axios.get(`https://news-next-server.vercel.app/news/${newsId}`, {
        cache: 'no-store'
    });
    return res.data.news;
};

export default getNewsById;