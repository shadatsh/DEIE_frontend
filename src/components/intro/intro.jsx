import React from 'react';
import { Link } from 'react-router-dom';
import styles from './intro.module.css';

const Intro = () => {
    return (
        <div className={styles.introContainer}>
            <div>
            EXPLORE MORE HERE...
            </div>
            <div>DEIE PRO LAB</div>
            <div className={styles.menuContainer}>
            <div>Student</div>
            <Link to='student-login'> Student Login </Link>
            <Link to='student-register'> Student Register </Link>
            <div>Lecturer</div>
            <div>Technical Officer</div>
            </div>
           
        </div>
    );
};
export default Intro;