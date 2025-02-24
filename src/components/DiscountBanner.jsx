import React from 'react';
import '../css/DiscountBanner.css'; // Import the CSS file
import img5 from '../images/artophobia.png'; // Import the image

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="banner-left">
        <img src={img5} alt="Discount Banner" className="banner-image" />
        <h2 className="offer-heading">Grab the Offer</h2>
      </div>
      <div className="banner-content">
        <h1>20% OFF</h1>
        <h3>Your Next Flight with us</h3>
        <p>Coupon valid for One Month</p>
        <button className="redeem-button">REDEEM NOW</button>
      </div>
    </div>
  );
};

export default DiscountBanner;