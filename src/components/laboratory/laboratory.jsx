import React from 'react';
import styles from './laboratory.module.css';
import labs from '../dummy/labs.js';
import pic1 from '../../assets/images/picture1.jpg';
import pic2 from '../../assets/images/picture2.jpg';
import pic3 from '../../assets/images/picture3.jpeg';
import { Link } from 'react-router-dom';

const Laboratory = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleText}>LABORATORY</h2>
      <div className={styles.labsContainer}>
        {labs &&
          labs.map((lab) => {
            return (
              <div key={lab.id} className={styles.labContainer}>
                <Link to={`/laboratory/${lab.id}`}>
                  <div className={styles.lab}>
                    {lab.name}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Laboratory;