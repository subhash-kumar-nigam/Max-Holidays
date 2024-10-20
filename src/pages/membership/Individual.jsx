import React , {useEffect} from 'react';
import Head from '../../components/Head';

const Individual = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head pageheading="Individual Membership" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Syho Membership for Individual Practitioners & Educational Institutions</h1>
            <h6 className='pb-5'>
              Membership in the Shri Yog Health Organization (Syho) offers a range of benefits for all stakeholders within the Syho field. It emphasizes ethical practices, quality standards, professional growth, support for practices, advocacy, research opportunities, and collaboration.
            </h6>
            
            <h2 className="liheading pb-3 administrativesub">For Syho Practitioners</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Enhanced Recognition and Credibility:</strong> Being a part of Syho signifies a commitment to ethical practices and quality standards, building credibility and trust within the community.
              </li>
              <li className='py-2'>
                <strong>Networking and Collaboration:</strong> Syho provides a platform for practitioners from diverse Syho systems to connect, share insights, and work together on research and development projects.
              </li>
              <li className='py-2'>
                <strong>Professional Development Opportunities:</strong> Syho offers programs, workshops, and conferences that keep members updated with the latest trends and developments in the Syho field.
              </li>
              <li className='py-2'>
                <strong>Practice Support and Resources:</strong> Members can access resources like legal and business advice, insurance options, and patient referral networks through Syho.
              </li>
            </ol>

            <h2 className="liheading administrativesub py-3">For Syho Educational Institutions</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Accreditation and Quality Assurance:</strong> Syho sets high standards for accreditation, ensuring that institutions maintain quality education and adhere to ethical guidelines.
              </li>
              <li className='py-2'>
                <strong>Curriculum Development and Research Support:</strong> Syho supports the development of modern curricula and encourages research activities in educational institutions.
              </li>
              <li className='py-2'>
                <strong>Faculty Development and Exchange Programs:</strong> Syho facilitates development programs and exchanges for faculty members, encouraging knowledge sharing and innovative practices.
              </li>
              <li className='py-2'>
                <strong>Placement Assistance for Graduates:</strong> Syho connects Syho graduates with potential employers and healthcare organizations, supporting their career growth.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
