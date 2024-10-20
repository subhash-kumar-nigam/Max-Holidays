import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const ContactHome = () => {
  return (
    <div>
      <div className='contactbg' id='contactus'>
        <section id="contact" class="contact section text-white">
          <div className="container  text-center" data-aos="fade-up">
            <h2 className='text-center appointmentheading'>Contact Us</h2>
            <h6 className='text-center pt-2 text-white'>Get in Touch with Us for Any Queries, Feedback, or Support. We're Here to Help You!</h6>
          
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-5 py-5">
              <div className="col-lg-4">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <FaMapMarkerAlt className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Location</h3>
                    <p><Link className="text-white text-decoration-none" to="https://maps.app.goo.gl/QxG3nh5N7vw6DFuq5" target="_blank" rel="noopener noreferrer">Sewagram road Khajuraho Distt. Chhatarpur, Khajuraho, India, Madhya Pradesh</Link></p>
                    </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <FaPhoneAlt className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Call Us</h3>
                    <p className="m-0"><Link to="tel:9584284411" className="text-light text-decoration-none">9584284411</Link></p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <FaEnvelope className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Email Us</h3>
                    <p><Link to="mailto:syhoindia@gmail.com" className="text-light text-decoration-none">
                    syhoindia@gmail.com</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div class="col-lg-7">
                <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div class="row gy-4">

                    <div class="col-md-6">
                      <input type="text" name="name" class="form-control" placeholder="Full Name" required="" />
                    </div>

                    <div class="col-md-6 ">
                      <input type="text" class="form-control" name="mobile" placeholder="Mobile Number" required="" />
                    </div>
                    <div class="col-md-12">
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                    </div>

                    <div class="col-md-12">
                      <textarea class="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                    </div>
                    <div class="col-md-12 text-center mt-5 ">   
                      <button type="submit" className='text-start'>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.354037494655!2d79.92331511104922!3d24.851755045513688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982e606da22d497%3A0x640980491b0a817f!2sSewagram%20Rd%2C%20Sevagram%2C%20Khajuraho%2C%20Madhya%20Pradesh%20471606!5e0!3m2!1sen!2sin!4v1729142970853!5m2!1sen!2sin" width="1518" height="450" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
         </div>
    </div>
  )
}

export default ContactHome
