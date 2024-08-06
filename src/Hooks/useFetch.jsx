import React, { useEffect, useState } from 'react'
 
import axios from 'axios';

export default function useFetch() {
    const [allData, setallData] = useState()
    async function getAllDataFormApi() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        
        setallData(data.data)
    }
    useEffect(() => {
        getAllDataFormApi();
        console.log(allData );
    }, [])
    return {allData}
}
