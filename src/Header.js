import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Liste de Stagaire</Link>
      <Link to="/AjouterStagaire">Ajouter Un Stagaire</Link>
    </nav>
  );
}
