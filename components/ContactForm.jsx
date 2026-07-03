import { useState, useEffect, useRef } from 'react';
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';

const DRAFT_COOKIE = 'dma_contact_draft';

const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxs_2JQ5pMH4AUTVRzjlIpu07aHHzHYK0D1dv5CUxUB_5WyxDKufKSIRdczeobNtuB/exec';

function ContactForm({ accentColor = '#d73d56', showOffices = true, leftPanel, appScriptUrl = DEFAULT_SCRIPT_URL, standalone = false }) {
  const [selectedServices, setSelectedServices] = useState(['ppc']);
  const debounceRef = useRef(null);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Restore draft from cookie on mount
  useEffect(() => {
    const draft = getCookie(DRAFT_COOKIE);
    if (draft) {
      if (draft.name) setName(draft.name);
      if (draft.email) setEmail(draft.email);
      if (draft.phone) setPhone(draft.phone);
      if (draft.location) setLocation(draft.location);
      if (draft.message) setMessage(draft.message);
      if (draft.selectedServices) setSelectedServices(draft.selectedServices);
    }
  }, []);

  // Debounced draft saving
  function saveDraft() {
    const data = { name, email, phone, location, message, selectedServices };
    // Remove empty fields
    Object.keys(data).forEach(k => { if (!data[k] || (Array.isArray(data[k]) && data[k].length === 0)) delete data[k]; });
    if (Object.keys(data).length > 0) {
      setCookie(DRAFT_COOKIE, data, 7);
    }
  }

  function debouncedSave() {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(saveDraft, 500);
  }

  const offices = [
    { flag: "🇮🇳", country: "India - Punjab", office: "Office", address: "SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603", phone: "+91-90565-44487" },
    { flag: "🇮🇳", country: "India - Gujarat", office: "Office", address: "310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009", phone: "" },
    { flag: "🇬🇧", country: "United Kingdom", office: "Office", address: "20-22 Wenlock Road, Hoxton, London N1 7GU", phone: "" },
    { flag: "🇺🇸", country: "United States", office: "Office", address: "616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989", phone: "" },
    { flag: "🇨🇦", country: "Canada", office: "Office", address: "8449, 116 A Street, Delta - V4C7N7, Greater Vancouver", phone: "+1 (778) 798-9624" },
    { flag: "🇦🇪", country: "Dubai", office: "Office", address: "Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE", phone: "" },
  ];

  const serviceOptions = [
    { id: 'ppc', label: 'PPC Management', deliverables: ["Audits & Keyword Research", "Ad Copy & Creative Suite", "Real-Time Bidding Strategy"] },
    { id: 'smm', label: 'Social Media Marketing', deliverables: ["Platform-Native Content Calendar", "Competitor Resonance Analysis", "Community Engagement Hub"] },
    { id: 'webdev', label: 'Web Development', deliverables: ["High-Performance React/Vite Site", "SEO-Structured Landing Pages", "Custom SVG/CSS Micro-Animations"] },
    { id: 'seo', label: 'SEO Services', deliverables: ["Native Multilingual Keyword Mapping", "Technical Audits & Speed Tuning", "Local Search Authority Building"] },
    { id: 'design', label: 'Graphic Design', deliverables: ["Visual Identity Book", "Asset Package Design", "Cultural Resonance Visual Polish"] },
    { id: 'audit', label: 'Digital Marketing Audit', deliverables: ["Google & FB Ads Performance Audit", "Social Media Performance Audit", "Website & Content Audit"] },
    { id: 'other', label: 'Other', deliverables: ["Custom requirements", "Tailored solutions", "Dedicated support"] }
  ];

  const toggleService = (srvId) => {
    if (selectedServices.includes(srvId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(id => id !== srvId));
      }
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const getDeliverablesList = () => {
    const list = [];
    selectedServices.forEach(srvId => {
      const option = serviceOptions.find(o => o.id === srvId);
      if (option) list.push(...option.deliverables);
    });
    // Return unique deliverables, cap at 6 items
    return [...new Set(list)].slice(0, 6);
  };

  const getDuration = () => {
    const srvCount = selectedServices.length;
    if (srvCount === 1) return "2-3 Weeks";
    if (srvCount === 2) return "4-5 Weeks";
    return "6-8 Weeks";
  };

  const currentService = serviceOptions.find((option) => option.id === selectedServices[0]) || serviceOptions[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    if (!name || !email) {
      setError('Please enter your name and email.');
      return;
    }
    setSending(true);

    if (appScriptUrl) {
      try {
        const body = new URLSearchParams({
          name,
          email,
          phone: phone || '',
          service: serviceOptions.find(o => o.id === selectedServices[0])?.label || selectedServices[0],
          location: location || '',
          message: message || '',
          page: window.location.pathname,
        });
        const res = await fetch(appScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });
        const data = await res.json();
        if (!data.success) throw new Error('Server error');
      } catch {
        setError('Could not send. Please email us at info@digimarketingart.com');
        setSending(false);
        return;
      }
    }

    clearTimeout(debounceRef.current);
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setMessage('');
    setSelectedServices(['ppc']);
    deleteCookie(DRAFT_COOKIE);
    setSending(false);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
  };
  const rgb = hexToRgb(accentColor);

  const formElement = (
    <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit} style={standalone ? { boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' } : {}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '18px' }}>
        <div>
          <div className="section-label" style={{ background: accentColor, color: '#fff', borderColor: accentColor }}>Send A Message</div>
          <h3 style={{ fontSize: '24px', margin: '16px 0 0', lineHeight: '1.1' }}>Start Your Project</h3>
        </div>
        <a href="/#work" className="hero-btn-secondary" style={{ textDecoration: 'none' }}>Explore Our Work</a>
      </div>

      <div className="form-row">
        <div className="form-input-box">
          <label className="form-input-label">Full Name</label>
            <input
              className="form-text-input"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => { setName(e.target.value); debouncedSave(); }}
              required
            />
        </div>
        <div className="form-input-box">
          <label className="form-input-label">Email Address</label>
            <input
              className="form-text-input"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); debouncedSave(); }}
              required
            />
        </div>
      </div>

      <div className="form-row">
        <div className="form-input-box">
          <label className="form-input-label">Phone Number</label>
            <input
              className="form-text-input"
              type="tel"
              placeholder="+91..."
              value={phone}
              onChange={(e) => { setPhone(e.target.value); debouncedSave(); }}
            />
        </div>
        <div className="form-input-box">
          <label className="form-input-label">Service</label>
          <select
            className="form-select"
            value={selectedServices[0]}
             onChange={(e) => { setSelectedServices([e.target.value]); debouncedSave(); }}
          >
            {serviceOptions.map((srv) => (
              <option key={srv.id} value={srv.id}>{srv.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-input-box">
          <label className="form-input-label">Location</label>
            <input
              className="form-text-input"
              type="text"
              placeholder="City, Country"
              value={location}
              onChange={(e) => { setLocation(e.target.value); debouncedSave(); }}
            />
        </div>
      </div>

      <div className="form-row full">
        <div className="form-input-box">
          <label className="form-input-label">Your Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us about your project..."
              value={message}
              onChange={(e) => { setMessage(e.target.value); debouncedSave(); }}
            />
        </div>
      </div>

      <div className="submit-row">
        <button type="submit" className="btn btn-primary btn-send" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
        <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>We typically respond within 2 business hours.</div>
      </div>
      {error && (
        <div style={{ padding: '18px 22px', background: 'rgba(215,61,86,0.1)', border: '1px solid rgba(215,61,86,0.25)', color: '#b91c1c', borderRadius: 18, fontSize: 15, lineHeight: 1.75 }}>{error}</div>
      )}
    </form>
  );

  if (standalone) return formElement;

  return (
    <section id="contact" className="contact-section" style={{
      '--cf-accent': accentColor,
      '--cf-accent-blob': `rgba(${rgb}, 0.1)`,
      '--cf-accent-border': `rgba(${rgb}, 0.25)`,
      '--cf-accent-shadow': `0 0 0 4px rgba(${rgb}, 0.1)`,
      '--cf-accent-btn-shadow': `0 18px 32px rgba(${rgb}, 0.25)`,
    }}>
      <div className="contact-bg-image" />
      <div className="contact-text-overlay" />
      <div className="contact-bg" />
      <div style={{ position: 'relative', zIndex: 2 }}>


      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px', textAlign: showOffices ? 'left' : 'center' }}>
          <div className="section-label" style={{ background: accentColor, color: '#fff', borderColor: accentColor, marginLeft: showOffices ? '0' : 'auto', marginRight: showOffices ? '0' : 'auto' }}>Contact Our Team</div>
          <h2 style={{ fontSize: 'clamp(38px, 5vw, 62px)', lineHeight: '1.05', margin: '18px 0 0' }}>
            Let's Build<br /><span style={{ color: accentColor }}>Something <span className="font-display-italic" style={{ color: accentColor }}> Powerful</span></span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginTop: '18px', maxWidth: '700px', lineHeight: '1.9', marginLeft: showOffices ? '0' : 'auto', marginRight: showOffices ? '0' : 'auto' }}>
            Connect with our global offices and expert team to start scaling your business digitally.
          </p>
        </div>

        <div className="contact-grid" style={!showOffices && !leftPanel ? { gridTemplateColumns: '1fr', justifyItems: 'center' } : {}}>
          {leftPanel ? (
          <aside className="contact-panel reveal reveal-delay-1">
            {leftPanel}
          </aside>
          ) : showOffices && (
          <aside className="contact-panel reveal reveal-delay-1">
            {offices.map(o => (
              <div key={o.address} className="contact-detail-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>{o.flag}</span>
                  <div>
                    <div className="contact-detail-title" style={{ fontSize: 14, fontWeight: 800 }}>{o.country}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{o.office}</div>
                  </div>
                </div>
                <div className="contact-detail-value" style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{o.address}</div>
                {o.phone && <div className="contact-detail-sub" style={{ marginTop: 6, fontWeight: 600, fontSize: 14 }}>{o.phone}</div>}
              </div>
            ))}
          </aside>
          )}

          {formElement}
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactForm;
