import React, { useEffect, useState } from 'react';
import Style from './Categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCatecories, getSpecificCategory } from '../../Redux/CategoriesSice';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useNetwork from '../../Hooks/useNetwork';

export default function Categories() {
    let { categories, loading, isErorr } = useSelector((state) => state.categories)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCatecories())

    }, [])
    let detect = useNetwork()
   
    return (
        < >
            {loading ? <div className=' bg-dark loading '>
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
                <div className="row">
                    {categories.map((categoryCounter) => {
                        return <>

                            <div className="col-md-2">
                                <Link to={`/CategoriesFetuer/${categoryCounter._id}`}>
                                    <div className="bg-danger">
                                        <img className='w-100' height={300} src={categoryCounter.image} alt="" />
                                        <h4 className='h6 my-2'>{categoryCounter.name}</h4>
                                    </div>
                                </Link>


                            </div>



                        </>
                    })}

                </div>
            }
            {detect}
        </>
    )
}