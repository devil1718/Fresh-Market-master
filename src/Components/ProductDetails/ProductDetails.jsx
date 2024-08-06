import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CirclesWithBar, InfinitySpin } from 'react-loader-spinner';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function ProductDetails() {
    let { addToCart } = useContext(CartContext)

    async function addProduct(productId) {
        let response = await addToCart(productId);
        if(response.data.status === 'success') {
            toast.success("successfully added to cart")
        }
        else{
            toast.error("Couldn't add to cart")
        }
        console.log(response);
    }

    let params = useParams();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    function getProductDetails(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
    let { data, isLoading, isError, isFetching } = useQuery('ProductDetails', () => getProductDetails(params.id), { cacheTime: 0, })
    console.log(data?.data.data);
    let product = data?.data.data
    console.log(product);
    return (
        < >
            <h1>Welcome</h1>
            {isLoading ?
                <div className='w-100 d-flex justify-content-center py-5'>
                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />
                </div> :
                <div >
                    {product ? <div key={product.id} className='row align-items-center py-2'>
                        <Helmet>

                            <title>{product.title}</title>

                        </Helmet>
                        <div className="col-md-3">
                            <Slider {...settings}>
                                {product.images.map((counter) => <img src={counter} key={product.id}  className='w-100' alt="" />)}
                            </Slider>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <h2 className='h5'>{product.title}</h2>
                                <p className='ms-3'>{product.description}</p>
                                <h3 className='h5 text-main'>{product.category.name}</h3>
                                <div className='d-flex justify-content-between mt-4'>
                                    <h2 className='h5'> {product.price} EGP</h2>
                                    <span > {product.ratingsAverage} <i className="fa-solid fa-star rating-color"></i></span>
                                </div>
                                <button onClick={() => addProduct(product.id)} className=' btn w-100 text-white bg-main '>Add to cart</button>
                            </div>
                        </div>
                    </div> : ''}

                </div>}

        </>
    )
}
