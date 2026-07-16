import Head from 'next/head';
import React from 'react';
import { Phone, Mail, MapPin, CalendarClock } from 'lucide-react';
import GlobalOffices from '../components/GlobalOffices';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Contact Us - Digimarketing Art | Get in Touch</title>
        <meta name="description" content="Contact Digimarketing Art for digital marketing services. Get a free consultation call. Email us at info@digimarketingart.com or call +91-90565-44487." />
        <meta name="keywords" content="contact digital marketing agency, digital marketing consultation, free marketing consultation, call digital marketing agency" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781930881/14f2d9c1-80d8-4372-b59d-c6f6257eb20e_aietla.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 16, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            GET IN TOUCH | LET'S CONNECT
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            LET'S TALK<br /><span style={{ color: '#d73d56' }}>DIGITAL <span className="font-display-italic">MARKETING!</span></span>
          </h1>
          <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 32px', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Share Your Details and We'll Be in Touch Soon. Why leave it to Chance, when you can leave it to Experts?
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Book Your Call Now
            </a>
            <a href="https://wa.me/919056544487" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#25D366', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Connect on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '-4px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(6px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <CalendarClock size={40} color="#d73d56" style={{ marginBottom: 16 }} />
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: 12, color: 'var(--text-primary)' }}>Book Your <span className="font-display-italic">Schedule</span> Now</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 32 }}>Select a time that works for you.</p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Schedule a Call
          </a>
        </div>
      </section>

      <GlobalOffices />

      {/* Ready to Talk */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781931437/ddc30228-9410-49b5-8b51-63c2a63ebe4b_u8sjyf.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', pointerEvents: 'none' }} />
        <div className="responsive-two-column-grid" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div>
            <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 12, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Ready to Talk?</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.15, fontFamily: 'var(--font-display)', marginBottom: 20, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
              Maximize your business growth with <span style={{ color: '#d73d56' }}>Digimarketing's</span> digital <span className="font-display-italic">marketing</span> expertise.
            </h2>
            <p style={{ color: '#fff', lineHeight: 1.8, marginBottom: 32, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
              Connect with our specialists to craft your success plan.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(215,61,86,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} color="#d73d56" />
                </div>
                <div>
                  <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff', marginBottom: 2, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Call Us</p>
                  <a href="tel:+919056544487" style={{ fontSize: 16, fontWeight: 700, color: '#fff', textDecoration: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>+91-90565-44487</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(215,61,86,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} color="#d73d56" />
                </div>
                <div>
                  <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff', marginBottom: 2, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Email Us</p>
                  <a href="mailto:info@digimarketingart.com" style={{ fontSize: 16, fontWeight: 700, color: '#fff', textDecoration: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>info@digimarketingart.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(215,61,86,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} color="#d73d56" />
                </div>
                <div>
                  <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff', marginBottom: 2, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Our Global Hubs</p>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>India | Canada | Dubai | UK | USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="contact" style={{ background: 'transparent', border: 'none', borderRadius: 0, padding: 0 }}>
            <ContactForm standalone appScriptUrl="https://script.google.com/macros/s/AKfycbz4ql2DSw3vG9jMW0SjWlTQJhNiPhj7tEC1yNKfc5FLRWLZFadavYLrbusC0jTk7nmx/exec" />
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
