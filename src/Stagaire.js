import React from "react";
import { useSelector } from "react-redux";

export default function Stagaire() {
  const stagiaires = useSelector((state) => state.stagaire); // Access Redux state

  return (
    <div>
      <h1>Liste de Stagiaires</h1>
      {stagiaires.length === 0 ? (
        <p>No stagiaires added yet!</p>
      ) : (
        <ul>
          {stagiaires.map((stagaire) => (
            <li key={stagaire.id}>
              {stagaire.name} - Age: {stagaire.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
