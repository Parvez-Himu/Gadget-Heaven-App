import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Product = () => {
    // Load product data
    const loadProduct = useLoaderData();

    // Retrieve category name from URL parameters
    const { name } = useParams();

    // State to manage products based on the category
    const [products, setProducts] = useState(loadProduct);

    // Filter products based on category
    useEffect(() => {
        if (name) {
            const filteredProducts = loadProduct.filter(product => product.category === name);
            setProducts(filteredProducts);
        } else {
            setProducts(loadProduct);
        }
    }, [loadProduct, name]); // Dependency array includes loadProduct and name to update whenever they change

    return (
        <div className="pb-12">
            {/* Display message if no products found */}
            {products.length < 1 ? (
                <h1 className="text-center text-6xl h-[320px] flex justify-center items-center">
                    No Products Found <span><i className="fa-solid fa-ban"></i></span>
                </h1>
            ) : (
                    // Display products in grid layout if products are available
                    <div className="grid grid-cols-3 gap-5">
                        {products.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                )}
        </div>
    );
};

export default Product;
