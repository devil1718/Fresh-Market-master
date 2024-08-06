import React, { useContext } from 'react';
import logo from '../../Assets/images/freshcart-logo.svg'
import Style from './Navbar.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useSelector } from 'react-redux';

export default function Navbar() {


    let { counter } = useSelector((state) => state.counter)


    console.log('this is ' + counter);

    let { userToken, setUserToken } = useContext(UserContext)
    let logOutNavegate = useNavigate()

    function logOut() {
        localStorage.removeItem('userToken');
        setUserToken(null);
        logOutNavegate('/login')
    }
    return (
        < >

            <nav className="navbar navbar-expand-lg   ">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {userToken !== null ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="cart">Cart</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="Products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="Categories">Categories</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="Brands">Brands</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="profile">Profile</NavLink>
                                </li>

                            </> : ''}



                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {userToken !== null ?
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="cart"><i class="fa-solid fa-cart-shopping"> {counter}</i></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link cursor-pointer" onClick={() => { logOut() }} to=""  >LogOut</span>
                                    </li>

                                </> :
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " aria-current="page" to="login">LogIn</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="register">Register</NavLink>
                                    </li>

                                </>}




                        </ul>

                    </div>

                </div>
            </nav>

        </>
    )
}
