import React from 'react';
import f1 from '../../Assets/images/doctorimg.png';
import f2 from '../../Assets/images/institution.png';
import f3 from '../../Assets/images/wellnesscenter.png';
import f4 from '../../Assets/images/products.png';
import f5 from '../../Assets/images/manufacturerstraders.png';
import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const OurStackholder = () => {
  const images = [f1, f2, f3, f4, f5];
  const titles = [
    "Practitioners/Doctors",
    "Institutions",
    "Wellness Center",
    "Products",
    "Manufacturers/Traders",
  ];

  return (
    <div className="container-fluid service pt-5 wow fadeInUp" data-wow-delay="0.2s" >
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 " >
          <h4 className="mainheading">Our Stakesholder</h4>
          <h3 className="subheading mb-4">Engaging Stakeholders for Transformative Solutions</h3>                  
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
                      <h3 className="d-inline-block h4 mb-4">{titles[index]}</h3>
                      <a className="btn btn-focus rounded-pill py-2 px-4" href="#">VIEW ALL</a>
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

export default OurStackholder;
