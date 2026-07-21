import { Download, ArrowRight } from 'lucide-react';

function GrowthPlaybook() {
  return (
    <section id="growth-playbook" className="growth-playbook-section">
      <div className="growth-playbook-bg" />
      <div className="container">
        <div className="playbook-content">
          <div className="playbook-text">
            <span className="playbook-badge">Free Resource</span>
            <h2>Ready to Scale<br /><span className="font-display-italic">Your Revenue?</span></h2>
            <p>Download our Brochure and discover the AI-driven strategies we use to dominate markets.</p>
          </div>
          <div className="playbook-actions">
            <a href="/brochure.pdf" download className="playbook-btn-primary">
              <Download size={20} /> Download Brochure
            </a>
            <a href="#contact" className="playbook-btn-secondary">
              Talk to an Expert <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthPlaybook;