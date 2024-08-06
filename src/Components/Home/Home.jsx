import React from 'react';
import Style from './Home.module.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';
import useNetwork from '../../Hooks/useNetwork';




export default function Home() {

    let detect =useNetwork()

    return (
        < >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <MainSlider />
            {detect}

            <CategorySlider />
            <FeaturedProducts />

        </>
    )
}
