import axios from "axios";

const getCategoryNews = async (categoryId) => {
    const res = await axios.get(`http://localhost:5000/news?category=${categoryId}`, {
        cache: 'no-store'
    });
    return res.data.data;
};

export default getCategoryNews;