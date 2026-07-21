import { ArrowUpRight } from 'lucide-react';

function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-inner">
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: '#FAFAF8', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Let's build something
        </h2>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'transparent', WebkitTextStroke: '2px #FAFAF8', marginBottom: 8 }}>
          extraordinary
        </h2>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FAFAF8', opacity: 0.3, marginBottom: 32 }}>
          together
        </h2>

        <p className="cta-desc">
          Transform your digital presence with our expertise in performance marketing, brand strategy, and growth engineering. Your success story starts here.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="cta-btn-primary">
            Start Your Project <ArrowUpRight size={16} />
          </a>
          <a href="#work" className="cta-btn-secondary">
            Explore Our Work
          </a>
        </div>

        <div className="cta-stats">
          <div>
            <div className="cta-stat-num">200+</div>
            <div className="cta-stat-label">Campaigns Delivered</div>
          </div>
          <div>
            <div className="cta-stat-num">150+</div>
            <div className="cta-stat-label">Happy Clients</div>
          </div>
          <div>
            <div className="cta-stat-num">98%</div>
            <div className="cta-stat-label">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
