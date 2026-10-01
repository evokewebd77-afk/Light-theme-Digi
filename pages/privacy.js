import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { Shield, Info, Users, FileText, Server, Scale, Globe, Clock, Cookie, Smartphone, Cpu, Lock, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const Privacy = () => {
  const sections = [
    { id: 'introduction', label: '1. Introduction', icon: Info },
    { id: 'controller', label: '2. Data Controller', icon: Users },
    { id: 'scope', label: '3. Scope of Policy', icon: FileText },
    { id: 'categories', label: '4. Categories of Data', icon: Server },
    { id: 'purposes', label: '5. Purposes & Bases', icon: Scale },
    { id: 'recipients', label: '6. Recipients', icon: Globe },
    { id: 'transfers', label: '7. Transfers', icon: Globe },
    { id: 'retention', label: '8. Data Retention', icon: Clock },
    { id: 'rights', label: '9. Your Rights', icon: Shield },
    { id: 'cookies', label: '10. Cookies', icon: Cookie },
    { id: 'marketing', label: '11. Marketing', icon: Smartphone },
    { id: 'ai', label: '12. AI Decisions', icon: Cpu },
    { id: 'security', label: '13. Data Security', icon: Lock },
    { id: 'children', label: '14. Children\'s Data', icon: Users },
    { id: 'links', label: '15. Third-Party Links', icon: FileText },
    { id: 'changes', label: '16. Changes', icon: FileText },
    { id: 'contact', label: '17. Contact Us', icon: Mail },
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
        <title>Privacy Policy - Digimarketing Art</title>
        <meta name="description" content="Privacy Policy of Digimarketing Art. Learn how we collect, use, and protect your personal data in compliance with applicable regulations." />
        <meta name="keywords" content="privacy policy, data privacy, data protection, GDPR, privacy policy digital marketing" />
        <link rel="canonical" href="https://www.digimarketingart.com/privacy" />
        <meta property="og:title" content="Privacy Policy - Digimarketing Art" />
        <meta property="og:description" content="Privacy Policy of Digimarketing Art. Learn how we collect, use, and protect your personal data in compliance with applicable regulations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digimarketingart.com/privacy" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Digimarketing Art" />
        <meta name="twitter:description" content="Privacy Policy of Digimarketing Art. Learn how we collect, use, and protect your personal data." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
      </Head>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(247, 246, 243, 0.85)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .privacy-hero {
          padding: 80px 24px 20px 24px;
          text-align: center;
          position: relative;
        }

        .privacy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .privacy-container {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 20px;
          }
        }

        .privacy-sidebar {
          position: sticky;
          top: 120px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }

        @media (max-width: 1024px) {
          .privacy-sidebar {
            position: relative;
            top: 0;
          }
        }

        .privacy-nav-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .privacy-nav-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 4px;
        }

        @media (max-width: 1024px) {
          .privacy-nav-list {
            max-height: 250px;
          }
        }

        .privacy-nav-item {
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

        .privacy-nav-item:hover {
          background: rgba(215, 61, 86, 0.05);
          color: #d73d56;
        }

        .privacy-content-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
        }

        @media (max-width: 768px) {
          .privacy-content-card {
            padding: 24px;
            border-radius: 20px;
          }
        }

        .privacy-section {
          scroll-margin-top: 120px;
          margin-bottom: 40px;
        }

        .privacy-section:last-child {
          margin-bottom: 0;
        }

        .privacy-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .privacy-section-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(215, 61, 86, 0.08);
          color: #d73d56;
          display: flex;
          align-items: center;
          justify-center: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .privacy-section h2 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          font-family: var(--font-display);
        }

        .privacy-section p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0 0 16px 0;
        }

        .privacy-section p:last-child {
          margin-bottom: 0;
        }

        .privacy-section ul {
          margin: 0 0 20px 0;
          padding-left: 20px;
        }

        .privacy-section li {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 8px;
        }

        .privacy-section table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .privacy-section th {
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 700;
          text-align: left;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
        }

        .privacy-section td {
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .privacy-section tr:nth-child(even) td {
          background: rgba(0, 0, 0, 0.005);
        }

        .privacy-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .privacy-mini-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
        }

        .privacy-mini-card h4 {
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 8px 0;
          color: var(--text-primary);
        }

        .privacy-mini-card p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .privacy-badge {
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

        .privacy-contact-block {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          margin-top: 20px;
          display: grid;
          gap: 16px;
        }

        .privacy-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
        }

        .privacy-contact-icon {
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
      <section className="privacy-hero">
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 16, fontWeight: 700 }}>
            LEGAL INFORMATION
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Privacy <span className="font-display-italic">Policy</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            We take your privacy seriously. Here is how we collect, use, and protect your personal information in compliance with GDPR and UK GDPR.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="privacy-container">
        {/* Sticky Sidebar */}
        <aside className="privacy-sidebar">
          <div className="privacy-nav-title">Sections</div>
          <nav className="privacy-nav-list">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <button key={sec.id} className="privacy-nav-item" onClick={() => handleScroll(sec.id)}>
                  <Icon size={14} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Card */}
        <div className="privacy-content-card">
          <div className="privacy-badge">Effective Date: 1 May, 2026 — Version 2.0</div>

          {/* 1. Introduction */}
          <section id="introduction" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Info size={18} /></div>
              <h2>1. Introduction</h2>
            </div>
            <p>
              Digimarketing Art (“we”, “us”, “our”) provides digital marketing services including SEO, PPC, social media marketing, web development, and graphic design.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website at <Link href="/" style={{ color: '#d73d56', textDecoration: 'none', fontWeight: 600 }}>digimarketingart.com</Link>, engage with our services, or otherwise interact with us.
            </p>
            <div className="privacy-cards-grid">
              <div className="privacy-mini-card">
                <h4>GDPR</h4>
                <p>Regulation (EU) 2016/679 compliance for European users.</p>
              </div>
              <div className="privacy-mini-card">
                <h4>UK GDPR</h4>
                <p>Data Protection Act 2018 standards for UK users.</p>
              </div>
              <div className="privacy-mini-card">
                <h4>ePrivacy</h4>
                <p>Directive 2002/58/EC compliance for cookies and tracking.</p>
              </div>
            </div>
          </section>

          {/* 2. Data Controller */}
          <section id="controller" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Users size={18} /></div>
              <h2>02. Data Controller & EU Rep.</h2>
            </div>
            <p>
              We act as the Data Controller for the personal data collected through our website and when engaging in business relationships.
            </p>
            <div className="privacy-cards-grid">
              <div className="privacy-mini-card">
                <h4>Data Controller</h4>
                <p style={{ fontWeight: 700 }}>Digimarketing Art Pvt. Ltd.</p>
                <p style={{ marginTop: 4 }}>Email: privacy@digimarketingart.com</p>
                <p>Phone: +91-90565-44487</p>
              </div>
              <div className="privacy-mini-card">
                <h4>EU Representative</h4>
                <p>Appointed under Art. 27 GDPR</p>
                <p style={{ fontStyle: 'italic', marginTop: 4 }}>Contact EU representative via privacy@digimarketingart.com</p>
              </div>
              <div className="privacy-mini-card">
                <h4>UK Representative</h4>
                <p>Appointed under UK GDPR Art. 27</p>
                <p style={{ fontStyle: 'italic', marginTop: 4 }}>Contact UK representative via privacy@digimarketingart.com</p>
              </div>
            </div>
          </section>

          {/* 3. Scope */}
          <section id="scope" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><FileText size={18} /></div>
              <h2>03. Scope of This Policy</h2>
            </div>
            <p>
              This Policy applies to personal data we process as a <strong>Data Controller</strong> — when you visit our website, sign up to our newsletter, request a quote, or become our client.
            </p>
            <p>
              When we process personal data on behalf of our clients as a <strong>Data Processor</strong> (such as managing their end-customer campaign lists), the applicable client's privacy notice governs, and our processing is regulated by a Data Processing Agreement (DPA).
            </p>
          </section>

          {/* 4. Categories of Data */}
          <section id="categories" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Server size={18} /></div>
              <h2>04. Categories of Data</h2>
            </div>
            <div className="privacy-cards-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="privacy-mini-card">
                <h4>Data You Provide Directly</h4>
                <ul>
                  <li>Name, job title, and employer info</li>
                  <li>Business email, phone number, and physical address</li>
                  <li>Service preferences, campaign goals, and project briefs</li>
                  <li>Contract terms and business billing details</li>
                </ul>
              </div>
              <div className="privacy-mini-card">
                <h4>Data Collected Automatically</h4>
                <ul>
                  <li>IP address (anonymized where feasible)</li>
                  <li>Browser type, version, and operating system</li>
                  <li>Visited pages, click patterns, and time spent on page</li>
                  <li>Tracking data via cookies and analytical tags</li>
                </ul>
              </div>
            </div>
            <div className="privacy-cards-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 16 }}>
              <div className="privacy-mini-card">
                <h4>Data from Third Parties</h4>
                <ul>
                  <li>Public professional profiles (e.g. LinkedIn)</li>
                  <li>B2B databases and company directories</li>
                  <li>Aggregated advertising audience metrics</li>
                </ul>
              </div>
              <div className="privacy-mini-card">
                <h4>Special Categories (Art. 9)</h4>
                <ul>
                  <li>We do <strong>not</strong> knowingly or intentionally collect sensitive personal data</li>
                  <li>Please do not share health, race, religion, or political data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Purposes & Bases */}
          <section id="purposes" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Scale size={18} /></div>
              <h2>05. Purposes & Legal Bases</h2>
            </div>
            <p>Under GDPR Article 6, we process personal data only when we have a valid lawful basis:</p>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Data Category</th>
                    <th>Lawful Basis (GDPR Art. 6)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Responding to inquiries & quotes</td>
                    <td>Name, email, phone, message content</td>
                    <td>Art. 6(1)(b) - Performance of contract / pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td>Delivering digital marketing services</td>
                    <td>Client contacts, billing details, campaign data</td>
                    <td>Art. 6(1)(b) - Performance of a contract</td>
                  </tr>
                  <tr>
                    <td>Website performance analytics</td>
                    <td>Truncated IP, device info, browsing paths</td>
                    <td>Art. 6(1)(a) - Consent</td>
                  </tr>
                  <tr>
                    <td>Sending newsletter & marketing emails</td>
                    <td>Name, email address, subscription details</td>
                    <td>Art. 6(1)(a) - Consent</td>
                  </tr>
                  <tr>
                    <td>Ad retargeting & campaign analytics</td>
                    <td>Cookie identifiers, user behaviors</td>
                    <td>Art. 6(1)(a) - Consent</td>
                  </tr>
                  <tr>
                    <td>Financial accounting and tax audits</td>
                    <td>Invoices, transactional records</td>
                    <td>Art. 6(1)(c) - Legal compliance obligation</td>
                  </tr>
                  <tr>
                    <td>Fraud prevention & site security</td>
                    <td>Server logs, IP address, security events</td>
                    <td>Art. 6(1)(f) - Legitimate interests (site integrity)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Recipients */}
          <section id="recipients" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Globe size={18} /></div>
              <h2>06. Recipients & Sub-Processors</h2>
            </div>
            <p>We share your data with trusted partners and cloud tools to run our business services:</p>
            <div className="privacy-cards-grid">
              <div className="privacy-mini-card">
                <h4>Infrastructure & Cloud</h4>
                <p>Vercel, Cloudinary, AWS (for secure storage & hosting)</p>
              </div>
              <div className="privacy-mini-card">
                <h4>Analytics & Advertising</h4>
                <p>Google Analytics 4, Meta Pixel, Google Ads (consent-only)</p>
              </div>
              <div className="privacy-mini-card">
                <h4>CRM & Messaging</h4>
                <p>HubSpot, Salesforce, Zoho CRM, Mailchimp</p>
              </div>
              <div className="privacy-mini-card">
                <h4>Payments</h4>
                <p>Stripe, PayPal, Razorpay (fully PCI-DSS compliant)</p>
              </div>
            </div>
          </section>

          {/* 7. Transfers */}
          <section id="transfers" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Globe size={18} /></div>
              <h2>07. International Transfers</h2>
            </div>
            <p>
              We are established in India. Personal data of individuals residing in the EU, EEA, or UK is transferred and stored securely under these protection mechanisms:
            </p>
            <ul>
              <li><strong>Standard Contractual Clauses (SCCs)</strong>: Standardized data protection contractual terms approved by the European Commission.</li>
              <li><strong>UK Addendum</strong>: Applied alongside the European SCCs to protect UK citizens' data.</li>
              <li><strong>Transfer Impact Assessments (TIAs)</strong>: Conducted to confirm the security practices of our data pipelines.</li>
            </ul>
          </section>

          {/* 8. Retention */}
          <section id="retention" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Clock size={18} /></div>
              <h2>08. Data Retention</h2>
            </div>
            <p>We store personal data only as long as required for the purpose of collection or as mandated by law:</p>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Standard Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>General web form inquiries (no client contract)</td>
                    <td>24 Months</td>
                  </tr>
                  <tr>
                    <td>Active client marketing campaigns & records</td>
                    <td>Duration of active contract + 3 years</td>
                  </tr>
                  <tr>
                    <td>Invoices, tax forms, and transaction receipts</td>
                    <td>8 Years (statutory legal requirement)</td>
                  </tr>
                  <tr>
                    <td>Marketing email newsletters & subscriptions</td>
                    <td>Until consent is withdrawn or 36 months of inactivity</td>
                  </tr>
                  <tr>
                    <td>Google Analytics 4 website metrics</td>
                    <td>14 Months</td>
                  </tr>
                  <tr>
                    <td>Server logs and cybersecurity monitoring reports</td>
                    <td>12 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 9. Your Rights */}
          <section id="rights" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Shield size={18} /></div>
              <h2>09. Your Rights</h2>
            </div>
            <p>Under GDPR and UK GDPR, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right of Access (Art. 15)</strong>: Request details and copies of your data.</li>
              <li><strong>Right to Rectification (Art. 16)</strong>: Request correction of inaccurate information.</li>
              <li><strong>Right to Erasure (Art. 17)</strong>: Request deletion of data ("Right to be Forgotten").</li>
              <li><strong>Right to Restriction (Art. 18)</strong>: Request that we pause processing your data.</li>
              <li><strong>Right to Portability (Art. 20)</strong>: Request data transfer in structured formats.</li>
              <li><strong>Right to Object (Art. 21)</strong>: Object to processing under legitimate interest bases.</li>
              <li><strong>Right to Withdraw Consent (Art. 7(3))</strong>: Opt-out of consent-based setups at any time.</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              To exercise any of your rights, please contact us at <a href="mailto:privacy@digimarketingart.com" style={{ color: '#d73d56', textDecoration: 'none', fontWeight: 600 }}>privacy@digimarketingart.com</a>. We will respond within 30 days.
            </p>
          </section>

          {/* 10. Cookies */}
          <section id="cookies" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Cookie size={18} /></div>
              <h2>10. Cookies & Tracking</h2>
            </div>
            <p>
              We use cookies to analyze web traffic, remember preferences, and serve targeted advertisements.
            </p>
            <p>
              Non-essential advertising cookies are loaded only after your explicit consent. You can update your consent settings at any time using the preferences in our footer.
            </p>
          </section>

          {/* 11. Marketing */}
          <section id="marketing" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Smartphone size={18} /></div>
              <h2>11. Marketing Communications</h2>
            </div>
            <p>
              We send email campaigns and marketing alerts only based on:
            </p>
            <ul>
              <li>Explicit opt-in consent from the subscriber.</li>
              <li>Soft opt-in (existing clients, with a clear option to unsubscribe).</li>
            </ul>
            <p>
              All promotional emails include a one-click "Unsubscribe" button in the footer.
            </p>
          </section>

          {/* 12. AI Decisions */}
          <section id="ai" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Cpu size={18} /></div>
              <h2>12. Automated Decisions & AI</h2>
            </div>
            <p>
              We do not perform solely automated decision-making processes that produce legal or significant effects. AI tools assist our staff with copywriting, research, and campaign optimization, under these constraints:
            </p>
            <ul>
              <li>No personal customer data is uploaded to public AI training models.</li>
              <li>All enterprise AI engines are configured to disable data training on inputs.</li>
              <li>All AI outputs are thoroughly reviewed by our creative staff before delivery.</li>
            </ul>
          </section>

          {/* 13. Data Security */}
          <section id="security" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Lock size={18} /></div>
              <h2>13. Data Security</h2>
            </div>
            <p>
              We implement industry-standard Technical and Organizational Measures (TOMs) to secure data:
            </p>
            <ul>
              <li>SSL/TLS encryption in transit (HTTPS) and encryption at rest.</li>
              <li>Multi-factor authentication (MFA) on all access accounts.</li>
              <li>Role-based access permissions restricting records access to authorized team members.</li>
              <li>Regular security scanning and software patch updates.</li>
            </ul>
          </section>

          {/* 14. Children's Data */}
          <section id="children" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Users size={18} /></div>
              <h2>14. Children's Data</h2>
            </div>
            <p>
              Our marketing services are directed solely to business entities. We do not knowingly collect personal data from children under 16 years of age. If you believe a child has shared data with us, please report it to privacy@digimarketingart.com.
            </p>
          </section>

          {/* 15. Third-Party Links */}
          <section id="links" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><FileText size={18} /></div>
              <h2>15. Third-Party Links</h2>
            </div>
            <p>
              Our website and blog posts may contain hyperlinks to external sites. We do not control and are not responsible for the privacy practices of external third parties.
            </p>
          </section>

          {/* 16. Changes */}
          <section id="changes" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><FileText size={18} /></div>
              <h2>16. Changes to This Policy</h2>
            </div>
            <p>
              We may update this Privacy Policy to reflect changing regulatory requirements. Material changes will be highlighted on our homepage or sent via email alerts 30 days prior to taking effect.
            </p>
          </section>

          {/* 17. Contact Us */}
          <section id="contact" className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-icon"><Mail size={18} /></div>
              <h2>17. Contact Us</h2>
            </div>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please get in touch with our team:
            </p>
            <div className="privacy-contact-block">
              <a href="mailto:privacy@digimarketingart.com" className="privacy-contact-item">
                <div className="privacy-contact-icon"><Mail size={15} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Email Address</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>privacy@digimarketingart.com</div>
                </div>
              </a>
              <a href="tel:+919056544487" className="privacy-contact-item">
                <div className="privacy-contact-icon"><Phone size={15} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Phone Number</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>+91-90565-44487</div>
                </div>
              </a>
              <div className="privacy-contact-item">
                <div className="privacy-contact-icon"><MapPin size={15} /></div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Corporate Office</div>
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

export default Privacy;
