import { useState, useEffect, useRef } from 'react';
import { Compass, Lightbulb, PenTool, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const stages = [
  {
    id: 1,
    name: 'Discovery',
    number: '01',
    Icon: Compass,
    description: 'We audit your market position, competitors, and European regulatory landscape.',
    deliverables: ['Market Audit Report', 'Competitor Analysis', 'Regulatory Compliance Check'],
  },
  {
    id: 2,
    name: 'Strategy',
    number: '02',
    Icon: Lightbulb,
    description: 'Data-driven strategy tailored to each target market with channel mix optimization.',
    deliverables: ['Channel Mix Blueprint', 'Budget Allocation Model', 'KPI Framework'],
  },
  {
    id: 3,
    name: 'Creation',
    number: '03',
    Icon: PenTool,
    description: 'Multilingual creative production — from ad copy to landing pages to video.',
    deliverables: ['Ad Creative Suite', 'Landing Page Designs', 'Multilingual Copy Deck'],
  },
  {
    id: 4,
    name: 'Launch',
    number: '04',
    Icon: Rocket,
    description: 'Coordinated multi-market launch with real-time bidding and budget allocation.',
    deliverables: ['Campaign Deployment', 'Real-Time Monitoring Dashboard', 'Budget Optimization'],
  },
  {
    id: 5,
    name: 'Optimize',
    number: '05',
    Icon: TrendingUp,
    description: 'Continuous A/B testing, attribution modeling, and performance refinement.',
    deliverables: ['Performance Reports', 'A/B Test Results', 'Quarterly Growth Roadmap'],
  },
];

export default function CampaignPlanner() {
  const [activeStage, setActiveStage] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const timelineRef = useRef(null);

  const handleStageChange = (id) => {
    if (id !== activeStage) {
      setActiveStage(id);
      setAnimKey((prev) => prev + 1);
    }
  };

  const active = stages.find((s) => s.id === activeStage);
  const progressPercent = ((activeStage - 1) / (stages.length - 1)) * 100;

  return (
    <section
      id="process"
      className="reveal"
      style={{
        padding: 'var(--section-padding) 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        /* ===== Animated dashed line ===== */
        @keyframes cp-dash-flow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }

        /* ===== Detail card entrance ===== */
        @keyframes cp-card-in {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cp-particle-pulse {
          0% { r: 4; opacity: 0.6; }
          50% { r: 7; opacity: 1; }
          100% { r: 4; opacity: 0.6; }
        }

        /* ===== Timeline container — horizontal ===== */
        .cp-timeline-wrap {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 860px;
          margin: 0 auto;
        }

        /* Connecting SVG line (horizontal) */
        .cp-track-svg {
          position: absolute;
          top: 32px; /* half of 64px node */
          left: 32px;
          right: 32px;
          height: 4px;
          z-index: 0;
          pointer-events: none;
        }

        /* Each node column */
        .cp-node-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          cursor: pointer;
          flex: 0 0 auto;
          width: 100px;
        }

        /* Circle */
        .cp-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 2px solid var(--border-light);
          transition: all 0.35s var(--ease-out-expo);
          position: relative;
        }
        .cp-circle.active {
          border-color: var(--accent-gold);
          background: rgba(201, 168, 76, 0.08);
          box-shadow: 0 0 0 8px rgba(201, 168, 76, 0.12);
        }
        .cp-circle:hover {
          border-color: var(--accent-gold);
        }
        .cp-circle svg {
          transition: color 0.25s ease;
        }
        .cp-circle.active svg {
          color: var(--accent-gold) !important;
        }

        /* Stage label */
        .cp-stage-name {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-primary);
          margin-top: 12px;
          text-align: center;
          transition: color 0.25s ease;
          font-weight: 600;
        }
        .cp-node-col.active .cp-stage-name {
          color: var(--accent-gold);
        }

        /* Stage number */
        .cp-stage-num {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          margin-top: 4px;
          text-align: center;
        }

        /* ===== Detail Card ===== */
        .cp-detail-card {
          max-width: 860px;
          margin: 48px auto 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 32px;
          border-left: 3px solid var(--accent-gold);
          animation: cp-card-in 0.45s var(--ease-out-expo) forwards;
          position: relative;
        }

        .cp-detail-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 12px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cp-detail-desc {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0 0 24px 0;
          max-width: 600px;
        }

        .cp-deliverables {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .cp-deliverable-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-primary);
          font-weight: 500;
        }

        .cp-deliverable-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        /* Progress indicator */
        .cp-progress-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }
        .cp-progress-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          font-weight: 600;
        }
        .cp-progress-track {
          flex: 1;
          height: 4px;
          background: var(--border-light);
          border-radius: 2px;
          overflow: hidden;
          max-width: 200px;
        }
        .cp-progress-fill {
          height: 100%;
          background: var(--accent-gold);
          border-radius: 2px;
          transition: width 0.5s var(--ease-out-expo);
        }

        /* ===== Mobile vertical layout ===== */
        @media (max-width: 768px) {
          .cp-timeline-wrap {
            flex-direction: column;
            align-items: flex-start;
            max-width: 100%;
            padding-left: 0;
            gap: 0;
          }

          .cp-track-svg {
            display: none;
          }

          .cp-node-col {
            flex-direction: row;
            align-items: center;
            width: 100%;
            gap: 16px;
            padding-left: 0;
          }

          .cp-circle {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
          }

          .cp-mobile-text {
            display: flex;
            flex-direction: column;
          }
          .cp-stage-name {
            margin-top: 0;
            text-align: left;
            font-size: 12px;
          }
          .cp-stage-num {
            margin-top: 2px;
            text-align: left;
          }

          /* Vertical connector line */
          .cp-vert-connector {
            display: block !important;
            width: 2px;
            height: 28px;
            margin-left: 23px; /* center under 48px circle */
            border-left: 2px dashed var(--border-light);
            position: relative;
          }
          .cp-vert-connector.filled {
            border-left-color: var(--accent-gold);
          }

          /* Mobile detail card inline */
          .cp-mobile-detail {
            display: block !important;
            margin-left: 56px;
            margin-bottom: 8px;
          }

          .cp-detail-card-desktop {
            display: none !important;
          }

          .cp-mobile-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: var(--radius-lg);
            padding: 20px;
            border-left: 3px solid var(--accent-gold);
            animation: cp-card-in 0.35s var(--ease-out-expo) forwards;
          }

          .cp-mobile-card .cp-detail-title {
            font-size: 18px;
          }
          .cp-mobile-card .cp-detail-desc {
            font-size: 14px;
            margin-bottom: 16px;
          }
          .cp-mobile-card .cp-deliverable-item {
            font-size: 13px;
          }
        }

        @media (min-width: 769px) {
          .cp-vert-connector {
            display: none !important;
          }
          .cp-mobile-detail {
            display: none !important;
          }
          .cp-mobile-text {
            display: contents;
          }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label reveal">03 — PROCESS</span>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '16px 0 16px 0',
              lineHeight: 1.15,
            }}
          >
            From Brief to <span className="font-display-italic">Launch</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            A proven five-stage methodology refined across 350+ European campaigns.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="cp-timeline-wrap reveal" ref={timelineRef}>
          {/* SVG track line (desktop only) */}
          <svg
            className="cp-track-svg"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            {/* Dashed background line */}
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="var(--border-light)"
              strokeWidth="2"
              strokeDasharray="8 4"
              style={{
                animation: 'cp-dash-flow 1.5s linear infinite',
              }}
            />
            {/* Gold progress fill line */}
            <line
              x1="0"
              y1="50%"
              x2={`${progressPercent}%`}
              y2="50%"
              stroke="var(--accent-gold)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transition: 'x2 0.5s var(--ease-out-expo)',
              }}
            />
            {/* Animated particle */}
            <circle r="5" fill="var(--accent-gold)" opacity="0.9">
              <animate attributeName="cx" from="0" to={`${progressPercent}%`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50%;45%;55%;50%" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="4;6;4" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle r="12" fill="var(--accent-gold)" opacity="0.15">
              <animate attributeName="cx" from="0" to={`${progressPercent}%`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50%;45%;55%;50%" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="10;16;10" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {stages.map((stage, idx) => {
            const isActive = stage.id === activeStage;
            const isPast = stage.id < activeStage;
            const { Icon } = stage;

            return (
              <div key={stage.id}>
                {/* Vertical connector for mobile (between nodes) */}
                {idx > 0 && (
                  <div
                    className={`cp-vert-connector ${isPast || isActive ? 'filled' : ''}`}
                  />
                )}

                <div
                  className={`cp-node-col ${isActive ? 'active' : ''}`}
                  onClick={() => handleStageChange(stage.id)}
                  onMouseEnter={() => handleStageChange(stage.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleStageChange(stage.id);
                  }}
                  aria-label={`Stage ${stage.number}: ${stage.name}`}
                >
                  <div className={`cp-circle ${isActive ? 'active' : ''}`}>
                    <Icon
                      size={22}
                      style={{
                        color: isActive
                          ? 'var(--accent-gold)'
                          : isPast
                          ? 'var(--accent-gold-light)'
                          : 'var(--text-muted)',
                      }}
                    />
                  </div>
                  <div className="cp-mobile-text">
                    <span className="cp-stage-name">{stage.name}</span>
                    <span className="cp-stage-num">{stage.number}</span>
                  </div>
                </div>

                {/* Mobile inline detail card */}
                {isActive && (
                  <div className="cp-mobile-detail">
                    <div className="cp-mobile-card" key={animKey}>
                      <h4 className="cp-detail-title">
                        <Icon size={20} style={{ color: 'var(--accent-gold)' }} />
                        {stage.name}
                      </h4>
                      <p className="cp-detail-desc">{stage.description}</p>
                      <div className="cp-deliverables">
                        {stage.deliverables.map((d) => (
                          <div className="cp-deliverable-item" key={d}>
                            <CheckCircle size={16} className="cp-deliverable-icon" />
                            {d}
                          </div>
                        ))}
                      </div>
                      <div className="cp-progress-row">
                        <span className="cp-progress-label">
                          Stage {stage.id} of 5
                        </span>
                        <div className="cp-progress-track">
                          <div
                            className="cp-progress-fill"
                            style={{ width: `${(stage.id / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Detail Card */}
        {active && (
          <div className="cp-detail-card cp-detail-card-desktop reveal" key={animKey}>
            <h4 className="cp-detail-title">
              <active.Icon size={22} style={{ color: 'var(--accent-gold)' }} />
              {active.name}
            </h4>
            <p className="cp-detail-desc">{active.description}</p>
            <div className="cp-deliverables">
              {active.deliverables.map((d) => (
                <div className="cp-deliverable-item" key={d}>
                  <CheckCircle size={16} className="cp-deliverable-icon" />
                  {d}
                </div>
              ))}
            </div>
            <div className="cp-progress-row">
              <span className="cp-progress-label">Stage {active.id} of 5</span>
              <div className="cp-progress-track">
                <div
                  className="cp-progress-fill"
                  style={{ width: `${(active.id / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
