import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagaire } from "./redux/StagaireSlice";

export default function AjouterStagaire() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStagaire = {
      id: Date.now(),  // Generate a unique id (you can use UUID or something more reliable in production)
      name,
      age: Number(age),
    };
    dispatch(addStagaire(newStagaire)); // Dispatch the action to add the new stagiaire
    setName(""); // Reset input fields
    setAge("");
  };

  return (
    <div>
      <h1>Ajouter Un Stagaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
