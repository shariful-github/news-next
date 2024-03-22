
import CategoryList from "@/components/ui/CategoryList";

const CategoriesLayout = ({ children }) => {

    return (
        <div className='grid grid-cols-12 px-28 my-5 gap-5'>
            <div className='col-span-3'>
                <CategoryList></CategoryList>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default CategoriesLayout;