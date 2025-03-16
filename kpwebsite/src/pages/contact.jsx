import React, { useState } from 'react';
import bg from '../assets/bg.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email details
    const receiverEmail = 'pc@students.iitmandi.ac.in'; // Replace with your Gmail address
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    console.log('Email link opened with form data:', formData);
  };

  return (
    <>
    <div className="py-24 absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}/>
    <div className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}>
      </div>
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10">
        {/* Left side: Contact Form */}
        <div className="p-8 rounded-lg shadow-lg backdrop-blur-sm bg-black/30">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-white text-black transition duration-300 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm transition duration-300 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md focus:ring-2 text-black transition duration-300 focus:ring-white focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-black px-4 py-2 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                rows="5"
                placeholder="Your Message"
                required 
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white opacity-80 border-white transition-all py-2 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8)] duration-300 rounded-md text-black font-bold"
              >
              Send Email
            </button>
          </form>
        </div>

        {/* Right side: Profile */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 p-8 rounded-lg shadow-lg backdrop-blur-sm bg-black/30">
          <img
            src="./src/assets/teamphoto/abhijheetjha.jpeg" // Replace with your image URL
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-white border-4"
          />
          <h3 className="text-2xl font-bold">Abhijheet Jha</h3>
          <p className="text-gray-400">Coordinator</p>
          <p className="text-gray-400">Phone: +91 92637 30646</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;