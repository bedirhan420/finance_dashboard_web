const { doc, getDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebaseConfig");

const KPI = {
  totalProfit: 0,
  totalRevenue: 0,
  totalExpenses: 0,
  expensesByCategory: {}, 
  monthlyData: [], 
  dailyData: [], 
};

const MonthData = {
  month: "",
  revenue: 0,
  expenses: 0,
  operationalExpenses: 0,
  nonOperationalExpenses: 0,
};

const DayData = {
  date: "",
  revenue: 0,
  expenses: 0,
};

async function fetchKPIData() {
  const docRef = doc(db, "kpis", "76W72JUxDoBWCU3IvopD");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const firestoreData = docSnap.data();

    const firestoreKPI = {
      totalProfit: firestoreData.totalProfit || KPI.totalProfit,
      totalRevenue: firestoreData.totalRevenue || KPI.totalRevenue,
      totalExpenses: firestoreData.totalExpenses || KPI.totalExpenses,
      expensesByCategory: firestoreData.expensesByCategory || KPI.expensesByCategory,
      monthlyData: firestoreData.monthlyData || KPI.monthlyData,
      dailyData: firestoreData.dailyData || KPI.dailyData,
    };

    console.log("Firestore KPI data:", firestoreKPI);
    return firestoreKPI;
  } else {
    console.log("No such document!");
    return null;
  }
}

module.exports = {
  fetchKPIData, // Exporting fetchKPIData function
};
