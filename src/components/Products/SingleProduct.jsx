import Link from "next/link";

const SingleProduct = ({product}) => {
    const {id, title} = product;
    return (
        <div>
            <Link href={`/products/${id}`}>{title}</Link>
        </div>
    );
};

export default SingleProduct;