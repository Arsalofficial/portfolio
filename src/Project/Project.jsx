import React, { useEffect } from 'react';
import './Project.css';
import 'aos/dist/aos.css'; // Import AOS styles
import '../HeroSection/Hero.css';
const Project = () => {
   useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animation will happen only once
      });
    }, []);
  return (
    <div className="project-container" id="projects">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      {/* Timeline Section */}
      <div className="timeline-container">
        {/* Timeline Item 1 */}
        <div className="timeline-item"  data-aos="fade-left">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
          <h3>E-commerce Website</h3>
<p>
  Developed a responsive e-commerce platform with secure transactions and  
  user-friendly navigation to enhance the online shopping experience.
</p>

          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item"  data-aos="fade-right">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
          <h3>Real Estate Project</h3>
<p>
  Developed a real estate platform showcasing properties with responsive design  
  and intuitive features for efficient property browsing and transactions.
</p>

          </div>
        </div>
        
        {/* Timeline Item 3 */}
        <div className="timeline-item"  data-aos="fade-left">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
          <h3>Google Project</h3>
<p>
  Designed and implemented a project leveraging Google's tools and APIs to  
  deliver innovative solutions with a focus on functionality and user experience.
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
