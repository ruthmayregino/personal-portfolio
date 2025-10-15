import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import "./App.css";

export default function App() {
  const images = [
    "src/assets/home1.heic",
    "src/assets/home2.heic",
    "src/assets/home3.heic",
    "src/assets/home4.heic",
    "src/assets/home5.jpeg",
  ];

  const aboutImages = [
    "src/assets/AboutMe1.JPG",
    "src/assets/AboutMe2.jpeg",
    "src/assets/AboutMe3.heic",
    "src/assets/AboutMe4.jpeg",
    "src/assets/AboutMe5.JPG",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAbout, setCurrentAbout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAbout((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portfolio">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#businesses">Businesses</a></li>
            <li><a href="#resume">Connect With Me</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HOME ===== */}
      <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I’m <span>Ruth May P. Regino</span>
            </h1>
            <p className="subtitle">Aspiring Project Manager</p>
          </div>

          <div className="hero-slideshow">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Hero ${index + 1}`}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== ABOUT ===== */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ===== ABOUT SLIDESHOW ===== */}
        <div className="about-slideshow">
          {aboutImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`About ${index + 1}`}
              className={index === currentAbout ? "active" : ""}
            />
          ))}
        </div>

        {/* ===== ABOUT TEXT ===== */}
        <h2>About Ruth May</h2>
        <p>
          Ruth May Regino is a highly driven and results-oriented professional dedicated to solving complex problems and fostering innovation within traditional environments. Originally hailing from Agno, Pangasinan, she currently resides in San Fernando City, Pampanga. She comes from a close-knit family, where she grew up alongside her two brothers. Ruth cherishes the memories of her childhood, especially the moments when her family was complete and filled with laughter and warmth. She loves spending time with her family, and her bond with them remains strong to this day, especially with her two nieces and nephews, Sofia Aeon and Eliseo Aaron.
        </p>
        <p>
          Her unique background, rooted in hands-on technical experience and a passion for operational efficiency, fuels her commitment to introducing practical, technology-driven solutions that streamline workflows and cut down on waste. Growing up, Ruth’s family operated a business specializing in the fabrication of glass and aluminum products. From a young age, she learned the value of precision, patience, and hands-on problem-solving, skills that would later shape her professional approach.
        </p>
        <p>
          Ruth’s greatest professional passion lies in identifying bottlenecks and implementing accessible solutions that drive genuine change. This was exemplified during her tenure in government service, where she recognized a crucial challenge: the organization’s processes were slowed significantly by a reliance on traditional, paper-based workflows, despite having access to computers. Seeing this lack of technological advancement as a major problem, Ruth took the initiative to introduce a solution. She successfully advocated for and implemented the use of online storage platforms like Google Drive. This transition allowed the department to store documents digitally, facilitate easy, instant sharing of information among colleagues, and drastically reduce the time and resources spent on unnecessary printing and physical document handling.
        </p>
        <p>
          Ruth’s innate ability to fix, assemble, and optimize started at a young age, inherited from her parents. She carries with her the lessons from her upbringing: the importance of family, diligence, and practical problem-solving. These early experiences, combined with her professional journey, make Ruth a person who values both efficiency and meaningful connections, constantly striving to create solutions that improve the lives of others.
        </p>
      </motion.section>

      {/* ===== PROJECTS ===== */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Current Project</h2>

        <div className="project-card" style={{ textAlign: "center" }}>
          <a href="https://sleepywear-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="src/assets/logo_orig.png" 
              alt="Sleepywears.ph Logo" 
              style={{ width: "300px", height: "300px", objectFit: "contain", marginBottom: "15px" }}
            />
          </a>
          
          <h3>A Business Management System</h3>

          <p style={{ textAlign: "justify" }}>
            The development of a web-based Business Management System specifically designed for Sleepywears.ph to address its existing operational challenges. The system will automate the manual processes of recording orders, generating invoices, tracking sales performance, and monitoring inventory. By transitioning from paper-based documentation to a digital platform, the system aims to improve accuracy, efficiency, and accessibility of business data.
          </p>

          <p style={{ textAlign: "justify" }}>
            Through its integrated modules, the system will streamline key operations. The inventory tracking module will allow the owner to monitor product stocks, availability, and sold items in real time, preventing overstocking or shortages. The order management feature will record and organize customer orders efficiently, while the invoicing system will automatically generate digital invoices for confirmed purchases, minimizing human errors and saving time. Additionally, an income tracking dashboard will provide a clear view of gross and net income, helping the owner make informed financial decisions. The customer log module will store essential customer information, supporting repeat transactions and personalized service.
          </p>

          <p style={{ textAlign: "justify" }}>
            The system will feature a user-friendly interface designed for accessibility and ease of use, even for users with limited technical experience. It will also include a secure database to ensure data integrity and protection. By integrating these functions into a single platform, the proposed system will not only simplify business operations but also promote digital transformation for Sleepywears.ph. Ultimately, this solution will enhance efficiency, reduce errors, and provide the owner with a reliable and organized way to manage all aspects of the business.
          </p>
        </div>
      </motion.section>


      {/* ===== SKILLS ===== */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <strong>Computer Literate</strong>
            <p>Skilled in Microsoft Office and basic software tools</p>
          </div>
          <div className="skill-card">
            <strong>Problem Solving</strong>
            <p>Quick at identifying bottlenecks and creating solutions</p>
          </div>
          <div className="skill-card">
            <strong>Strong Communication</strong>
            <p>Effective in conveying ideas clearly and persuasively</p>
          </div>
          <div className="skill-card">
            <strong>Time Management</strong>
            <p>Efficient in planning and meeting deadlines consistently</p>
          </div>
          <div className="skill-card">
            <strong>Active Listening</strong>
            <p>Attentive and responsive in understanding needs</p>
          </div>
          <div className="skill-card">
            <strong>Attention to Detail</strong>
            <p>Meticulous in reviewing work to ensure accuracy</p>
          </div>
          <div className="skill-card">
            <strong>Microsoft Software Literate</strong>
            <p>Proficient in Word, Excel, PowerPoint, and Outlook</p>
          </div>
          <div className="skill-card">
            <strong>Leadership Skills</strong>
            <p>Able to guide and motivate team members effectively</p>
          </div>
        </div>
      </motion.section>

      {/* ===== BUSINESSES ===== */}
      <motion.section
        id="businesses"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Businesses</h2>
        <div className="business-gallery">
          {/* Business 1 */}
          <div className="business-item">
            <img src="src/assets/Shrimp.HEIC" alt="Fresh Shrimps" className="business-photo" />
            <div className="business-text">
              <h3>Fresh Shrimps</h3>
              <p>
                I source fresh shrimps from a trusted supplier in our hometown, Agno. He provides me with competitive prices, which I then sell here in Pampanga. The shrimps are always freshly harvested from the farm.
              </p>
            </div>
          </div>

          {/* Business 2 */}
          <div className="business-item">
            <img src="src/assets/Bangus.jpeg" alt="Daing na Bangus and Tinapa" className="business-photo" />
            <div className="business-text">
              <h3>Daing na Bangus and Tinapa</h3>
              <p>
                I purchase these products directly from the public market in Alaminos, Pangasinan. They are always freshly prepared and highly sought after, often selling out quickly. I also sell this in Pampanga.
              </p>
            </div>
          </div>

          {/* Business 3 */}
          <div className="business-item">
            <img src="src/assets/Flyers.heic" alt="Campaign Flyers" className="business-photo" />
            <div className="business-text">
              <h3>Campaign Flyers</h3>
              <p>
                During the campaign period of the last election, I took advantage of the high demand for flyers to start a business producing them. This allowed me to provide a needed service while earning income.
              </p>
            </div>
          </div>

          {/* Business 4 */}
          <div className="business-item">
            <img src="src/assets/eskhavi.HEIC" alt="Es'khavi" className="business-photo" />
            <div className="business-text">
              <h3>Es'khavi</h3>
              <p>
                This business started from my love for coffee. I wanted to promote freshly ground coffee beans to ensure customers receive maximum benefits from their nutrients. The name “Es'khavi” also plays on the word “escape” and “kape,” representing a moment of relaxation with every cup.
              </p>
              <p>
                Instagram: <a href="https://www.instagram.com/es_khavi?igsh=YTkxZzRwMGxwNTJl" target="_blank" rel="noopener noreferrer">@es_khavi</a>
              </p>
            </div>
          </div>
        </div> 
      </motion.section>


     {/* ===== RESUME & CONTACTS ===== */}
      <motion.section
        id="resume"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="resume-container">
          {/* Left Column */}
          <div className="resume-left">
            <h2>Resume</h2>
            <p>
              I’ve summarized my professional journey in this resume. It includes my career objectives, personal details, skills, education, and career history. Feel free to download it to see more about my experiences and growth!
            </p>
            <a href="src/assets/resume.pdf" className="download-btn" download>
              Download My Resume
            </a>
          </div>

          {/* Right Column */}
          <div className="resume-right">
            <h2>Contact Me</h2>
            <ul className="contact-list">
              <li><FaEnvelope className="contact-icon" /> <a href="mailto:ruthmayreginos2786@gmail.com">ruthmayreginos2786@gmail.com</a></li>
              <li><FaPhone className="contact-icon" /> <a href="tel:+639385548702">+63 938 554 8702</a></li>
              <li><FaFacebookF className="contact-icon" /> <a href="https://www.facebook.com/share/1FcDns6Sh8/?mibextid=wwXIfr" target="_blank">facebook.com/ruthmayregino</a></li>
              <li><FaInstagram className="contact-icon" /> <a href="https://www.instagram.com/rutmeii/" target="_blank">instagram.com/rutmeii</a></li>
              <li><FaGithub className="contact-icon" /> <a href="https://github.com/ruthmayregino" target="_blank">github.com/ruthmayregino</a></li>
            </ul>
          </div>
        </div>
      </motion.section>


      <footer>
        <p>© 2025 Ruth May P. Regino | All Rights Reserved</p>
      </footer>
    </div>
  );
}
