import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayaz Omer</h1>
        <p className={styles.description}>
        I'm Ayaz Omer, a passionate and dedicated full stack developer excited to embark on my journey in the world of technology.I've honed my skills in both front-end and back-end development, striving to create seamless and user-centric digital experiences. With a knack for problem-solving and a passion for crafting intuitive digital experiences, I'm eager to contribute my skills to exciting projects. Explore my portfolio to see what I've been working on, and let's connect to discuss how we can collaborate!
        </p>
        <a href="mailto:ayazjunedomer@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
