import Link from "next/link";

const SingleCategory = ({ category }) => {
    const { id, name } = category;
    return <Link href={`/products?categoryId=${id}`}>
        <h1 className="my-1">{name}</h1>
    </Link>;
};

export default SingleCategory;