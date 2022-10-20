import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const filteredPlants = plants.filter((plant) => {
    const upperCasePlant = plant.name.toUpperCase();
    const upperSearch = search.toUpperCase();

    return upperCasePlant.includes(upperSearch);
  })

  const updatedPlants = filteredPlants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{updatedPlants}</ul>
  );
}

export default PlantList;
