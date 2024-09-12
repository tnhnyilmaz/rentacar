import React, { useState } from 'react'
import "../detay/AracBilgiDetay.css"
const AracBilgiDetay = ({ carDetail, categoryData }) => {
    const [detay, setDetay] = useState(false);

    
    return (
        <div className="fullscreen-container" aria-modal="true">
            <div className="content">
                <div> carDetail.name</div>
                <button onClick={setDetay(false)} className="close-btn">
                    Kapat
                </button>
            </div>
        </div>
    )
}

export default AracBilgiDetay