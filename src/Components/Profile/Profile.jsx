import React, { useContext, useEffect } from 'react';
import Style from './Profile.module.css';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../../Context/UserContext';
export default function Profile() {
    let { userData } = useContext(UserContext)
    let encoded = localStorage.getItem('userToken')
    let decode = jwtDecode(encoded);

    return (
        < >
            <h1>Welcome    {decode.name}</h1>
            <h1>Welcome    {userData?.email}</h1>


        </>
    )
}
