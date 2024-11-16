import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adhidhya</h1>
        <p className={styles.description}>
          I am a MERN fullstack developer with a passion for building dynamic, responsive, and user-friendly web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js.
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1VbfzEjRNSyNjvcS9eCF-kXZpAMsUtC9Z/view"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
