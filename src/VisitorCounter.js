import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue, set } from "firebase/database";

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const countRef = ref(database, "visitorCount");

    
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setVisitCount(data);
      }
    });

    
    if (!localStorage.getItem("visited")) {
      set(countRef, (prevCount) => prevCount + 1);
      localStorage.setItem("visited", "true");
    }
  }, []); 

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      marginTop: "20px"
    }}>
      <div style={{ 
        backgroundColor: "#f8f9fa", 
        borderRadius: "10px", 
        padding: "15px 25px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        minWidth: "200px"
      }}>
        <p>👥 Συνολικοί επισκέπτες μέχρι σήμερα: <span style={{ color: "#007bff" }}>{visitCount}</span></p>
      </div>
    </div>
  );
};

export default VisitorCounter;
