import Container from "@/components/Container";
import PopularProducts from "@/components/PopularProducts";
import Categories from "@/components/Products/Categories";
import SingleProduct from "@/components/Products/SingleProduct";
import getAllProducts from "@/utils/getAllProducts";
import { Suspense } from "react";


export const revalidate = 5;

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryId);

    return (
        <div className="py-12">
            <Container>
                <div className="">
                    <div className="">
                        <Categories />
                        <Suspense fallback={<h3 className="text-center text-3xl font-semibold mt-5">Loading.....</h3>}>
                            <PopularProducts />
                        </Suspense>
                    </div>
                    <div className=" mt-8">
                        {
                            products.map(product => <SingleProduct product={product} key={product.id} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductsPage;