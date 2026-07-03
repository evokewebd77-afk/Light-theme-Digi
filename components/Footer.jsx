import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-brand" style={{ color: '#FAFAF8' }}>
              <img
                src="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png"
                alt="Digimarketing Art"
                loading="lazy"
                style={{ height: 60, width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ lineHeight: 1.2 }}>
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', color: '#d73d56' }}>Digital Advertisement</span>
                <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.04em', display: 'block', color: '#FAFAF8' }}>Marketing Network</span>
              </span>
            </div>
            <p>Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/digimarketingart/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram" style={{ color: '#E4405F' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" fill="none" stroke="#fff" strokeWidth="1.5"/><circle cx="17" cy="7" r="1" fill="#fff"/></svg>
              </a>
              <a href="https://www.facebook.com/people/DamnArt-Digital-Marketing-Services/61562382662176/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook" style={{ color: '#1877F2' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/damnart/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn" style={{ color: '#0A66C2' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/@digimarketingart" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube" style={{ color: '#FF0000' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 37.5 37.5 0 0 0 0 12a37.5 37.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 37.5 37.5 0 0 0 .5-5.8 37.5 37.5 0 0 0-.5-5.8zM9.5 15.5V8.5l6.3 3.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/ppc">PPC Management</Link></li>
              <li><Link href="/smm">Social Media</Link></li>
              <li><Link href="/seo">SEO Services</Link></li>
              <li><Link href="/web-development">Web Development</Link></li>
              <li><Link href="/graphic-design">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="mailto:info@digimarketingart.com" className="footer-contact-item">
                <div className="footer-contact-icon"><Mail size={14} /></div>
                <div>
                  <div className="footer-contact-text">info@digimarketingart.com</div>
                </div>
              </a>
              <a href="tel:+919056544487" className="footer-contact-item">
                <div className="footer-contact-icon"><Phone size={14} /></div>
                <div>
                  <div className="footer-contact-text">+91-90565-44487</div>
                </div>
              </a>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><MapPin size={14} /></div>
                <div>
                  <div className="footer-contact-text">India, UK, USA, Canada, Dubai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span className="footer-bottom-left">© 2026 All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <a href="#" id="back-to-top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
