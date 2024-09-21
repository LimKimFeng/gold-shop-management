import React from "react";
import { Outlet } from 'react-router-dom';
import '../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import '../assets/bootstrap-5.3.3-dist/js/bootstrap.bundle.js';
import '../assets/custom.css';
import Navbar from './Navbar'


const Dashboard = () => {
    return (

        <div className="container">
            <Navbar />

            <div>
                <Outlet />
            </div>

        </div>

    );
};


export default Dashboard;