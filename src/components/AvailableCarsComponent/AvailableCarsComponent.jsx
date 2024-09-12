import React from 'react'

const AvailableCarsComponent = () => {
    const availableCars = useSelector((state) => state.availableCars.availableCars);
    const noCarsAvailable = useSelector((state) => state.availableCars.noCarsAvailable);

    return (
        <div>
            {noCarsAvailable && (
                <div className="alert alert-warning">
                    Uyarı: Bu kategori için uygun araç bulunmamaktadır.
                </div>
            )}

            {/* Araçlar Listesi */}
            {availableCars.length > 0 && (
                <ul>
                    {availableCars.map(car => (
                        <li key={car.id}>{car.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AvailableCarsComponent