import axios from "axios";
import { createContext, useState } from "react";

export let CartContext = createContext();
let headers = {
    token: localStorage.getItem('userToken')
}
 
function addToCart(productId) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId: productId},
    { headers: headers }).then((response) => response)
    .catch((error) => error)
}
function displayUserCart(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers: headers}).then((response) => response).catch((error) => error)
}
function removeCartItem(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers}).then((response) => response).catch((error) => error)
}
function updataCart(productId,count){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:count},{headers}).then((response) => response).catch((error) => error)
}
function clearCartData() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((response) => response).catch((error) => error)
}
export default function CartContextProvider(props) {
    return <CartContext.Provider value={{ addToCart,displayUserCart ,removeCartItem,updataCart,clearCartData}}>
        {props.children}
    </CartContext.Provider>
}