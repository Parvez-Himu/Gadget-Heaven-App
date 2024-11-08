import React, { createContext, useState } from 'react';
import Nav from '../Component/Common/Nav';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Component/Common/Footer';
import { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';

// Create contexts
export const cardContext = createContext(null);
export const wishListContext = createContext(null);

const LayOut = () => {
    // State hooks for card and wishlist
    const [card, setCard] = useState([]);
    const [wishList, setWishList] = useState([]);

    // Get the navigation status from react-router
    const navigation = useNavigation();

    return (
        <wishListContext.Provider value={[wishList, setWishList]}>
            <cardContext.Provider value={[card, setCard]}>
                <div>
                    <Toaster position="top-right" />
                    <Nav />

                    {/* Loader Spinner: Show when navigating */}
                    {navigation.state === 'loading' && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex justify-center items-center z-50">
                            <Audio height="80" width="80" color="white" ariaLabel="loading" />
                        </div>
                    )}

                    {/* Main content area */}
                    <div className="min-h-[calc(100vh-285px)] bg-gray-100">
                        <Outlet />
                    </div>

                    <Footer />
                </div>
            </cardContext.Provider>
        </wishListContext.Provider>
    );
};

export default LayOut;
