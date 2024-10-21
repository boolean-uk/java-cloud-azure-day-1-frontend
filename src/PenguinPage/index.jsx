import { useEffect, useState } from "react";
import "./style.css";
import Header from "../Header";
import PenguinList from "../PenguinList";

export default function PenguinPage() {
  const baseUrl = "http://localhost:5000/";
  const [penguins, setPenguins] = useState([]);

  const fetchAllPenguins = async () => {
    const response = await fetch(baseUrl + "penguins");

    const data = await response.json();
    setPenguins(data);
  };

  useEffect(() => {
    fetchAllPenguins();
  }, []);

  console.log(penguins);

  return (
    <>
      <Header />

      <div className="page-body">
        <div className="title-container">
          <h1>Meet the penguins roaming our world</h1>
        </div>
     
        <PenguinList penguins={penguins} /> 
      </div>
    </>
  );
}
