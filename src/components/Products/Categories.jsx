import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";


const Categories = async() => {

    const categories = await getAllCategories();


    return (
        <div>
            {
                categories.map((category)=> <SingleCategory key={category.id} category={category} /> )
            }
        </div>
    );
};

export default Categories;