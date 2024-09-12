import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getEkonomikCars } from "../../redux/carSlice"
import { getEkonomikCategory } from '../../redux/categorySlice'
import Card from "../card/Card"
import "../page/cardArac.css"

const EkonomikAraclar = () => {

    const dispatch = useDispatch();
    const { cars, carsState } = useSelector(state => state.cars)
    const { category, categoryState } = useSelector(state => state.category)


    useEffect(() => {
        dispatch(getEkonomikCars("ekonomik"))
        dispatch(getEkonomikCategory("ekonomik"))
    }, [dispatch])

    console.log(category,"category")

    return (


        <div className='container'>
            <div className='car-grid'>
                {
                    cars.map((car, index) => (
                        <Card key={index} category={category} car={car} />
                    ))
                }
            </div>
        </div>
    );
}

export default EkonomikAraclar