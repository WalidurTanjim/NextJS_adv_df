import React from 'react';
import {Product} from "@/app/types/product";
import ProductCard from "@/app/components/Products/ProductCard/page";

// getProducts
const getProducts = async(): Promise<Product[]> => {
    try{
        const res = await fetch(`http://localhost:5000/data`, {
            cache: "no-store"
        });

        if(!res.ok) {
            throw new Error("Failed to fetch products.");
        }

        return res.json();
    }catch(error) {
        console.error("An error occurred while fetching products:", error);
        throw error;
    }
}

const ProductsList = async() => {
    const products = await getProducts();

    return (
        <div className={`grid gap-5 grid-cols-4`}>
            {
                products?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
            }
        </div>
    );
};

export default ProductsList;