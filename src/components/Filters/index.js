import "./filterList.scss";
import React, { useState, useEffect } from "react";
import filterData from "../../data/projects.json";
import { useTranslation } from "react-i18next";

const FilterList = ({ handleFilter }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState([]); // Tableau des filtres
  const [selectedFilter, setSelectedFilter] = useState("Tous"); // Choisi le filtre sélectionné

  useEffect(() => {
    // Créer un tableau avec toutes les catégories de tous les projets
    let categories = [];
    // Boucle chaque élément de data
    for (let project of filterData) {
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
          {t(filter)}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
