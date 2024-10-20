import React, { useState } from 'react';

const OtherSector = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the backend.
    console.log('Donation Form Submitted:', formData);
  };

  return (
    <div>
      <section className="ftco-section ftco-no-pb ftco-no-pt py-5 wow fadeInUp vissionbg">
        <div className="container">
          <div className="px-4 ">
            <div className="py-lg-5">
              <div className='text-center'>
                <h2 className="mb-4">Support Our Cause</h2>
                <p className="mb-5">Your generosity helps us continue our mission to provide healthcare and support to those in need.</p>
              </div>
              <form onSubmit={handleSubmit} className="donation-form rounded p-4">
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control bg-transparent  donationform text-white" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name"
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="number" 
                    className="form-control bg-transparent  donationform text-white" 
                    id="phone" 
                    name="phone" 
                    placeholder="Your Phone"
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="number" 
                    className="form-control bg-transparent  donationform text-white" 
                    id="amount" 
                    name="amount" 
                    placeholder="Donation Amount (₹)"
                    value={formData.amount} 
                    onChange={handleChange} 
                    required 
                    min="1"
                   
                  />
                </div>
                <div className="">
                  <textarea 
                    className="form-control bg-transparent  donationform text-white" 
                    id="message" 
                    name="message" 
                    rows="3" 
                    placeholder="Message (Optional)"
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="pt-5 text-center">
                  <button type="submit" className="text-center btn-lg font-weight-bold border-0 text-decoration-none bannerbtn">
                    Donate Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherSector;
