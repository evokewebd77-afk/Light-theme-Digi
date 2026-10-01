function Testimonials() {
  const testimonials = [
    {
      text: "Outstanding service with precise execution — lead quality improved almost immediately.",
      name: 'ITC INDIA',
      company: 'Product Testing Laboratory • India',
      summary: 'Generated over 70 high-quality leads, optimized LinkedIn profile, and increased revenue.',
      initials: 'IT',
      logo: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
      accentColor: '#CB0021',
    },
    {
      text: "Transparent, collaborative, and results-driven — our enrollment numbers grew significantly.",
      name: 'Sustainable Futures Trainings',
      company: 'ISO & QMS Training • India',
      summary: 'More than 100 leads generated from strategically developed campaigns.',
      initials: 'SF',
      logo: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180796/sft_fl24sf.webp',
      accentColor: '#2563EB',
    },
    {
      text: "They truly understood our niche — lead quality and brand visibility grew remarkably.",
      name: 'EuroTech',
      company: 'Assessment & Certification • Canada',
      summary: '50 quality leads generated at high-cost value, driving business growth.',
      initials: 'ET',
      logo: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180773/eurotech_pdhehu.webp',
      accentColor: '#7C3AED',
    },
  ];

  return (
    <section id="voices" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">OUR TESTIMONIALS</div>
          <h2 className="section-title">What Our Clients <span className="font-display-italic">Say</span></h2>
          <div className="testimonials-clutch-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#CB0021' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span className="clutch-label">Clutch Verified</span>
            <span className="clutch-divider" />
            <span className="clutch-stars">★★★★★</span>
            <span className="clutch-rating">5.0</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ '--card-accent': t.accentColor }}>
              <div className="testimonial-accent-bar" />

              <div className="testimonial-card-inner">
                {/* Top row: Client Logo + Star Rating */}
                <div className="testimonial-top-row">
                  <div className="testimonial-logo-wrap">
                    <img src={t.logo} alt={t.name} className="testimonial-logo" />
                  </div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>

                {/* Quote */}
                <p className="testimonial-text">"{t.text}"</p>

                <div className="testimonial-divider" />

                {/* Author */}
                <div className="testimonial-author">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.company}</div>
                </div>

                {/* Summary */}
                <div className="testimonial-summary">
                  <p><strong>RESULT:</strong> {t.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
