import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cardContext, wishListContext } from '../../Layout/LayOut';

const Nav = () => {
    const { pathname } = useLocation();
    const [card, setCard] = useContext(cardContext);
    const [wishList, setWishList] = useContext(wishListContext);

    const isSpecialPage = pathname === '/about' || pathname === '/Statistics' || pathname === '/dashboard';

    const renderNavLinks = (isSpecialPage) => {
        return (
            <ul className={`menu menu-horizontal space-x-12 ${isSpecialPage ? '' : 'text-white'} px-1`}>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'border-b-4 border-common' : 'hover:border-b-2 hover:border-common'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        isActive ? 'border-b-4 border-common' : 'hover:border-b-2 hover:border-common'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to='/Statistics'
                    className={({ isActive }) =>
                        isActive ? 'border-b-4 border-common' : 'hover:border-b-2 hover:border-common'
                    }
                >
                    Statistics
                </NavLink>
                <NavLink
                    to='/dashboard'
                    className={({ isActive }) =>
                        isActive ? 'border-b-4 border-common' : 'hover:border-b-2 hover:border-common'
                    }
                >
                    Dashboard
                </NavLink>
            </ul>
        );
    };

    const renderIcons = () => {
        return (
            <div className="navbar-end space-x-8 tex">
                <div className="relative">
                    <button className='h-10 w-10 bg-white rounded-full'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div className="absolute -top-1 -right-1">
                        <span>{card ?.length}</span>
                    </div>
                </div>
                <div className="relative">
                    <button className='h-10 w-10 bg-white rounded-full'>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <div className="absolute -top-1 -right-1">
                        <span>{wishList ?.length}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className={`navbar ${isSpecialPage ? 'rounded-t-lg' : 'mt-7 rounded-t-lg bg-common'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                    </div>
                    <Link to='/' className={`font-bold text-xl ${isSpecialPage ? '' : 'text-white'}`}>
                        Gadget Heaven
                    </Link>
                </div>
                <div className={`navbar-center hidden lg:flex`}>
                    {renderNavLinks(isSpecialPage)}
                </div>
                {renderIcons()}
            </div>
        </div>
    );
};

export default Nav;
