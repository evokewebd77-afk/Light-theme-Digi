import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { Shield, Info, FileText, Server, Scale, Globe, Clock, Cookie, Smartphone, Cpu, Lock, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
  const sections = [
    { id: 'about', label: '1. About This Policy', icon: Info },
    { id: 'definition', label: '2. What Are Cookies?', icon: Cookie },
    { id: 'categories', label: '3. Categories of Cookies', icon: Server },
    { id: 'in-use', label: '4. Cookies in Use', icon: FileText },
    { id: 'third-party', label: '5. Third-Party Cookies', icon: Globe },
    { id: 'manage', label: '6. Manage Preferences', icon: Scale },
    { id: 'gpc', label: '7. DNT & GPC', icon: Shield },
    { id: 'rights', label: '8. Your Rights', icon: Shield },
    { id: 'updates', label: '9. Updates to Policy', icon: Clock },
    { id: 'contact', label: '10. Contact Us', icon: Mail },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // fixed header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ 
      paddingTop: '100px', 
      backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'scroll',
      position: 'relative',
      minHeight: '100vh' 
    }}>
      <Head>
        <title>Cookie Policy - Digimarketing Art</title>
        <meta name="description" content="Cookie Policy of Digimarketing Art. Learn about how we use cookies, your preferences, and your rights regarding data privacy." />
        <meta name="keywords" content="cookie policy, cookies, data privacy, cookie preferences, website cookies" />
      </Head>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(247, 246, 243, 0.85)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .cookie-hero {
          padding: 80px 24px 20px 24px;
          text-align: center;
          position: relative;
        }

        .cookie-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .cookie-container {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 20px;
          }
        }

        .cookie-sidebar {
          position: sticky;
          top: 120px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }

        @media (max-width: 1024px) {
          .cookie-sidebar {
            position: relative;
            top: 0;
          }
        }

        .cookie-nav-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .cookie-nav-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 4px;
        }

        @media (max-width: 1024px) {
          .cookie-nav-list {
            max-height: 250px;
          }
        }

        .cookie-nav-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          text-align: left;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cookie-nav-item:hover {
          background: rgba(215, 61, 86, 0.05);
          color: #d73d56;
        }

        .cookie-content-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
        }

        @media (max-width: 768px) {
          .cookie-content-card {
            padding: 24px;
            border-radius: 20px;
          }
        }

        .cookie-section {
          scroll-margin-top: 120px;
          margin-bottom: 40px;
        }

        .cookie-section:last-child {
          margin-bottom: 0;
        }

        .cookie-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .cookie-section-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(215, 61, 86, 0.08);
          color: #d73d56;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .cookie-section h2 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          font-family: var(--font-display);
        }

        .cookie-section p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0 0 16px 0;
        }

        .cookie-section p:last-child {
          margin-bottom: 0;
        }

        .cookie-section ul {
          margin: 0 0 20px 0;
          padding-left: 20px;
        }

        .cookie-section li {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 8px;
        }

        .cookie-section table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .cookie-section th {
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 700;
          text-align: left;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
        }

        .cookie-section td {
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .cookie-section tr:nth-child(even) td {
          background: rgba(0, 0, 0, 0.005);
        }

        .cookie-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .cookie-mini-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
        }

        .cookie-mini-card h4 {
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 8px 0;
          color: var(--text-primary);
        }

        .cookie-mini-card p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .cookie-badge {
          display: inline-block;
          background: rgba(215, 61, 86, 0.1);
          color: #d73d56;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .cookie-contact-block {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          margin-top: 20px;
          display: grid;
          gap: 16px;
        }

        .cookie-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
        }

        .cookie-contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d73d56;
        }
      `}</style>

      {/* Hero */}
      <section className="cookie-hero">
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 16, fontWeight: 700 }}>
            LEGAL INFORMATION
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Cookie <span className="font-display-italic">Policy</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            Learn how we use cookies and similar technologies to improve our services and analyze web traffic in compliance with EU regulations.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="cookie-container">
        {/* Sticky Sidebar */}
        <aside className="cookie-sidebar">
          <div className="cookie-nav-title">Sections</div>
          <nav className="cookie-nav-list">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <button key={sec.id} className="cookie-nav-item" onClick={() => handleScroll(sec.id)}>
                  <Icon size={14} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Card */}
        <div className="cookie-content-card">
          <div className="cookie-badge">Effective Date: 1 May, 2026 — Version 1.0</div>

          {/* 1. About This Cookie Policy */}
          <section id="about" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Info size={18} /></div>
              <h2>1. About This Cookie Policy</h2>
            </div>
            <p>
              This Cookie Policy explains how Digimarketing Art uses cookies and similar tracking technologies on our website at <Link href="/" style={{ color: '#d73d56', textDecoration: 'none', fontWeight: 600 }}>digimarketingart.com</Link>. It supplements our <Link href="/privacy" style={{ color: '#d73d56', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>.
            </p>
            <p>
              This Policy is issued under Article 5(3) of the ePrivacy Directive 2002/58/EC and the GDPR. It applies to all visitors located in the EEA, the United Kingdom, and Switzerland.
            </p>
          </section>

          {/* 2. What Are Cookies? */}
          <section id="definition" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Cookie size={18} /></div>
              <h2>02. What Are Cookies?</h2>
            </div>
            <p>
              Cookies are small text files placed on your device by websites you visit. They allow the website to recognize your device and remember information such as your preferences, the pages you visit, or your interactions.
            </p>
            <p>
              We also use similar tracking technologies to analyze and deliver campaigns:
            </p>
            <div className="cookie-cards-grid">
              <div className="cookie-mini-card">
                <h4>Pixels / Web Beacons</h4>
                <p>Tiny invisible images used to track page views and email newsletter opens.</p>
              </div>
              <div className="cookie-mini-card">
                <h4>Local Storage / SDKs</h4>
                <p>Browser-based databases used by JavaScript libraries to cache preference choices.</p>
              </div>
              <div className="cookie-mini-card">
                <h4>Fingerprinting</h4>
                <p>We do <strong>not</strong> use device fingerprinting or browser sniffing techniques.</p>
              </div>
            </div>
          </section>

          {/* 3. Categories of Cookies */}
          <section id="categories" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Server size={18} /></div>
              <h2>03. Categories of Cookies</h2>
            </div>
            <p>We classify the cookies used on our website into four main categories:</p>
            <div className="cookie-cards-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="cookie-mini-card">
                <h4 style={{ color: '#d73d56' }}>Strictly Necessary</h4>
                <span className="cookie-badge" style={{ marginBottom: 8, background: '#e5e7eb', color: '#374151' }}>Always Active</span>
                <p style={{ fontSize: '13.5px', marginBottom: 12 }}>Essential for the website to run. Cannot be turned off.</p>
                <ul>
                  <li>Storing cookie preferences</li>
                  <li>Session management & security tokens</li>
                  <li>CSRF cross-site protection</li>
                </ul>
              </div>
              <div className="cookie-mini-card">
                <h4>Functional Cookies</h4>
                <span className="cookie-badge" style={{ marginBottom: 8 }}>Consent Required</span>
                <p style={{ fontSize: '13.5px', marginBottom: 12 }}>Provide customized features (e.g. language preferences).</p>
                <ul>
                  <li>Remembers language selections</li>
                  <li>Remembers region choices</li>
                  <li>UI customize values</li>
                </ul>
              </div>
            </div>
            <div className="cookie-cards-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 16 }}>
              <div className="cookie-mini-card">
                <h4>Analytical Cookies</h4>
                <span className="cookie-badge" style={{ marginBottom: 8 }}>Consent Required</span>
                <p style={{ fontSize: '13.5px', marginBottom: 12 }}>Allow us to measure traffic and improve page design layout.</p>
                <ul>
                  <li>Google Analytics 4 (with IP masking)</li>
                  <li>Google Consent Mode v2 validation</li>
                  <li>User path navigation flow tracking</li>
                </ul>
              </div>
              <div className="cookie-mini-card">
                <h4>Advertising Cookies</h4>
                <span className="cookie-badge" style={{ marginBottom: 8 }}>Consent Required</span>
                <p style={{ fontSize: '13.5px', marginBottom: 12 }}>Serve targeted ads and measure marketing campaign ROI.</p>
                <ul>
                  <li>Google Ads retargeting tags</li>
                  <li>Meta Pixel conversion pixels</li>
                  <li>LinkedIn Insight Tags</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Cookies in Use */}
          <section id="in-use" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><FileText size={18} /></div>
              <h2>04. Cookies in Use</h2>
            </div>
            <p>The following table lists the active cookies and tags on our website:</p>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Cookie / Tag</th>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Category</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cookie_consent</code></td>
                    <td>Digimarketing Art</td>
                    <td>Stores your cookie consent preferences</td>
                    <td>Necessary</td>
                    <td>12 Months</td>
                  </tr>
                  <tr>
                    <td><code>session_id</code></td>
                    <td>Digimarketing Art</td>
                    <td>Maintains your secure user session</td>
                    <td>Necessary</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><code>csrf_token</code></td>
                    <td>Digimarketing Art</td>
                    <td>Prevents cross-site forgery attacks</td>
                    <td>Necessary</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><code>language_pref</code></td>
                    <td>Digimarketing Art</td>
                    <td>Remembers language custom choices</td>
                    <td>Functional</td>
                    <td>12 Months</td>
                  </tr>
                  <tr>
                    <td><code>_ga</code></td>
                    <td>Google Analytics 4</td>
                    <td>Anonymously distinguishes unique visitors</td>
                    <td>Analytics</td>
                    <td>13 Months</td>
                  </tr>
                  <tr>
                    <td><code>_ga_*</code></td>
                    <td>Google Analytics 4</td>
                    <td>Persists connection state parameters</td>
                    <td>Analytics</td>
                    <td>13 Months</td>
                  </tr>
                  <tr>
                    <td><code>_gid</code></td>
                    <td>Google Analytics</td>
                    <td>Stores user metrics for 24 hours</td>
                    <td>Analytics</td>
                    <td>24 Hours</td>
                  </tr>
                  <tr>
                    <td><code>_fbp</code></td>
                    <td>Meta (Facebook)</td>
                    <td>Tracks conversions for Meta ad retargeting</td>
                    <td>Advertising</td>
                    <td>90 Days</td>
                  </tr>
                  <tr>
                    <td><code>fr</code></td>
                    <td>Meta</td>
                    <td>Ad delivery and performance tracking</td>
                    <td>Advertising</td>
                    <td>90 Days</td>
                  </tr>
                  <tr>
                    <td><code>IDE / DSID</code></td>
                    <td>Google Ads / DoubleClick</td>
                    <td>Frequency capping and click tracking</td>
                    <td>Advertising</td>
                    <td>13 Months</td>
                  </tr>
                  <tr>
                    <td><code>li_sugr / bcookie</code></td>
                    <td>LinkedIn</td>
                    <td>Measures conversions from LinkedIn campaigns</td>
                    <td>Advertising</td>
                    <td>Up to 24 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Third-Party Cookies */}
          <section id="third-party" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Globe size={18} /></div>
              <h2>05. Third-Party Cookies</h2>
            </div>
            <p>
              Some scripts are set by third-party services. These third parties act as independent or joint data controllers for their own data processes (mostly based inside the United States):
            </p>
            <ul>
              <li><strong>Google LLC</strong> (Analytics, Search Database, Ad Conversion Linker) - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Privacy Policy</a></li>
              <li><strong>Meta Platforms, Inc.</strong> (Facebook / Instagram Ads integration) - <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Privacy Policy</a></li>
              <li><strong>LinkedIn Ireland</strong> (Campaign conversion tracking) - <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Privacy Policy</a></li>
              <li><strong>HubSpot, Inc.</strong> (CRM tools and tracking pixels) - <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Privacy Policy</a></li>
            </ul>
          </section>

          {/* 6. Give / Refuse / Withdraw */}
          <section id="manage" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Scale size={18} /></div>
              <h2>06. Give / Refuse / Withdraw Consent</h2>
            </div>
            <p>
              When you first load our website, a consent pop-up banner displays. You can click "Accept All", "Reject All" (excluding necessary cookies), or customize choices by category.
            </p>
            <p>
              You can also customize, block, or erase cookies directly within your web browser settings. Follow your browser's instructions:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Google Chrome settings</a></li>
              <li><a href="https://support.mozilla.org/kb/cookies" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Mozilla Firefox settings</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Apple Safari settings</a></li>
              <li><a href="https://support.microsoft.com/microsoft-edge" target="_blank" rel="noopener noreferrer" style={{ color: '#d73d56' }}>Microsoft Edge settings</a></li>
            </ul>
          </section>

          {/* 7. Do Not Track & GPC */}
          <section id="gpc" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Shield size={18} /></div>
              <h2>07. Do Not Track & GPC</h2>
            </div>
            <p>
              Our website is configured to recognize Global Privacy Control (GPC) signals sent by browser security extensions. If you transmit a GPC opt-out signal, we automatically treat it as a request to withdraw consent for all non-essential analytics and tracking cookies.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section id="rights" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Shield size={18} /></div>
              <h2>08. Your Rights</h2>
            </div>
            <p>
              You retain full rights under GDPR/UK GDPR regarding cookies data. For detailed information on your rights to erase, correct, access, or restrict processing, please review Section 9 of our <Link href="/privacy" style={{ color: '#d73d56', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>.
            </p>
          </section>

          {/* 9. Updates to Policy */}
          <section id="updates" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Clock size={18} /></div>
              <h2>09. Updates to This Policy</h2>
            </div>
            <p>
              We revise this Cookie Policy whenever the lists of active scripts change. Any material modification will trigger a re-consent prompt through the cookie banner on your next visit.
            </p>
          </section>

          {/* 10. Contact */}
          <section id="contact" className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-section-icon"><Mail size={18} /></div>
              <h2>10. Contact Us</h2>
            </div>
            <p>
              If you have any questions or require custom preference settings, contact our privacy compliance team:
            </p>
            <div className="cookie-contact-block">
              <a href="mailto:privacy@digimarketingart.com" className="cookie-contact-item">
                <div className="cookie-contact-icon"><Mail size={15} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Email Support</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>privacy@digimarketingart.com</div>
                </div>
              </a>
              <div className="cookie-contact-item">
                <div className="cookie-contact-icon"><MapPin size={15} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Corporate Address</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Aero View Plaza, Airport Road, Mohali, Punjab, India</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
