import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import carSlice, { getEkonomikCars } from "../../redux/carSlice";
import { getEkonomikCategory } from '../../redux/categorySlice';
import Card from '../card/Card';
import FilterPanel from '../Filtred/FİltrePanel';
import "../page/cardArac.css";

const Araclar = () => {
    const { category } = useParams();
    const [vites, setVites] = useState([]);
    const [tedarikci, setTedarikci] = useState([]);
    const dispatch = useDispatch();
    const { cars, carsState } = useSelector(state => state.cars);
    const { category: categoryData, categoryState } = useSelector(state => state.category);
    console.log(category, "dsa1")
    useEffect(() => {
        console.log(category, "dsa2")
        dispatch(getEkonomikCars(category));
        console.log(category, "dsa3")
        console.log(categoryData, "catee")
        dispatch(getEkonomikCategory(category));
    }, [dispatch, category]);
    console.log(carSlice, "cars")
    const vitesOptions = [
        { name: "Otomatik", count: 20 },
        { name: "Manuel", count: 4 },
    ];

    const tedarikciOptions = [
        { name: "Avis", count: 9 },
        { name: "Budget", count: 3 },
        { name: "QCar", count: 3 },
        { name: "Wish", count: 9 },
    ];
    return (
        <div className='container flex  items-start'>
            <div className='car-grid '>
                {
                    cars.map((car, index) => (
                        <Card key={index} category={categoryData} car={car} />
                    ))
                }
            </div>
            <FilterPanel/>
            {/* <div className='card-filtre  border  border-yellow-400  shadow-lg rounded-md' >
                <h2 className='font-bold'>Filtrele</h2>
            </div> */}
        </div>
    );
};

export default Araclar;
