import React from 'react';
import { useState,useEffect} from 'react';
import {Row , Col} from 'react-bootstrap'
import Restaurants from './Restaurants';
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'

export default function Home() {

    const dispatch=useDispatch();
    const restaurantReducer=useSelector(state =>state.restaurantReducer)
    const {restaurants}=restaurantReducer



    // const[hotels,setHotels]=useState([])
    useEffect(()=>{
        // const fetchData=async ()=>{
        //     await fetch('/restaurants.json')
        //     .then((res)=>res.json())
        //     .then((data)=>setHotels(data.restaurants))
        // }
        // fetchData();

        dispatch(listRestaurants())
    },[])
    // console.log(hotels);
    return (
        <>
            {restaurants ?(
                <Row>
                    {restaurants.map(item=>(
                        <Col sm={12} md={8} lg={6} xl={3}>
                            {/* <p>{item.name}</p> */}
                            <Restaurants item={item}/>
                        </Col>
                    ))}
                </Row>
            ):"null"}
            
        </>
    )
}
