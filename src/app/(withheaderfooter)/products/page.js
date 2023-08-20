import Container from "@/components/Container";
import Categories from "@/components/Products/Categories";
import SingleProduct from "@/components/Products/SingleProduct";
import getAllProducts from "@/utils/getAllProducts";


const ProductsPage = async({searchParams}) => {
    const products = await getAllProducts(searchParams.categoryId);
    return (
        <div className="py-12">
            <Container>
                <div className="flex">
                    <div className="w-1/4">
                    <Categories />
                    </div>
                    <div className="w-3/4">
                        {
                            products.map(product => <SingleProduct product={product} key={product.id}/>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductsPage;