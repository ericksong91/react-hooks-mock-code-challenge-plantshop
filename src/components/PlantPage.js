import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")
  const [plants, setPlants] = useState([]);

  useEffect(() => renderPlants(), [])

  function renderPlants() {
    const url = 'http://localhost:6001/plants';

    fetch(url)
      .then((r) => r.json())
      .then((data) => setPlants(data))
  }

  function handleNewPlant(newPlant){
    console.log("New Plant:", newPlant)

    setPlants([...plants, newPlant])
  }

  function handleSearch(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
