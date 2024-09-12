import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getEkonomikCars } from "../../redux/carSlice"
import { getEkonomikCategory } from '../../redux/categorySlice'
import "../page/cardArac.css"
import Card from '../card/Card'

const KonforAraclar = () => {

    const dispatch = useDispatch();
    const { cars, carsState } = useSelector(state => state.cars)
    const { category, categoryState } = useSelector(state => state.category)


    useEffect(() => {
        dispatch(getEkonomikCars("konfor"))
        dispatch(getEkonomikCategory("konfor"))
    }, [dispatch])
    console.log(cars, "cars")
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

export default KonforAraclar