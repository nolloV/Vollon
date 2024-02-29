import React, { useEffect, useState } from "react";
import Card from "../Card";
import FilterList from "../Filters";
import Modal from "../Modal";
import "./projects.scss";
import projectsData from "../../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null); // Etat pour le projet sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour contrôler l'ouverture/fermeture de la modal

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // Met à jour l'état filter
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  // Met à jour l'état 'selectedProject' avec le projet cliqué et ouvre la modale
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Crée un tableau filtré de projets basé sur le filtre sélectionné
  const filteredProjects = projects.filter((project) => {
    return filter === "Tous" ? true : project.hashtags.includes(filter);
  });

  // Fonction pour rendre la modal
  const renderModal = () => {
    // si isModalOpen est true et si selectedProject n'est pas null
    if (isModalOpen && selectedProject) {
      // Opérateur de décomposition {...} pour passer toutes les propriétés
      // de selectedProject au composant modale
      return <Modal {...selectedProject} onClose={handleCloseModal} />;
    }
    return null;
  };

  return (
    <div className="projects__container--lists">
      <FilterList handleFilter={handleFilter} />
      <ul className="projects__container--list">
        {filteredProjects.map((project, index) => (
          <li key={index} onClick={() => handleProjectClick(project)}>
            {" "}
            <Card project={project} />
          </li>
        ))}
      </ul>
      {renderModal()}
    </div>
  );
};

export default Projects;
