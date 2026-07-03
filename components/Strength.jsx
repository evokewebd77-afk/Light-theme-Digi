function Strength() {
  const items = [
    { num: '01', title: 'Performance Marketing', desc: 'SEO, paid media and content campaigns anchored to measurable KPIs.' },
    { num: '02', title: 'Brand Identity', desc: 'Logo, visual system, guidelines and collateral — built to scale.' },
    { num: '03', title: 'Analytics & Reporting', desc: 'Data-driven insights to optimize performance and measure real business impact.' },
  ];

  return (
    <section className="strength-section">
      <div className="container">
        <div className="strength-grid">
          {/* Left — Sticky */}
          <div className="strength-left">
            <div className="section-label">Our Strength</div>
            <h2>Performance Marketing that converts.</h2>
            <p>We engineer high-performance marketing systems that turn ad spend into measurable revenue. Strategy, creative, analytics — all under one roof.</p>
            <a href="#services" className="strength-link">See our services ↗</a>
          </div>

          {/* Right — Items */}
          <div className="strength-items">
            {items.map((item) => (
              <div key={item.num} className="strength-item">
                <span className="strength-item-num">{item.num}</span>
                <div>
                  <div className="strength-item-title">{item.title}</div>
                  <div className="strength-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strength;
