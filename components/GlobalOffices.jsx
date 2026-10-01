import React from 'react';
import { Phone, MapPin, Globe2, ArrowUpRight, Building2 } from 'lucide-react';

const offices = [
  {
    city: 'India - Punjab',
    flag: '🇮🇳',
    badge: 'Headquarters & HQ Hub',
    addr: 'SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603',
    phone: '+91-90565-44487',
    mapUrl: 'https://maps.google.com/?q=Aero+View+Plaza+Mohali',
  },
  {
    city: 'India - Gujarat',
    flag: '🇮🇳',
    badge: 'Western Operations',
    addr: '310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009',
    mapUrl: 'https://maps.google.com/?q=Sampada+Navarangpura+Ahmedabad',
  },
  {
    city: 'United Kingdom',
    flag: '🇬🇧',
    badge: 'Europe Hub',
    addr: '20-22 Wenlock Road, Hoxton, London N1 7GU',
    mapUrl: 'https://maps.google.com/?q=20-22+Wenlock+Road+London',
  },
  {
    city: 'United States',
    flag: '🇺🇸',
    badge: 'North America Hub',
    addr: '616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989',
    mapUrl: 'https://maps.google.com/?q=616+Corporate+Way+Valley+Cottage+NY',
  },
  {
    city: 'Canada',
    flag: '🇨🇦',
    badge: 'Americas Hub',
    addr: '8449, 116 A Street, Delta - V4C7N7, Greater Vancouver',
    phone: '+1 (778) 798-9624',
    mapUrl: 'https://maps.google.com/?q=8449+116+A+Street+Delta+Vancouver',
  },
  {
    city: 'Dubai (UAE)',
    flag: '🇦🇪',
    badge: 'MENA Operations',
    addr: 'Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE',
    mapUrl: 'https://maps.google.com/?q=The+Prism+Tower+Business+Bay+Dubai',
  },
];

function GlobalOffices({ className = '' }) {
  return (
    <section className={`offices-section ${className}`.trim()}>
      <div className="offices-bg-glow-left" />
      <div className="offices-bg-glow-right" />
      <div className="offices-bg-dots" />

      <div className="offices-container">
        <div className="offices-head">
          <span className="offices-badge">
            <Globe2 size={13} color="#d73d56" /> Our Presence
          </span>
          <h2 className="offices-title">
            Our Global <span className="font-display-italic">Offices</span>
          </h2>
          <span className="offices-rule" />
          <p className="offices-sub">
            Serving ambitious brands across 6 strategic international hubs with local execution and global impact.
          </p>
        </div>

        <div className="offices-grid">
          {offices.map((o) => (
            <div key={o.city} className="office-card">
              <span className="office-card-bar" />
              <div className="office-card-top">
                <span className="office-flag">{o.flag}</span>
                <div className="office-card-name">
                  <strong>{o.city}</strong>
                  <span className="office-tag">{o.badge}</span>
                </div>
              </div>

              <div className="office-addr-wrap">
                <MapPin size={16} className="office-pin-icon" />
                <p className="office-addr">{o.addr}</p>
              </div>

              <div className="office-actions">
                {o.phone && (
                  <a className="office-phone" href={`tel:${o.phone.replace(/[^+\d]/g, '')}`}>
                    <Phone size={13} />
                    <span>{o.phone}</span>
                  </a>
                )}
                {o.mapUrl && (
                  <a
                    className="office-map-link"
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Map</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="offices-bottom-bar">
          <div className="offices-stat-item">
            <Building2 size={16} color="#d73d56" />
            <span><strong>6 Global Hubs</strong> Across 5 Continents</span>
          </div>
          <div className="offices-stat-dot" />
          <div className="offices-stat-item">
            <Globe2 size={16} color="#d73d56" />
            <span><strong>24/7</strong> International Client Service</span>
          </div>
          <div className="offices-stat-dot" />
          <div className="offices-stat-item">
            <Phone size={16} color="#d73d56" />
            <span>Seamless Cross-Border Team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalOffices;
