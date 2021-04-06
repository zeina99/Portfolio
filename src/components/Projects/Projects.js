import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import * as styles from "./Projects.module.css";
function Projects() {
  return (
    <div className={styles.projectWrapper} id="projects">
      <h1 className={styles.header}>Projects</h1>
      <ProjectCard
        imageUrl="../../images/truck.jpeg"
        title="Delivery Scheduler"
        about="System to help in delivery"
        techUsed={["Java"]}
        githubLink="https://reactjs.org/docs/typechecking-with-proptypes.html"
      />
    </div>
  );
}

export default Projects;
