import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  
        p-15">
            <aside>
                <div className="flex flex-col md:flex-row gap-1 items-center">
                    <img className="w-14" src={logo} alt="logo" />
                    <Link to="/" className="text-3xl font-bold text-[#8BC34A] new">BotaniNest</Link>
                </div>
                <p className="font-bold">

                    <span className='text-lg'>Contact us at</span> <br /> <a href="">support@example.com</a> | <a href="">Privacy Policy </a>| <a href="">Terms of Service</a>


                </p>

                <div className="flex gap-4 p-2">

                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <FaFacebookF className="text-white text-xl" />
                    </a>

                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <FaXTwitter className="text-white text-xl" />
                    </a>


                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <FaLinkedinIn className="text-white text-xl" />
                    </a>

                    
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;