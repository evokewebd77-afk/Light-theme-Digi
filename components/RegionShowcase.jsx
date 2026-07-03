import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, Globe, Languages, Megaphone } from 'lucide-react';

const REGION_DATA = {
  dach: {
    name: 'DACH',
    fullName: 'Germany, Austria & Switzerland',
    tagline: 'Precision, Privacy & High-Trust Marketing',
    description:
      'In the DACH region, digital marketing demands absolute precision, transparency, and bulletproof legal compliance. Consumer trust is earned through certified claims, direct benefits, and meticulous data privacy.',
    metric: '82%',
    metricLabel: 'prefer local language',
    color: 'var(--accent-cool)',
    colorLight: 'var(--accent-cool-light)',
    colorRaw: '#3D5A80',
    checklist: [
      'Strict GDPR & double opt-in conformity',
      'High-intent German-language SEA',
      'Trust badges & Impressum compliance',
      'Benefit-oriented B2B copywriting',
    ],
    channels: ['Google Search', 'LinkedIn B2B', 'Email', 'Local SEO'],
  },
  western: {
    name: 'Western Europe',
    fullName: 'France, UK & Benelux',
    tagline: 'Creative Storytelling & Premium Branding',
    description:
      'France, the UK, and Benelux respond to creative storytelling, high-end aesthetics, and cultural relevance. Omnichannel engagement and lifestyle marketing are key to winning here.',
    metric: '74%',
    metricLabel: 'driven by digital storytelling',
    color: 'var(--accent-warm)',
    colorLight: 'var(--accent-warm-light)',
    colorRaw: '#E8734A',
    checklist: [
      'Bespoke visual narratives per culture',
      'High-impact social commerce campaigns',
      'Local publisher & digital PR relations',
      'Interactive storytelling landing pages',
    ],
    channels: ['Instagram', 'Digital PR', 'TikTok', 'Google Shopping'],
  },
  nordics: {
    name: 'Nordics',
    fullName: 'Sweden, Norway, Denmark & Finland',
    tagline: 'Sustainability-First & Mobile-First',
    description:
      'Nordic consumers are highly tech-savvy and place a premium on social responsibility, sustainability, and authentic purpose-driven brand values.',
    metric: '89%',
    metricLabel: 'consider environmental values',
    color: 'var(--accent-emerald)',
    colorLight: '#5EC49A',
    colorRaw: '#2D9F6F',
    checklist: [
      'Green marketing & CSR transparency',
      'Mobile-optimized payment experiences',
      'Minimalist Scandinavian design language',
      'Micro-influencer marketing locally',
    ],
    channels: ['YouTube', 'Purpose-Led Social', 'Mobile Paid', 'Content Marketing'],
  },
  mediterranean: {
    name: 'Mediterranean',
    fullName: 'Italy, Spain & Portugal',
    tagline: 'Visually-Rich, High-Engagement Commerce',
    description:
      'Southern European markets are highly social and connected. Conversational commerce, engaging video content, and emotional appeals drive high brand conversion.',
    metric: '68%',
    metricLabel: 'engage via messaging apps',
    color: 'var(--accent-gold)',
    colorLight: 'var(--accent-gold-light)',
    colorRaw: '#C9A84C',
    checklist: [
      'Conversational commerce via WhatsApp',
      'Rich video storytelling & UGC',
      'Emotional brand-led family themes',
      'Active local-language support funnels',
    ],
    channels: ['Meta Ads', 'WhatsApp', 'Video/UGC', 'Localized SEO'],
  },
};

const REGION_KEYS = Object.keys(REGION_DATA);

/* ─── Animated counter hook ─── */
function useCountUp(target, duration, shouldStart) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    let raf;
    const step = () => {
      start += increment;
      if (start >= target) {
        setValue(target);
        return;
      }
      setValue(Math.floor(start));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, shouldStart]);
  return value;
}

/* ─── Floating stat badge ─── */
function StatBadge({ icon, value, suffix, label, style, animDelay, started }) {
  const count = useCountUp(value, 1400, started);
  return (
    <div
      className="glass-panel region-stat-badge"
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        borderRadius: 'var(--radius-full)',
        zIndex: 5,
        animation: started ? `regionFloat 4s ease-in-out ${animDelay}s infinite` : 'none',
        opacity: started ? 1 : 0,
        transition: 'opacity 0.6s ease',
        ...style,
      }}
    >
      {icon}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          whiteSpace: 'nowrap',
        }}
      >
        {count}
        {suffix} {label}
      </span>
    </div>
  );
}

