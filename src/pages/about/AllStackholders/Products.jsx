import React from 'react';
import product1 from '../../../Assets/images/products1.webp';
import product2 from '../../../Assets/images/products2.webp';
import product3 from '../../../Assets/images/products3.webp';
import product4 from '../../../Assets/images/products4.webp';
import product5 from '../../../Assets/images/products5.webp';
import product6 from '../../../Assets/images/products6.webp';

import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const Products = () => {
  const images = [product1, product2, product3 , product4 , product5 , product6 ];
  const titles = [
    "Amma Mobile App Root 9One is a health and wellness technology company ",
    "K-107 Kstar Accupressure Massage slippers - Yoga Paduka ",
    "Tashvika India Food Private Limited ", 
    "LUXOVA Sandalwood, Avocado & Mixed Fruit Soap ",
    "Trinch Agro Food division of FHnine Private Limited   ",
    "Organic Wellness Pvt ltd ", 
  ];

  return (
    <div className="container-fluid service  wow fadeInUp" data-wow-delay="0.2s" >
      <div className="container py-5">
        <div className="text-left mx-auto pb-5 " >
          <h4 className="mainheading">Our Products</h4>
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

export default Products;
