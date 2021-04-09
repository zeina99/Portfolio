import React from "react";
import PropTypes from "prop-types";
import * as styles from "./ProjectCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
// import { Img } from "gatsby-image";
let ProjectCard = ({
  imageUrl,
  title,
  about,
  techUsed,
  githubLink,
  liveUrl,
  note,
  projectType,
}) => {
  return (
    <div className={styles.card}>
      <GatsbyImage image={imageUrl} alt="Project" />

      <i className={styles.note}>{note}</i>

      <h2>{title}</h2>
      <p>
        <em>
          <b>{projectType}</b>
        </em>
      </p>
      <p>{about}</p>
      <p>
        {" "}
        <b>Tech Used: </b>
        {techUsed.map((tech) => " " + tech + " | ")}
      </p>
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
