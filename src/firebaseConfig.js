import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoQtUy3yWK7Y5POkP8kZh6KHTZxKr-43g",
  authDomain: "pantoineproject.firebaseapp.com",
  databaseURL: "https://pantoineproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pantoineproject",
  storageBucket: "pantoineproject.firebasestorage.app",
  messagingSenderId: "884704217435",
  appId: "1:884704217435:web:3090aae8cb861b956bb27e",
  measurementId: "G-EJR2Q1NQL3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
