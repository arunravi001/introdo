import React from 'react';
import './Footer.css'; // Assuming you'll write CSS for responsiveness in Footer.css
import footerLogo from '../../assets/images/footer-logo.png'
import appStoreBtn from '../../assets/images/app-store-btn.png'
import playStoreBtn from '../../assets/images/play-store-btn.png'
import footCertificateBSI from '../../assets/images/foot-certificate-logo-1.png'
import footCertificateBsiIso from '../../assets/images/foot-certificate-logo-2.png'
import footCertificateHipaa from '../../assets/images/foot-certificate-logo-3.png'
import footCertificateGdpr from '../../assets/images/foot-certificate-logo-4.png'
import footCertificateAicpa from '../../assets/images/foot-certificate-logo-5.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      <img src={footerLogo} alt="" />
        <h2>HR Updates, Straight To Your Inbox - Subscribe Today</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter Work Email" />
          <button type="submit">→</button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>Core HR</li>
            <li>Employee Management</li>
            <li>Leave Management</li>
            <li>Time & Attendance</li>
            <li>Payroll Management</li>
            <li>People Analytics</li>
            <li>Recruitment <span className="new-badge">New</span></li>
            <li>Performance Management <span className="coming-soon">Coming Soon</span></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>All Resources</li>
            <li>Blogs</li>
            <li>Case Studies</li>
            <li>Product Videos</li>
            <li>HR Glossary</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Platform</h3>
          <ul>
            <li>Log In</li>
            <li>Schedule a Demo</li>
            <li>Use Cases</li>
            <li>Integrations</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Mobile App</h3>
          <div className="app-badges">
            <img src={playStoreBtn} alt="Google Play" />
            <img src={appStoreBtn} alt="App Store" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="certifications">
          <img src={footCertificateBSI} alt="ISO 27001" /> 
          <img src={footCertificateBsiIso} alt="ISO 27001" />
          <img src={footCertificateHipaa} alt="HIPAA" />
          <img src={footCertificateGdpr} alt="GDPR" />
          <img src={footCertificateAicpa} alt="AICPA SOC" />
        </div>

        <div className="footer-links">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p>Copyright © 2024 KPI Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
