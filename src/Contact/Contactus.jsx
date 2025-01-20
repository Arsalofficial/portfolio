import React from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; 
const ContactUs = () => {
  return (
    <div id='contact'>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between p-8">
      
        {/* Contact Form Section */}
        <div className="w-full lg:w-2/3 p-8 rounded-lg space-y-4"  data-aos="fade-left">
          <h1 className="text-3xl font-bold text-start text-[#22D3EE] mb-6">Get in touch</h1> {/* Heading placed above inputs */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-[#22D3EE] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] shadow-[0_0_8px_#0ef] transition placeholder:font-semibold"
            />

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-[#22D3EE] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE]  shadow-[0_0_8px_#0ef] transition placeholder:font-semibold"
            />
          </div>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-[#22D3EE] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE]  shadow-[0_0_8px_#0ef] transition placeholder:font-semibold"
          />

          {/* Message Input */}
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-[#22D3EE] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE]  shadow-[0_0_8px_#0ef] transition placeholder:font-semibold"
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full bg-[#22D3EE] text-black font-bold py-3 rounded-3xl hover:bg-[#22D3EE] shadow-[0_0_20px_#0ef] transition">Submit Button</button>
        </div>

        {/* Newsletter Section */}
        <div className="w-full lg:w-1/3 border-2 border-[#22D3EE] shadow-[0_0_8px_#0ef] hover:shadow-[0_0_20px_#0ef] transition p-8 rounded-3xl mt-6 lg:mt-16 lg:ml-8"  data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Let’s Create</h2>
          <p className="text-gray-200 mb-6">
          I am a Front-End Developer building responsive websites with HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border-2 border-[#22D3EE] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] shadow-[0_0_8px_#0ef] placeholder:font-semibold"
          />
          <button className="w-full bg-black text-white py-3 font-semibold rounded-3xl hover:bg-[#0f0d0d] transition"> Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
