
import React, { useContext, useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import { CirclesWithBar } from 'react-loader-spinner';

export default function Cart() {
    const { displayUserCart, removeCartItem, updataCart, clearCartData } = useContext(CartContext);
    const [cartDetails, setCartDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getUserCart() {

        setLoading(true); // Set loading to true before fetching user cart
        const { data } = await displayUserCart();
        setCartDetails(data);
        setLoading(false);
    }

    async function removeItem(id) {

        setLoading(true); // Set loading to true before removing item
        const { data } = await removeCartItem(id);
        setCartDetails(data);
        setLoading(false);

    }

    async function updataCartQuantity(id, count) {


        const { data } = await updataCart(id, count);
        setCartDetails(data);


    }

    async function clearCart() {

        setLoading(true); // Set loading to true before clearing cart
        const { data } = await clearCartData();
        setCartDetails(null);
        console.log('Cart cleared successfully.');
        setLoading(false);
    }

    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <>
            <h1>Cart</h1>
            {loading ? (
                <div className='w-100 d-flex justify-content-center py-5'>
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        outerCircleColor=""
                        innerCircleColor=""
                        barColor=""
                        ariaLabel='circles-with-bar-loading'
                    />
                </div>
            ) : (
                cartDetails ? (
                    <div className='w-75 my-3 mx-auto p-3 bg-main-light'>
                        <h3>Shopping Cart</h3>
                        <h4 className='h6 text-main fw-bolder'>Cart Item: {cartDetails.numOfCartItems}</h4>
                        <h4 className='h6 text-main fw-bolder'>Total Price: {cartDetails.data.totalCartPrice}</h4>
                        {cartDetails.data.products.map((product) => (
                            <div key={product.product.id} className="row border-bottom py-2 px-3">
                                <div className="col-md-1">
                                    <img className='w-100' src={product.product.imageCover} alt="" />
                                </div>
                                <div className="col-md-11">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className='h6'>{product.product.title.split(" ").slice(0, 2).join(" ")}</h3>
                                            <h6 className='text-main'>Price: {product.price}EGP</h6>
                                        </div>
                                        <div>
                                            <button onClick={() => updataCartQuantity(product.product.id, product.count + 1)} className='btn border-main p-1'>+</button>
                                            <span className='mx-2 fw-bold'>{product.count}</span>
                                            <button onClick={() => updataCartQuantity(product.product.id, product.count - 1)} className='btn border-main p-1'>-</button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItem(product.product.id)} className='btn p-0'>
                                        <i className='fas fa-trash-can text-danger'></i> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button className='btn  bg-main m-3 px-2 text-white  '>Online Payment</button>
                        <button className='btn  bg-main m-3  px-2 text-white  '>Cash On Delivery</button>
                        <button onClick={() => clearCart()} className='btn text-white  bg-main m-3'>Clear</button>
                    </div>
                ) : (
                    <div className="row border-bottom py-2 px-3">
                        <h4 className='h6 text-main fw-bolder'>Cart Item: 0</h4>
                        <h4 className='h6 text-main fw-bolder'>Total Price: 0</h4>
                    </div>
                )
            )}
        </>
    );
}
