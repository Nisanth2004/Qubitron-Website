import React from 'react';
import styles from '../../css/ImagePage.module.css'; // Import CSS Module
import image1 from '../../images/carrom.png'; // Import images from the images directory
import image2 from '../../images/Chess.png';
import image3 from '../../images/Goldone.jpg';

const WebDev = () => {
  const images = [image1, image2, image3]; // Array of imported images

  return (
    <div className={styles['page-container']}>
      <h1 className="heading text-yellow-600 font-bold text-3xl mb-[3rem]">Web Developers</h1>
      <div className={styles['stack-container']}>
        {images.map((image, index) => (
          <div key={index} className={styles.stack}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt={`Card ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDev;