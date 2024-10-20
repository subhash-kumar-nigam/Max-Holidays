import React from 'react';
import trader1 from '../../../Assets/images/manufacturers_traders.webp';
import trader2 from '../../../Assets/images/manufacturers_traders2.webp';
import trader3 from '../../../Assets/images/manufacturers_traders3.webp';
import trader4 from '../../../Assets/images/manufacturers_traders4.webp';
import trader5 from '../../../Assets/images/manufacturers_traders5.webp';
import trader6 from '../../../Assets/images/manufacturers_traders6.webp';

import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const ManufacturersTraders = () => {
  const images = [trader1, trader2, trader3 , trader4 , trader5 , trader6 ];
  const titles = [
    "M/s. Arjun Beeswax Industries  Manufacturer  ",
    "Medilife Impex Pvt. Ltd. Manufacturer ",
    "Bhergaon Agro Organic Producer Company Ltd", 
    " Hakim Mohsin Dehlvi Group of Companies ",
    "Mahatreya Herbals  Manufacturer ",
    "Vishwachaitanya Ayurvediya Rasshala", 
  ];

  return (
    <div className="container-fluid service  wow fadeInUp" data-wow-delay="0.2s" >
      <div className="container py-5">
        <div className="text-left mx-auto pb-5 " >
          <h4 className="mainheading">Our Manufacturers Traders</h4>
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

export default ManufacturersTraders;
