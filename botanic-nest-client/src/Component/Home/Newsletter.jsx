import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#F1F8E9] md:w-11/12 mx-auto py-12 px-4 md:px-20 text-center rounded-b-md shadow-md  dark:text-black">
      <h2 className="text-3xl font-bold text-[#689F38] mb-3">Stay Updated</h2>
      <p className="text-base mb-6">Subscribe to our newsletter for the latest plant care tips, offers, and inspiration.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-2/3 focus:outline-none"
        />
        <button className="btn bg-[#689F38] text-white px-6 w-full sm:w-auto">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
