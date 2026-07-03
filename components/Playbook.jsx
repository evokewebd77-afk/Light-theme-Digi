function Playbook() {
  return (
    <section id="playbook" style={{ position: 'relative', padding: 'var(--section-padding) 0', width: '100%' }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--accent-lavender)', marginBottom: '32px', fontWeight: 600 }}>
            WORK WITH US!
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '24px', lineHeight: '1.15' }}>
            Ready to Scale <span className="font-display-italic">Your Revenue?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            Download our 2026 Growth Playbook and discover the AI-driven strategies we use to dominate markets.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '20px 48px' }}>
              Talk to an Expert
            </a>
            <a href="#services" className="btn btn-outline" style={{ padding: '20px 48px' }}>
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Playbook;
