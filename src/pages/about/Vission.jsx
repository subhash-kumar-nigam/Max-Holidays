import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faBullseye, faCheck } from '@fortawesome/free-solid-svg-icons';

const Vission = () => {
    return (
        <div>
            <div className="container-fluid about bg-banner py-5">
                <div className="container pb-5">
                    <div className="row pt-5 g-5">
                        {/* Vision Section */}
                        <div className="col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <FontAwesomeIcon icon={faEye} size="2x" className="mb-3 vissionmissioniocns" />
                                <h4 className="becomemember">Our Vision</h4>
                                <ul className="list-unstyled mt-3">
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Create a healthier society with holistic healthcare.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Provide every child access to education and well-being.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Integrate traditional healing with modern practices.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Foster a culture of wellness and compassion.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <div className="col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <FontAwesomeIcon icon={faHeart} size="2x" className="mb-3 vissionmissioniocns" />
                                <h4 className="becomemember">Our Mission</h4>
                                <ul className="list-unstyled mt-3">
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        The Nidan program promotes better health and mental development among children.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Providing a comprehensive health package at a nominal fee of ₹251 per child per year.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Ensuring accessibility of homeopathic medicines and wellness programs like yoga and meditation.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Community Collaboration Section */}
                        <div className="col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <FontAwesomeIcon icon={faBullseye} size="2x" className="mb-3 vissionmissioniocns" />
                                <h4 className="becomemember">Community Collaboration</h4>
                                <ul className="list-unstyled mt-3">
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Building a network of coordinators and Ayurvedic doctors across all districts.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Coordinators working directly with schools to implement the program effectively.
                                    </li>
                                    <li className="ourptext" style={{ fontSize: '0.9rem' }}>
                                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                                        Providing special training sessions to coordinators for impactful delivery.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vission;
