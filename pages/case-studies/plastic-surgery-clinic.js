import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const THEME_COLOR    = '#d73d56';
const THEME_COLOR_DK = '#b82e45';

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

function PlasticSurgeryCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>Plastic Surgery Clinic Chandigarh - Lead Generation Case Study | Digimarketing Art</title>
        <meta name="description" content="Read how Digimarketing Art generated 100+ qualified plastic surgery enquiries for Plastic Surgery Clinic, Chandigarh through Google Ads and dedicated landing pages." />
        <meta name="keywords" content="plastic surgery lead generation, Google Ads plastic surgery, healthcare marketing, plastic surgery clinic, cosmetic surgery marketing" />
      </Head>

      <style>{`
        @keyframes ps-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ps-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .ps-rise { animation: ps-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ps-hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .ps-hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important; }
        .ps-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .ps-tag:hover { background: ${THEME_COLOR} !important; color: #fff !important; border-color: ${THEME_COLOR} !important; }
        .ps-phase-wrap:hover .ps-accent { width: 100% !important; }
        .ps-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .ps-impact-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(215,61,86,0.15) !important; border-color: rgba(215,61,86,0.35) !important; }
        .ps-stat-badge { animation: ps-count 0.7s ease both; }
        .ps-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .ps-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1783589279/med_lvotc6.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.85) 0%, rgba(20,5,10,0.8) 100%)', pointerEvents:'none' }} />

        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background: `radial-gradient(ellipse, rgba(215,61,86,0.25) 0%, transparent 70%)`,
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="ps-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:`0 0 8px ${THEME_COLOR}` }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Healthcare — Lead Generation Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(1.8rem,5vw,3.2rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.15, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            Generating <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(215,61,86,0.6)`,
            }}>100+ Qualified Plastic Surgery Enquiries</span> for the Clinic Through Google Ads
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            Plastic Surgery Clinic, Chandigarh — Transforming Digital Marketing into a Scalable Patient Acquisition System.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Google Ads', 'Landing Pages', 'Conversion Tracking', 'GTM Setup', 'Lead Quality', 'Healthcare Marketing'].map((chip,i) => (
              <span key={i} style={{
                padding:'7px 18px', borderRadius:100, fontSize:12, fontWeight:700,
                background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.16)',
                color:'rgba(255,255,255,0.85)', backdropFilter:'blur(8px)',
              }}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'var(--bg-secondary)', borderBottom:'1px solid var(--border-color)', padding:'0 24px' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))' }}>
          {[
            { value:'100+',           sub:'Qualified Enquiries',        icon:'📞' },
            { value:'GTM Setup',      sub:'Conversion Tracking',         icon:'📊' },
            { value:'2 LP',           sub:'Dedicated Landing Pages',     icon:'🎯' },
            { value:'Scalable',       sub:'Patient Acquisition System',  icon:'⚕️' },
          ].map((s,i) => (
            <div key={i} className="ps-stat-badge" style={{
              padding:'28px 12px', textAlign:'center', animationDelay:`${i*0.1}s`,
              borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
            }}>
              <span style={{ fontSize:22, marginRight:8, display:'inline-block', verticalAlign:'middle' }}>{s.icon}</span>
              <div style={{ display:'inline-block', verticalAlign:'middle', textAlign:'left' }}>
                <div style={{ fontSize:18, fontWeight:900, color:'var(--text-primary)', lineHeight:1.1 }}>{s.value}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', fontWeight:600, marginTop:2 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:'80px 24px', background:'var(--bg-primary)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <Link href="/case-studies" className="ps-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:700, fontSize:14, marginBottom:40 }}>
            <ArrowLeft size={16} /> Back to all case studies
          </Link>

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Client Overview</span>
            <h2 style={h2()}>About the Clinic</h2>
            <p style={p({ marginBottom:20 })}>
              Plastic Surgery Clinic, Chandigarh is a leading cosmetic and plastic surgery clinic offering advanced aesthetic and reconstructive procedures, including breast surgery, liposuction, body contouring, and other cosmetic treatments.
            </p>
            <p style={p()}>
              Our objective was to build a reliable digital marketing system that could generate qualified patient enquiries from individuals actively seeking cosmetic surgery consultations.
            </p>
          </div>

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>The Hurdle</span>
            <h2 style={h2()}>The Challenge</h2>
            <p style={p({ marginBottom:20 })}>
              Before partnering with our team, the clinic was investing in digital marketing but faced several challenges:
            </p>

            <ul style={{ paddingLeft:20, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'A large number of irrelevant and low-quality enquiries',
                'Inaccurate conversion tracking',
                'Difficulty identifying which campaigns were generating genuine patient leads',
                'Lack of dedicated landing pages for high-value procedures',
                'Limited visibility into actual campaign performance and ROI'
              ].map((item, i) => (
                <li key={i} style={p({ fontSize:13 })}>{item}</li>
              ))}
            </ul>

            <p style={p()}>
              As a result, the clinic was unable to effectively optimize its advertising campaigns or scale patient acquisition.
            </p>
          </div>

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Strategic Plan</span>
            <h2 style={h2()}>Our Approach</h2>
            <p style={p({ marginBottom:24 })}>
              We developed a comprehensive strategy centered around four key pillars to transform the clinic's digital marketing performance.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
              <div className="ps-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>1. Dedicated Landing Pages</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>Conversion-Focused Design</h4>
                <p style={p({ fontSize:13 })}>
                  Developed dedicated landing pages for Breast Surgery Consultation and Liposuction Consultation, designed to address patient concerns directly and encourage consultation bookings.
                </p>
              </div>

              <div className="ps-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>2. Accurate Tracking</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>GTM &amp; Google Ads Setup</h4>
                <p style={p({ fontSize:13 })}>
                  Conducted a complete audit and implemented proper conversion tracking using Google Tag Manager (GTM) and Google Ads Conversion Tracking to measure campaign performance accurately.
                </p>
              </div>

              <div className="ps-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>3. Campaign Optimization</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>High-Intent Targeting</h4>
                <p style={p({ fontSize:13 })}>
                  Restructured Google Ads campaigns targeting high-intent plastic surgery keywords, refining match types, and implementing negative keywords to reduce irrelevant traffic.
                </p>
              </div>

              <div className="ps-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>4. Lead Quality Focus</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>Quality Over Volume</h4>
                <p style={p({ fontSize:13 })}>
                  Every optimization decision was focused on improving lead quality and increasing the likelihood of consultation bookings rather than chasing traffic volume.
                </p>
              </div>
            </div>
          </div>

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Conversion Infrastructure</span>
            <h2 style={h2()}>Landing Page Development</h2>
            <p style={p({ marginBottom:20 })}>
              Instead of directing all traffic to a general website page, we developed dedicated conversion-focused landing pages for the clinic's most sought-after services:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Breast Surgery Consultation', desc: 'Dedicated landing page designed to address patient concerns and encourage consultation bookings for breast surgery.' },
                { title: 'Liposuction Consultation', desc: 'Focused landing page highlighting procedure benefits and building trust through professional presentation.' },
                { title: 'Patient-Centric Design', desc: 'Each page was optimized to address patient concerns, highlight benefits, and improve overall conversion rates.' },
                { title: 'Trust-Building Elements', desc: 'Professional presentation, clear CTAs, and reassuring content to build confidence in prospective patients.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Proven Success</span>
            <h2 style={h2()}>Results</h2>
            <p style={p({ marginBottom:24 })}>
              Our strategic approach delivered measurable improvements in both lead quality and quantity:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'✅', title:'100+ Qualified Enquiries', desc:'Generated over 100 qualified patient enquiries through strategic Google Ads management.' },
                { icon:'📊', title:'Accurate Tracking', desc:'Proper conversion tracking through GTM eliminated reporting discrepancies.' },
                { icon:'🎯', title:'Improved Lead Quality', desc:'Significant reduction in irrelevant and unqualified enquiries through continuous optimization.' },
                { icon:'📈', title:'Campaign Visibility', desc:'Improved campaign performance visibility enabling data-driven optimization decisions.' }
              ].map((item,i) => (
                <div key={i} className="ps-impact-card" style={{
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

          <div className="ps-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Business Impact</span>
            <h2 style={h2()}>Transformation</h2>
            <p style={p({ marginBottom:20 })}>
              The combination of dedicated landing pages, accurate tracking, and strategic Google Ads management transformed the clinic's lead generation process.
            </p>
            <p style={p({ marginBottom:20 })}>
              Instead of relying on assumptions, Plastic Surgery Clinic gained access to reliable performance data and a consistent stream of qualified consultation enquiries.
            </p>
            <p style={p()}>
              This created a scalable patient acquisition system that continues to support the clinic's growth and marketing efforts.
            </p>
          </div>

          <div style={{ ...card({ marginBottom:24 }) }}>
            <span style={label()}>Landing Page Example</span>
            <h2 style={h2()}>Live Case Study</h2>
            <p style={p({ marginBottom:20 })}>
              See the Breast Surgery Consultation landing page in action:
            </p>
            <a href="https://drakhilplasticsurgery.com/breast-consultancy/" target="_blank" rel="noopener noreferrer" style={{
              display:'inline-block', background:THEME_COLOR, border:'2px solid '+THEME_COLOR,
              padding:'12px 28px', borderRadius:'100px', fontSize:'14px', fontWeight:700,
              color:'#fff', cursor:'pointer', transition:'all 0.3s', textDecoration:'none',
            }}>
              View Landing Page ↗
            </a>
          </div>

          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, #f87171 0%, ${THEME_COLOR} 50%, ${THEME_COLOR_DK} 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(215,61,86,0.3)',
          }}>
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Key Takeaway</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Quality Over Quantity</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.92)', lineHeight:1.75, maxWidth:660, margin:'0 auto 14px' }}>
                Successful healthcare marketing is not about generating the highest number of clicks—it is about attracting genuine patients who are actively looking for treatment.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.75)', lineHeight:1.75, maxWidth:580, margin:'0 auto' }}>
                By implementing conversion-focused landing pages, proper tracking infrastructure, and a data-driven Google Ads strategy, we helped Plastic Surgery Clinic, Chandigarh generate over 100 qualified enquiries and significantly improve the effectiveness of its digital advertising campaigns.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default PlasticSurgeryCaseStudy;
