import React from 'react';
import member1 from '../../../Assets/images/practitioners_doctors.webp'
import member2 from '../../../Assets/images/practitioners_doctors3.webp'
import member3 from '../../../Assets/images/practitioners_doctors4.webp'
import member4 from '../../../Assets/images/practitioners_doctors5.webp'
import member5 from '../../../Assets/images/practitioners_doctors6.webp'
import member6 from '../../../Assets/images/practitioners_doctors2.webp'
import member7 from '../../../Assets/images/omsir.webp'
import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";  
import OwlCarousel from 'react-owl-carousel';

const Doctors = () => {
  const images = [member1, member6, member3, member2, member4, member5,  member7 ];
  const titles = [
    "Padma Shri Dr.S.C Manchanda Indian MedGuru ",
    "Dr. Prasun Chatterjee Geriatrician in Delhi AIIMS",
    "Dr. Jitendra Nagpal Hod Moolchand Hospital ",
    "Dr. Sanjay K. Rai Community Medicine Expert AIIMS", 
    "Dr. Biswaroop Roy Chowdhury  Heal Without Pill",
    "Dr.H.K Chopra  Senior Cardiologist, Medanata Hospital",
    "Dr. Om Arya Ayurveda & Kerala Panchakarma,  Panchjanya Kerala Ayurveda Clinic ",
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

export default Doctors;
