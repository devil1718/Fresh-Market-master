import React, { useContext, useEffect } from 'react';
import Style from './Layout.module.css';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import { UserContext } from '../../Context/UserContext';
import { Offline, Online } from "react-detect-offline";
export default function Layout() {

    return (
        < >
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <div>
                {/* <Offline>
                    <div className="network">
                     <i className='fas fa-wifi'></i>  You are offline (surprise!)
                    </div>
                </Offline> */}
            </div>
            <Footer />
        </>
    )
}
