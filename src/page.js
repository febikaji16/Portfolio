
import { useState } from "react"
import Image from "./assets/photo.png"
import "./portfolio.css"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectDetails = {
    "decentralized-vpn": {
      title: "Decentralized VPN for IoT",
      fullDescription: `This project addresses the growing need for secure, scalable, and decentralized communication among IoT devices by developing a Blockchain-Based Decentralized VPN (dVPN). Traditional VPNs depend on centralized infrastructures, which are prone to single points of failure and security vulnerabilities. Our proposed dVPN system overcomes these limitations using Hyperledger Fabric, smart contracts (Chaincode), OpenVPN, Docker, and Prometheus.`,
      keyFeatures: [
        "Decentralization: Eliminated central authority through blockchain-based VPN node management.",
        "Security & Privacy: Ensured end-to-end encryption and tamper-proof device authentication.",
        "Scalability: Containerized VPN nodes using Docker for dynamic deployment.",
        "Automated Trust: Reputation-based node selection and smart contract-driven reward system.",
        "Monitoring: Real-time performance tracking via Prometheus and Grafana dashboards.",
      ],
      technologies: ["Hyperledger Fabric", "Chaincode (Go)", "OpenVPN", "Docker", "Prometheus", "Grafana", "Ubuntu"],
      outcomes:
        "The implemented prototype demonstrated improved security, reduced reliance on centralized servers, and robust performance in a controlled test environment. The system proved resilient against common IoT threats like man-in-the-middle attacks, unauthorized access, and data breaches.",
      futureScope:
        "Integration of AI/ML for anomaly detection, edge optimization for low-power devices, and cross-chain compatibility for wider adoption.",
    },
    "smart-cart": {
      title: "Smart Cart System",
      fullDescription: `An innovative IoT-based shopping cart system that revolutionizes the retail experience by automating item detection, billing, and inventory management. The system uses Arduino and ESP32 microcontrollers combined with infrared tag technology to create a seamless shopping experience.`,
      keyFeatures: [
        "Automatic Item Detection: RFID/Infrared sensors detect items when placed in cart.",
        "Real-time Billing: Instant price calculation and running total display.",
        "Inventory Management: Automatic stock updates and low-stock alerts.",
        "Mobile Integration: Companion app for payment processing and receipt generation.",
        "Anti-theft Protection: Weight sensors and security alerts for unauthorized removal.",
      ],
      technologies: [
        "Arduino",
        "ESP32",
        "RFID/Infrared Sensors",
        "WiFi Module",
        "Mobile App Development",
        "Database Management",
      ],
      outcomes:
        "Successfully reduced checkout time by 70%, eliminated queue waiting, and improved customer satisfaction. The system demonstrated 99% accuracy in item detection and billing calculations.",
      futureScope:
        "Integration with AI for product recommendations, voice control features, and expansion to multiple store locations with centralized management.",
    },
    "oral-hygiene": {
      title: "Oral Hygiene System (Patent)",
      fullDescription: `A groundbreaking innovation in dental care that addresses the environmental impact of traditional toothbrushes while improving oral hygiene effectiveness. The system features a reusable handle with replaceable pre-pasted brush heads, reducing plastic waste and ensuring optimal brushing experience.`,
      keyFeatures: [
        "Eco-friendly Design: Reusable handle reduces plastic waste by 80%.",
        "Pre-pasted Brush Heads: Eliminates need for separate toothpaste application.",
        "Ergonomic Handle: Designed for comfortable grip and optimal brushing angles.",
        "Biodegradable Components: Brush heads made from sustainable materials.",
        "Cost-effective: Long-term savings compared to traditional toothbrushes.",
      ],
      technologies: [
        "Product Design",
        "Material Engineering",
        "Patent Filing",
        "Sustainability Research",
        "User Experience Design",
      ],
      outcomes:
        "Successfully filed for patent protection. Prototype testing showed 40% improvement in brushing effectiveness and 60% reduction in plastic waste compared to conventional toothbrushes.",
      futureScope:
        "Mass production planning, partnership with dental care brands, and development of smart features like brushing time tracking and pressure sensors.",
    },
    "school-website": {
      title: "St. Gregorios Public School Website",
      fullDescription: `A comprehensive web solution designed specifically for St. Gregorios Public School to enhance digital presence and streamline communication between school administration, teachers, students, and parents. The website features modern design principles and user-friendly navigation.`,
      keyFeatures: [
        "Responsive Design: Optimized for all devices including mobile, tablet, and desktop.",
        "Student Portal: Secure login for students to access assignments and grades.",
        "Parent Dashboard: Real-time updates on student progress and school activities.",
        "Event Management: Calendar integration for school events and announcements.",
        "Online Admissions: Streamlined application process with document upload.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "Content Management System"],
      outcomes:
        "Increased online engagement by 150%, reduced administrative workload by 40%, and improved parent-school communication efficiency. The website serves over 2000+ students and parents daily.",
      futureScope:
        "Integration of online learning management system, mobile app development, and AI-powered chatbot for instant query resolution.",
    },
    "flight-booking": {
      title: "Flight Booking System",
      fullDescription: `A comprehensive flight reservation system developed using Java Applets with MySQL database integration. The system provides a complete booking experience from flight search to ticket confirmation, designed to handle multiple users and real-time flight data.`,
      keyFeatures: [
        "Flight Search: Advanced search with filters for date, time, price, and airlines.",
        "Seat Selection: Interactive seat map with real-time availability.",
        "Payment Integration: Secure payment processing with multiple payment options.",
        "Booking Management: View, modify, and cancel reservations.",
        "Admin Panel: Flight management, pricing control, and booking analytics.",
      ],
      technologies: ["Java", "Java Applets", "MySQL", "JDBC", "Swing GUI", "Database Design"],
      outcomes:
        "Successfully handled concurrent bookings for 100+ users, processed 500+ test transactions with 99.9% accuracy, and demonstrated robust database performance under load testing.",
      futureScope:
        "Migration to web-based platform, integration with airline APIs, mobile app development, and AI-powered price prediction features.",
    },
    "jawan-fc": {
      title: "Jawan FC Website",
      fullDescription: `A dynamic and engaging website developed for Jawan Football Club to showcase team information, match schedules, player profiles, and club news. The platform serves as a central hub for fans and team management with modern web technologies.`,
      keyFeatures: [
        "Team Management: Player profiles, statistics, and performance tracking.",
        "Match Center: Live scores, fixtures, and match highlights.",
        "News & Updates: Latest club news, transfer updates, and announcements.",
        "Fan Engagement: Photo galleries, fan polls, and social media integration.",
        "Mobile Responsive: Optimized viewing experience across all devices.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "SQL Database", "RESTful APIs"],
      outcomes:
        "Increased fan engagement by 200%, streamlined team communication, and provided a professional online presence for the club. The website attracts 1000+ monthly visitors.",
      futureScope:
        "Live streaming integration, mobile app development, e-commerce for merchandise, and fan membership portal.",
    },
    "phishing-demo": {
      title: "Social Engineering Attack Demo",
      fullDescription: `An educational cybersecurity project demonstrating social engineering attack vectors through controlled phishing simulations. Developed using Kali Linux to raise awareness about cybersecurity threats and promote safe online practices.`,
      keyFeatures: [
        "Phishing Simulation: Realistic email and website replicas for educational purposes.",
        "Attack Vector Analysis: Demonstration of various social engineering techniques.",
        "Security Awareness: Educational content about identifying and preventing attacks.",
        "Controlled Environment: Safe testing environment with no real data compromise.",
        "Reporting System: Detailed analysis of attack success rates and user behavior.",
      ],
      technologies: [
        "Kali Linux",
        "Social Engineering Toolkit",
        "Apache",
        "PHP",
        "Network Security Tools",
        "Penetration Testing",
      ],
      outcomes:
        "Successfully demonstrated 15+ attack vectors, educated 50+ participants about cybersecurity risks, and achieved 90% improvement in security awareness among test subjects.",
      futureScope:
        "Development of comprehensive cybersecurity training modules, integration with corporate training programs, and advanced threat simulation capabilities.",
    },
  }

  const openModal = (projectId) => {
    setSelectedProject(projectId)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="nav-content">
            <h1 className="nav-title">Febi K Aji</h1>
            <div className="nav-links">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-container">
              <div className="hero-image">
                <img
                  src={Image}
                  alt="Febi K Aji"
                  fill
                  className="profile-image"
                />
              </div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Febi K Aji</h1>
              <p className="hero-subtitle">Computer Science Engineer & Cybersecurity Specialist</p>
              <p className="hero-description">
                A motivated and detail-oriented Computer Science Engineering graduate with a strong foundation in
                programming, data structures, and problem-solving. Experienced in developing efficient software
                solutions and adept at leveraging modern technologies to deliver innovative results.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          {/* Skills */}
          <div className="skills-container">
            <div className="skills-column">
              <h3 className="skills-title">
                <span className="icon">💻</span>
                Hard Skills
              </h3>
              <div className="skill-category">
                <h4 className="skill-category-title">Programming Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag blue">Python</span>
                  <span className="skill-tag blue">Java</span>
                  <span className="skill-tag blue">C++</span>
                  <span className="skill-tag blue">C#</span>
                  <span className="skill-tag blue">JavaScript</span>
                  <span className="skill-tag blue">Flutter</span>
                  <span className="skill-tag blue">Embedded C</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Web Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag green">HTML</span>
                  <span className="skill-tag green">CSS</span>
                  <span className="skill-tag green">JavaScript</span>
                  <span className="skill-tag green">React</span>
                  <span className="skill-tag green">Node.js</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Cybersecurity Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag red">Metasploit</span>
                  <span className="skill-tag red">Wireshark</span>
                  <span className="skill-tag red">Nmap</span>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3 className="skills-title">
                <span className="icon">🛡️</span>
                Soft Skills
              </h3>
              <div className="soft-skills-grid">
                <div className="soft-skill-item">Observation</div>
                <div className="soft-skill-item">Decision Making</div>
                <div className="soft-skill-item">Communication</div>
                <div className="soft-skill-item">Multi-tasking</div>
                <div className="soft-skill-item">Leadership</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education-section">
            <h3 className="education-title">
              <span className="icon">🎓</span>
              Education Background
            </h3>
            <div className="education-grid">
              <div className="education-card">
                <h4 className="education-school">Christ Vidyanikethan</h4>
                <p className="education-grade">ICSE - 94% | ISC - 92%</p>
                <p className="education-description">Secondary & Higher Secondary Education</p>
              </div>
              <div className="education-card">
                <h4 className="education-school">Christ University</h4>
                <p className="education-degree">Bachelor of Technology in Computer Science Engineering</p>
                <p className="education-honors">Honours in Cyber Security</p>
                <p className="education-cgpa">CGPA - 8.7/10</p>
                <p className="education-years">2022-2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>

          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">Full Stack Developer</h3>
                  <p className="experience-company">CGI Inc, Bangalore</p>
                </div>
                <span className="experience-date blue-badge">May 2025</span>
              </div>
              <ul className="experience-duties">
                <li>Full Stack Development of ASOP Dashboard</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">Quality Analyst Intern</h3>
                  <p className="experience-company">HTIC Global, Kochi, Kerala</p>
                </div>
                <span className="experience-date green-badge">May 2024</span>
              </div>
              <ul className="experience-duties">
                <li>Manual Testing of HRMS website</li>
                <li>Automation Testing of HRMS website using Java and Selenium</li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="achievements-section">
            <h3 className="achievements-title">
              <span className="icon">🏆</span>
              Achievements
            </h3>
            <div className="achievement-card">
              <p className="achievement-text">
                <span className="achievement-highlight">Meritorious Scholarship</span> from Christ University for
                outstanding academic performance (May 2024)
              </p>
            </div>
            <div className="achievement-card1">
              <p className="achievement-text1">
                <span className="achievement-highlight">Meritorious Scholarship</span> from Christ University for
                outstanding academic performance (May 2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            <div className="project-card purple" onClick={() => openModal("decentralized-vpn")}>
              <div className="project-header">
                <span className="project-icon">🛡️</span>
                <h3 className="project-title">Decentralized VPN for IoT</h3>
              </div>
              <p className="project-description">
                Developed a decentralized VPN solution specifically designed for IoT devices using Hyperledger
                blockchain technology for enhanced security and privacy.
              </p>
              <div className="project-tags">
                <span className="project-tag purple">Hyperledger</span>
                <span className="project-tag purple">IoT</span>
                <span className="project-tag purple">Blockchain</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card green" onClick={() => openModal("smart-cart")}>
              <div className="project-header">
                <span className="project-icon">🔧</span>
                <h3 className="project-title">Smart Cart System</h3>
              </div>
              <p className="project-description">
                Built an intelligent shopping cart system using Arduino and ESP32 microcontrollers with infrared tag
                technology for automated item detection and billing.
              </p>
              <div className="project-tags">
                <span className="project-tag green">Arduino</span>
                <span className="project-tag green">ESP32</span>
                <span className="project-tag green">IoT</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card blue" onClick={() => openModal("oral-hygiene")}>
              <div className="project-header">
                <span className="project-icon">🏆</span>
                <h3 className="project-title">Oral Hygiene System (Patent)</h3>
              </div>
              <p className="project-description">
                Innovative system for improving oral hygiene using a reusable handle and replaceable pre-pasted brush
                heads. Successfully filed for patent protection.
              </p>
              <div className="project-tags">
                <span className="project-tag blue">Patent</span>
                <span className="project-tag blue">Innovation</span>
                <span className="project-tag blue">Healthcare</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card orange" onClick={() => openModal("school-website")}>
              <div className="project-header">
                <span className="project-icon">🌐</span>
                <h3 className="project-title">St. Gregorios Public School Website</h3>
              </div>
              <p className="project-description">
                Designed and developed a comprehensive website for St. Gregorios Public School featuring modern design,
                responsive layout, and user-friendly navigation.
              </p>
              <div className="project-tags">
                <span className="project-tag orange">Web Development</span>
                <span className="project-tag orange">Education</span>
                <span className="project-tag orange">Responsive</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card indigo" onClick={() => openModal("flight-booking")}>
              <div className="project-header">
                <span className="project-icon">💻</span>
                <h3 className="project-title">Flight Booking System</h3>
              </div>
              <p className="project-description">
                Developed a comprehensive flight ticket booking software using Java Applets with MySQL database
                integration for data management.
              </p>
              <div className="project-tags">
                <span className="project-tag indigo">Java</span>
                <span className="project-tag indigo">MySQL</span>
                <span className="project-tag indigo">Applets</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card teal" onClick={() => openModal("jawan-fc")}>
              <div className="project-header">
                <span className="project-icon">🌐</span>
                <h3 className="project-title">Jawan FC Website</h3>
              </div>
              <p className="project-description">
                Created a dynamic website for Jawan Football Club using modern web technologies including HTML, CSS,
                JavaScript, Node.js, and SQL database.
              </p>
              <div className="project-tags">
                <span className="project-tag teal">HTML/CSS</span>
                <span className="project-tag teal">Node.js</span>
                <span className="project-tag teal">SQL</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>

            <div className="project-card red" onClick={() => openModal("phishing-demo")}>
              <div className="project-header">
                <span className="project-icon">🛡️</span>
                <h3 className="project-title">Social Engineering Attack Demo</h3>
              </div>
              <p className="project-description">
                Developed a phishing link demonstration using Kali Linux to showcase social engineering attack vectors
                for educational and security awareness purposes.
              </p>
              <div className="project-tags">
                <span className="project-tag red">Kali Linux</span>
                <span className="project-tag red">Cybersecurity</span>
                <span className="project-tag red">Ethical Hacking</span>
              </div>
              <div className="project-click-hint">Click to learn more →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>

          <div className="certifications-grid">
            <div className="certification-card">
              <span className="certification-icon">🏆</span>
              <span className="certification-text">Introduction to Cybersecurity - CISCO</span>
            </div>
            <div className="certification-card">
              <span className="certification-icon">🏆</span>
              <span className="certification-text">Introduction to CISCO Packet Tracer - CISCO</span>
            </div>
            <div className="certification-card">
              <span className="certification-icon">🏆</span>
              <span className="certification-text">Introduction to MatLab</span>
            </div>
            <div className="certification-card">
              <span className="certification-icon">🏆</span>
              <span className="certification-text">Network Basics - CISCO</span>
            </div>
            <div className="certification-card">
              <span className="certification-icon">🏆</span>
              <span className="certification-text">Introduction to IoT - CISCO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-title">Contact Information</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-details">
                    <p className="contact-label">Email</p>
                    <a href="mailto:febikaji.ijk@gmail.com" className="contact-link">
                      febikaji.ijk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div className="contact-details">
                    <p className="contact-label">Phone</p>
                    <a href="tel:+916238948441" className="contact-link">
                      +91 6238948441
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <p className="contact-label">Address</p>
                    <p className="contact-address">
                      Kottinickal House, Christ College Road
                      <br />
                      Irinjalakuda, Kerala
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💻</span>
                  <div className="contact-details">
                    <p className="contact-label">GitHub</p>
                    <a
                      href="https://github.com/febikaji16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      View my repositories →
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div className="contact-details">
                    <p className="contact-label">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/febi-k-aji-a54150281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Connect with me →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p> 2025 Febi K Aji. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{projectDetails[selectedProject].title}</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Project Overview</h3>
                <p className="modal-description">{projectDetails[selectedProject].fullDescription}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">🔹 Key Features</h3>
                <ul className="modal-list">
                  {projectDetails[selectedProject].keyFeatures.map((feature, index) => (
                    <li key={index} className="modal-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">🔧 Tools & Technologies Used</h3>
                <div className="modal-tech-tags">
                  {projectDetails[selectedProject].technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">🧠 Outcomes</h3>
                <p className="modal-description">{projectDetails[selectedProject].outcomes}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">🔭 Future Scope</h3>
                <p className="modal-description">{projectDetails[selectedProject].futureScope}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
