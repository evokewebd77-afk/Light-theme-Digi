import { useState } from 'react';
import { Cpu } from 'lucide-react';

function Integrations() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const platforms = [
    { name: "SEMrush", type: "SEO & Audits", color: "#FF6400", x: "15%", y: "15%", alignX: "0%", alignY: "0%" },
    { name: "UberSuggest", type: "Keyword Intel", color: "#E76F51", x: "50%", y: "8%", alignX: "-50%", alignY: "0%" },
    { name: "Google Analytics", type: "Data Attribution", color: "#F9AB00", x: "85%", y: "15%", alignX: "-100%", alignY: "0%" },
    { name: "Google Tag Manager", type: "Event Tracking", color: "#246FDB", x: "85%", y: "85%", alignX: "-100%", alignY: "-100%" },
    { name: "Microsoft Clarity", type: "User Recording", color: "#008080", x: "50%", y: "92%", alignX: "-50%", alignY: "-100%" },
    { name: "Pabbly Connect", type: "AI Automation", color: "#5A2C84", x: "15%", y: "85%", alignX: "0%", alignY: "-100%" }
  ];

  return (
    <section id="integrations" style={{ position: 'relative', padding: 'var(--section-padding) 0', width: '100%', overflow: 'hidden' }}>
      <style>{`
        .network-container {
          position: relative;
          width: 100%;
          max-width: 680px;
          height: 420px;
          margin: 0 auto;
        }

        /* Responsive SVG lines background */
        .network-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .network-line {
          stroke: var(--border-light);
          stroke-width: 1.5;
          stroke-dasharray: 6 4;
          transition: all 0.4s ease;
        }

        .network-line.active {
          stroke-width: 2.5;
          stroke-dasharray: none;
          filter: drop-shadow(0 0 4px var(--glow-color));
        }

        /* Node Styling */
        .network-node {
          position: absolute;
          z-index: 2;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .network-node:hover {
          transform: scale(1.08) translate(var(--tx), var(--ty)) !important;
        }

        .node-badge {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid var(--border-light);
          padding: 12px 20px;
          border-radius: 100px;
          box-shadow: var(--shadow-soft);
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          transition: all 0.4s ease;
        }

        .network-node:hover .node-badge {
          border-color: var(--node-color);
          box-shadow: 0 12px 28px rgba(0,0,0,0.06), 0 0 15px var(--node-color-alpha);
          background: #FFFFFF;
        }

        .node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: transform 0.4s ease;
        }

        .network-node:hover .node-dot {
          transform: scale(1.3);
        }

        .node-text {
          display: flex;
          flex-direction: column;
        }

        .node-name {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13px;
          color: var(--text-primary);
        }

        .node-type {
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Central Hub styling */
        .center-hub {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #121211;
          border: 2px solid var(--border-light);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .center-hub:hover {
          transform: translate(-50%, -50%) scale(1.05);
          border-color: var(--accent-lavender);
        }

        .center-hub-ring {
          position: absolute;
          top: -8px; left: -8px; right: -8px; bottom: -8px;
          border-radius: 50%;
          border: 1px dashed rgba(44, 44, 40, 0.1);
          animation: vector-spin 20s linear infinite;
        }

        @keyframes vector-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          .network-container {
            height: 380px;
          }
          .node-badge {
            padding: 8px 14px;
          }
          .node-name { font-size: 11px; }
          .node-type { display: none; }
          .center-hub {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>OUR INTEGRATIONS</div>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: '500', lineHeight: '1.15' }}>
            Technology <span className="font-display-italic">Platforms</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '16px' }}>
            Connected directly to industry-standard analytics, search databases, and automation frameworks.
          </p>
        </div>

        <div className="network-container reveal">
          {/* Dynamic connections SVG */}
          <svg className="network-svg">
            {platforms.map((p, idx) => {
              const isActive = hoveredNode === idx;
              return (
                <line
                  key={idx}
                  x1="50%"
                  y1="50%"
                  x2={p.x}
                  y2={p.y}
                  className={`network-line ${isActive ? 'active' : ''}`}
                  style={{
                    '--glow-color': p.color,
                    stroke: isActive ? p.color : undefined
                  }}
                />
              );
            })}
          </svg>

          {/* Central Logo Hub */}
          <div className="center-hub">
            <div className="center-hub-ring"></div>
            <img 
              src="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" 
              alt="DigiMarketing Logo Hub" 
              width="44"
              height="44"
              style={{ 
                height: '70px', 
                objectFit: 'contain',
                transform: 'translateY(1.5px)',
                filter: 'brightness(0) invert(1)' // Make logo white on dark hub
              }} 
            />
          </div>

          {/* Satellites */}
          {platforms.map((p, idx) => {
            // Hover shift translations to push outward
            const tx = p.x === "15%" ? "-8px" : p.x === "85%" ? "8px" : "0px";
            const ty = p.y === "8%" || p.y === "15%" ? "-8px" : "8px";

            return (
              <div
                key={idx}
                className="network-node"
                style={{
                  left: p.x,
                  top: p.y,
                  transform: `translate(${p.alignX}, ${p.alignY})`,
                  '--node-color': p.color,
                  '--node-color-alpha': `${p.color}20`,
                  '--tx': tx,
                  '--ty': ty
                }}
                onMouseEnter={() => setHoveredNode(idx)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-badge">
                  <span className="node-dot" style={{ backgroundColor: p.color }}></span>
                  <div className="node-text">
                    <span className="node-name">{p.name}</span>
                    <span className="node-type">{p.type}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
