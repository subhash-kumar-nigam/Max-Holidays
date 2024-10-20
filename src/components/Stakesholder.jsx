import React, { useEffect } from 'react'
import Head from '../components/Head';
import { Link } from 'react-router-dom'
import Doctors from '../pages/about/AllStackholders/Doctors';
import Institution from '../pages/about/AllStackholders/Institution';
import WellnessCenter from '../pages/about/AllStackholders/WellnessCenter'
import Products from '../pages/about/AllStackholders/Products'
import ManufacturersTraders from '../pages/about/AllStackholders/ManufacturersTraders'
const Stakesholder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Head pageheading="All Stakesholder" />
            <div className="container-fluid service pt-5 wow fadeInUp" data-wow-delay="0.2s" >
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 " >
                        <h4 className="mainheading">Our Stakesholder</h4>
                        <h3 className="subheading mb-4">Engaging Stakeholders for Transformative Solutions</h3>
                    </div>
                  <Doctors />
                  <Institution />
                  <WellnessCenter />
                  <Products />
                  <ManufacturersTraders />
                </div>
            </div>
        </div>
    )
}
export default Stakesholder