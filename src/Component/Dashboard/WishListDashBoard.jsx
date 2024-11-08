import React, { useContext } from 'react';
import { wishListContext } from '../../Layout/LayOut';
import { toast } from 'react-hot-toast';

const WishListDashBoard = () => {
    const [wishList, setWishList] = useContext(wishListContext);

    // Handle removal of item from wishlist
    const handleWishListRemove = (id) => {
        const filteredData = wishList.filter(item => item.id !== id);
        setWishList(filteredData);
        toast.success('Successfully Deleted', { position: 'top-center' });
    };

    // Render Wishlist or 'No Wishlist Found' message
    return (
        <div>
            {/* Conditional rendering when wishlist is empty */}
            {wishList.length < 1 && (
                <h1 className='text-center h-[300px] flex justify-center items-center text-5xl font-extrabold'>
                    <span>WishList Not Found</span>
                    <span><i className="fa-solid fa-heart-circle-exclamation"></i></span>
                </h1>
            )}

            {/* Rendering wishlist items */}
            <div className="space-y-5 w-full mx-auto">
                {wishList.map((item) => (
                    <div key={item.id} className='flex justify-between items-center border p-6 rounded-2xl shadow-xl bg-white'>
                        {/* Product Image */}
                        <div>
                            <img className='w-[200px] h-[125px] rounded-lg' src={item.product_image} alt={item.title} />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow pl-5">
                            <h1 className='text-xl font-semibold'>{item.title}</h1>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                            <h3 className='text-lg font-bold text-gray-800'>Price: ${item.price}</h3>
                        </div>

                        {/* Remove from Wishlist Button */}
                        <div
                            onClick={() => handleWishListRemove(item.id)}
                            className="text-red-500 cursor-pointer hover:text-red-700 text-2xl"
                        >
                            <span><i className="fa-regular fa-circle-xmark"></i></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishListDashBoard;
