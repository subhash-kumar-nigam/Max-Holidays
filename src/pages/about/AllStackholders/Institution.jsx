import React from 'react';
import institution1 from '../../../Assets/images/Institutions1.webp';
import institution2 from '../../../Assets/images/Institutions5.webp';
import institution3 from '../../../Assets/images/Institutions2.webp';
import institution4 from '../../../Assets/images/Institutions3.webp';
import institution5 from '../../../Assets/images/collge.webp';
import institution6 from '../../../Assets/images/sgt.webp';
import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const Institutions = () => {
  const images = [institution1, institution6, institution3,  institution4, institution5, institution2 ];
  const titles = [
    "JSS Ayurveda Medical College Mysore",
    "SGT University ",
    "GOVT AYURVEDA COLLEGE, KANNUR, Kerala", 
    "Ayurvedic and Unani Tibbia College",
    "Government Ayurveda College, Trivannithura",
    "Shri Dhanwantry Ayurvedic College & Hospital",
  ];

  return (
    <div className="container-fluid service  wow fadeInUp" data-wow-delay="0.2s" >
      <div className="container py-5">
        <div className="text-left mx-auto pb-5 " >
          <h4 className="mainheading">Our Practitioners/Doctors</h4>
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

export default Institutions;
