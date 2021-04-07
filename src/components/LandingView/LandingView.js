import React from "react";

import NavBar from "./NavBar/NavBar";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./LandingView.module.css";

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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zeina99"
            >
              <StaticImage
                src="../../images/GitHub-Mark-120px-plus copy.png"
                alt=""
                width={40}
                height={40}
                id={styles.githubImg}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Ignored div, just for layout purposes */}
      <div></div>
    </div>
  );
}

export default LandingView;
