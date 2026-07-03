import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

/* ── shared tokens ── */
const THEME_COLOR    = '#2563eb'; // Royal Blue for corporate trust
const THEME_COLOR_DK = '#1d4ed8';

/* ── inline style helpers ── */
const label = (extra = {}) => ({
  fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
  color: THEME_COLOR, fontWeight: 800, display: 'block', marginBottom: 8, ...extra,
});
const h2 = (extra = {}) => ({
  fontSize: 'clamp(1.25rem,3vw,1.6rem)', fontWeight: 900,
  fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
  lineHeight: 1.15, marginBottom: 12, ...extra,
});
const p = (extra = {}) => ({
  fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75,
  margin: 0, ...extra,
});
const card = (extra = {}) => ({
  background: 'var(--bg-secondary)', borderRadius: 24,
  border: '1px solid var(--border-color)',
  boxShadow: '0 2px 24px rgba(0,0,0,0.04)',
  padding: '32px 28px', ...extra,
});

function EurocertCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>EuroCert - Case Study | Digimarketing Art</title>
        <meta name="description" content="Learn how Digimarketing Art helped EuroCert strengthen their digital presence and reach new clients through targeted digital marketing campaigns." />
        <meta name="keywords" content="EuroCert case study, digital marketing case study, brand presence, client acquisition case study" />
      </Head>

      {/* ─────────────────── GLOBAL ANIMATION STYLES ─────────────────── */}
      <style>{`
        @keyframes ec-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ec-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes ec-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ec-glow  {
          0%  { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(37,99,235,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }
        .ec-rise { animation: ec-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ec-hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ec-hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important;
        }
        .ec-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .ec-tag:hover {
          background: ${THEME_COLOR} !important;
          color: #fff !important;
          border-color: ${THEME_COLOR} !important;
        }
        .ec-phase-wrap:hover .ec-accent { width: 100% !important; }
        .ec-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .ec-impact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.15) !important;
          border-color: rgba(37,99,235,0.35) !important;
        }
        .ec-stat-badge { animation: ec-count 0.7s ease both; }
        .ec-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .ec-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782377452/AQO4fHOdJEi5KcQNjWtSDMJl3D8YC_klRsC9TjUDQD4qmuP26WgV3N-kbNkt88HZ-_-D1tpnyQj1ap7cmvh_ulUMlwvkS06W97WwOI52DoSsTy_zNoI_a2yAfp_pyNv578SDCN8R3bqGhrZw7XstLY_WEeTwXw.jpeg_u0tz1o.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.85) 0%, rgba(5,10,25,0.8) 100%)', pointerEvents:'none' }} />

        {/* Decorative glowing orb */}
        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)',
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="ec-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>

          {/* Breadcrumb chip */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:'0 0 8px rgba(37,99,235,0.9)' }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Eurocert — Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(2rem,5vw,3.6rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.1, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How We Transformed Eurocert's<br />
            <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(37,99,235,0.6)`,
            }}>Digital Presence</span>
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            Through Website Development, SEO &amp; Conversion-Focused Landing Pages<br/>
            Building a Modern Lead Generation Infrastructure for a Global Certification &amp; Inspection Organization
          </p>

          {/* Hero chips */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Website Development', 'SEO Optimization', 'Landing Pages', 'Digital Transformation'].map((chip,i) => (
              <span key={i} style={{
                padding:'7px 18px', borderRadius:100, fontSize:12, fontWeight:700,
                background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.16)',
                color:'rgba(255,255,255,0.85)', backdropFilter:'blur(8px)',
              }}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ STATS BAR ═══════════════════════════════ */}
      <section style={{ background:'var(--bg-secondary)', borderBottom:'1px solid var(--border-color)', padding:'0 24px' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))' }}>
          {[
            { value:'Modern',       sub:'Website Transformation',      icon:'💻' },
            { value:'SEO-Driven',   sub:'Organic Growth',              icon:'🔍' },
            { value:'Conversion',   sub:'Focused Landing Pages',       icon:'🎯' },
            { value:'Increased',    sub:'Lead Generation',             icon:'📈' },
          ].map((s,i) => (
            <div key={i} className="ec-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
              borderBottom:'none',
            }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
              <div style={{ fontSize:'clamp(1.2rem,3vw,1.8rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:11, fontWeight:600, color:'var(--text-secondary)', marginTop:5, textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ MAIN CONTENT ═══════════════════════════════ */}
      <section style={{ padding:'56px 24px 80px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>

          {/* Back link */}
          <Link href="/case-studies" className="ec-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:600, fontSize:13, marginBottom:36, display:'inline-flex' }}>
            <ArrowLeft size={14} /> Back to all case studies
          </Link>

          {/* ── ABOUT + CHALLENGE ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20, marginBottom:20 }}>

            {/* About */}
            <div className="ec-hover-card" style={card()}>
              <span style={label()}>About The Client</span>
              <h2 style={h2({ marginBottom:10 })}>Client Overview</h2>
              <p style={p({ marginBottom:16 })}>Eurocert is an internationally recognized certification, inspection, auditing, and compliance organization serving businesses across multiple industries.</p>
              <p style={p({ marginBottom:16 })}>Their services help organizations achieve compliance, certification, quality assurance, and operational excellence through globally recognized standards and auditing processes.</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                {['Certification','Inspection','Auditing','Compliance','Quality Assurance','Operational Excellence'].map((s,i) => (
                  <span key={i} className="ec-tag" style={{
                    padding:'6px 13px', background:'var(--bg-primary)',
                    borderRadius:8, fontSize:12, fontWeight:600,
                    color:'var(--text-primary)', border:'1px solid var(--border-color)',
                  }}>
                    <span style={{ color:THEME_COLOR, marginRight:5 }}>✦</span>{s}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="ec-hover-card" style={card()}>
              <span style={label()}>The Problem</span>
              <h2 style={h2({ marginBottom:10 })}>The Challenge</h2>
              <p style={p({ marginBottom:14 })}>Despite offering high-value certification and inspection services, the existing digital ecosystem was not fully optimized to support modern user expectations or maximize lead generation opportunities.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  'Outdated digital experience',
                  'Limited conversion-focused website structure',
                  'Insufficient landing page strategy',
                  'Missed organic search opportunities',
                  'Complex service navigation',
                  'Lead generation bottlenecks',
                  'Limited visibility for important service offerings',
                ].map((item,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:10, padding:'9px 12px',
                    background:'rgba(37,99,235,0.05)', borderRadius:10, fontSize:13,
                    color:'var(--text-primary)', fontWeight:500, lineHeight:1.5,
                    borderLeft:`3px solid rgba(37,99,235,0.35)`,
                  }}>
                    <span style={{ color:THEME_COLOR, fontWeight:900, flexShrink:0, marginTop:1 }}>×</span>{item}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop:14, padding:'10px 14px', borderRadius:10,
                background:'rgba(37,99,235,0.08)', border:'1px solid rgba(37,99,235,0.2)',
                fontSize:13, color:THEME_COLOR_DK, fontWeight:700, fontStyle:'italic',
              }}>
                The objective was to create a modern, scalable digital infrastructure capable of attracting, engaging, and converting prospective clients.
              </div>
            </div>
          </div>

          {/* ── OBJECTIVES ── */}
          <div className="ec-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Goals</span>
            <h2 style={h2()}>Project Objectives</h2>
            <p style={p({ marginBottom:20 })}>Our team was engaged to improve both user experience and business performance through a combination of website development, search engine optimization, and landing page optimization.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
              {[
                'Modernize the website experience',
                'Improve organic search visibility',
                'Increase qualified inquiries',
                'Improve user engagement',
                'Create service-focused landing pages',
                'Build a scalable digital growth foundation',
              ].map((goal,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:12, padding:'12px 16px',
                  background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)',
                  transition:'border-color 0.2s',
                }}>
                  <div style={{
                    width:30, height:30, borderRadius:'50%', flexShrink:0,
                    background:`linear-gradient(135deg, ${THEME_COLOR}, ${THEME_COLOR_DK})`,
                    color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
                    fontWeight:900, fontSize:13, boxShadow:'0 3px 10px rgba(37,99,235,0.3)',
                  }}>{i+1}</div>
                  <span style={{ fontSize:13, fontWeight:600, color:'var(--text-primary)', lineHeight:1.4 }}>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── STRATEGY / TIMELINE ── */}
          <div style={{ marginBottom:20 }}>
            {/* Header */}
            <div style={{ textAlign:'center', marginBottom:44 }}>
              <span style={label({ textAlign:'center', display:'block' })}>Our Approach</span>
              <h2 style={h2({ fontSize:'clamp(1.5rem,4vw,2.1rem)', textAlign:'center', marginBottom:12 })}>Our Strategy</h2>
              <p style={p({ maxWidth:600, margin:'0 auto', fontSize:15, textAlign:'center' })}>
                Rather than treating the website as a simple information portal, we transformed it into a lead generation and business development asset.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position:'relative' }}>
              {/* spine */}
              <div style={{
                position:'absolute', left:30, top:26, bottom:26, width:2,
                background:`linear-gradient(to bottom, ${THEME_COLOR}, rgba(37,99,235,0.08))`,
                borderRadius:2, zIndex:0,
              }} />

              {[
                { phase:'1', icon:'💻', title:'Website Development & Modernization',
                  desc:'We redesigned and developed a modern digital experience aligned with Eurocert\'s global reputation. The result builds trust and improves engagement.',
                  tags:['Modern UI','Improved Architecture','Mobile-Responsive','Fast Loading','Strong CTAs'],
                  accent:'rgba(37,99,235,0.07)', delay:'0s' },
                { phase:'2', icon:'🔍', title:'Search Engine Optimization',
                  desc:'To improve long-term visibility, we implemented a comprehensive SEO strategy targeting certification, auditing, and compliance-related search terms.',
                  tags:['Technical SEO','Keyword Mapping','Metadata','Internal Linking','Performance'],
                  accent:'rgba(99,102,241,0.07)', delay:'0.07s' },
                { phase:'3', icon:'🎯', title:'Conversion-Focused Landing Pages',
                  desc:'We developed dedicated landing pages for key service offerings, creating clearer pathways for prospective clients seeking specific certification services.',
                  tags:['Service Messaging','Lead Capture','Trust Elements','Mobile-First Design'],
                  accent:'rgba(16,185,129,0.07)', delay:'0.14s' },
                { phase:'4', icon:'🖱️', title:'User Experience Optimization',
                  desc:'Beyond aesthetics, we focused on improving how visitors interacted with the website, creating a smoother journey from initial visit to inquiry submission.',
                  tags:['Simplified Navigation','Reduced Friction','Better Discovery','Improved Inquiry Flow'],
                  accent:'rgba(245,158,11,0.07)', delay:'0.21s' },
              ].map((ph,i) => (
                <div key={i} className="ec-rise ec-phase-wrap" style={{
                  display:'grid', gridTemplateColumns:'62px 1fr', gap:0,
                  marginBottom: i<3 ? 18 : 0, position:'relative', zIndex:1,
                  animationDelay: ph.delay,
                }}>
                  {/* Badge */}
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:2 }}>
                    <div style={{
                      width:52, height:52, borderRadius:'50%',
                      background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:22, boxShadow:'0 4px 16px rgba(37,99,235,0.35)',
                      border:'3px solid var(--bg-primary)', flexShrink:0,
                    }}>{ph.icon}</div>
                  </div>

                  {/* Card */}
                  <div style={{
                    marginLeft:14, background:ph.accent,
                    border:'1px solid var(--border-color)',
                    borderRadius:20, padding:'20px 22px', position:'relative', overflow:'hidden',
                    transition:'box-shadow 0.25s, transform 0.25s',
                  }}>
                    <div className="ec-accent" style={{
                      position:'absolute', top:0, left:0, height:3,
                      width:36, background:`linear-gradient(90deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                      transition:'width 0.45s ease', borderRadius:'0 0 3px 0',
                    }} />
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8, flexWrap:'wrap' }}>
                      <span style={{
                        padding:'3px 11px', background:THEME_COLOR, color:'#fff', borderRadius:100,
                        fontSize:10, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', flexShrink:0,
                      }}>Phase {ph.phase}</span>
                      <h3 style={{ fontSize:15, fontWeight:800, fontFamily:'var(--font-display)', color:'var(--text-primary)', margin:0 }}>{ph.title}</h3>
                    </div>
                    <p style={p({ fontSize:13, marginBottom:12 })}>{ph.desc}</p>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {ph.tags.map((t,j) => (
                        <span key={j} className="ec-tag" style={{
                          padding:'5px 13px', background:'var(--bg-secondary)', borderRadius:100,
                          fontSize:11, fontWeight:600, color:'var(--text-secondary)',
                          border:'1px solid var(--border-color)',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div className="ec-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Numbers</span>
            <h2 style={h2()}>Performance Overview</h2>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:16, marginBottom:20 }}>
              
              {/* After */}
              <div style={{
                borderRadius:16, overflow:'hidden',
                border:'1px solid rgba(37,99,235,0.22)',
              }}>
                <div style={{
                  padding:'12px 20px', background:'rgba(37,99,235,0.07)',
                  display:'flex', alignItems:'center', gap:8,
                  borderBottom:'1px solid rgba(37,99,235,0.18)',
                }}>
                  <span style={{ fontSize:18, fontWeight:900, color:THEME_COLOR }}>✓</span>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>Key Outcomes</span>
                  <span style={{ marginLeft:'auto', fontSize:11, background:'rgba(37,99,235,0.15)', color:THEME_COLOR_DK, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>Achieved</span>
                </div>
                <div style={{ padding:'0 20px' }}>
                  {[
                    { l:'Website Experience',       v:'Modernized & Optimized',      icon:'💻' },
                    { l:'Organic Visibility',       v:'Improved',                    icon:'🔍' },
                    { l:'Service Discoverability',  v:'Enhanced',                    icon:'🌟' },
                    { l:'Landing Page Performance', v:'Increased',                   icon:'📈' },
                    { l:'User Experience',          v:'Significantly Improved',      icon:'🖱️' },
                    { l:'Lead Generation',          v:'Increased Qualified Inquiries',icon:'🏆' },
                  ].map((r,i) => (
                    <div key={i} style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      padding:'11px 0', borderBottom: i<5 ? '1px solid var(--border-color)' : 'none', gap:8,
                    }}>
                      <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                        <span style={{ fontSize:14 }}>{r.icon}</span>
                        <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{r.l}</span>
                      </div>
                      <span style={{ fontSize:13, fontWeight:700, color:THEME_COLOR, textAlign:'right' }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Big callout */}
            <div style={{
              textAlign:'center', padding:'28px 20px',
              background:`linear-gradient(135deg,rgba(37,99,235,0.07),rgba(37,99,235,0.02))`,
              borderRadius:16, border:'1px solid rgba(37,99,235,0.18)',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{
                position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                width:240, height:120, borderRadius:'50%',
                background:'radial-gradient(ellipse,rgba(37,99,235,0.14),transparent 70%)',
                pointerEvents:'none',
              }}/>
              <div style={{ fontSize:'clamp(1.8rem,6vw,3rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1, position:'relative' }}>Digital Transformation</div>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--text-secondary)', marginTop:8, letterSpacing:'0.05em', textTransform:'uppercase' }}>Modern &amp; Scalable</div>
              <p style={{ fontSize:14, color:'var(--text-secondary)', maxWidth:400, margin:'12px auto 0' }}>A complete digital infrastructure built for growth</p>
            </div>
          </div>

          {/* ── BUSINESS IMPACT ── */}
          <div className="ec-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Outcome</span>
            <h2 style={h2()}>Business Impact</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
              {[
                { icon:'🏢', title:'Stronger Digital Presence', desc:'The new website better reflects Eurocert\'s position as a trusted certification and inspection organization.' },
                { icon:'🔍', title:'Improved Organic Visibility', desc:'SEO improvements increased the website\'s ability to attract relevant visitors searching for certification services.' },
                { icon:'💎', title:'Higher Quality Inquiries', desc:'Dedicated landing pages helped connect prospects with the services most relevant to their needs.' },
                { icon:'📈', title:'Long-Term Growth Foundation', desc:'The new digital infrastructure provides a scalable platform capable of supporting future marketing initiatives.' },
              ].map((item,i) => (
                <div key={i} className="ec-impact-card" style={{
                  padding:'20px', background:'var(--bg-primary)',
                  borderRadius:16, border:'1px solid var(--border-color)',
                  boxShadow:'0 2px 12px rgba(0,0,0,0.03)',
                }}>
                  <div style={{ fontSize:28, marginBottom:10 }}>{item.icon}</div>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6, lineHeight:1.3 }}>{item.title}</h4>
                  <p style={p({ fontSize:13 })}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── WHAT MADE IT WORK ── */}
          <div className="ec-hover-card" style={card({ marginBottom:20, textAlign:'center' })}>
            <span style={label({ textAlign:'center', display:'block' })}>What Made This Successful?</span>
            <h2 style={h2({ textAlign:'center', marginBottom:8 })}>The Winning Formula</h2>
            <p style={p({ maxWidth:540, margin:'0 auto 28px', textAlign:'center' })}>
              The success of this engagement came from combining three critical growth components into a single strategy.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', alignItems:'center' }}>
              {['Modern Website Development','Search Engine Optimization','Conversion-Focused Landing Pages'].map((item,i,arr) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding:'9px 18px', background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                    color:'#fff', borderRadius:100, fontSize:12, fontWeight:700,
                    boxShadow:'0 4px 14px rgba(37,99,235,0.3)',
                  }}>{item}</span>
                  {i < arr.length-1 && (
                    <span style={{ color:'var(--text-muted)', fontSize:18, fontWeight:300 }}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p style={p({ maxWidth:580, margin:'28px auto 0', textAlign:'center' })}>
              Instead of treating these as separate initiatives, we aligned them into a unified digital growth system designed to improve both user experience and business outcomes.
            </p>
          </div>

          {/* ── FINAL CTA / OUTCOME ── */}
          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, #60a5fa 0%, ${THEME_COLOR} 50%, ${THEME_COLOR_DK} 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(37,99,235,0.3)',
          }}>
            {/* Decorative orbs */}
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Final Result</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Client Outcome</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.88)', lineHeight:1.75, maxWidth:660, margin:'0 auto 14px' }}>
                Eurocert now operates with a modern, optimized digital presence that supports visibility, credibility, and lead generation.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.75, maxWidth:580, margin:'0 auto 32px' }}>
                By combining strategic website development, technical SEO improvements, and high-converting landing pages, we helped create a stronger foundation for sustainable online growth and increased business opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default EurocertCaseStudy;
