import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between  bg-base-300">
            
            <main className="flex-grow ">
                {navigation.state === 'loading' ? <Loading /> : <Outlet />}
            </main>
            
        </div>
    );
};

export default DashboardLayout;