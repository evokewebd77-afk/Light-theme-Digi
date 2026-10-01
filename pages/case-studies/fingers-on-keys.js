import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const THEME_COLOR = '#d73d56';
const THEME_COLOR_DK = '#b91c3c';

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

function FingersOnKeysCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>Fingers On Keys - Digital Marketing Case Study | Digimarketing Art</title>
        <meta name="description" content="See how Digimarketing Art built a complete digital marketing platform for Fingers On Keys — website design, social media management, Meta advertising, and lead generation for online piano classes." />
        <meta name="keywords" content="Fingers On Keys case study, online piano classes marketing, digital marketing case study, lead generation, social media management" />
        <link rel="canonical" href="https://www.digimarketingart.com/case-studies/fingers-on-keys" />
        <meta property="og:title" content="Fingers On Keys - Digital Marketing Case Study | Digimarketing Art" />
        <meta property="og:description" content="See how Digimarketing Art built a complete digital marketing platform for Fingers On Keys." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.digimarketingart.com/case-studies/fingers-on-keys" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fingers On Keys - Digital Marketing Case Study | Digimarketing Art" />
        <meta name="twitter:description" content="See how Digimarketing Art built a complete digital marketing platform for Fingers On Keys." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Fingers On Keys - Digital Marketing Case Study",
              "description": "See how Digimarketing Art built a complete digital marketing platform for Fingers On Keys.",
              "author": { "@type": "Organization", "name": "Digimarketing Art" },
              "publisher": {
                "@type": "Organization",
                "name": "Digimarketing Art",
                "logo": { "@type": "ImageObject", "url": "https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" }
              },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.digimarketingart.com/case-studies/fingers-on-keys" }
            })
          }}
        />
      </Head>

      <style>{`
        @keyframes fok-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fok-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fok-glow {
          0%  { box-shadow: 0 0 0 0 rgba(215,61,86,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(215,61,86,0); }
          100%{ box-shadow: 0 0 0 0 rgba(215,61,86,0); }
        }
        .fok-rise { animation: fok-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .fok-hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .fok-hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important; }
        .fok-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .fok-tag:hover { background: ${THEME_COLOR} !important; color: #fff !important; border-color: ${THEME_COLOR} !important; }
        .fok-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .fok-impact-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(215,61,86,0.15) !important; border-color: rgba(215,61,86,0.35) !important; }
        .fok-stat-badge { animation: fok-count 0.7s ease both; }
        .fok-pulse-btn { animation: fok-glow 2.4s infinite; }
        .fok-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .fok-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1784270464/ff_um5vkv.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.82) 0%, rgba(20,5,10,0.78) 100%)', pointerEvents:'none' }} />

        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(215,61,86,0.22) 0%, transparent 70%)',
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="fok-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:'0 0 8px rgba(215,61,86,0.9)' }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Fingers On Keys — Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(1.8rem,5vw,3.2rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.15, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            Building a <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:'0 0 40px rgba(215,61,86,0.6)',
            }}>Digital Growth Platform</span> for Online Piano Learning
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            Website Design and Development | Social Media Management | Meta Advertising | Lead Generation
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Website Design', 'Social Media Management', 'Meta Advertising', 'Lead Generation', 'Content Strategy'].map((chip,i) => (
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
            { value:'4 Services', sub:'Integrated Strategy', icon:'🎯' },
            { value:'Meta Ads', sub:'Targeted Campaigns', icon:'📢' },
            { value:'Social Media', sub:'Brand Presence', icon:'📱' },
            { value:'Lead Gen', sub:'Enquiry System', icon:'📈' },
          ].map((s,i) => (
            <div key={i} className="fok-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
            }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
              <div style={{ fontSize:'clamp(1.2rem,3vw,1.6rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:11, fontWeight:600, color:'var(--text-secondary)', marginTop:5, textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ MAIN CONTENT ═══════════════════════════════ */}
      <section style={{ padding:'56px 24px 80px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>

          <Link href="/case-studies" className="fok-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:600, fontSize:13, marginBottom:36, display:'inline-flex' }}>
            <ArrowLeft size={14} /> Back to all case studies
          </Link>

          {/* ── ABOUT + CHALLENGE ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20, marginBottom:20 }}>

            {/* About */}
            <div className="fok-hover-card" style={card()}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
                <div>
                  <span style={label()}>About The Client</span>
                  <h2 style={h2({ marginBottom:0 })}>Client Overview</h2>
                </div>
                <img
                  src="https://res.cloudinary.com/didtfhfme/image/upload/v1784270324/logo_fingersonkeys_oicgsd.png"
                  alt="Fingers On Keys"
                  style={{ width:85, height:85, borderRadius:12, objectFit:'contain', flexShrink:0 }}
                />
              </div>
              <p style={p({ marginBottom:12 })}>Fingers On Keys is an <strong>e-learning company</strong> that provides online piano and keyboard classes to students who want to learn music through professional guidance from the comfort of their homes.</p>
              <p style={p({ marginBottom:12 })}>The company had a strong learning concept and a valuable service, but it needed a professional digital presence to communicate its offering, reach potential students and generate regular enquiries.</p>
              <p style={p({ marginBottom:12 })}>Digimarketing Art partnered with Fingers On Keys to build its complete digital marketing ecosystem. We designed and developed the company's website, managed its social media presence, created engaging content, launched targeted Meta advertising campaigns and brought interested users to the website.</p>
              <p style={p({ marginBottom:16 })}><strong>Website:</strong> <a href="https://www.fingers-onkeys.com/" target="_blank" rel="noopener noreferrer" style={{ color:THEME_COLOR }}>https://www.fingers-onkeys.com/</a></p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                {['Website Design','Social Media','Meta Ads','Lead Generation','Content Creation'].map((s,i) => (
                  <span key={i} className="fok-tag" style={{
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
            <div className="fok-hover-card" style={card()}>
              <span style={label()}>The Problem</span>
              <h2 style={h2({ marginBottom:10 })}>The Challenge</h2>
              <p style={p({ marginBottom:14 })}>Fingers On Keys had a clear vision for online music education, but its digital presence needed to be developed and strengthened. The key challenges were:</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  'Creating a professional online identity with a modern website',
                  'Explaining online piano learning clearly to potential students and parents',
                  'Reaching the right audience interested in piano learning and music education',
                  'Building trust through consistent social media presence',
                  'Generating website traffic and leads from digital channels',
                ].map((item,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:10, padding:'9px 12px',
                    background:'rgba(215,61,86,0.05)', borderRadius:10, fontSize:13,
                    color:'var(--text-primary)', fontWeight:500, lineHeight:1.5,
                    borderLeft:'3px solid rgba(215,61,86,0.35)',
                  }}>
                    <span style={{ color:THEME_COLOR, fontWeight:900, flexShrink:0, marginTop:1 }}>×</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── OBJECTIVES ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Plan</span>
            <h2 style={h2()}>Our Objectives</h2>
            <p style={p({ marginBottom:16 })}>Digimarketing Art developed the project around the following objectives:</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:10 }}>
              {[
                'Build a professional and trustworthy online presence',
                'Design a modern and responsive website for online piano classes',
                'Clearly explain the company\'s learning model and services',
                'Make it easy for parents and students to enquire about classes',
                'Establish a consistent social media identity',
                'Create engaging and educational content for the target audience',
                'Reach potential students through targeted Meta advertising',
                'Bring relevant traffic to the Fingers On Keys website',
                'Generate enquiries from people interested in online piano lessons',
              ].map((item,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'flex-start', gap:10, padding:'9px 12px',
                  background:'rgba(215,61,86,0.05)', borderRadius:10, fontSize:13,
                  color:'var(--text-primary)', fontWeight:500, lineHeight:1.5,
                  borderLeft:'3px solid rgba(215,61,86,0.35)',
                }}>
                  <span style={{ color:THEME_COLOR, fontWeight:900, flexShrink:0, marginTop:1 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>

          {/* ── WEBSITE DESIGN ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Website Design and Development</h2>
            <p style={p({ marginBottom:16 })}>Digimarketing Art designed and developed a professional website that presented the complete Fingers On Keys learning experience. The website was built to communicate the company's services in a simple, engaging and visually appealing manner.</p>
            <p style={p({ marginBottom:16 })}>The design reflected the creative and educational nature of the brand while maintaining a professional appearance that could build confidence among parents and learners.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14, marginBottom:16 }}>
              {[
                { title:'Clear Service Communication', desc:'Website content structured to help visitors quickly understand what Fingers On Keys offers, who can join, and how online piano learning works.' },
                { title:'User-Friendly Navigation', desc:'Organised so visitors could easily find information about classes, learning approach and enquiry process.' },
                { title:'Mobile-Responsive Design', desc:'Designed to work smoothly across desktop, tablets and mobile devices — especially important for social media and ad traffic.' },
                { title:'Conversion-Focused Structure', desc:'Structured to encourage action with clear calls to action guiding visitors towards contacting Fingers On Keys.' },
              ].map((item,i) => (
                <div key={i} style={{
                  padding:'16px', background:'var(--bg-primary)',
                  borderRadius:14, border:'1px solid var(--border-color)',
                }}>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{item.title}</h4>
                  <p style={p({ fontSize:13 })}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Responsive Design','Mobile-First','Clear CTAs','Professional Branding','Easy Navigation','Conversion Optimized'].map((s,i) => (
                <span key={i} className="fok-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:THEME_COLOR, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* ── SOCIAL MEDIA ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Social Media Management</h2>
            <p style={p({ marginBottom:16 })}>After developing the website, Digimarketing Art created and managed the social media presence of Fingers On Keys. The objective was to keep the brand visible, educate potential students and communicate the value of piano learning in an engaging way.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14, marginBottom:16 }}>
              {[
                { title:'Educational Content', desc:'Posts covering benefits of learning piano, music education for children, building confidence through music, and learning from home.' },
                { title:'Engaging Content', desc:'Interactive content including musical questions, piano facts, note-identification activities, quizzes and practice challenges.' },
                { title:'Inspirational Content', desc:'Content designed to remove hesitation and encourage potential learners to take the first step in their piano journey.' },
                { title:'Promotional Content', desc:'Posts highlighting convenient online learning, professional instruction, classes for beginners and personalised guidance.' },
              ].map((item,i) => (
                <div key={i} style={{
                  padding:'16px', background:'var(--bg-primary)',
                  borderRadius:14, border:'1px solid var(--border-color)',
                }}>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{item.title}</h4>
                  <p style={p({ fontSize:13 })}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Content Planning','Brand Consistency','Audience Engagement','Visual Identity','Educational Posts','Creative Design'].map((s,i) => (
                <span key={i} className="fok-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:THEME_COLOR, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* ── META ADVERTISING ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Meta Advertising</h2>
            <p style={p({ marginBottom:16 })}>To increase visibility and generate enquiries, Digimarketing Art planned and managed targeted advertising campaigns across Meta platforms. The advertisements were created to reach parents, beginners, adults and music enthusiasts who were likely to be interested in online piano classes.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14, marginBottom:16 }}>
              {[
                { title:'Audience Strategy', desc:'Campaigns focused on audiences connected with piano, keyboard, music education, online learning, parenting and creative development.' },
                { title:'Parent-Focused Messaging', desc:'Advertisements highlighting how learning piano supports creativity, concentration, discipline, confidence and musical development.' },
                { title:'Beginner-Focused Messaging', desc:'Communication reassuring beginners that they could start from the basics and learn through guided online classes.' },
              ].map((item,i) => (
                <div key={i} style={{
                  padding:'16px', background:'var(--bg-primary)',
                  borderRadius:14, border:'1px solid var(--border-color)',
                }}>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{item.title}</h4>
                  <p style={p({ fontSize:13 })}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Meta Ads','Audience Targeting','Creative Strategy','A/B Testing','Conversion Tracking','Campaign Optimization'].map((s,i) => (
                <span key={i} className="fok-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:THEME_COLOR, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* ── LEAD GENERATION ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Approach</span>
            <h2 style={h2()}>Lead Generation</h2>
            <p style={p({ marginBottom:16 })}>The primary purpose of the digital strategy was to generate genuine interest in the Fingers On Keys classes. The website, social media and advertising campaigns worked together to encourage potential students and parents to start a conversation with the company.</p>
            <p style={p({ marginBottom:16 })}>The lead-generation journey was simple: A potential learner or parent discovered Fingers On Keys through social media or a Meta advertisement. The content introduced the benefits of online piano learning. The user visited the website to learn more. The website explained the classes and learning experience. Clear calls to action encouraged the visitor to submit an enquiry.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {['Website Traffic','Enquiry System','Meta Campaigns','Social Media Funnel','Landing Pages','Conversion Optimization'].map((s,i) => (
                <span key={i} className="fok-tag" style={{
                  padding:'6px 13px', background:'var(--bg-primary)',
                  borderRadius:8, fontSize:12, fontWeight:600,
                  color:'var(--text-primary)', border:'1px solid var(--border-color)',
                }}>
                  <span style={{ color:THEME_COLOR, marginRight:5 }}>✦</span>{s}
                </span>
              ))}
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Numbers</span>
            <h2 style={h2()}>Results</h2>
            <p style={p({ marginBottom:20 })}>The project gave Fingers On Keys a complete digital platform for presenting, promoting and growing its online piano-learning service.</p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginBottom:20 }}>
              {/* Before */}
              <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid rgba(215,61,86,0.22)' }}>
                <div style={{ padding:'12px 20px', background:'rgba(215,61,86,0.07)', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(215,61,86,0.18)' }}>
                  <span style={{ fontSize:18, fontWeight:900, color:THEME_COLOR }}>✕</span>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>Before</span>
                </div>
                <div style={{ padding:'12px 20px' }}>
                  {[
                    'No professional website',
                    'No digital identity',
                    'No social media presence',
                    'No advertising strategy',
                    'No lead generation system',
                    'No website traffic source',
                  ].map((item,i) => (
                    <div key={i} style={{ padding:'8px 0', borderBottom: i<5 ? '1px solid var(--border-color)' : 'none', fontSize:13, color:'var(--text-secondary)' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid rgba(34,197,94,0.22)' }}>
                <div style={{ padding:'12px 20px', background:'rgba(34,197,94,0.07)', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(34,197,94,0.18)' }}>
                  <span style={{ fontSize:18, fontWeight:900, color:'#22c55e' }}>✓</span>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--text-primary)' }}>After</span>
                </div>
                <div style={{ padding:'12px 20px' }}>
                  {[
                    'Modern responsive website',
                    'Professional online brand',
                    'Consistent social media content',
                    'Targeted Meta ad campaigns',
                    'Relevant website traffic',
                    'Clear enquiry journey',
                  ].map((item,i) => (
                    <div key={i} style={{ padding:'8px 0', borderBottom: i<5 ? '1px solid var(--border-color)' : 'none', fontSize:13, color:'var(--text-secondary)' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Big callout */}
            <div style={{
              textAlign:'center', padding:'28px 20px',
              background:`linear-gradient(135deg,rgba(215,61,86,0.07),rgba(215,61,86,0.02))`,
              borderRadius:16, border:'1px solid rgba(215,61,86,0.18)',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:300, height:150, borderRadius:'50%', background:'radial-gradient(ellipse,rgba(215,61,86,0.14),transparent 70%)', pointerEvents:'none' }}/>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:16, position:'relative' }}>
                {[
                  { val:'4', lbl:'Services Integrated', icon:'🎯' },
                  { val:'100%', lbl:'Digital Foundation', icon:'🏗️' },
                  { val:'Connected', lbl:'Customer Journey', icon:'🔗' },
                ].map((s,i) => (
                  <div key={i} style={{ textAlign:'center' }}>
                    <div style={{ fontSize:18, marginBottom:4 }}>{s.icon}</div>
                    <div style={{ fontSize:'clamp(1.4rem,4vw,2.4rem)', fontWeight:900, fontFamily:'var(--font-display)', color:THEME_COLOR, lineHeight:1 }}>{s.val}</div>
                    <div style={{ fontSize:11, color:'var(--text-secondary)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── LEAD IMAGE ── */}
          <div className="fok-hover-card" style={{ ...card({ marginBottom:20 }), padding:0, overflow:'hidden' }}>
            <img
              src="https://res.cloudinary.com/didtfhfme/image/upload/v1784270818/fl_wdklao.png"
              alt="Fingers On Keys Lead Generation"
              style={{ width:'100%', height:'auto', display:'block' }}
            />
          </div>

          {/* ── BUSINESS IMPACT ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>The Outcome</span>
            <h2 style={h2()}>Business Impact</h2>
            <p style={p({ marginBottom:20 })}>Fingers On Keys had the knowledge and experience required to teach piano online. Digimarketing Art created the digital platform required to present that expertise, reach the right audience and generate business opportunities.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
              {[
                { icon:'🏆', title:'Professional Digital Presence', desc:'A modern website that accurately represented the educational services and gave potential students confidence.' },
                { icon:'🔍', title:'Increased Brand Visibility', desc:'Consistent social media and targeted advertising helped the company reach audiences beyond its immediate network.' },
                { icon:'📈', title:'Relevant Website Traffic', desc:'Campaigns brought people interested in music education and piano learning to the website.' },
                { icon:'💬', title:'Lead Generation', desc:'The connected digital strategy generated enquiries for Fingers On Keys from interested students and parents.' },
              ].map((item,i) => (
                <div key={i} className="fok-impact-card" style={{
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

          {/* ── WHY IT WORKED ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20, textAlign:'center' })}>
            <span style={label({ textAlign:'center', display:'block' })}>Why the Strategy Worked?</span>
            <h2 style={h2({ textAlign:'center', marginBottom:8 })}>The Winning Formula</h2>
            <p style={p({ maxWidth:600, margin:'0 auto 28px', textAlign:'center' })}>
              The strength of the project came from connecting every digital activity to one clear business objective. The website, social media and advertising campaigns were not treated as separate services.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', alignItems:'center' }}>
              {['Website Development','Social Media','Meta Advertising','Lead Generation'].map((item,i,arr) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding:'9px 18px', background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                    color:'#fff', borderRadius:100, fontSize:12, fontWeight:700,
                    boxShadow:'0 4px 14px rgba(215,61,86,0.3)',
                  }}>{item}</span>
                  {i < arr.length-1 && (
                    <span style={{ color:'var(--text-muted)', fontSize:18, fontWeight:300 }}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── DIGIMARKETING ART CONTRIBUTION ── */}
          <div className="fok-hover-card" style={card({ marginBottom:20 })}>
            <span style={label()}>Our Contribution</span>
            <h2 style={h2()}>Digimarketing Art's Contribution</h2>
            <p style={p({ marginBottom:16 })}>Digimarketing Art managed the complete digital growth journey for Fingers On Keys.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
              {[
                { title:'Website Strategy', desc:'We planned the website around the needs and questions of potential students and parents.' },
                { title:'Website Design & Development', desc:'We created a professional, responsive and user-friendly website that represented the brand.' },
                { title:'Content Strategy', desc:'We developed clear communication that made online piano learning easy to understand.' },
                { title:'Social Media Management', desc:'We created and managed consistent social media content to increase awareness and trust.' },
                { title:'Meta Advertising', desc:'We planned and managed targeted campaigns to reach relevant audiences.' },
                { title:'Lead Generation', desc:'We created a clear digital journey that encouraged interested users to submit enquiries.' },
              ].map((item,i) => (
                <div key={i} className="fok-impact-card" style={{
                  padding:'20px', background:'var(--bg-primary)',
                  borderRadius:16, border:'1px solid var(--border-color)',
                  boxShadow:'0 2px 12px rgba(0,0,0,0.03)',
                }}>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6, lineHeight:1.3 }}>{item.title}</h4>
                  <p style={p({ fontSize:13 })}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FINAL CTA ── */}
          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, ${THEME_COLOR} 0%, ${THEME_COLOR_DK} 60%, #7f1d1d 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(215,61,86,0.3)',
          }}>
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Looking to Achieve Similar Results?</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Let's Build Your Next Success Story</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.88)', lineHeight:1.75, maxWidth:620, margin:'0 auto 14px' }}>
                At Digital Advertisement Marketing Network, we help businesses build complete digital platforms through website development, social media management, targeted advertising and lead generation strategies.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.75, maxWidth:580, margin:'0 auto 32px' }}>
                Ready to grow your business? Let's build your next success story.
              </p>

              <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:0, background:'rgba(0,0,0,0.18)', borderRadius:16, overflow:'hidden', maxWidth:520, margin:'0 auto' }}>
                {[{ val:'4', lbl:'Services' },{ val:'100%', lbl:'Digital Foundation' },{ val:'Connected', lbl:'Journey' }].map((s,i) => (
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

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default FingersOnKeysCaseStudy;
