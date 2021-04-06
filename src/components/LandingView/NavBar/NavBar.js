import React from "react";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

import * as styles from "./NavBar.module.css";
import { Link } from "gatsby";
function NavBar() {
  return (
    <div id={styles.navbar}>
      <ul id={styles.navitems}>
        <li>
          <Link to="#LandingView">About Me</Link>
        </li>

        <li>
          <Link to="#projects"> Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
