import React from 'react';
import Navbar from '../../Home/NaveBar/NaveBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;