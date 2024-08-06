import React from 'react';
import Style from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase,increaseByAmount } from '../../Redux/CounterSlies';
export default function Products(props) {
    let {counter}=useSelector((state)=>state.counter)
 let dispatch=  useDispatch()//dispatch the incressing event
    return (
        < >
            <h1>counter = {counter}</h1>
            <button onClick={()=>dispatch(increase())} className="btn btn-info"> increase</button>
            <button onClick={()=>dispatch(decrease())} className="btn btn-info"> decrease</button>
            <button onClick={()=>dispatch(increaseByAmount(50))} className="btn btn-info"> increaseByAmount</button>
        </>
    )
}
