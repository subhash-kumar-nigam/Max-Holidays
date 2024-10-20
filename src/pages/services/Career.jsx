import React , {useEffect} from 'react';
import { FaHeartbeat, FaChild, FaLeaf, FaCapsules, FaHandHoldingMedical, FaHome, FaChalkboardTeacher, FaSearch, FaBook, FaUserMd, FaAppleAlt, FaHandsHelping, FaClinicMedical, FaYinYang, FaSpa } from 'react-icons/fa';
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'

const Career = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head pageheading="Career" />
      <div className="container my-lg-5">
        <CenterHeading centerheading="Career at Shri Yog Health Organization" />
        <h2 className="liheading pb-3 administrativesub">A Gateway to Diverse Career Paths in Holistic Healthcare</h2>
        <p className='pb-5'>
          Shri Yog Health Organization (SYHO) offers a wide range of exciting career opportunities for individuals passionate about traditional and holistic healthcare systems. With a focus on Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy (SYHO), SYHO aims to promote preventive and integrative healthcare practices, making it an ideal platform for those looking to make a meaningful impact in the field.
        </p>    
        <div className='row pb-5'>
          <div className='col-7'>    
            <h2 className="liheading pb-3 administrativesub">Explore Diverse Career Paths with SYHO:</h2>
          </div> 
          <div className="col-5 text-right">
            <button className="carouselbtn mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </button>
            <button className="carouselbtn mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div> 
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            
            {/* First Carousel Item */}
            <div className="carousel-item active">
              <div className="row text-center">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHeartbeat className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Ayurvedic Physician</h4>
                      <p className='text-center'>Diagnose and treat ailments using Ayurvedic principles and herbs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaChild className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Yoga Therapist</h4>
                      <p className='text-center'>Guide individuals in yoga postures for physical and mental well-being.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaLeaf className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Naturopathic Physician</h4>
                      <p className='text-center'>Use natural therapies like hydrotherapy and diet to promote health.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaCapsules className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Unani Practitioner</h4>
                      <p className='text-center'>Utilize Unani medicines and formulations for treatment.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHandHoldingMedical className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Siddha Doctor</h4>
                      <p className='text-center'>Treat diseases based on Siddha medicine principles.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHome className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Homeopathic Doctor</h4>
                      <p className='text-center'>Prescribe individualized homeopathic remedies for healing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Carousel Item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaChalkboardTeacher className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Professor/Lecturer</h4>
                      <p className='text-center'>Teach SYHO subjects at universities and colleges.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaSearch className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Researcher</h4>
                      <p className='text-center'>Conduct research in SYHO fields for scientific development.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaBook className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Content Developer</h4>
                      <p className='text-center'>Create educational materials on SYHO practices.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaUserMd className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Ayurvedic Consultant</h4>
                      <p className='text-center'>Provide Ayurvedic advice for preventive healthcare.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaAppleAlt className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Naturopathic Consultant</h4>
                      <p className='text-center'>Offer dietary and lifestyle guidance for health.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHandsHelping className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Siddha Consultant</h4>
                      <p className='text-center'>Offer Siddha-based health and wellness solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Carousel Item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaClinicMedical className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Clinical Psychologist</h4>
                      <p className='text-center'>Provide mental health support through therapy and counseling.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaYinYang className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Meditation Instructor</h4>
                      <p className='text-center'>Guide meditation practices for relaxation and stress relief.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaSpa className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Wellness Coach</h4>
                      <p className='text-center'>Promote overall well-being through holistic approaches.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
};

export default Career;
