import React, { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Category from '../../Category/Category';

const Home = () => {
    // Set document title
    useEffect(() => {
        document.title = "Gadget Heaven || Home";
    }, []);

    // Load category data
    const loadCategory = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            {/* Banner Section */}
            <div className="h-[750px]">
                <Banner />
            </div>

            {/* Explore Gadgets Title */}
            <h1 className="text-center text-3xl font-bold my-12">
                Explore Cutting-Edge Gadgets
            </h1>

            {/* Category and Outlet Section */}
            <div className="w-full flex gap-4 my-12">
                {/* Category Sidebar */}
                <div className="w-2/12 mb-7">
                    <Category key={loadCategory.id} category={loadCategory} />
                </div>

                {/* Main Content (Outlet) */}
                <div className="w-10/12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
