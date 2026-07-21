import React from 'react';
import { Phone } from 'lucide-react';

const offices = [
  { city: 'India - Punjab', flag: '🇮🇳', addr: 'SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603', phone: '+91-90565-44487' },
  { city: 'India - Gujarat', flag: '🇮🇳', addr: '310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009' },
  { city: 'United Kingdom', flag: '🇬🇧', addr: '20-22 Wenlock Road, Hoxton, London N1 7GU' },
  { city: 'United States', flag: '🇺🇸', addr: '616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989' },
  { city: 'Canada', flag: '🇨🇦', addr: '8449, 116 A Street, Delta - V4C7N7, Greater Vancouver', phone: '+1 (778) 798-9624' },
  { city: 'Dubai', flag: '🇦🇪', addr: 'Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE' },
];

function GlobalOffices() {
  return (
    <section className="global-offices-section" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1783057634/AQNHqN-CRAge0xhrvJCedieKnojZ3RczV6S-SaYD3md9KESw1QV2gF37JplkqwYHOVDxIUYiddfwHtehC3evywHxlU7vHwyxvUNtqj3EKRuimwgbs2ObvF0f4-TDKrlTPgCWbfFvUs-T-K6Ake0MxaUt9GZv3A.jpeg_qljdro.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.35)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 12, fontWeight: 700 }}>Our Presence</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: 12, color: 'var(--text-primary)' }}>Our Global <span className="font-display-italic">Offices</span></h2>
          <div style={{ width: 60, height: 3, background: '#d73d56', borderRadius: 2, margin: '12px auto 16px' }} />
          <p style={{ color: '#000', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>Serving clients across multiple countries worldwide.</p>
        </div>
        <div className="offices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {offices.map((o, idx) => (
            <div
              key={o.city}
              className="office-card"
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 20,
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #d73d56, rgba(215,61,86,0.2))', borderRadius: '20px 20px 0 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `rgba(215,61,86,${0.06 + idx * 0.02})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 22,
                }}>
                  {o.flag}
                </div>
                <div>
                  <strong style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-primary)' }}>{o.city}</strong>
                  <p style={{ fontSize: 11, color: '#d73d56', marginTop: 2, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Office</p>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: o.phone ? 16 : 0 }}>{o.addr}</p>
              {o.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(215,61,86,0.06)', borderRadius: 10, border: '1px solid rgba(215,61,86,0.1)', alignSelf: 'flex-start', width: 'fit-content' }}>
                  <Phone size={14} color="#d73d56" />
                  <span style={{ fontSize: 14, color: '#d73d56', fontWeight: 700 }}>{o.phone}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalOffices;
