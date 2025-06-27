import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import userImage from '../assets/image.png';
import { AuthContext } from '../Context/AuthContext';
import Loading from './Loading';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const [isClickOpen, setIsClickOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsClickOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setIsClickOpen(false);
    };

    const handleLogOut = () => {
        setIsClickOpen(false);
        logOut().then(() => navigate('/')).catch((error) => console.error("Error logging out: ", error));
    };

    const handleClick = () => {
        setIsClickOpen(prev => !prev);
    };

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                    to="/"
                    onClick={handleLinkClick}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                    to="/all-plants"
                    onClick={handleLinkClick}
                >
                    All Plants
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                    to="/aboutUs"
                    onClick={handleLinkClick}
                >
                    AboutUs
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                    to="/contact"
                    onClick={handleLinkClick}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                    to="/support"
                    onClick={handleLinkClick}
                >
                    Support
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink
                        className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                        to="/add-plants"
                        onClick={handleLinkClick}
                    >
                        Add Plant
                    </NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink
                        className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                        to="/my-plants"
                        onClick={handleLinkClick}
                    >
                        My Plants
                    </NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink
                        className={({ isActive }) => `m-2 ${isActive ? 'underline' : ''} font-bold`}
                        to="/dashboard"
                        onClick={handleLinkClick}
                    >
                        Dashboard
                    </NavLink>
                </li>
            }
        </>
    );

    return (
        <div className='sticky top-0 z-100 bg-[#8BC34A] '>
            <div className="navbar h-15 lg:w-11/12 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#689F38] rounded-box z-1 mt-3 w-30 p-2 shadow">
                            {links}
                        </ul>
                    </div>



                    <div className="flex gap-1  items-center">
                        <img className="w-14" src={logo} alt="logo" />
                        <Link to="/" className="text-3xl font-bold  hidden md:block new">BotanicNest</Link>
                    </div>
                </div>

                <div className=" lg:block hidden">
                    <ul className="flex items-center justify-center ">{links}</ul>
                </div>

                <div className="gap-2 flex items-center">
                    <ThemeToggle />
                    {loading ? <Loading /> : (
                        user ? (
                            <div ref={dropdownRef} className="relative inline-block">
                                <div
                                    className="cursor-pointer border-none bg-transparent"
                                    onClick={handleClick}
                                    data-tooltip-id="profile-tooltip"
                                    data-tooltip-content={!isClickOpen ? `${user.displayName || 'No Name'}\n${user.email}` : ''}
                                    data-tooltip-place="bottom"
                                >
                                    <img className="w-10 h-10 object-cover rounded-full" src={user.photoURL || userImage} alt="User" />
                                </div>
                                <div className='hidden md:block'>
                                    {!isClickOpen && (
                                        <Tooltip
                                            id="profile-tooltip"
                                            place="bottom"
                                            positionStrategy="fixed"
                                            popperOptions={{
                                                modifiers: [
                                                    { name: 'flip', enabled: false },
                                                    { name: 'preventOverflow', options: { boundary: 'viewport' } },
                                                ],
                                            }}
                                            style={{ whiteSpace: 'pre-line', zIndex: 9999 }}
                                        />
                                    )}
                                </div>

                                {isClickOpen && (
                                    <div className="absolute right-0 mt-3 p-2 shadow rounded-box font-bold min-w-40 z-50 bg-[#8BC34A]">
                                        <h2 className="text-base font-semibold">{user.displayName || 'No Name'}</h2>
                                        <p className="text-sm">{user.email}</p>
                                       <div className=' '>
                                        
                                        <button
                                            onClick={handleLogOut}
                                            className="btn shadow-none border-gray-500 text-red-600 bg-transparent font-semibold text-center cursor-pointer w-full border "
                                        >
                                            Log Out
                                        </button>
                                       </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="space-x-2 flex items-center">
                                <Link to="/login" className="btn shadow-none border-none bg-[#689F38]">Log-In</Link>
                                <div className="hidden md:block">
                                    <Link to="/register" className="btn shadow-none border-none bg-[#689F38]">Register</Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
