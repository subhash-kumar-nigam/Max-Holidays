import React from 'react';
import gallery1 from '../../Assets/images/g1.jpg'
import gallery2 from '../../Assets/images/g2.jpg'
import gallery3 from '../../Assets/images/g3.jpg'
import gallery4 from '../../Assets/images/g4.jpg'
import gallery5 from '../../Assets/images/g5.jpg'
import gallery6 from '../../Assets/images/g6.jpg'
import gallery7 from '../../Assets/images/g10.jpg'
import gallery8 from '../../Assets/images/g8.jpg'
const GalleryHome = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
      
    ];

    // Use the slice method to limit to the first 8 images
    const visibleImages = images.slice(0, 8);

    return (
        <div className=''>
            <div className='bg-light py-5'>
                <div className='container  py-5'>
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="mainheading">Gallery</h4>
                        <h3 className="subheading mb-4">Capturing Our Journey of Service and Compassion</h3>
                    </div>
                    <div className="row">
                        {visibleImages.map((image, index) => (
                            <div className="col-lg-3 col-md-4 col-xs-6 pb-4 thumb" key={index}>
                                <a className="thumbnail" href="#" data-toggle="modal" data-target="#image-gallery">
                                    <img className="img-thumbnail" src={image} alt={`Image ${index + 1}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryHome;
