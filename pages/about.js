import Head from 'next/head';
import React from 'react';
import { MapPin, Phone, Mail, CheckCircle, Download, Target, Eye, TrendingUp, MousePointerClick, DollarSign, Users, Star, ArrowUp, CheckCircle2, ArrowUpRight, Zap } from 'lucide-react';
import GlobalOffices from '../components/GlobalOffices';
import ContactForm from '../components/ContactForm';

const aboutContactInfo = [
  {
    icon: Phone,
    label: 'Direct Phone',
    value: '+91-90565-44487',
    href: 'tel:+919056544487',
    sub: 'Instant consultation • Mon-Sat',
    accent: '#d73d56',
  },
  {
    icon: Mail,
    label: 'Email Inquiries',
    value: 'info@digimarketingart.com',
    href: 'mailto:info@digimarketingart.com',
    sub: 'Average response: < 2 hours',
    accent: '#1D8DCA',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'SCO 09, Aero View Plaza, Airport Rd, Mohali',
    href: 'https://maps.google.com/?q=Aero+View+Plaza+Mohali',
    sub: 'Punjab - 140603, India',
    accent: '#3A8C3A',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '6', label: 'Global Offices' },
  { value: '98%', label: 'Client Retention' },
];

const features = [
  { text: '15+ Years of Industry Experience' },
  { text: 'AI-Powered Marketing Strategies' },
  { text: 'Creative Excellence in Design & Content' },
  { text: 'Performance-Driven PPC & SEO' },
];

const whyChooseUs = [
  { icon: Users, title: 'Expert Team', desc: 'Professionals delivering tailored digital marketing solutions.' },
  { icon: TrendingUp, title: 'Improved ROI', desc: 'Data-driven strategies maximizing returns on investment.' },
  { icon: DollarSign, title: 'High ROAS', desc: 'Optimized campaigns for better return on ad spend.' },
  { icon: MousePointerClick, title: 'Increased CTR', desc: 'Boosting click-through rates for better engagement.' },
  { icon: Target, title: 'Lower CPC', desc: 'Efficient ad management reducing cost per click.' },
  { icon: Star, title: 'Higher Conversion Rates', desc: 'Strategies focused on driving quality leads.' },
  { icon: Users, title: 'Client-Centric', desc: 'Transparent communication and adaptable approaches.' },
];

