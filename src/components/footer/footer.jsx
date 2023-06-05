import React from 'react';
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.title}>
          <h2>DEIEprolab</h2>
          <p>
            The Faculty of Engineering of University of Ruhuna was established
            on 1st July 1999 at Hapugala, Galle. Admission to the Faculty of
            Engineering, University of Ruhuna, is subject to the University
            Grants Commission policy on university admissions.
          </p>
        </div>
        <div className={styles.links}>
          <h3>Useful links</h3>
          <a href="https://ruh.ac.lk/index.php/en/">University of Ruhuna</a>
          <br />
          <a href="http://www.eng.ruh.ac.lk">Faculty of Engineering</a>
          <br />
          <a href="http://paravi.ruh.ac.lk/foenmis/index.php">ENG-MIS</a>
          <br />
          <a href="http://paravi.ruh.ac.lk/foenmis/index.php">Library</a>
          
          <br />
          <a href="http://lms.eng.ruh.ac.lk">ENG-LMS</a>
          <br />
          <a href="https://www.iesl.lk/index.php?lang=en">IESL</a>
          
        </div>
        <div className={styles.contact}>
          <h3>contact us</h3>
          Faculty of Engineering,Hapugala,
          <br />
          Galle,Sri Lanka.
          <br />
          Phone: +(94)0 91 22457656
          <br />
          E-mail: webmaster@eng.ruh.ac.lk
        </div>
      </div>
      <div>
        <p style={{
            textAlign: "center",
        }}>
            © 2021 DEIE Pro Lab. All Rights Reserved.
        </p>
        <br/>
      </div>
    </footer>
  );
};
export default Footer;