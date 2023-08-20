import Container from "@/components/Container";
import GetSingleProduct from "@/utils/getSingleProduct";


const SingleProductDetailsPage = async({params}) => {
        const product = await GetSingleProduct(params.id)
    return (
        <Container>
            {product.title}
        </Container>
    );
};

export default SingleProductDetailsPage;