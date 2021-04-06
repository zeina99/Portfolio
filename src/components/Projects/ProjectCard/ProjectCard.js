import React from "react";
import PropTypes from "prop-types";
import * as styles from "./ProjectCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

let ProjectCard = ({ image, title, about, techUsed, githubLink, liveUrl }) => {
  return (
    <div className={styles.card}>
      {/* <p>Card</p> */}

      <GatsbyImage image={image} alt="Project" />

      <h1>{title}</h1>
      <p>{about}</p>
      <p>Tech Used: {techUsed.map((tech) => tech)}</p>
      <div className={styles.outsideLinks}>
        <a href={githubLink}>
          <button className={styles.buttonLink}>Github</button>
        </a>

        {/* Show Live Demo Button if liveUrl Is passed */}
        {liveUrl ? (
          <a href={liveUrl}>
            <button className={styles.buttonLink}>Live Demo</button>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  techUsed: PropTypes.array,
  githubLink: PropTypes.string,
  liveUrl: PropTypes.string,
};
export default ProjectCard;
