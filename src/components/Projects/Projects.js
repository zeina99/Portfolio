import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./Projects.module.css";
let Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            githubLink
            imageUrl {
              childImageSharp {
                gatsbyImageData(width: 480, height: 270)
              }
            }

            techUsed
            liveUrl
            note
            projectType
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <div className={styles.projectWrapper} id="projects">
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.projects}>
        {projects.map(({ node: project }) => {
          return (
            <ProjectCard
              title={project.title}
              about={project.description}
              techUsed={project.techUsed}
              liveUrl={project.liveUrl}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl.childImageSharp.gatsbyImageData}
              note={project.note}
              projectType = {project.projectType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
