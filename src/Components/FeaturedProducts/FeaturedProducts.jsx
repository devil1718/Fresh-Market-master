import React, { useContext, useEffect, useState } from 'react';
import Style from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function FeaturedProducts() {
    let { addToCart } = useContext(CartContext)

    async function addProduct(productId) {
        let response = await addToCart(productId);
        if (response.data.status === 'success') {
            toast.success("successfully added to cart")
        }
        else {
            toast.error("Couldn't add to cart")
        }
        console.log(response);
    }

    const [showAll, setShowAll] = useState(false);
    function GetFeaturedProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
    let { data, isLoading, isError, isFetching } = useQuery('featuredProducts', GetFeaturedProducts, { cacheTime: 30000, })
    console.log(data?.data.data);

    const productsToDisplay = showAll ? data?.data.data : data?.data.data.slice(0, 30);

    return (
        < >
            {
                isLoading ?
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
                    </div> :
                    <div className="container py-2">
                        <h2 className='py-3'>Featured Products</h2>
                        <div className="row">
                            {productsToDisplay.map((counter) => {
                                return <div key={counter.id} className="col-md-2 ">

                                    <div className="product p-2 cursor-pointer ">
                                        <Link to={`/ProductDetails/${counter.id}`} >
                                            <img className='w-100' src={counter.imageCover} alt={counter.slug} />
                                            <span className='text-main font-sm fw-bold '>{counter.category.name}</span>
                                            <h3 className='h6 fw-bold font-sm '>{counter.title.split(" ").slice(0, 2).join(" ")}</h3>

                                            <div>
                                                <div className="d-flex justify-content-between "  >
                                                    <span>{counter.price} EGP</span>
                                                    <span><i className="fa-solid fa-star rating-color"></i> {counter.ratingsAverage}</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <button onClick={() => addProduct(counter.id)} className='btn  bg-main text-white w-100 btn-sm mt-2'> Add to cart</button>
                                    </div>


                                </div>
                            })}

                        </div>



                        {data?.data.data.length > 30 && (
                            <div className="text-center mt-3">
                                {showAll ? (<button className="btn bg-main text-white" onClick={() => setShowAll(false)}>
                                    Show less
                                </button>
                                ) : (
                                    <button className="btn bg-main text-white" onClick={() => setShowAll(true)}>
                                        Show more
                                    </button>
                                )}
                            </div>
                        )}

                    </div>
            }




        </>
    )
}

// const [ProductFeatured, setProduct] = useState([]);
// const [loading, setloading] = useState(false);

// async function GetFeaturedProducts() {
//     setloading(true)
//     let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
//     setProduct(data.data)
//     console.log(data.data);
//     setloading(false)


// }
// useEffect(() => { GetFeaturedProducts() }, [])
//this code with out using React-query