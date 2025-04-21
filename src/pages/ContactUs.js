import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

          

            {/* Message */}
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