/* ─── SVG Europe Map ─── */
function EuropeMap({ activeRegion, onSelect }) {
  const regions = [
    {
      id: 'nordics',
      d: 'M 210,28 Q 220,18 240,20 L 290,22 Q 310,22 318,30 L 325,50 Q 330,65 320,75 L 280,80 Q 260,82 245,75 L 215,62 Q 200,55 200,42 Z',
      label: { x: 262, y: 52 },
    },
    {
      id: 'western',
      d: 'M 100,95 Q 90,85 100,75 L 140,68 Q 160,64 178,70 L 200,80 Q 215,88 210,105 L 205,140 Q 200,158 185,165 L 150,172 Q 130,176 115,168 L 95,150 Q 82,135 85,118 Z',
      label: { x: 148, y: 125 },
    },
    {
      id: 'dach',
      d: 'M 215,88 Q 225,78 245,80 L 305,85 Q 328,88 335,105 L 340,135 Q 342,155 330,165 L 295,178 Q 275,185 255,178 L 225,165 Q 208,155 205,138 L 205,110 Q 205,95 215,88 Z',
      label: { x: 272, y: 132 },
    },
    {
      id: 'mediterranean',
      d: 'M 140,190 Q 130,180 140,172 L 180,168 Q 200,165 220,172 L 280,188 Q 305,195 315,210 L 320,235 Q 322,252 308,260 L 265,268 Q 240,272 215,265 L 170,248 Q 148,240 140,222 Z',
      label: { x: 228, y: 220 },
    },
  ];

  return (
    <svg
      viewBox="60 0 320 290"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filters for each region */}
        <filter id="glow-dach" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="#3D5A80" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-western" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="#E8734A" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-nordics" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="#2D9F6F" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-mediterranean" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="#C9A84C" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle grid pattern */}
        <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E4DC" strokeWidth="0.3" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect x="60" y="0" width="320" height="290" fill="url(#mapGrid)" rx="16" opacity="0.5" />

      {/* Decorative connection lines */}
      <line x1="245" y1="75" x2="230" y2="88" stroke="#E8E4DC" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="272" y1="78" x2="275" y2="88" stroke="#E8E4DC" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="195" y1="145" x2="175" y2="170" stroke="#E8E4DC" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="260" y1="178" x2="258" y2="188" stroke="#E8E4DC" strokeWidth="1" strokeDasharray="4 3" />

      {/* Region shapes */}
      {regions.map((r) => {
        const isActive = activeRegion === r.id;
        const data = REGION_DATA[r.id];
        return (
          <g
            key={r.id}
            onClick={() => onSelect(r.id)}
            style={{ cursor: 'pointer' }}
            className={`map-region ${isActive ? 'map-region-active' : ''}`}
          >
            <path
              d={r.d}
              fill={isActive ? `${data.colorRaw}18` : '#F7F4EE'}
              stroke={isActive ? data.colorRaw : '#E8E4DC'}
              strokeWidth={isActive ? 2 : 1}
              filter={isActive ? `url(#glow-${r.id})` : 'none'}
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <text
              x={r.label.x}
              y={r.label.y}
              textAnchor="middle"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                fontWeight: 700,
                fill: isActive ? data.colorRaw : '#9A9AB0',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'fill 0.3s ease',
                pointerEvents: 'none',
              }}
            >
              {data.name}
            </text>
            {/* Active dot indicator */}
            {isActive && (
              <circle
                cx={r.label.x}
                cy={r.label.y + 12}
                r="3"
                fill={data.colorRaw}
                opacity="0.8"
              >
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Detail Card ─── */
function DetailCard({ regionKey, animKey }) {
  const data = REGION_DATA[regionKey];
  return (
    <div
      key={animKey}
      className="region-detail-card"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md, 12px)',
        padding: '36px',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden',
        animation: 'regionCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* Decorative gradient glow */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          background: `radial-gradient(circle, ${data.colorRaw}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Region Header */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}
        >
          {data.name}
        </h3>
        {/* Accent bar */}
        <div
          style={{
            width: 60,
            height: 4,
            borderRadius: 2,
            background: data.color,
            marginBottom: '6px',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '4px',
          }}
        >
          {data.fullName}
        </p>
        <p
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: data.color,
            marginBottom: '16px',
          }}
        >
          {data.tagline}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '24px',
          }}
        >
          {data.description}
        </p>

        {/* Metric Callout */}
        <div
          style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm, 8px)',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'baseline',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 800,
              color: data.color,
            }}
          >
            {data.metric}
          </span>
          <span
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}
          >
            {data.metricLabel}
          </span>
        </div>

        {/* Execution Checklist */}
        <div style={{ marginBottom: '24px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-muted)',
              marginBottom: '12px',
            }}
          >
            Execution Checklist
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.checklist.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle
                  size={16}
                  style={{
                    color: data.color,
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Tags */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-muted)',
              marginBottom: '10px',
            }}
          >
            Top Channels
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.channels.map((ch, idx) => (
              <span
                key={idx}
                style={{
                  background: `${data.colorRaw}0D`,
                  border: `1px solid ${data.colorRaw}30`,
                  color: data.color,
                  borderRadius: 'var(--radius-full, 999px)',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function RegionShowcase() {
  const [activeRegion, setActiveRegion] = useState('dach');
  const [animKey, setAnimKey] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  /* IntersectionObserver for counter animation */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleRegionSelect = useCallback(
    (key) => {
      if (key === activeRegion) return;
      setActiveRegion(key);
      setAnimKey((k) => k + 1);
    },
    [activeRegion]
  );

  return (
    <section
      id="reach"
      ref={sectionRef}
      style={{
        padding: 'var(--section-padding, 100px 0)',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ─── Embedded Styles ─── */}
      <style>{`
        /* Animations */
        @keyframes regionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes regionCardIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes regionPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Map hover */
        .map-region path {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .map-region:hover path {
          stroke-width: 2;
          filter: drop-shadow(0 0 6px rgba(0,0,0,0.08));
        }

        /* Main grid layout */
        .region-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .region-main-grid {
            grid-template-columns: 55% 45%;
            gap: 48px;
          }
        }

        /* Map column — hide on mobile */
        .region-map-col {
          display: none;
          position: relative;
          min-height: 400px;
        }
        @media (min-width: 992px) {
          .region-map-col {
            display: block;
          }
        }

        /* Mobile region selector — show only on mobile */
        .region-mobile-selector {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 4px;
          margin-bottom: 24px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .region-mobile-selector::-webkit-scrollbar { display: none; }
        @media (min-width: 992px) {
          .region-mobile-selector {
            display: none;
          }
        }

        .region-mobile-btn {
          flex-shrink: 0;
          padding: 10px 20px;
          border-radius: var(--radius-full, 999px);
          border: 1px solid var(--border-light);
          background: var(--bg-primary);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }
        .region-mobile-btn:hover {
          border-color: var(--text-muted);
        }
        .region-mobile-btn.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        /* Stat badge responsive */
        .region-stat-badge {
          pointer-events: none;
        }
        @media (max-width: 1100px) {
          .region-stat-badge {
            transform: scale(0.9);
          }
        }
      `}</style>

      <div className="container">
        {/* ─── Section Header ─── */}
        <div
          className="reveal"
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <span className="section-label">02 — REACH</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              margin: '16px auto 16px auto',
              maxWidth: '600px',
            }}
          >
            Pan-European <span className="font-display-italic">Expertise</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            One continent, many cultures. We localize for each.
          </p>
        </div>

        {/* ─── Mobile Region Selector ─── */}
        <div className="region-mobile-selector reveal">
          {REGION_KEYS.map((key) => {
            const data = REGION_DATA[key];
            const isActive = activeRegion === key;
            return (
              <button
                key={key}
                className={`region-mobile-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleRegionSelect(key)}
                style={
                  isActive
                    ? { background: data.colorRaw, borderColor: data.colorRaw, color: '#fff' }
                    : undefined
                }
              >
                {data.name}
              </button>
            );
          })}
        </div>

        {/* ─── Main Two-Column Layout ─── */}
        <div className="region-main-grid">
          {/* LEFT: SVG Map Column */}
          <div className="region-map-col reveal">
            <div
              style={{
                position: 'relative',
                padding: '24px',
              }}
            >
              <EuropeMap activeRegion={activeRegion} onSelect={handleRegionSelect} />

              {/* Floating Stat Badges */}
              <StatBadge
                icon={<Globe size={14} style={{ color: 'var(--accent-cool)', flexShrink: 0 }} />}
                value={28}
                suffix=""
                label=" Markets"
                started={inView}
                animDelay={0}
                style={{ top: '6px', right: '0px' }}
              />
              <StatBadge
                icon={<Languages size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />}
                value={14}
                suffix=""
                label=" Languages"
                started={inView}
                animDelay={0.5}
                style={{ bottom: '32px', left: '0px' }}
              />
              <StatBadge
                icon={<Megaphone size={14} style={{ color: 'var(--accent-warm)', flexShrink: 0 }} />}
                value={350}
                suffix="+"
                label=" Campaigns"
                started={inView}
                animDelay={1}
                style={{ bottom: '32px', right: '0px' }}
              />
            </div>
          </div>

          {/* RIGHT: Detail Card Column */}
          <div className="reveal reveal-delay-1">
            <DetailCard regionKey={activeRegion} animKey={animKey} />
          </div>
        </div>
      </div>
    </section>
  );
}
