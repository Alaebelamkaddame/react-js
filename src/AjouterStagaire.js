import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagaire } from "./redux/StagaireSlice";

export default function AjouterStagaire() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: "",
    nom: "",
    prenom: "",
    filiere: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStagaire(formData)); // Add stagaire to Redux
    setFormData({ image: "", nom: "", prenom: "", filiere: "" }); // Reset the form
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Saisir le lien de l'image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="nom"
          placeholder="Saisir le nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="prenom"
          placeholder="Saisir le prenom"
          value={formData.prenom}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="filiere"
          placeholder="Saisir la filiere"
          value={formData.filiere}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}
