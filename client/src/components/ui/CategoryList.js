import getCategories from "@/utils/getCategories";
import { Button } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {

    const categories = await getCategories();

    return (
        <div className="bg-gray-100 p-5">
            <h3 className="border-b-2 border-b-gray-400 text-xl font-bold text-gray-700 pb-1 mb-3">Categories</h3>
            {categories.map(category =>
                <Link href={category.title.toLowerCase()} key={category.id}>
                    <Button className="block w-full mb-2" variant="outlined">{category.title}</Button>
                </Link>
            )}
        </div>
    );
};

export default CategoryList;