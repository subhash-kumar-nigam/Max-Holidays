import React , {useEffect} from 'react';
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'
import { FaBalanceScale, FaBook, FaChartLine, FaCheckCircle, FaFlask, FaHeartbeat, FaUsers } from 'react-icons/fa';

const Consultancy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head pageheading="Consultancy" />
      <div className="container my-lg-5">
        <CenterHeading centerheading="Consultancy - Shri Yog Health Organization (Syho)" />
        <p className='pb-3 text-justify'>
          The Shri Yog Health Organization (Syho) offers expert consultancy services to promote and integrate Ayush (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) practices into modern health systems. Our aim is to support practitioners, institutions, and the community in embracing holistic health approaches that are both effective and accessible.
        </p>
        <p className='pb-5'>
          Syho's consultancy services are designed to provide strategic guidance, regulatory support, training, and development opportunities for those engaged in Ayush disciplines, ensuring that traditional wisdom aligns with contemporary health needs.
        </p>
        <h2 className="liheading pb-3 administrativesub">Consultancy Services Offered by Syho:</h2>
        
        <div className="row text-center pt-5">
          {/* First Row */}
          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaBalanceScale className='vicons' /> {/* Regulatory Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Regulatory Guidance</h4>
                <p className='text-center'>
                  Navigating Ayush regulations with ease, ensuring compliance with standards and guidelines for safe and effective practice.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaBook className='vicons' /> {/* Education Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Education and Training</h4>
                <p className='text-center'>
                  Providing comprehensive training programs in Ayush practices, tailored for practitioners, students, and health professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaChartLine className='vicons' /> {/* Business Development Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Business Development</h4>
                <p className='text-center'>
                  Supporting Ayush entrepreneurs with strategic growth plans, market analysis, and expansion strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          {/* Second Row */}
          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaCheckCircle className='vicons' /> {/* Quality Assurance Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Quality Assurance</h4>
                <p className='text-center'>
                  Maintaining high standards for Ayush services and products through certification and quality control measures.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaFlask className='vicons' /> {/* Research Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Research and Innovation</h4>
                <p className='text-center'>
                  Encouraging research in Ayush practices, collaborating with institutions, and promoting evidence-based wellness.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaUsers className='vicons' /> {/* Networking Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Community Collaboration</h4>
                <p className='text-center'>
                  Building a strong network through seminars, workshops, and events to foster collaboration within the Ayush community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          {/* Third Row */}
          <div className="col-lg-4 mb-4 col-md-6">
            <div className='servicecarbg p-4'>
              <div className='text-center'>
                <FaHeartbeat className='vicons' /> {/* Health and Wellness Icon */}
              </div>
              <div className='pt-3'>
                <h4 className='text-center'>Holistic Wellness Programs</h4>
                <p className='text-center'>
                  Developing wellness programs based on Ayush principles, tailored for individuals and organizations seeking balanced health solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className='py-5'>
          At Syho, our goal is to make traditional health practices accessible and relevant in today's world. Through our consultancy services, we aim to bridge the gap between ancient wisdom and modern health, creating a holistic approach to well-being.
        </p>    
      </div>
    </div>
  )
}

export default Consultancy
