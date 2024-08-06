import React, { useEffect } from 'react';
import Style from './CategoriesDeteilas.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificCategory } from '../../Redux/CategoriesSice';
import { useParams } from 'react-router-dom';
export default function CategoriesDeteilas() {
    let {ProductCtegory} = useSelector((state) => state.categories)
     
    let param = useParams()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpecificCategory(param.id))
    }, [])
    return (
        < >
            <h1>deteDeteilas</h1>
            <h4>{ProductCtegory.name}</h4>
            
        </>
    )
}
