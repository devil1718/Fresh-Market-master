import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Style from './Barnds.module.css';
import Count from './Count';
import { all, axios } from 'axios';
import useFetch from '../../Hooks/useFetch';
import { CirclesWithBar } from 'react-loader-spinner';
export default function Barnds() {
    // let [count1, setCount1] = useState(0)
    // let [count2, setCount2] = useState(0)
    // let isEven =useMemo(()=>{//this for handel function to increase performance of React component
    //     console.log("hello from even function");
    //     return count2 % 2 == 0
    // },[count2])
    // function getCount1() {
    //     setCount1(count1 + 1)
    // }
    // function getCount2() {
    //     setCount2(count2 + 1)
    // }
    // const [name, setName] = useState("Nour")
    // let getCount = useCallback(() => {
    //     return count1 + 1
    // }, [count1])

    // let myref = useRef("test")
    // useEffect(() => {
    //     console.log(myref);
    //     myref.current.focus()

    // }, [])
    let { allData } = useFetch()
    let data=allData

    console.log(allData);
    return (
        < >
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Counter 1 ({count1})</h2>
                        <button className='btn btn-info ' onClick={getCount1}>
                            Counter1 +
                        </button>
                    </div>
                    <div className="col-md-6">
                        <h2>Counter 2 ({count2})</h2>
                        <h3>{isEven ? "Even" : "odd"}</h3>
                        <button className='btn btn-info' onClick={getCount2}>
                            Counter2 +
                        </button>
                    </div>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <input ref={myref} type="text" className=' input-group' value={count1} onChange={(e) => { setCount1(e.target.value) }} />
                    <h2>Count{count1}</h2>
                    <h3>{name}</h3>
                    <button className='btn btn-info' onClick={() => { setName("sara man") }}> Change Name</button>
                    <Count getCount={getCount} />
                </div>
            </div> */}
            {!allData 
             ? 
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
                    </div> :  <div className="row">
                            {data.map((counter) => {
                                return <div key={counter.id} className="col-md-2 ">

                                    <h2>{counter.name}</h2>

                                </div>
                            })}

                        </div>
            }
            
        </>
    )
}
