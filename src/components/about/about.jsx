import React from 'react';
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}></div>
        <div>
          Students from the 5th semester (21st batch), who are taking the EE5206
          Software Project, visited Creative Software on 20th January 2023. It
          was a full day program and during the visit, the students were able to
          understand the software development lifecycle followed at Creative
          Software. The visit also included a non-technical session on CV
          writing…
        </div>
      </div>
    </div>
  );
};
export default About;
