import React, {useState , useEffect} from 'react'
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'
import gallery1 from '../../Assets/images/g1.jpg'
import gallery2 from '../../Assets/images/g2.jpg'
import gallery3 from '../../Assets/images/g3.jpg'
import gallery4 from '../../Assets/images/g4.jpg'
import gallery5 from '../../Assets/images/g5.jpg'
import gallery6 from '../../Assets/images/g6.jpg'
import gallery7 from '../../Assets/images/g10.jpg'
import gallery8 from '../../Assets/images/g8.jpg'
import gallery9 from '../../Assets/images/g9.jpg'
import gallery10 from '../../Assets/images/g11.jpg'
import gallery11 from '../../Assets/images/g12.jpg'
import gallery12 from '../../Assets/images/g13.jpg'
import gallery13 from '../../Assets/images/g14.jpg'
import gallery14 from '../../Assets/images/g15.jpg'
import gallery15 from '../../Assets/images/g16.jpg'
import gallery16 from '../../Assets/images/g17.jpg'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
  
];


  const [visibleImages, setVisibleImages] = useState(16); 

  const viewMore = () => {
    setVisibleImages(prevVisible => prevVisible + 16); 
  };

  return (
    <div>
      <Head pageheading="Gallery" />
      <div className='container my-5 py-5'>
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="mainheading">Gallery</h4>
                        <h3 className="subheading mb-4">Capturing Our Journey of Service and Compassion</h3>
                    </div>
      <div className="row">
        {images.slice(0, visibleImages).map((image, index) => (
          <div className="col-lg-3 col-md-4 col-xs-6 pb-4 thumb" key={index}>
            <a className="thumbnail" href="#" data-toggle="modal" data-target="#image-gallery">
              <img className="img-thumbnail" src={image} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="text-center mt-5">
          <button className="border-0 px-5 py-3 btn-primary rounded-pill btn-lg" onClick={viewMore}>View More</button>
        </div>
      )}
    </div>

      </div>
  
  )
}

export default Gallery
