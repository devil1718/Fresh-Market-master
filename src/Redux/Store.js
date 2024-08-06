import { configureStore } from '@reduxjs/toolkit'
import { counterreducer } from './CounterSlies';
import { categoriesReducer } from './CategoriesSice';
//Store waiting for reducer

export let mtore =configureStore({
    reducer:{
            counter:counterreducer,
            categories:categoriesReducer
    }
});