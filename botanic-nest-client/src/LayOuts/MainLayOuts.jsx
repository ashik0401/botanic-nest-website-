import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

const MainLayOuts = () => {
      const navigation = useNavigation();
    return (
        <div className="min-h-screen flex flex-col justify-between  bg-base-300">
            <Navbar />
            <main className="flex-grow ">
                {navigation.state === 'loading' ? <Loading /> : <Outlet />}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayOuts;