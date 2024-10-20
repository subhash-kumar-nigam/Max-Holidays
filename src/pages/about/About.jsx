import React , {useEffect} from 'react';
import Head from '../../components/Head';
import president from '../../Assets/images/drpathakji.jpg'; 
import yoga from '../../Assets/images/yoga.png'; 
import Vission from './Vission';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Head pageheading="About Us" />
      <div className='container my-5 py-5'>
        <div className='row pb-5'>
          <div className='col-lg-7'>
            <h3 className='administrativesub pt-2'>Dr. Raghav Pathak</h3>
            <h2 className='administrativemain'>President of Shri Yog Health Organization</h2>

            <p className='text-justify ourptext pt-4'>
            Dr. Raghav Pathak, the VISIONARY LEADER of the Shri Yog Health Organization (SYHO) and the ADHYAKSH of the INTEGRATED AYUSH COUNCIL of MADHYA PRADESH, is dedicated to promoting Holistic Well being and Spritual Growth. With a deep passion for Yoga, Meditation, and the teachings of Indian Culture, he has spearheaded several initiatives aimed at uplifting the Health and Educational Standards of children in Madhya Pradesh. Under his guidance, SYHO has launched the "NIDAN" Project, focusing on improving the Physical and Mental Health of school children. Dr. Pathak’s commitment to Service, combined with his Expertise, has made him a Respected Figure in the fields of Yoga and Community Wellness.            </p>
            <p className='text-justify ourptext '>
              At Shri Yog Health Organization (Syho), we are committed to enhancing the lives and well-being of children across Madhya Pradesh through our "Nidan" project. With a focus on ensuring safe and healthy living, we aim to uplift the health standards of school children, especially in rural areas.
            </p>
            <p className='text-justify ourptext'>
            Together, we are committed to shaping a healthier, brighter future for our children through dedicated efforts in health and education.   
                     </p>
          </div>
          <div className='col-lg-5 text-right'>
            <img src={president} alt='President' className='img-fluid presedentimg' /> 
          </div>
        </div>
    
      </div>
      <Vission />
      <div className='container my-5 py-5'>
    <div className='row pb-5'>
        <div className='col-lg-5 text-left'>
            <img src={yoga} alt='Yoga Instructor' className='img-fluid presedentimg' /> 
        </div>
        <div className='col-lg-7'>
            <h3 className='administrativesub pt-2'>Yogi Raj Raghav Pathak</h3>
            <h2 className='administrativemain'>Leading the Way in Yoga and Spiritual Growth</h2>

            <p className='text-justify ourptext pt-4'>
                Yogi Raj Raghav Pathak is a passionate advocate of yoga and holistic health. As the visionary leader of the Shri Yog Health Organization (SYHO) and the Adhyaksh of the Integrated Ayush Council of Madhya Pradesh, he is dedicated to promoting the transformative practices of yoga and meditation, not only within India but also internationally. His mission is to share the profound benefits of yoga with communities around the world.
            </p>
            <p className='text-justify ourptext'>
                With extensive knowledge of Indian culture and wellness, Yogi Raj Raghav has initiated numerous programs aimed at enhancing the health and educational standards of children in Madhya Pradesh. Under his leadership, the "NIDAN" project focuses on improving the physical and mental health of school children, reflecting his unwavering commitment to service and community wellness.
            </p>
        </div>
    </div>
</div>


    </div>
  );
}

export default About;
