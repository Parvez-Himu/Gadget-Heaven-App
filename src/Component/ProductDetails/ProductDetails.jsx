import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { cardContext, wishListContext } from '../../Layout/LayOut';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    useEffect(() => {
        document.title = 'Gadget Heaven || Details';
    }, []);

    const { name } = useParams();
    const loadProduct = useLoaderData();
    const [product, setProduct] = useState(null);
    const [card, setCard] = useContext(cardContext);
    const [wishList, setWishList] = useContext(wishListContext);
    const [active, setActive] = useState({ status: 'notDisable' });
    const navigate = useNavigate();

    // Find product by name
    useEffect(() => {
        const filterData = loadProduct.find(product => product.title === name);
        setProduct(filterData);
    }, [loadProduct, name]);

    // Check if product is in wishlist
    useEffect(() => {
        if (product) {
            const isWishList = wishList.find(item => item.id === product.id);
            setActive({ status: isWishList ? 'disable' : 'notDisable' });
        }
    }, [wishList, product]);

    const handleCardAdd = (item) => {
        const newCard = [...card, item];
        const findData = card.find(card => card.id === item.id);

        if (item.availability) {
            if (!findData) {
                setCard(newCard);
                toast.success('Successfully added to cart', { position: 'top-left' });
            } else {
                toast.error('This product is already in the cart', { position: 'top-left' });
            }
        } else {
            toast.error('This product is out of stock', { position: 'top-left' });
        }
    };

    const handleWishlist = (item) => {
        const findData = wishList.find(product => product.id === item.id);
        if (!findData) {
            setWishList([...wishList, item]);
            toast.success('Successfully added to wishlist', { position: 'top-left' });
        }
    };

    if (!product) {
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>;
    }

    const { rating, availability, Specification, description, price, product_image, title } = product;

    const reactRating = {
        size: 30,
        value: rating,
        edit: false,
        isHalf: true,
    };

    return (
        <div>
            {/* Product Header */}
            <div className="mb-12 relative">
                <div className="bg-common">
                    <div className="w-7/12 mx-auto text-center pt-12 pb-40">
                        <h1 className="text-4xl font-bold text-white">Product Details</h1>
                        <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>

                {/* Product Information */}
                <div className="bg-white w-10/12 shadow-xl mx-auto rounded-lg top-2/3 left-1/2 transform -translate-x-1/2 absolute">
                    <div className="flex items-center gap-10 p-5">
                        {/* Product Image */}
                        <div className="rounded-lg">
                            <img className="h-[500px] w-[600px] rounded-lg" src={product_image} alt={title} />
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <h1 className="text-2xl font-bold">{title}</h1>
                            <p className="text-lg">Price: ${price}</p>

                            {/* Availability Status */}
                            <div>
                                {availability ? (
                                    <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center">In Stock</h1>
                                ) : (
                                        <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-red-500 text-red-500 text-center">Out of Stock</h1>
                                    )}
                            </div>

                            <p className="text-[#09080F99]">{description}</p>

                            {/* Specifications */}
                            <div>
                                <h1>Specification:</h1>
                                {Specification ?.map((spi, index) => (
                                    <h1 className="text-[#09080F99]" key={index}>({index + 1}) {spi}</h1>
                                ))}
                            </div>

                            {/* Rating */}
                            <div>
                                <h1>Rating <span><i className="fa-solid fa-square"></i></span></h1>
                                <div className="flex items-center space-x-10">
                                    <ReactStars {...reactRating} />
                                    <h1 className="bg-gray-100 p-2 rounded-full">{rating}</h1>
                                </div>
                            </div>

                            {/* Add to Cart and Wishlist Buttons */}
                            <div className="flex space-x-14">
                                <button onClick={() => { handleCardAdd(product); navigate(-1); }} className="space-x-4 bg-common px-4 text-white rounded-full">
                                    <span>Add To Cart</span>
                                    <span><i className="fa-solid fa-cart-arrow-down"></i></span>
                                </button>
                                <button
                                    disabled={active.status === 'disable'}
                                    onClick={() => handleWishlist(product)}
                                    className={`h-10 w-10 ${active.status === 'disable' ? 'bg-gray-400' : 'bg-rose-500'} text-white rounded-full flex items-center justify-center`}>
                                    <span><i className="fa-regular fa-heart"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
