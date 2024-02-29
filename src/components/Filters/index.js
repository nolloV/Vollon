import "./filterList.scss";
import React, { useState, useEffect } from "react";

const FilterList = ({ handleFilter }) => {
  const [filters, setFilters] = useState([]); // Tableau des filtres
  const [selectedFilter, setSelectedFilter] = useState("Tous"); // Choisi le filtre sélectionné

  useEffect(() => {
    const fetchData = async () => {
      // Charger les données et Convertir la réponse en JSON
      const response = await fetch("/Projects.json");
      const data = await response.json();

      // Créer un tableau avec toutes les catégories de tous les projets
      let categories = [];
      // Boucle chaque élément de data
      for (let project of data) {
        // Boucle project.categories et stock dans category
        for (let category of project.categories) {
          // Ajoute category au tableau categories
          categories.push(category);
        }
      }
      // Converti categories en Set pour supprimer les doublons puis array va convertir Set en un nouveau tableau uniqueCategories
      let uniqueCategories = Array.from(new Set(categories));

      // Ajouter "Tous" au début de la liste via unshift
      uniqueCategories.unshift("Tous");

      // Mettre à jour l'état des filtres
      setFilters(uniqueCategories);
    };

    // Appeler la fonction fetchData
    fetchData();
  }, []); // Marque la fin de l'appel à useEffect et exécuter une seule fois après le premier rendu

  // Gestionnaire d'évenement au clique du filtre
  const handleClick = (filter) => {
    handleFilter(filter); // Informe FilterList que le filtre à changé
    setSelectedFilter(filter); // Modifie le filtre sélectionné via la classe CSS
  };

  return (
    <ul className="projects__container--filters">
      {filters.map((filter) => (
        <li
          key={filter}
          className={`projects__container--filter ${
            filter === selectedFilter ? "selected" : ""
          }`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
