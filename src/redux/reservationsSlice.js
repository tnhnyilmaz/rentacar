import { firestore } from '../components/config/firebase';
const makeReservation = async (carDoc, startDate, finishDate) => {
    const carRef = carDoc.ref;  // Aracın referansını alıyoruz
    const reservationsRef = carRef.collection('reservations');

    try {
        // 1. Aracın available alanını false yap
        await carRef.update({ available: false });

        // 2. Rezervasyonu alt koleksiyona ekle
        await reservationsRef.add({
            startDate: dayjs(startDate).toDate(),
            finishDate: dayjs(finishDate).toDate(),
            
        });

        console.log('Rezervasyon başarıyla yapıldı ve araç rezerve edildi.');
    } catch (error) {
        console.error('Rezervasyon sırasında hata oluştu: ', error);
    }
};