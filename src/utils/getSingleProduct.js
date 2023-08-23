import wait from "./wait";

const GetSingleProduct = async(id) => {
    await wait();
    const res = await fetch(`http://localhost:6000/products/${id}`,{
        cache: 'no-cache'
    });
    return res.json();
};

export default GetSingleProduct;