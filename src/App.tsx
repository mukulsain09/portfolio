import SocTerminal from './components/SocTerminal'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">MS.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="subtitle">B.Tech - M.Tech. Computer Science & Engineering (Cyber Security)</p>
            <h1 className="title">Hi, I'm <span className="highlight">Mukul Sain</span>.</h1>
            <p className="description">
              Cybersecurity enthusiast and engineer specializing in forensic analysis, incident response, and GRC frameworks.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-terminal">
            <SocTerminal />
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I am a Computer Science & Engineering student at the National Forensic Sciences University (NFSU), Gandhinagar. I am passionate about digital forensics, threat hunting, and ensuring organizational security through robust GRC practices.
          </p>
          <p>
            With experience in cybercrime investigation and forensic tool development, I aim to bridge the gap between technical defense and strategic security management.
          </p>
        </div>
      </section>

      <section id="experience" className="section experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="exp-header">
              <h3>Cybersecurity Intern</h3>
              <span className="exp-date">July 2025</span>
            </div>
            <span className="exp-company">Uttar Pradesh Police, Amroha</span>
            <ul>
              <li>Gained hands-on experience in cybercrime investigation and incident response.</li>
              <li>Utilized OSINT techniques for gathering intelligence and digital forensics for evidence analysis.</li>
              <li>Collaborated with law enforcement to understand real-world cybersecurity challenges.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-category">
          <h3 className="category-title">☁️ Cloud & Network Defense</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Cloud-Based IDS</h3>
              <p>An automated, cloud-native detection system using AWS CDK, Lambda, and SNS. Features real-time VPC Flow Log analysis and instant alerting.</p>
              <div className="tags"><span>AWS CDK</span> <span>Python</span> <span>Lambda</span> <span>SNS</span> <span>VPC Flow Logs</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/CLOUD-BASED-INTRUSION-DETECTION-SYSTEM" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>ML-Based Intrusion Detection</h3>
              <p>An anomaly detection engine trained on the NSL-KDD dataset using Scikit-Learn to classify malicious network traffic.</p>
              <div className="tags"><span>Python</span> <span>Scikit-Learn</span> <span>Machine Learning</span> <span>NSL-KDD</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/ML-BASED-INTRUSIONDETECTION" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-category">
          <h3 className="category-title">🔍 Digital Forensics (DFIR)</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Windows Forensic Analysis Suite v2.0</h3>
              <p>A comprehensive powerhouse for automated discovery and visualization of 8+ critical Windows artifacts (Prefetch, LNK, ShellBags, etc.).</p>
              <div className="tags"><span>Python</span> <span>Flask</span> <span>SQLite</span> <span>Matplotlib</span> <span>DFIR</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/WINDOWS-FORENSIC-ANALYSIS-SUITE-VERSION-2.0-" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Windows Artifacts Parser</h3>
              <p>A specialized DFIR tool designed for deep-dive extraction and correlation of forensic evidence from Windows system files.</p>
              <div className="tags"><span>Python</span> <span>Forensics</span> <span>Registry Analysis</span> <span>Binary Parsing</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/WINDOWS-ARTIFACTS-PARSER" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-category">
          <h3 className="category-title">⚙️ Industrial & Adversarial Research</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h3>OT-CyberSim</h3>
              <p>A "Mini Power Plant" security lab simulating a SCADA environment (PLC/HMI) to study Modbus TCP vulnerabilities and defense strategies.</p>
              <div className="tags"><span>SCADA</span> <span>Modbus TCP</span> <span>OT Security</span> <span>PLC/HMI</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/OT-CYBERSIM" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>RSA Secure Chat & MITM Simulator</h3>
              <p>A Java-based cryptographic simulation featuring an encrypted GUI chat and an adversarial server for traffic interception analysis.</p>
              <div className="tags"><span>Java</span> <span>Cryptography</span> <span>RSA</span> <span>MITM</span> <span>Networking</span></div>
              <div className="project-links">
                <a href="https://github.com/mukulsain09/RSA-SECURE-CHAT-MITM-SIMULATOR" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Security & Tools</h3>
            <ul>
              <li>Wireshark, Nmap, Burp Suite</li>
              <li>Autopsy, FTK Imager, MobSF</li>
              <li>Splunk (Basic), ELK Stack</li>
              <li>Docker, Bash, Git</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & GRC</h3>
            <ul>
              <li>ISO 27001, NIST CSF</li>
              <li>MITRE ATT&CK</li>
              <li>Risk Assessment & Compliance</li>
              <li>Malware Analysis</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Certifications</h3>
            <ul>
              <li>Fortinet Certified Fundamentals</li>
              <li>Google Cybersecurity Certificate</li>
              <li>TryHackMe Pre-Security</li>
              <li>IBM Data Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="section-title">Get In Touch</h2>
        <p>Interested in collaborating or just want to chat? Drop me a message.</p>
        <div className="contact-links">
          <a href="mailto:mukulsain09@gmail.com" className="contact-item">Email</a>
          <a href="https://linkedin.com/in/mukul-sain" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a>
          <a href="https://github.com/mukul-sain" target="_blank" rel="noopener noreferrer" className="contact-item">GitHub</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 MS. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
