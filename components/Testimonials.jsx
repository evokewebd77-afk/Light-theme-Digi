function Testimonials() {
  const testimonials = [
    {
      text: "Outstanding service with precise execution — lead quality improved almost immediately.",
      name: 'ITC INDIA',
      company: 'Product Testing Laboratory • India',
      summary: 'We have successfully generated over 70 high-quality leads for the client, optimized their LinkedIn profile, and increased their revenue.',
      initials: 'IT',
    },
    {
      text: "Transparent, collaborative, and results-driven — our enrollment numbers grew significantly.",
      name: 'Sustainable Futures Trainings',
      company: 'ISO and QMS Training Providers • Canada',
      summary: 'Thanks to our efforts, more than 100 leads were generated from the campaigns we developed.',
      initials: 'SF',
    },
    {
      text: "They truly understood our niche — lead quality and brand visibility grew remarkably.",
      name: 'EuroTech',
      company: 'Assessment and Certification Service Providers • India',
      summary: 'With our help, 50 quality leads were generated at a high-cost value, which helped grow the business.',
      initials: 'ET',
    },
  ];

  return (
    <section id="voices" className="testimonials-section">
      <div className="testimonials-bg" />
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">OUR TESTIMONIALS</div>
          <h2 className="section-title">What Our Clients <span className="font-display-italic">Say</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Clutch Award</span>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Clutch</span>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Verified Reviews</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <span className="testimonial-quote">“</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-divider" />
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name" style={{ fontWeight: 700 }}>{t.name}</div>
                  <div className="testimonial-location">{t.company}</div>
                </div>
              </div>
              <div style={{ marginTop: 16, padding: '12px 14px', background: 'rgba(255,255,255,0.6)', borderRadius: 12, border: '1px solid rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  <strong>SUMMARY:</strong> {t.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
