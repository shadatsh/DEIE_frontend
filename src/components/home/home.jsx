import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../../assets/images/picture1.jpg';
import pic2 from '../../assets/images/picture2.jpg';
import pic3 from '../../assets/images/picture3.jpeg';
import styles from './home.module.css';
import labs from '../dummy/labs.js';
import { Link } from 'react-router-dom';
import MetaData from '../layouts/MetaData.js'


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.homeContainer}>
      <MetaData title="Home" />
      <Slider {...settings}>
        <div className={styles.imageContainer}>
        <img src={pic1} alt="" style={{ width: '1500px', height: '400px' }} /> 
        </div>
        <div className={styles.imageContainer}>
        <img src={pic2} alt="" style={{ width: '1500px', height: '400px' }} /> 
        </div>
        <div className={styles.imageContainer}>
        <img src={pic3} alt="" style={{ width: '1500px', height: '400px' }} /> 
        </div>
      </Slider>

      <br/>

      
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
      <br/>
      <br/>
    </div>
    
  );
  
};

export default Home;