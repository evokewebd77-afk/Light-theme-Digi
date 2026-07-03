import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

/* ── shared tokens ── */
const BLUE    = '#38bdf8';
const BLUE_DK = '#0284c7';

/* ── inline style helpers ── */
const label = (extra = {}) => ({
  fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
  color: BLUE, fontWeight: 800, display: 'block', marginBottom: 8, ...extra,
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

function ItcIndiaCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>ITC India - Case Study | Digimarketing Art</title>
        <meta name="description" content="See how Digimarketing Art helped ITC India with digital marketing strategies to enhance their online presence and drive measurable results." />
        <meta name="keywords" content="ITC India case study, digital marketing case study, brand success story, marketing results" />
      </Head>

      {/* ─────────────────── GLOBAL ANIMATION STYLES ─────────────────── */}
      <style>{`
        @keyframes itc-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes itc-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes itc-bar   { from{width:0} to{width:100%} }
        @keyframes itc-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes itc-glow  {
          0%  { box-shadow: 0 0 0 0 rgba(56,189,248,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(56,189,248,0); }
          100%{ box-shadow: 0 0 0 0 rgba(56,189,248,0); }
        }
        .itc-rise { animation: itc-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .itc-hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .itc-hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important;
        }
        .itc-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .itc-tag:hover {
          background: ${BLUE} !important;
          color: #fff !important;
          border-color: ${BLUE} !important;
        }
        .itc-phase-wrap:hover .itc-accent { width: 100% !important; }
        .itc-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .itc-impact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(56,189,248,0.15) !important;
          border-color: rgba(56,189,248,0.35) !important;
        }
        .itc-stat-badge { animation: itc-count 0.7s ease both; }
        .itc-pulse-btn { animation: itc-glow 2.4s infinite; }
        .itc-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .itc-back-link:hover { color: ${BLUE} !important; gap:12px !important; }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782369230/AQMDjErmTbuNM_58JwAipBfWMd-3lZSeYdCL9WDimDXGhCTqbPIHQqFwWEuNW-9gBO2wGWpWveXZb0b7sPM0qFDI6yXw2yNh-QlLJE_WRi3unZuQvL2vlhwDr9qaQnFYi8Ez3M_YFEOxHNz4q6g3KiXNUUp_CA.jpeg_wbia8c.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.82) 0%, rgba(0,5,15,0.78) 100%)', pointerEvents:'none' }} />

        {/* Decorative glowing orb */}
        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(56,189,248,0.22) 0%, transparent 70%)',
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="itc-rise" style={{ position:'relative', zIndex:1, maxWidth:860, margin:'0 auto' }}>

          {/* Breadcrumb chip */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:BLUE, display:'inline-block', boxShadow:'0 0 8px rgba(56,189,248,0.9)' }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              ITC India — Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(2rem,6vw,3.6rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.1, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How We Increased ITC India's<br />
            Qualified Leads by{' '}
            <span style={{
              color:BLUE, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(56,189,248,0.6)`,
            }}>233%</span>{' '}
            <span style={{ display:'block', fontSize:'clamp(1rem,3vw,1.8rem)', color:'rgba(255,255,255,0.7)', fontWeight:600, marginTop:8 }}>
              and Ranked 31 Keywords in Google's Top 10
            </span>
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:560, margin:'0 auto 36px', lineHeight:1.7 }}>
            Product Testing &amp; Certification — Google Ads Management &amp; Search Engine Optimization
          </p>

          {/* Hero chips */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Google Ads Management', 'SEO', 'Keyword Optimization', 'Landing Page CRO', 'Technical SEO'].map((chip,i) => (
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
            { value:'100+',         sub:'Monthly Qualified Leads', icon:'📈' },
            { value:'233%',        sub:'Lead Growth',             icon:'🚀' },
            { value:'31',          sub:'Top 10 Keywords',         icon:'🔍' },
            { value:'8 Months',    sub:'SEO Timeline',            icon:'📅' },
          ].map((s,i) => (
            <div key={i} className="itc-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
              borderBottom:'none',
            }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
              <div style={{ fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:900, fontFamily:'var(--font-display)', color:BLUE, lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:11, fontWeight:600, color:'var(--text-secondary)', marginTop:5, textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ MAIN CONTENT ═══════════════════════════════ */}
      <section style={{ padding:'56px 24px 80px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>

          {/* Back link */}
          <Link href="/case-studies" className="itc-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:600, fontSize:13, marginBottom:36, display:'inline-flex' }}>
            <ArrowLeft size={14} /> Back to all case studies
          </Link>

          {/* ── ABOUT + CHALLENGE ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20, marginBottom:20 }}>

            {/* About */}
            <div className="itc-hover-card" style={card()}>
              <span style={label()}>About The Client</span>
              <h2 style={h2({ marginBottom:10 })}>Client Overview</h2>
              <p style={p({ marginBottom:12 })}>ITC India is a <strong>leading product testing and certification company</strong> that helps manufacturers meet national and international compliance requirements.</p>
              <p style={p({ marginBottom:12 })}>While they had an online presence and active Google Ads campaigns, they weren't generating enough qualified business inquiries, and their website had limited visibility in organic search.</p>
              <p style={p({ marginBottom:16 })}><strong>Website:</strong> <a href="https://www.itcindia.org/" target="_blank" rel="noopener noreferrer" style={{ color:BLUE }}>https://www.itcindia.org/</a></p>
              <p style={p({ marginBottom:16 })}><strong>Services:</strong> Google Ads Management &amp; Search Engine Optimization (SEO)</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                {['Product Testing','Product Certification','Compliance Testing','EMC Testing','CE Testing','Quality Assurance'].map((s,i) => (
                  <span key={i} className="itc-tag" style={{
                    padding:'6px 13px', background:'var(--bg-primary)',
                    borderRadius:8, fontSize:12, fontWeight:600,
                    color:'var(--text-primary)', border:'1px solid var(--border-color)',
                  }}>
                    <span style={{ color:BLUE, marginRight:5 }}>✦</span>{s}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="itc-hover-card" style={card()}>
              <span style={label()}>The Problem</span>
              <h2 style={h2({ marginBottom:10 })}>The Challenge</h2>
              <p style={p({ marginBottom:14 })}>Before partnering with us, ITC India faced several digital marketing challenges:</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  'Google Ads generated only 30 qualified leads per month',
                  'A significant portion of the advertising budget was spent on low-intent search terms',
                  'The website had limited visibility for important product testing and certification keywords',
                  'Organic traffic was not contributing enough qualified business inquiries',
                  'The company relied heavily on paid advertising for lead generation',
                ].map((item,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:10, padding:'9px 12px',
                    background:'rgba(56,189,248,0.05)', borderRadius:10, fontSize:13,
                    color:'var(--text-primary)', fontWeight:500, lineHeight:1.5,
                    borderLeft:`3px solid rgba(56,189,248,0.35)`,
                  }}>
                    <span style={{ color:BLUE, fontWeight:900, flexShrink:0, marginTop:1 }}>×</span>{item}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop:14, padding:'10px 14px', borderRadius:10,
                background:'rgba(56,189,248,0.08)', border:'1px solid rgba(56,189,248,0.2)',
                fontSize:13, color:BLUE_DK, fontWeight:700, fontStyle:'italic',
              }}>
                Our goal was to improve campaign efficiency, increase qualified leads, and establish a stronger organic presence in search results.
              </div>
            </div>
          </div>

          {/* ── STRATEGY SECTIONS ── */}

          {/* Google Ads Strategy */}
          <div className="itc-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Google Ads Optimization</h2>
            <p style={p({ marginBottom:16 })}>We began with a complete audit of the existing Google Ads account to identify opportunities for improvement. Based on our findings, we restructured campaigns, refined keyword targeting, optimized bidding strategies, and introduced negative keywords to eliminate irrelevant traffic.</p>
            <p style={p({ marginBottom:16 })}>We also improved ad copy, optimized landing pages for better conversions, and implemented accurate conversion tracking. Weekly monitoring and continuous optimization ensured every advertising rupee was invested in generating high-quality leads.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Campaign Audit','Keyword Refinement','Bid Optimization','Negative Keywords','Ad Copy','Landing Pages','Conversion Tracking','Weekly Monitoring'].map((s,i) => (
                <span key={i} className="itc-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:BLUE, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* SEO Strategy */}
          <div className="itc-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Search Engine Optimization (SEO)</h2>
            <p style={p({ marginBottom:16 })}>Alongside paid advertising, we implemented a comprehensive SEO strategy focused on long-term growth. This included technical SEO improvements, keyword research, on-page optimization, content enhancements, metadata optimization, internal linking, and ongoing performance monitoring.</p>
            <p style={p({ marginBottom:16 })}>The focus was on increasing visibility for high-intent keywords related to product testing, certification, and compliance services.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Technical SEO','Keyword Research','On-Page Optimization','Content Enhancements','Metadata','Internal Linking','Performance Monitoring'].map((s,i) => (
                <span key={i} className="itc-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:BLUE, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div className="itc-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Numbers</span>
            <h2 style={h2()}>Results</h2>
            <p style={p({ marginBottom:20 })}>Our integrated Google Ads and SEO strategy delivered measurable improvements across both channels.</p>

            {/* Google Ads Results */}
            <div style={{
              borderRadius:16, overflow:'hidden', marginBottom:16,
              border:'1px solid rgba(56,189,248,0.2)',
            }}>
              <div style={{
                padding:'12px 20px', background:'rgba(56,189,248,0.08)',
                display:'flex', alignItems:'center', gap:8,
                borderBottom:'1px solid rgba(56,189,248,0.15)',
              }}>
                <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>Google Ads Results</span>
                <span style={{ marginLeft:'auto', fontSize:11, background:'rgba(56,189,248,0.12)', color:BLUE_DK, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>Paid Search</span>
              </div>
              <div style={{ padding:'0 20px' }}>
                {[
                  { l:'Qualified Leads',      v:'30 → 100+ per month', icon:'📈' },
                  { l:'Lead Growth',          v:'233% Increase',       icon:'🚀' },
                  { l:'Google Ads Budget',    v:'No Increase',         icon:'💰' },
                  { l:'Lead Quality',         v:'Improved',            icon:'⭐' },
                  { l:'Wasted Ad Spend',      v:'Reduced',             icon:'✅' },
                ].map((r,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    padding:'11px 0', borderBottom: i<4 ? '1px solid var(--border-color)' : 'none', gap:8,
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                      <span style={{ fontSize:14 }}>{r.icon}</span>
                      <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{r.l}</span>
                    </div>
                    <span style={{ fontSize:13, fontWeight:700, color:BLUE }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Results */}
            <div style={{
              borderRadius:16, overflow:'hidden', marginBottom:16,
              border:'1px solid rgba(34,197,94,0.22)',
            }}>
              <div style={{
                padding:'12px 20px', background:'rgba(34,197,94,0.07)',
                display:'flex', alignItems:'center', gap:8,
                borderBottom:'1px solid rgba(34,197,94,0.18)',
              }}>
                <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>SEO Results</span>
                <span style={{ marginLeft:'auto', fontSize:11, background:'rgba(34,197,94,0.15)', color:'#16a34a', fontWeight:700, padding:'3px 10px', borderRadius:100 }}>Organic Search</span>
              </div>
              <div style={{ padding:'0 20px' }}>
                {[
                  { l:'Keyword Rankings',     v:'31 in Top 10',         icon:'🔍' },
                  { l:'Organic Traffic',      v:'Increased',            icon:'📈' },
                  { l:'Industry Keywords',    v:'Improved Visibility',  icon:'🎯' },
                  { l:'Online Presence',      v:'Stronger',             icon:'💪' },
                  { l:'SEO Timeline',         v:'8 Months',             icon:'📅' },
                ].map((r,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    padding:'11px 0', borderBottom: i<4 ? '1px solid var(--border-color)' : 'none', gap:8,
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                      <span style={{ fontSize:14 }}>{r.icon}</span>
                      <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{r.l}</span>
                    </div>
                    <span style={{ fontSize:13, fontWeight:700, color:'#22c55e' }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Big number callout */}
            <div style={{
              textAlign:'center', padding:'28px 20px',
              background:`linear-gradient(135deg,rgba(56,189,248,0.07),rgba(56,189,248,0.02))`,
              borderRadius:16, border:'1px solid rgba(56,189,248,0.18)',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{
                position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                width:300, height:150, borderRadius:'50%',
                background:'radial-gradient(ellipse,rgba(56,189,248,0.14),transparent 70%)',
                pointerEvents:'none',
              }}/>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:16, position:'relative' }}>
                {[
                  { val:'233%', lbl:'Lead Growth', icon:'🚀' },
                  { val:'31', lbl:'Top 10 Keywords', icon:'🔍' },
                  { val:'30 → 100+', lbl:'Qualified Leads/Mo', icon:'📈' },
                ].map((s,i) => (
                  <div key={i} style={{ textAlign:'center' }}>
                    <div style={{ fontSize:18, marginBottom:4 }}>{s.icon}</div>
                    <div style={{ fontSize:'clamp(1.6rem,5vw,2.8rem)', fontWeight:900, fontFamily:'var(--font-display)', color:BLUE, lineHeight:1 }}>{s.val}</div>
                    <div style={{ fontSize:11, color:'var(--text-secondary)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── BUSINESS IMPACT ── */}
          <div className="itc-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Outcome</span>
            <h2 style={h2()}>Business Impact</h2>
            <p style={p({ marginBottom:20 })}>By combining performance-driven Google Ads management with a strategic SEO campaign, ITC India transformed its digital marketing performance.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
              {[
                { icon:'🏆', title:'233% Increase In Qualified Leads', desc:'From 30 to over 100 qualified monthly leads through optimized paid campaigns.' },
                { icon:'🔍', title:'Stronger Organic Visibility', desc:'31 target keywords ranked in Google\'s Top 10, driving consistent organic traffic.' },
                { icon:'💰', title:'Same Budget, Better Results', desc:'Achieved without increasing the Google Ads budget — pure efficiency gains.' },
                { icon:'⚖️', title:'Balanced Marketing Mix', desc:'A diversified channel strategy reducing dependency on paid advertising alone.' },
              ].map((item,i) => (
                <div key={i} className="itc-impact-card" style={{
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
          <div className="itc-hover-card" style={card({ marginBottom:20, textAlign:'center' })}>
            <span style={label({ textAlign:'center', display:'block' })}>What Made This Successful?</span>
            <h2 style={h2({ textAlign:'center', marginBottom:8 })}>The Winning Formula</h2>
            <p style={p({ maxWidth:600, margin:'0 auto 28px', textAlign:'center' })}>
              Sustainable growth doesn't always require a larger budget — it requires the right strategy, continuous optimization, and a focus on measurable business outcomes.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', alignItems:'center' }}>
              {['Performance-Driven Google Ads','Strategic SEO Campaign','Continuous Optimization'].map((item,i,arr) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding:'9px 18px', background:`linear-gradient(135deg,${BLUE},${BLUE_DK})`,
                    color:'#fff', borderRadius:100, fontSize:12, fontWeight:700,
                    boxShadow:'0 4px 14px rgba(56,189,248,0.3)',
                  }}>{item}</span>
                  {i < arr.length-1 && (
                    <span style={{ color:'var(--text-muted)', fontSize:18, fontWeight:300 }}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── FINAL CTA / CONCLUSION ── */}
          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 60%, #013a5e 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(56,189,248,0.3)',
          }}>
            {/* Decorative orbs */}
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Looking to Achieve Similar Results?</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Let's Build Your Next Success Story</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.88)', lineHeight:1.75, maxWidth:620, margin:'0 auto 14px' }}>
                At Digital Advertisement Marketing Network, we help businesses generate more qualified leads through data-driven Google Ads management and SEO strategies that deliver measurable growth.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.75, maxWidth:580, margin:'0 auto 32px' }}>
                Ready to grow your business? Let's build your next success story.
              </p>

              {/* Mini stat row */}
              <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:0, background:'rgba(0,0,0,0.18)', borderRadius:16, overflow:'hidden', maxWidth:520, margin:'0 auto' }}>
                {[{ val:'100+', lbl:'Monthly Leads' },{ val:'233%', lbl:'Lead Growth' },{ val:'31', lbl:'Top 10 Keywords' }].map((s,i) => (
                  <div key={i} style={{
                    flex:'1 1 130px', padding:'20px 12px', textAlign:'center',
                    borderRight: i<2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  }}>
                    <div style={{ fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:900, fontFamily:'var(--font-display)', color:'#fff' }}>{s.val}</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.6)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={BLUE} showOffices={false} />

    </div>
  );
}

export default ItcIndiaCaseStudy;
