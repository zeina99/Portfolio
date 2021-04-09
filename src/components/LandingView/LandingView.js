import React from "react";

import NavBar from "../NavBar/NavBar";
import { StaticImage } from "gatsby-plugin-image";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import * as styles from "./LandingView.module.css";
import Link from "gatsby-link";

function LandingView() {
  return (
    <div className={styles.LandingView} id="LandingView">
      <NavBar />
      <div className={styles.maintext}>
        <h1 id={styles.name}>
          Zeina <br /> Thabet
        </h1>
        <div className={styles.about}>
          <p> 3rd year Undergraduate Computer Science Student.</p>
          <div className={styles.links}>
            <a href="resume.pdf">Resume</a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zeina99"
            >
              <StaticImage
                src="../../../data/images/GitHub-Mark-120px-plus copy.png"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Ignored div, just for layout purposes */}
      <div id={styles.lastDiv}>
        <Link to={"#projects"}>
          <ArrowDownwardIcon id={styles.downwardArrow} />
        </Link>
      </div>
    </div>
  );
}

export default LandingView;
