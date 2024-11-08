import React from 'react';
import error from './Ghost.png';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-[#1e0235] min-h-screen flex flex-col justify-center items-center">
            <img className="h-[300px] mb-6" src={error} alt="Error ghost" />
            <Link to="/">
                <button className="outline text-white text-xl py-1 px-5 outline-white rounded-full">
                    Back Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
