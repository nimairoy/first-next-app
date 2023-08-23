import wait from "@/utils/wait";


const PopularProducts = async() => {
    await wait();
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold mt-5">Popular Products</h3>
        </div>
    );
};

export default PopularProducts;