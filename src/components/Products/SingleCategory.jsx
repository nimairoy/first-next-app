import Link from "next/link";

const SingleCategory = ({ category }) => {
    const { id, name } = category;
    return <Link href={`/products?categoryId=${id}`} className="border border-gray-400 p-4 rounded-lg">
        <h1 className="my-1">{name}</h1>
    </Link>;
};

export default SingleCategory;