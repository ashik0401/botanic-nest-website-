import React from 'react';
import { FaLifeRing } from 'react-icons/fa';

const Support = () => {
    return (
        <div>
                <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <FaLifeRing className="text-4xl text-primary" />
        <h2 className="text-3xl font-bold">Support</h2>
        <p className="text-lg text-gray-600">
          Need help or have questions? Our support team is here for you 24/7. Reach out through email or live chat, and we’ll ensure you get the help you need promptly.
        </p>
        <a href="/contact" className="mt-6 btn btn-primary">Get Support</a>
      </div>
    </section>
        </div>
    );
};

export default Support;