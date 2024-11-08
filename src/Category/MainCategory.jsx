import React from 'react';
import { NavLink } from 'react-router-dom';

const MainCategory = ({ category }) => {
    return (
        <div className="main-category">

            {/* Link to individual category */}
            <NavLink
                to={`/category/${category.category}`}
                className={({ isActive }) =>
                    `rounded-xl px-3 py-2 w-full block ${
                    isActive ? 'bg-common text-white' : 'bg-[#09080F0D] hover:bg-common hover:text-white'
                    }`
                }
            >
                {category.category}
            </NavLink>
        </div>
    );
};

export default MainCategory;
