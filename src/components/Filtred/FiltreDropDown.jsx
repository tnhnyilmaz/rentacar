import React from 'react'

const FiltreDropDown = ({ title, isCategoryOpen, setIsCategoryOpen, categoryOptions, selectedCategory, setSelectedCategory }) => {
    const handleCategoryChange = (option) => {
        setSelectedCategory((prev) => {
            if (prev.includes(option)) {
                return prev.filter((item) => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };
    return (
        <div className="filter-category">
            <div className="flex" onClick={() => setIsCategoryOpen(!isCategoryOpen)} style={{ cursor: "pointer" }}>
                <h4>
                    {title}
                </h4>
                <div>
                    {isCategoryOpen ? "▲" : "▼"}
                </div>
            </div>

            {isCategoryOpen && (
                <div>
                    {categoryOptions.map((option) => (
                        <div className='justify-center space-x-4' key={option.name}>
                            <input
                                type="checkbox"
                                checked={selectedCategory.includes(option.name)}
                                onChange={() => handleCategoryChange(option.name)}
                            />
                            <label>{`${option.name} (${option.count})`}</label>
                        </div>
                    ))}
                </div>
            )}
            <hr />
        </div>
    )
}

export default FiltreDropDown