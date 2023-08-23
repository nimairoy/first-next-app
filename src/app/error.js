'use client'

import { useEffect } from "react";

const ProductError = ({ error, reset }) => {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div>
            <h2 className="text-2xl font-semibold">
                {error.message || 'Something went wrong'}
            </h2>
            <button onClick={()=>reset()} className="border border-slate-400 rounded-lg p-3">Reset</button>
        </div>
    );
};

export default ProductError;