import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

/* ── shared tokens ── */
const THEME_COLOR    = '#22c55e'; // Green for Sustainable
const THEME_COLOR_DK = '#16a34a';

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

function SustainableFuturesCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>Sustainable Futures - Case Study | Digimarketing Art</title>
        <meta name="description" content="Discover how Digimarketing Art helped Sustainable Futures Training with digital marketing to promote sustainability education and training programs." />
        <meta name="keywords" content="Sustainable Futures case study, sustainability education marketing, digital marketing case study" />
      </Head>

      {/* ─────────────────── GLOBAL ANIMATION STYLES ─────────────────── */}
      <style>{`
        @keyframes sft-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sft-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes sft-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sft-glow  {
          0%  { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(34,197,94,0); }
          100%{ box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .sft-rise { animation: sft-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .sft-hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .sft-hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important;
        }
        .sft-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .sft-tag:hover {
          background: ${THEME_COLOR} !important;
          color: #fff !important;
          border-color: ${THEME_COLOR} !important;
        }
        .sft-phase-wrap:hover .sft-accent { width: 100% !important; }
        .sft-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .sft-impact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(34,197,94,0.15) !important;
          border-color: rgba(34,197,94,0.35) !important;
        }
        .sft-stat-badge { animation: sft-count 0.7s ease both; }
        .sft-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .sft-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782372404/AQNhENxRnAgaeQqklDPgWzOtXxyIr5MxumHkop04_59UEzFvnpduM2ZqehHUwGN2kfDL97QctH518EqhjTdFlAUzV9kPDt3EDmYGlTmeq5PmlxqvnvFIVDlH904AuzU570dJ-suMWgH1PX22u_aI3qohN0u0kA.jpeg_auuvpc.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.82) 0%, rgba(5,15,5,0.78) 100%)', pointerEvents:'none' }} />

        {/* Decorative glowing orb */}
        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(34,197,94,0.22) 0%, transparent 70%)',
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="sft-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>

          {/* Breadcrumb chip */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:'0 0 8px rgba(34,197,94,0.9)' }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Sustainable Futures Trainings — Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(2rem,5vw,3.6rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.1, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How We Generated{' '}
            <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(34,197,94,0.6)`,
            }}>300+ Monthly Leads</span><br />
            Using Meta Ads, WhatsApp &amp; AI
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:660, margin:'0 auto 36px', lineHeight:1.7 }}>
            Building an Automated Lead Generation and Student Enrollment Engine
          </p>

          {/* Hero chips */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Meta Ads', 'WhatsApp Automation', 'AI Voice Agents', 'Landing Pages'].map((chip,i) => (
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
            { value:'300+',         sub:'Monthly Leads',           icon:'📈' },
            { value:'Meta Ads',     sub:'Growth System',           icon:'🎯' },
            { value:'WhatsApp',     sub:'Automation',              icon:'💬' },
            { value:'AI Voice',     sub:'Agent Qualification',     icon:'🤖' },
          ].map((s,i) => (
            <div key={i} className="sft-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
              borderBottom:'none',
            }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
              <div style={{ fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:11, fontWeight:600, color:'var(--text-secondary)', marginTop:5, textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ MAIN CONTENT ═══════════════════════════════ */}
      <section style={{ padding:'56px 24px 80px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>

          {/* Back link */}
          <Link href="/case-studies" className="sft-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:600, fontSize:13, marginBottom:36, display:'inline-flex' }}>
            <ArrowLeft size={14} /> Back to all case studies
          </Link>

          {/* ── ABOUT + CHALLENGE ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20, marginBottom:20 }}>

            {/* About */}
            <div className="sft-hover-card" style={card()}>
              <span style={label()}>About The Client</span>
              <h2 style={h2({ marginBottom:10 })}>Client Overview</h2>
              <p style={p({ marginBottom:16 })}>Sustainable Futures Training is a professional training and education provider focused on helping individuals and organizations develop future-ready skills through specialized training programs and certifications.</p>
              <p style={p({ marginBottom:16 })}>Their programs serve aspiring professionals, working executives, and organizations looking to invest in workforce development and sustainability-focused education.</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                {['Aspiring Professionals','Working Executives','Organizations','Workforce Development'].map((s,i) => (
                  <span key={i} className="sft-tag" style={{
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
            <div className="sft-hover-card" style={card()}>
              <span style={label()}>The Problem</span>
              <h2 style={h2({ marginBottom:10 })}>The Challenge</h2>
              <p style={p({ marginBottom:14 })}>Although interest existed in their programs, the enrollment process relied heavily on manual follow-ups, resulting in missed opportunities and inefficient lead management.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  'Inconsistent lead generation',
                  'Slow response times to inquiries',
                  'Manual lead qualification process',
                  'Limited automation across the enrollment funnel',
                  'Difficulty managing growing lead volumes',
                  'Lack of a scalable system for nurturing prospects',
                ].map((item,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:10, padding:'9px 12px',
                    background:'rgba(34,197,94,0.05)', borderRadius:10, fontSize:13,
                    color:'var(--text-primary)', fontWeight:500, lineHeight:1.5,
                    borderLeft:`3px solid rgba(34,197,94,0.35)`,
                  }}>
                    <span style={{ color:THEME_COLOR, fontWeight:900, flexShrink:0, marginTop:1 }}>×</span>{item}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop:14, padding:'10px 14px', borderRadius:10,
                background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.2)',
                fontSize:13, color:THEME_COLOR_DK, fontWeight:700, fontStyle:'italic',
              }}>
                The objective was clear: create a predictable lead generation engine while automating large portions of the enrollment journey.
              </div>
            </div>
          </div>

          {/* ── OBJECTIVES ── */}
          <div className="sft-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Goals</span>
            <h2 style={h2()}>Project Objectives</h2>
            <p style={p({ marginBottom:20 })}>Our team was tasked with designing a complete acquisition and qualification system capable of generating high volumes of qualified prospects while reducing manual effort.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
              {[
                'Increase monthly lead volume',
                'Improve inquiry-to-enrollment workflow',
                'Automate lead nurturing',
                'Improve response speed',
                'Qualify prospects automatically',
                'Build a scalable enrollment infrastructure',
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
                    fontWeight:900, fontSize:13, boxShadow:'0 3px 10px rgba(34,197,94,0.3)',
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
                Instead of focusing solely on advertising, we designed an integrated growth system connecting paid traffic, automation, and AI-powered qualification.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position:'relative' }}>
              {/* spine */}
              <div style={{
                position:'absolute', left:30, top:26, bottom:26, width:2,
                background:`linear-gradient(to bottom, ${THEME_COLOR}, rgba(34,197,94,0.08))`,
                borderRadius:2, zIndex:0,
              }} />

              {[
                { phase:'1', icon:'🌐', title:'High-Converting Landing Pages',
                  desc:'We designed dedicated landing pages specifically built for training program enrollments. Every page was optimized to maximize lead submissions and reduce friction.',
                  tags:['Clear positioning','Student-focused messaging','Conversion design','Mobile-first','Strong CTA'],
                  accent:'rgba(34,197,94,0.07)', delay:'0s' },
                { phase:'2', icon:'🎯', title:'Meta Ads Campaign Management',
                  desc:'Meta Ads became the primary acquisition channel. Campaigns were designed to attract highly relevant prospects interested in professional development.',
                  tags:['Audience segmentation','Interest targeting','Lookalike audiences','Lead gen campaigns'],
                  accent:'rgba(59,130,246,0.07)', delay:'0.07s' },
                { phase:'3', icon:'💬', title:'WhatsApp Automation System',
                  desc:'To ensure immediate engagement, we implemented an automated WhatsApp communication system. This significantly reduced response times while improving engagement rates.',
                  tags:['Instant response','Program info delivery','Automated FAQs','Lead nurturing'],
                  accent:'rgba(16,185,129,0.07)', delay:'0.14s' },
                { phase:'4', icon:'🤖', title:'AI Voice Agent Integration',
                  desc:'To further streamline qualification, we deployed AI-powered voice agents. The AI system enabled the client to engage with leads at scale without increasing operational workload.',
                  tags:['Automated calling','Qualification conversations','Eligibility assessment','Appointment scheduling'],
                  accent:'rgba(245,158,11,0.07)', delay:'0.21s' },
                { phase:'5', icon:'⚡', title:'Lead Qualification & Routing',
                  desc:'The entire system was connected to ensure prospects were routed efficiently, creating a seamless and highly efficient enrollment process.',
                  tags:['Inquiry submission','Instant WhatsApp','AI Voice Agent','Qualified lead handoff'],
                  accent:'rgba(139,92,246,0.07)', delay:'0.28s' },
              ].map((ph,i) => (
                <div key={i} className="sft-rise sft-phase-wrap" style={{
                  display:'grid', gridTemplateColumns:'62px 1fr', gap:0,
                  marginBottom: i<4 ? 18 : 0, position:'relative', zIndex:1,
                  animationDelay: ph.delay,
                }}>
                  {/* Badge */}
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:2 }}>
                    <div style={{
                      width:52, height:52, borderRadius:'50%',
                      background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:22, boxShadow:'0 4px 16px rgba(34,197,94,0.35)',
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
                    <div className="sft-accent" style={{
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
                        <span key={j} className="sft-tag" style={{
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

          {/* ── RESULTS — BEFORE / AFTER ── */}
          <div className="sft-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Numbers</span>
            <h2 style={h2()}>Performance Overview</h2>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:16, marginBottom:20 }}>
              {/* Before */}
              <div style={{
                borderRadius:16, overflow:'hidden',
                border:'1px solid rgba(239,68,68,0.2)',
              }}>
                <div style={{
                  padding:'12px 20px', background:'rgba(239,68,68,0.08)',
                  display:'flex', alignItems:'center', gap:8,
                  borderBottom:'1px solid rgba(239,68,68,0.15)',
                }}>
                  <span style={{ fontSize:18, fontWeight:900, color:'#ef4444' }}>✗</span>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>Before</span>
                </div>
                <div style={{ padding:'0 20px' }}>
                  {[
                    { l:'Monthly Leads',      v:'Low & Inconsistent',   icon:'📉' },
                    { l:'Lead Response',      v:'Manual & Slow',        icon:'⏳' },
                    { l:'Lead Qualification', v:'Manual Process',       icon:'✍️' },
                    { l:'Automation',         v:'Limited',              icon:'⚙️' },
                  ].map((r,i) => (
                    <div key={i} style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      padding:'11px 0', borderBottom: i<3 ? '1px solid var(--border-color)' : 'none', gap:8,
                    }}>
                      <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                        <span style={{ fontSize:14 }}>{r.icon}</span>
                        <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{r.l}</span>
                      </div>
                      <span style={{ fontSize:13, fontWeight:700, color:'var(--text-primary)', textAlign:'right' }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div style={{
                borderRadius:16, overflow:'hidden',
                border:'1px solid rgba(34,197,94,0.22)',
              }}>
                <div style={{
                  padding:'12px 20px', background:'rgba(34,197,94,0.07)',
                  display:'flex', alignItems:'center', gap:8,
                  borderBottom:'1px solid rgba(34,197,94,0.18)',
                }}>
                  <span style={{ fontSize:18, fontWeight:900, color:'#22c55e' }}>✓</span>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>After</span>
                  <span style={{ marginLeft:'auto', fontSize:11, background:'rgba(34,197,94,0.15)', color:'#16a34a', fontWeight:700, padding:'3px 10px', borderRadius:100 }}>Achieved</span>
                </div>
                <div style={{ padding:'0 20px' }}>
                  {[
                    { l:'Monthly Leads',      v:'300+',                        icon:'📈' },
                    { l:'Lead Response',      v:'Instant Auto-Engagement',     icon:'⚡' },
                    { l:'Lead Qualification', v:'AI Voice Agents Active',      icon:'🤖' },
                    { l:'Automation',         v:'WhatsApp Automation',         icon:'💬' },
                  ].map((r,i) => (
                    <div key={i} style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      padding:'11px 0', borderBottom: i<3 ? '1px solid var(--border-color)' : 'none', gap:8,
                    }}>
                      <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                        <span style={{ fontSize:14 }}>{r.icon}</span>
                        <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{r.l}</span>
                      </div>
                      <span style={{ fontSize:13, fontWeight:700, color:'#22c55e', textAlign:'right' }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Big number callout */}
            <div style={{
              textAlign:'center', padding:'28px 20px',
              background:`linear-gradient(135deg,rgba(34,197,94,0.07),rgba(34,197,94,0.02))`,
              borderRadius:16, border:'1px solid rgba(34,197,94,0.18)',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{
                position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                width:240, height:120, borderRadius:'50%',
                background:'radial-gradient(ellipse,rgba(34,197,94,0.14),transparent 70%)',
                pointerEvents:'none',
              }}/>
              <div style={{ fontSize:'clamp(2.8rem,8vw,4.5rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1, position:'relative' }}>300+</div>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--text-secondary)', marginTop:8, letterSpacing:'0.05em', textTransform:'uppercase' }}>Monthly Qualified Leads</div>
              <p style={{ fontSize:14, color:'var(--text-secondary)', maxWidth:400, margin:'12px auto 0' }}>Leads generated every month through automated systems</p>
            </div>
          </div>

          {/* ── BUSINESS IMPACT ── */}
          <div className="sft-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Outcome</span>
            <h2 style={h2()}>Business Impact</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
              {[
                { icon:'🏆', title:'300+ Monthly Leads', desc:'The organization established a consistent and scalable lead generation engine producing more than 300 inquiries every month.' },
                { icon:'⚡', title:'Faster Lead Engagement', desc:'Prospects received immediate responses through automated WhatsApp workflows, improving engagement and reducing drop-offs.' },
                { icon:'🤖', title:'Automated Qualification', desc:'AI voice agents reduced the burden on internal teams while ensuring every lead received timely follow-up.' },
                { icon:'📐', title:'Scalable Infrastructure', desc:'The combination of paid advertising and automation created a system capable of supporting future growth without proportional staffing increases.' },
              ].map((item,i) => (
                <div key={i} className="sft-impact-card" style={{
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
          <div className="sft-hover-card" style={card({ marginBottom:20, textAlign:'center' })}>
            <span style={label({ textAlign:'center', display:'block' })}>What Made This Successful?</span>
            <h2 style={h2({ textAlign:'center', marginBottom:8 })}>The Winning Formula</h2>
            <p style={p({ maxWidth:540, margin:'0 auto 28px', textAlign:'center' })}>
              Most training providers focus only on generating more leads. We focused on improving the entire journey.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', alignItems:'center' }}>
              {['Landing Pages','Meta Ads','Instant WhatsApp','AI Voice Qualification','Automated Follow-Ups','Smart Lead Routing'].map((item,i,arr) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding:'9px 18px', background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                    color:'#fff', borderRadius:100, fontSize:12, fontWeight:700,
                    boxShadow:'0 4px 14px rgba(34,197,94,0.3)',
                  }}>{item}</span>
                  {i < arr.length-1 && (
                    <span style={{ color:'var(--text-muted)', fontSize:18, fontWeight:300 }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p style={p({ maxWidth:540, margin:'28px auto 0', textAlign:'center' })}>
              By connecting acquisition, engagement, and qualification into a single ecosystem, we created a predictable growth engine for the client.
            </p>
          </div>

          {/* ── FINAL CTA / OUTCOME ── */}
          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, #4ade80 0%, ${THEME_COLOR} 50%, ${THEME_COLOR_DK} 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(34,197,94,0.3)',
          }}>
            {/* Decorative orbs */}
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Final Result</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Client Outcome</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.88)', lineHeight:1.75, maxWidth:660, margin:'0 auto 14px' }}>
                Today, Sustainable Futures Training benefits from a fully integrated lead generation and enrollment system generating over <strong>300 leads every month</strong>.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.75, maxWidth:580, margin:'0 auto 32px' }}>
                With Meta Ads driving demand, WhatsApp automation nurturing prospects, and AI voice agents handling qualification, the organization now operates with a scalable infrastructure designed for long-term growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default SustainableFuturesCaseStudy;
