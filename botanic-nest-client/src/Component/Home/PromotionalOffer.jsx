import React from 'react';
import { Link } from 'react-router';

const PromotionalOffer = () => {
    return (
        <div className="bg-[#E6F4EA] my-10 py-10 px-4 md:px-20 text-center rounded-md  shadow  dark:text-black md:w-11/12 md:mx-auto mx-5">
            <h2 className="text-3xl font-bold text-[#689F38] mb-4">Limited Time Offer!</h2>
            <p className="text-lg mb-6">Get up to <span className="text-[#33691E] font-semibold">30% off</span> on all indoor plant kits. Perfect for home or office.</p>
            <Link to="/all-plants" className="btn bg-[#689F38] text-white px-6">Shop Now</Link>
        </div>
    );
};

export default PromotionalOffer;
