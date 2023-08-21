import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";


const Categories = async() => {

    const categories = await getAllCategories();


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
            {
                categories.map((category)=> <SingleCategory key={category.id} category={category} /> )
            }
        </div>
    );
};

export default Categories;