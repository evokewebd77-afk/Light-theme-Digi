import { Lightbulb, Zap, Rocket, TrendingUp } from 'lucide-react';

function IdeaToSuccess() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Ideas',
      description: 'We start by understanding your vision, goals, and unique value proposition.'
    },
    {
      icon: Zap,
      title: 'Strategy',
      description: 'Crafting a data-driven strategy that aligns with market opportunities.'
    },
    {
      icon: Rocket,
      title: 'Execution',
      description: 'Building and launching with precision, creativity, and technical excellence.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Optimizing and scaling for measurable results and sustainable success.'
    }
  ];

  return (
    <section className="idea-to-success-section">
      <div className="container">
        <div className="idea-header">
          <h2>Turning Ideas Into<br /><span className="font-display-italic">Digital</span> Success</h2>
          <p>Our proven process transforms your vision into market-leading digital solutions</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="process-card">
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="process-icon">
                  <Icon size={40} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="process-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IdeaToSuccess;
