import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              <p>
  I'm a frontend developer with a passion for crafting engaging and intuitive user interfaces. With expertise in HTML, CSS, and JavaScript, as well as modern frameworks like React, I build responsive and optimized sites that provide seamless user experiences across devices.
</p>

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
  As a backend developer, I specialize in designing and developing robust, scalable, and efficient server-side applications and APIs. I have extensive experience with Node.js, Express, and databases like MongoDB and SQL, enabling me to create fast and reliable systems that meet the needs of modern web applications.
</p>

            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};