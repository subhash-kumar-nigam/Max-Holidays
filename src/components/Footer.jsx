import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
       <footer className="ftco-footer ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md">
          <div className="ftco-footer-widget mb-4">
    <h2 className="ftco-heading-2">Shri Yog Health Organization</h2>
    <p>Shri Yog Health Organization (SYHO) is dedicated to enhancing the well-being of individuals through a holistic approach, blending traditional Indian healing practices with modern health solutions. SYHO strives to promote wellness, self-regulation, and collaborative growth within the AYUSH community.</p>
</div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Popular Links</h2>
              <ul className="list-unstyled">
                <li><Link to="/membershipform" className='text-decoration-none footer-text'>Membership Registration</Link></li>
                <li><Link to="/membership_registration" className='text-decoration-none footer-text'>About Membership</Link></li>
                <li><Link to="/leadership" className='text-decoration-none footer-text'>ILeadership</Link></li>
                <li><Link to="/allmember" className='text-decoration-none footer-text'>All Member</Link></li>
                <li><Link to="/consultancy" className='text-decoration-none footer-text'>Consultancy</Link></li>
                <li><Link to="/career" className='text-decoration-none footer-text'>Career</Link></li>
                <li><Link to="/focussector" className='text-decoration-none footer-text'>Sectors</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><Link to="/" className='text-decoration-none footer-text'>Home</Link></li>
                <li><Link to="/aboutus" className='text-decoration-none footer-text' >About</Link></li>
                <li><Link to="/contact" className='text-decoration-none footer-text'>Contactc us</Link></li>
                <li><Link to="/gallery" className='text-decoration-none footer-text'>Gallery</Link></li>
                <li><Link to="/press_release" className='text-decoration-none footer-text'>Press Release</Link></li>
                <li><Link to="/newsandupdate" className='text-decoration-none footer-text'>News</Link></li>
                <li><Link to="/event_video" className='text-decoration-none footer-text'>Event Video</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><Link to="https://maps.app.goo.gl/QxG3nh5N7vw6DFuq5" className="text-decoration-none">Sewagram road Khajuraho Distt. Chhatarpur, Khajuraho, India, Madhya Pradesh</Link></li>
                  <li><Link to="tel:9584284411" className='text-decoration-none'><span className="icon icon-phone text-decoration-none"></span><span className="text">+91-9584284411</span></Link></li>
                  <li><Link to="mailto:syhoindia@gmail.com" className='text-decoration-none'><span className="icon icon-envelope"></span><span className="text">syhoindia@gmail.com</span></Link></li>
                </ul>
                <ul className="ftco-footer-social list-unstyled  text-center">
                <li className="ftco-animate"><Link to="#"><i className="fab fa-twitter "></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-whatsapp"></i></Link></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">

            <p className="mb-0">
          
              Copyright &copy;<script>
                document.write(new Date().getFullYear());

              </script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
             
            </p>
          </div>
        </div> */}
      </div>
    </footer>
    </div>  
  )
}

export default Footer
