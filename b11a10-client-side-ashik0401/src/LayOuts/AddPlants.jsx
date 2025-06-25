

import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const AddPlants = () => {
    return (
             <div >
            <header>
                <Navbar/>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default AddPlants;