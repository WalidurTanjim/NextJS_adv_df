import React, {Suspense} from 'react';
import ProductsList from "@/app/components/Products/ProductsList/page";

const ProductsPage = () => {
    return (
        <div className={`products-page p-5`}>
            <h1 className={`text-2xl text-center font-medium py-10`}>Products</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Products is loading...</p>}>
                <ProductsList />
            </Suspense>
        </div>
    );
};

export default ProductsPage;