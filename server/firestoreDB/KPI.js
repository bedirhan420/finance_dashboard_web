const { kpis } = require("../data/data");
const { firebaseApp, db } = require("../firebase/firebaseConfig");
const { collection, addDoc } = require("firebase/firestore");

const kpiCollectionRef = collection(db, 'kpis');

const addDataToFirestore = async () => {
    try {
        for (const kpi of kpis) {
            const docRef = await addDoc(kpiCollectionRef, kpi);
            console.log("Veri başarıyla eklendi. Belge ID:", docRef.id);
        }
    } catch (error) {
        console.error("Veri eklenirken bir hata oluştu:", error);
    }

};

addDataToFirestore();
