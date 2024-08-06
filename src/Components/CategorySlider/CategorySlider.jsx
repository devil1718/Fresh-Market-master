import React from 'react';
import Style from './CategorySlider.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import { CirclesWithBar, ThreeDots } from 'react-loader-spinner';
export default function CategorySlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    function getCategorySlider() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    let { data } = useQuery("categorySliderModule", getCategorySlider, { cacheTime: 30000, })
    console.log(data?.data.data, "slider");
    let categorySlider = data?.data.data;
    return (
        < >


            {categorySlider ? <Slider {...settings}>
                {categorySlider.map((counter) => <div key={counter._id}>
                    <img height={250} src={counter.image} className='w-100 p-2' alt="" />
                    <h2 className='h4'> {counter.name}</h2>
                </div>)}
            </Slider> : ''}
        </>
    )
}
