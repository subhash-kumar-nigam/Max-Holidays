import React from 'react';
import wellnesscenter1 from '../../../Assets/images/wellness_center.webp';
import wellnesscenter2 from '../../../Assets/images/wellness_center2.webp';
import wellnesscenter3 from '../../../Assets/images/wellnes_center3.webp';

import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const WellnessCenter = () => {
  const images = [wellnesscenter1, wellnesscenter2, wellnesscenter3 ];
  const titles = [
    "AVEDNA AYURVEDA & PANCHKARMA",
    "Kerala Ayurveda Life ",
    "Niramayam Ayurveda and wellness centre", 
  ];

  return (
    <div className="container-fluid service  wow fadeInUp" data-wow-delay="0.2s" >
      <div className="container py-5">
        <div className="text-left mx-auto pb-5 " >
          <h4 className="mainheading">Our Wellness Center</h4>
        </div>
        <div  className="bi-index-products-body ">
          <OwlCarousel 
            className="owl-theme product-carousel"
            loop
            margin={10}
            nav
            items={4}
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={true}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 4 }
            }}
          >
            {images.map((image, index) => (
              <div className="item" key={index}>
                <div className="service-item">
                  <div className="service-img">
                    <img loading="lazy" src={image} alt={titles[index]} className="img-fluid focusimg rounded-top" />
                  </div>
                  <div className="service-content p-4">
                    <div className="service-content-inner">
                      <h3 className="d-inline-block h5 mb-2">{titles[index]}</h3>
                      <a className="btn btn-focus rounded-pill py-2 px-4" href="#"> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default WellnessCenter;
