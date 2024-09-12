import React, { memo, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableCar } from '../../../redux/carSlice';

const DevamButton = ({ carId, category }) => {
    // const dispatch = useDispatch();
    // const { availableCars, availableCarsState } = useSelector(state => state.cars);
    // useEffect(() => {
    //     dispatch(fetchAvailableCar({ kategori: { category }, carId: { carId } }))
    // })
    // console.log(availableCars.plakaNo, "availableCars")
    console.log()
    return (
        <div>
            <button className='btn flex font-semibold items-center gap-3 bg-yellow-400 rounded-md p-3 px-8 hover:bg-black'>
                Devam Et
                <FaChevronRight />
            </button>
        </div>
    )
}

export default memo(DevamButton)