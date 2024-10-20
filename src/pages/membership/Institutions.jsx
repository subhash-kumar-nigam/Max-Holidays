import React , {useEffect} from 'react';
import Head from '../../components/Head';

const Institutions = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Head pageheading="Institutions Membership" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Syho Membership for Educational Institutions</h1>
        
            <h2 className="liheading pb-3 administrativesub">For Syho Educational Institutions</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Accreditation and Quality Assurance:</strong> Syho sets high accreditation standards, ensuring that educational institutions provide quality education and adhere to ethical practices in Syho disciplines.
              </li>
              <li className='py-2'>
                <strong>Curriculum Development and Research Support:</strong> Syho provides guidance and support for developing modern curricula and encourages research activities within Syho institutions.
              </li>
              <li className='py-2'>
                <strong>Faculty Development and Exchange Programs:</strong> Syho facilitates faculty development and exchange initiatives, promoting knowledge sharing and innovative practices among institutions.
              </li>
              <li className='py-2'>
                <strong>Placement Assistance for Graduates:</strong> Syho connects Syho graduates with potential employers and healthcare facilities, supporting their professional growth and career opportunities.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institutions;
