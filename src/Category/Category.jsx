import React from 'react';
import { NavLink } from 'react-router-dom';
import MainCategory from './MainCategory';

const Category = ({ category }) => {
    // Log category data for debugging
    console.log(category);

    return (
        <div className="category-container">
            <div className="shadow-2xl bg-white p-4 space-y-4 rounded-lg">

                {/* Link to show all categories */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `rounded-xl px-3 py-2 w-full block ${isActive ? "bg-common text-white" : 'bg-[#09080F0D]'}`
                    }
                >
                    All
                </NavLink>

                {/* Render each category using MainCategory component */}
                {category.map(cat => (
                    <MainCategory key={cat.id} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default Category;
