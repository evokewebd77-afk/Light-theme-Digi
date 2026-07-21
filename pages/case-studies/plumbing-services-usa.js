import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

/* ── shared tokens ── */
const THEME_COLOR    = '#0284c7'; // Professional Blue for Plumbing/Water Services
const THEME_COLOR_DK = '#0369a1';

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

function PlumbingServicesUsaCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>Plumbing Services USA - Lead Generation Case Study | Digimarketing Art</title>
        <meta name="description" content="Read how Digimarketing Art generated 70+ high-quality plumbing leads per month in the USA through targeted Google Ads, Bing Ads, and custom landing pages." />
        <meta name="keywords" content="plumbing lead generation, Google Ads plumbing, Bing Ads plumbing, digital marketing plumbing, local service ads" />
      </Head>

      {/* ─────────────────── GLOBAL ANIMATION STYLES ─────────────────── */}
      <style>{`
        @keyframes plumbing-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes plumbing-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .plumbing-rise { animation: plumbing-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .plumbing-hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .plumbing-hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important;
        }
        .plumbing-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .plumbing-tag:hover {
          background: ${THEME_COLOR} !important;
          color: #fff !important;
          border-color: ${THEME_COLOR} !important;
        }
        .plumbing-phase-wrap:hover .plumbing-accent { width: 100% !important; }
        .plumbing-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .plumbing-impact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(2,132,199,0.15) !important;
          border-color: rgba(2,132,199,0.35) !important;
        }
        .plumbing-stat-badge { animation: plumbing-count 0.7s ease both; }
        .plumbing-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .plumbing-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1783507840/740106272_1757535381918800_398855134427310952_n.webp_btgvor.webp)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.85) 0%, rgba(5,10,25,0.8) 100%)', pointerEvents:'none' }} />

        {/* Decorative glowing orb */}
        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background: `radial-gradient(ellipse, rgba(2,132,199,0.25) 0%, transparent 70%)`,
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="plumbing-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>

          {/* Breadcrumb chip */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:`0 0 8px ${THEME_COLOR}` }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Plumbing Services — Lead Generation Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(1.8rem,5vw,3.2rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.15, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How We Generated <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(2,132,199,0.6)`,
            }}>70+ High-Quality Confirmed Leads</span> Per Month
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            US-Based Plumbing Company — Scaling Client Acquisition and Local Service Requests Through Strategic Google Ads and Bing Ads Campaigns.
          </p>

          {/* Hero chips */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Google Ads', 'Bing Ads', 'Lead Generation', 'Conversion Rate Optimization', 'Negative Keyword Filtering', 'Local Targeting'].map((chip,i) => (
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
            { value:'70+',           sub:'Confirmed Leads / Mo',        icon:'📞' },
            { value:'12 Months',     sub:'Campaign Duration',           icon:'📅' },
            { value:'$10,000',       sub:'Total Ad Budget',             icon:'💰' },
            { value:'Double LP',     customSub:'Landing Pages Designed',icon:'🎯' },
          ].map((s,i) => (
            <div key={i} className="plumbing-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
            }}>
              <span style={{ fontSize:22, marginRight:8, display:'inline-block', verticalAlign:'middle' }}>{s.icon}</span>
              <div style={{ display:'inline-block', verticalAlign:'middle', textAlign:'left' }}>
                <div style={{ fontSize:18, fontWeight:900, color:'var(--text-primary)', lineHeight:1.1 }}>{s.value}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', fontWeight:600, marginTop:2 }}>{s.sub || s.customSub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ MAIN CONTENT ═══════════════════════════════ */}
      <section style={{ padding:'80px 24px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>

          {/* BACK LINK */}
          <Link href="/case-studies" className="plumbing-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:700, fontSize:14, marginBottom:40 }}>
            <ArrowLeft size={16} /> Back to all case studies
          </Link>

          {/* ── CLIENT OVERVIEW ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Project Summary</span>
            <h2 style={h2()}>Client Overview</h2>
            <p style={p({ marginBottom:20 })}>
              A US-based plumbing company approached Digital Advertisement Marketing Network with the goal of generating consistent, high-quality service leads through paid advertising.
            </p>
            <p style={p({ marginBottom:20 })}>
              The company wanted to grow its customer enquiries for plumbing services but preferred to keep its brand name confidential. For this reason, the company name has not been disclosed in this case study.
            </p>
            <p style={p()}>
              Our objective was clear: build a reliable paid advertising system that could generate confirmed leads every month from people actively searching for plumbing services.
            </p>
          </div>

          {/* ── THE CHALLENGE ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>The Hurdle</span>
            <h2 style={h2()}>The Challenge</h2>
            <p style={p({ marginBottom:20 })}>
              The plumbing industry is highly competitive in the United States. Many users search for urgent services such as leak repairs, drain cleaning, water heater repair, pipe repair, emergency plumbing, and plumbing contractors.
            </p>
            <p style={p({ marginBottom:24 })}>
              The client needed more than just website traffic. They needed real enquiries from people who were ready to call, submit a form, or request plumbing services.
            </p>
            
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:16, marginTop:10 }}>
              {[
                { title: 'High Local Competition', desc: 'Saturated search results dominated by national directory websites and local plumbing contractors.' },
                { title: 'Expensive Intent Keywords', desc: 'Keywords with strong buyer intent were costly, making budget optimization absolutely critical.' },
                { title: 'Irrelevant Clicks', desc: 'Broad search queries resulted in wasted spend on users looking for DIY guides or unrelated queries.' },
                { title: 'Lead Quality vs. Volume', desc: 'A critical need to attract confirmed service leads rather than just general informational queries.' }
              ].map((c, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{c.title}</h4>
                  <p style={p({ fontSize:13 })}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── OUR STRATEGY ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Strategic Plan</span>
            <h2 style={h2()}>Our Strategy</h2>
            <p style={p({ marginBottom:20 })}>
              Digital Advertisement Marketing Network created a performance-focused advertising strategy using both Google Ads and Bing Ads.
            </p>
            <p style={p({ marginBottom:24 })}>
              Instead of sending traffic to a general website page, we developed **two high-quality landing pages** designed specifically for plumbing service enquiries. These landing pages helped improve user trust, increase conversion chances, and make it easier for visitors to take action.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
              <div className="plumbing-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>Google Search Ads</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>High-Intent Targeting</h4>
                <p style={p({ fontSize:13 })}>
                  Set up localized campaigns targeting commercial and residential terms with urgent search intent (e.g., "emergency leak repair", "plumbers near me").
                </p>
              </div>

              <div className="plumbing-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>Bing Search Ads</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>Extended Reach</h4>
                <p style={p({ fontSize:13 })}>
                  Leveraged Bing Ads to capture additional high-converting search traffic at a lower cost-per-click, maximizing the client's $10,000 budget.
                </p>
              </div>

              <div className="plumbing-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>Ad Copywriting</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>Urgency &amp; Trust</h4>
                <p style={p({ fontSize:13 })}>
                  Focused ad copies on immediate availability, licensed plumbers, transparent pricing, and fast response times to boost click-through rates.
                </p>
              </div>
            </div>
          </div>

          {/* ── LANDING PAGE DEVELOPMENT ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Conversion Infrastructure</span>
            <h2 style={h2()}>Landing Page Development</h2>
            <p style={p({ marginBottom:20 })}>
              We created two dedicated landing pages designed specifically for plumbing service enquiries to help users quickly understand the service offering and take action without confusion.
            </p>
            
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Clear Service Headline', desc: 'Directly matched the user\'s search query to establish relevance immediately.' },
                { title: 'Strong Call-to-Actions', desc: 'Click-to-call buttons optimized for mobile and visible service request forms.' },
                { title: 'Mobile-First Layout', desc: 'Ensured fast loading speeds and perfect readability on smartphones.' },
                { title: 'Trust-Building Signals', desc: 'Displayed licenses, insurance guarantees, and positive customer reviews prominently.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CAMPAIGN EXECUTION ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Continuous Optimization</span>
            <h2 style={h2()}>Campaign Execution</h2>
            <p style={p({ marginBottom:16 })}>
              The campaigns were managed actively over a 12-month period. We continuously reviewed campaign performance, search terms, keyword quality, lead sources, and conversion data to optimize performance.
            </p>
            <ul style={{ paddingLeft:20, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
              <li style={p()}>
                <strong>High-Intent Keyword Targeting:</strong> We targeted users who were actively searching for plumbing services, reaching people with immediate, active needs.
              </li>
              <li style={p()}>
                <strong>Lead Quality Improvement:</strong> Using negative keywords and search term audits, we reduced irrelevant clicks to preserve budget.
              </li>
              <li style={p()}>
                <strong>Conversion-Focused Funnel:</strong> The dedicated landing pages converted visitors into enquiries by giving them a clear and quick path to contact the client.
              </li>
            </ul>
          </div>

          {/* ── RESULTS ── */}
          <div className="plumbing-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Proven Success</span>
            <h2 style={h2()}>Results Achieved</h2>
            <p style={p({ marginBottom:24 })}>
              Over the 12-month campaign period, our team helped the plumbing company transition from random enquiries to a stable, measurable lead generation system.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'📈', title:'70+ Confirmed Leads', desc:'Averaged over 70 high-quality confirmed leads every single month.' },
                { icon:'🚀', title:'Dual-Platform Success', desc:'Ran successful campaigns across both Google Ads and Bing Ads.' },
                { icon:'🎯', title:'High Conversion Rate', desc:'Achieved through the deployment of two dedicated landing pages.' },
                { icon:'⚙️', title:'Improved Lead Quality', desc:'Reduced cost-per-lead through continuous search term optimization.' }
              ].map((item,i) => (
                <div key={i} className="plumbing-impact-card" style={{
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
          <div className="plumbing-hover-card" style={card({ marginBottom:24, textAlign:'center' })}>
            <span style={label({ textAlign:'center', display:'block' })}>The Winning Formula</span>
            <h2 style={h2({ textAlign:'center', marginBottom:8 })}>Why This Campaign Worked</h2>
            <p style={p({ maxWidth:580, margin:'0 auto 28px', textAlign:'center' })}>
              This campaign worked because it was not focused only on traffic. It was focused on **confirmed leads**.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', alignItems:'center' }}>
              {['Google Ads Search Traffic','Bing Ads Low-Cost CPC','Conversion-Focused Landing Pages'].map((item,i,arr) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding:'9px 18px', background:`linear-gradient(135deg,${THEME_COLOR},${THEME_COLOR_DK})`,
                    color:'#fff', borderRadius:100, fontSize:12, fontWeight:700,
                    boxShadow:'0 4px 14px rgba(2,132,199,0.3)',
                  }}>{item}</span>
                  {i < arr.length-1 && (
                    <span style={{ color:'var(--text-muted)', fontSize:18, fontWeight:300 }}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p style={p({ maxWidth:600, margin:'28px auto 0', textAlign:'center' })}>
              Google Ads captured high-intent active search traffic, while Bing Ads provided an additional source of quality enquiries at a controlled budget. The landing pages supported the campaign by giving users a simple and direct way to contact the company.
            </p>
          </div>

          {/* ── FINAL CTA / OUTCOME ── */}
          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, #38bdf8 0%, ${THEME_COLOR} 50%, ${THEME_COLOR_DK} 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(2,132,199,0.3)',
          }}>
            {/* Decorative orbs */}
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Conclusion</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Stable Growth &amp; Scalable Results</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.92)', lineHeight:1.75, maxWidth:660, margin:'0 auto 14px' }}>
                For service-based businesses such as plumbing companies, paid search campaigns can become a reliable growth channel when they are managed with the right strategy, tracking, and landing page experience.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.75)', lineHeight:1.75, maxWidth:580, margin:'0 auto 32px' }}>
                By combining strategic search advertising across platforms with landing page CRO and search intent optimization, we helped this client establish a reliable and measurable system for new business opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default PlumbingServicesUsaCaseStudy;
