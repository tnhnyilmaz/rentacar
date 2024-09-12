import React, { useState } from "react";
import "../Filtred/FiltredPanel.css";
import FiltreDropDown from "./FiltreDropDown";
import { count } from "firebase/firestore";

const FilterPanel = () => {
    const [isVitesOpen, setIsVitesOpen] = useState(false);
    const [selectedVites, setSelectedVites] = useState([]);

    const [isFuelOpen, setIsFuelOpen] = useState(false);
    const [selectedFuel, setSelectedFuel] = useState([]);

    const [isCarBrandOpen, setIsCarBrandOpen] = useState(false);
    const [selectedCarBrand, setSelectedCarBrand] = useState([]);


    const vitesOptions = [
        { name: "Otomatik", count: 20 },
        { name: "Manuel", count: 4 },
        {name: "Hybrid", count:3}
    ];
    const fuelOptions = [
        { name: "Dizel", count: 20 },
        { name: "Benzin", count: 4 },
    ];
    const carBrandOptions = [
        { name: "Toyota", count: 20 },
        { name: "BMW", count: 4 },
    ];
    return (
        <div className="filter-panel border border-yellow-400 rounded-md space-y-4 mt-11">
            <h3 className="font-bold text-xl">Filtrele</h3>
            <hr />
            <FiltreDropDown
                title={"Vites"} isCategoryOpen={isVitesOpen}
                setIsCategoryOpen={setIsVitesOpen} categoryOptions={vitesOptions}
                selectedCategory={selectedVites} setSelectedCategory={setSelectedVites} />

            <FiltreDropDown title={"Yakıt"} isCategoryOpen={isFuelOpen}
                setIsCategoryOpen={setIsFuelOpen} categoryOptions={fuelOptions}
                selectedCategory={selectedFuel} setSelectedCategory={setSelectedFuel} />

            <FiltreDropDown title={"Araba Marka"} isCategoryOpen={isCarBrandOpen}
                setIsCategoryOpen={setIsCarBrandOpen} categoryOptions={carBrandOptions}
                selectedCategory={selectedCarBrand} setSelectedCategory={setSelectedCarBrand} />
        </div>
    );
};

export default FilterPanel;
