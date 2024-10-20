import React from 'react';
import { Link } from 'react-router-dom'
const JoinNow = () => {
    return (
        <div>
            <section className="ftco-section ftco-no-pb ftco-no-pt py-5 wow fadeInUp tutotbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tutotbg w-100 rounded p-4">
                                <div className="row">
                                    <div className="col-md-7 align-items-center">
                                        <h3 className="mb-4 becomemember">
                                            Become A Member
                                        </h3>
                                        <p className='mainheading'>
                                            Join the Shri Yog Health Organization (Syho) and the Integrated Ayush Council Panel to prioritize your health and wellness while building your brand and growing your business today.
                                        </p>
                                        <h3 className="becomemember">
                                            Are you a Faculty, Practitioner, Hospital Administrator, Manufacturer, Trader, or Other Stakeholder?
                                        </h3>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center justify-content-end">
                                        <div className="subscribe-form">
                                            <div className="form-group d-flext">
                                                <Link to="/membershipform" className="becometutorbtn text-decoration-none px-3 mainheading  pop-button border-0">
                                                    Membership Form
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinNow;
