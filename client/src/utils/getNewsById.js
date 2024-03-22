import axios from "axios";

const getNewsById = async (newsId) => {
    const res = await axios.get(`http://localhost:5000/news/${newsId}`, {
        cache: 'no-store'
    });
    return res.data.news;
};

export default getNewsById;