const About = () => {
  const aboutLeftPanel = (
    <div className="contact-info-container">
      <div className="contact-info-header">
        <span className="contact-info-badge">
          <Zap size={13} color="#d73d56" /> Ready to Scale?
        </span>
        <h3 className="contact-info-title">Let’s Talk Growth & Strategy</h3>
        <p className="contact-info-desc">
          Reach our performance marketing team directly or send us your campaign specs for an immediate ROI review.
        </p>
      </div>

      <div className="contact-cards-list">
        {aboutContactInfo.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              className="contact-card-modern"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-card-icon" style={{ '--card-icon-accent': item.accent }}>
                <Icon size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-val">{item.value}</span>
                <span className="contact-card-sub">{item.sub}</span>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>
          );
        })}
      </div>

      <div className="contact-perks-box">
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>Free performance & SEO growth audit</span>
        </div>
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>Dedicated senior account manager</span>
        </div>
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>No lock-in contracts • Transparent KPIs</span>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>About Us - Digimarketing Art | Digital Marketing Agency</title>
        <meta name="description" content="Learn about Digimarketing Art - 15+ years of experience, 500+ clients served, 6 global offices. AI-powered digital marketing agency driving growth." />
        <meta name="keywords" content="about digital marketing agency, digital marketing company India, AI marketing agency, marketing agency Mohali" />
        <link rel="canonical" href="https://www.digimarketingart.com/about" />
        <meta property="og:title" content="About Us - Digimarketing Art | Digital Marketing Agency" />
        <meta property="og:description" content="Learn about Digimarketing Art - 15+ years of experience, 500+ clients served, 6 global offices. AI-powered digital marketing agency driving growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digimarketingart.com/about" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Digimarketing Art | Digital Marketing Agency" />
        <meta name="twitter:description" content="Learn about Digimarketing Art - 15+ years of experience, 500+ clients served, 6 global offices. AI-powered digital marketing agency driving growth." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781929713/40277f48-6fe5-4471-8859-c50393224a21_tshgxe.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 16, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            WHO WE ARE | YOUR GROWTH PARTNER
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            WE ARE THE<br /><span style={{ color: '#d73d56' }}>DIGITAL PARTNER!</span>
          </h1>
          <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.8, maxWidth: 660, margin: '0 auto 32px', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            We are a premier digital marketing agency dedicated to helping businesses grow and thrive. With over 15 years of experience, we craft innovative strategies that align with the latest trends.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#story" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'transparent', color: 'var(--text-primary)', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', border: '2px solid var(--border-color)' }}>
              View Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '60px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#d73d56', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Powering Growth */}
      <section id="story" style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781929419/122598b8-c44e-4a5b-a437-8dc6319779e0_dawli0.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="responsive-two-column-grid about-gap" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 12, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>POWERING GROWTH</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#111' }}>
              We have collaborated to leverage our <span style={{ color: '#d73d56' }}>15+ years</span> of <span className="font-display-italic">experience</span>
            </h2>
            <p style={{ color: '#fff', lineHeight: 1.8, marginBottom: 24, textShadow: '0 1px 4px rgba(0,0,0,0.4)', fontWeight: 700 }}>
              Our commitment is to deliver exceptional results by crafting innovative strategies that align with the latest trends and technologies.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {features.map((f) => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle size={20} color="#d73d56" />
                  <span style={{ fontWeight: 600, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>{f.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: 24, background: 'var(--bg-secondary)', borderRadius: 16, border: '1px solid var(--border-color)' }}>
              <p style={{ fontWeight: 700, marginBottom: 12 }}>Want to Know us Better?</p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>
                Download our Services Portfolio to know what more we have to offer!
              </p>
              <a href="/brochure.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <Download size={16} /> Download Brochure
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '32px 28px', border: '1px solid var(--border-color)' }}>
              <Eye size={28} color="#d73d56" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, fontFamily: 'var(--font-display)' }}>Our Vision</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  To be the leading digital marketing agency recognized for our expertise, creativity, and exceptional client service.
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  Experts in Pay Per Click, Social Media Management, Graphic Designing, Search Engine Optimization, Content Creation, and more.
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  To continuously evolve and set new standards in the digital marketing industry, driving positive change and innovation.
                </li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '32px 28px', border: '1px solid var(--border-color)' }}>
              <Target size={28} color="#d73d56" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, fontFamily: 'var(--font-display)' }}>Our Mission</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  Empower growth in businesses by addressing their simple to complex digital marketing issues like inconsistent lead generation and low ROAS.
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  Deliver innovative solutions through data-driven strategies and creative advertisement campaigns tailored to fuel revenue growth.
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  Focus on measurable results that help clients overcome challenges and reach their business objectives.
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#d73d56', fontWeight: 700 }}>•</span>
                  Build lasting relationships with clients based on Analytics & Reporting, Trust, Transparency, and Mutual Success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: 12 }}>DIGITAL ADVERTISEMENT MARKETING NETWORK</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)' }}>Why Choose <span className="font-display-italic">Us?</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
                  <Icon size={32} color="#d73d56" style={{ marginBottom: 16 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48, display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>Email Us</p>
              <a href="mailto:info@digimarketingart.com" style={{ color: '#d73d56', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>info@digimarketingart.com</a>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>Call Us</p>
              <a href="tel:+919056544487" style={{ color: '#d73d56', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>+91-90565-44487</a>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>Global Presence</p>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#d73d56' }}>India | UK | USA | Canada | Dubai</span>
            </div>
          </div>
        </div>
      </section>

      <GlobalOffices />

      {/* Contact Section */}
      <ContactForm
        leftPanel={aboutLeftPanel}
        bgImage="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781930224/3459b5e6-3fdd-4c54-91dc-3f03db474df8_wpjfqi.png"
        darkOverlay={true}
        appScriptUrl="https://script.google.com/macros/s/AKfycbz4ql2DSw3vG9jMW0SjWlTQJhNiPhj7tEC1yNKfc5FLRWLZFadavYLrbusC0jTk7nmx/exec"
      />



      {/* Back to top */}
      <div style={{ textAlign: 'center', padding: '24px', background: 'var(--bg-secondary)' }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: 13, textDecoration: 'none' }}>
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </div>
  );
};

export default About;
