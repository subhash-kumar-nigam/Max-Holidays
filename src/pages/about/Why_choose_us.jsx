import React from 'react';
import { Link } from 'react-router-dom'
import whychoose from '../../Assets/images/syho7.jpeg'
const WhyChooseUs = () => {
    return (
        <div>
            <div className='bg-light'>
                <div className="container-fluid about py-5">
                    <div className="container pb-5">
                        <div className="row pt-5">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="about-item-content  rounded p-5 h-100">
                                    <h4 className="whychooseheading">Why Shri Yog Health Organization?</h4>
                                    <h2 className="mt-3 mb-4 subheading">Empowering Health for Every Child</h2>
                                    <p className='ourptext'>
                                        Shri Yog Health Organization is committed to ensuring the health and well-being of children in rural areas. Our latest initiative, the "Nidan" project, aims to provide comprehensive health solutions, including preventive homeopathy medicines and routine medical check-ups for just ₹251 a year. We believe in fostering not only physical health but also mental well-being through specialized yoga and meditation camps tailored for children's developmental needs.
                                    </p>
                                    <p className='ourptext'>
                                        By recruiting coordinators and AYUSH doctors at the district level, we aim to establish diagnosis and consultation centers to deliver our services effectively. In alignment with our philosophy of community service, we will also extend these health initiatives to government schools at no cost, ensuring that every child has access to essential health care.
                                    </p>
                                    <Link className="btn btn-primary rounded-pill mt-4 py-3 px-5" to="/aboutus">More Information</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="rounded p-5">
                                    <img src={whychoose} alt='whychoose' className='img-fluid chooseus' />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
