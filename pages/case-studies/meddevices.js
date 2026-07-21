import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const THEME_COLOR    = '#0d9488';
const THEME_COLOR_DK = '#0f766e';

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

function MedDevicesCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>MedDevices LifeSciences - Lead Generation & Marketing Automation Case Study | Digimarketing Art</title>
        <meta name="description" content="Read how Digimarketing Art built a complete lead generation and marketing automation system for MedDevices LifeSciences, generating 40+ qualified leads per month." />
        <meta name="keywords" content="B2B lead generation, medical device marketing, compliance marketing, Google Ads B2B, marketing automation, meddevices" />
      </Head>

      <style>{`
        @keyframes med-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes med-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .med-rise { animation: med-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .med-hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .med-hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important; }
        .med-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .med-tag:hover { background: ${THEME_COLOR} !important; color: #fff !important; border-color: ${THEME_COLOR} !important; }
        .med-phase-wrap:hover .med-accent { width: 100% !important; }
        .med-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .med-impact-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13,148,136,0.15) !important; border-color: rgba(13,148,136,0.35) !important; }
        .med-stat-badge { animation: med-count 0.7s ease both; }
        .med-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .med-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_100/v1779422857/AQPJ7G5Z7K660Mir6WN4i3dpgCNikYYyKCEsIoRv2bF-dTABr6OD4CD82ozDZm4Bc6RUlrSLPsBiZ0MdC4mfBgVM8gzrBJQE4R0ikWEIrWbdG589hEt3z2korpmsFqOJ_iNMkOUy3sYbSkCBKoEj_QHb2aJo1A.jpeg_xwglds.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.85) 0%, rgba(5,20,20,0.8) 100%)', pointerEvents:'none' }} />

        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background: `radial-gradient(ellipse, rgba(13,148,136,0.25) 0%, transparent 70%)`,
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="med-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:`0 0 8px ${THEME_COLOR}` }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              B2B — Lead Generation & Marketing Automation Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(1.8rem,5vw,3.2rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.15, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How Digital Advertisement Makeeting Network Helped <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(13,148,136,0.6)`,
            }}>MedDevices Build a Lead Generation and Marketing Automation System</span>
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            MedDevices LifeSciences — Transforming Technical Expertise into a Predictable Digital Growth Engine.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Google Ads', 'Landing Pages', 'Marketing Automation', 'Instagram Automation', 'Email Newsletters', 'B2B Lead Generation'].map((chip,i) => (
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
            { value:'40+',           sub:'Qualified Leads / Mo',       icon:'📞' },
            { value:'2 LP',           sub:'Dedicated Landing Pages',    icon:'🎯' },
            { value:'GTM',            sub:'Conversion Tracking',        icon:'📊' },
            { value:'3-Channel',      sub:'Marketing Automation',       icon:'⚙️' },
          ].map((s,i) => (
            <div key={i} className="med-stat-badge" style={{
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
          <Link href="/case-studies" className="med-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:700, fontSize:14, marginBottom:40 }}>
            <ArrowLeft size={16} /> Back to all case studies
          </Link>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Client Overview</span>
            <h2 style={h2()}>About MedDevices LifeSciences</h2>
            <p style={p({ marginBottom:20 })}>
              MedDevices LifeSciences is a regulatory consulting company helping businesses with medical device, cosmetic, food, and international compliance requirements. Their services support manufacturers, exporters, brand owners, and compliance teams seeking access to regulated markets such as the USA and the European Union.
            </p>
            <p style={p({ marginBottom:20 })}>
              The company already had strong technical expertise and industry knowledge. However, like many B2B compliance businesses, the challenge was turning that expertise into a predictable digital lead generation system.
            </p>
            <p style={p({ marginBottom:20 })}>
              To solve this, Digital Advertisement Makeeting Network partnered with MedDevices to design and implement a complete digital marketing ecosystem. The project included conversion-focused landing pages, Google Ads campaigns, lead capture systems, Instagram automation, and email marketing workflows that would consistently generate qualified inquiries.
            </p>
            <p style={p()}>
              The objective was not simply to increase website traffic, but to build a scalable marketing system that could attract, convert, and nurture high-intent prospects.
            </p>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>The Hurdle</span>
            <h2 style={h2()}>The Challenge</h2>
            <p style={p({ marginBottom:20 })}>
              MedDevices operates in a highly technical and trust-driven industry. Their ideal customers were not casually browsing online—they were actively searching for urgent regulatory services such as:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
              {[
                'US FDA Food Facility Registration',
                'US Agent Services',
                'Cosmetic Compliance for USA and EU',
                'MoCRA Compliance',
                'EU CPNP Notification',
                'Product Information File (PIF) Support',
                'FDA Registration and Documentation Guidance'
              ].map((item, i) => (
                <div key={i} style={{ padding:'12px 16px', background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)', fontSize:13, fontWeight:700, color:'var(--text-primary)' }}>
                  {item}
                </div>
              ))}
            </div>

            <p style={p({ marginBottom:20 })}>
              A standard corporate website was not enough to convert these visitors into qualified leads.
            </p>
            <p style={p({ marginBottom:20 })}>
              The business required a digital marketing system that could:
            </p>

            <ul style={{ paddingLeft:20, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'Clearly explain complex regulatory services.',
                'Capture qualified inquiries from search traffic.',
                'Generate leads through targeted Google Ads campaigns.',
                'Maintain a consistent social media presence.',
                'Automate newsletter communication with prospects.',
                'Keep the client in full control by approving social content before publication.'
              ].map((item, i) => (
                <li key={i} style={p({ fontSize:13 })}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Our Objective</span>
            <h2 style={h2()}>Our Objective</h2>
            <p style={p({ marginBottom:20 })}>
              Our objective was to build a complete lead generation and marketing automation system that would help MedDevices consistently attract qualified prospects searching for regulatory compliance services.
            </p>
            <p style={p({ marginBottom:24 })}>
              Rather than focusing only on increasing traffic, we designed a strategy around three measurable outcomes:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16 }}>
              {[
                { icon:'🎯', title:'Dedicated Landing Pages', desc:'Build dedicated landing pages for higher conversion rates.' },
                { icon:'📞', title:'Qualified Google Ads Leads', desc:'Generate qualified leads through Google Ads.' },
                { icon:'⚙️', title:'Marketing Automation', desc:'Automate marketing activities while maintaining brand quality and approval workflows.' }
              ].map((o,i) => (
                <div key={i} style={{ padding:20, background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', textAlign:'center' }}>
                  <div style={{ fontSize:32, marginBottom:10 }}>{o.icon}</div>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{o.title}</h4>
                  <p style={p({ fontSize:13 })}>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Strategic Plan</span>
            <h2 style={h2()}>Strategy</h2>
            <p style={p({ marginBottom:20 })}>
              We began by identifying the services with the strongest commercial intent. Instead of directing paid traffic to a general homepage, we developed dedicated landing pages for each high-value service.
            </p>
            <p style={p({ marginBottom:24 })}>
              The two primary landing pages included:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
              <div className="med-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>Landing Page 1</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>Cosmetics Compliance</h4>
                <p style={p({ fontSize:13 })}>
                  Dedicated landing page designed to attract businesses needing cosmetic compliance for USA and EU markets, with clear service breakdowns and consultation CTAs.
                </p>
              </div>

              <div className="med-phase-wrap" style={{ position:'relative', padding:'24px', background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', overflow:'hidden' }}>
                <span style={{ fontSize:12, fontWeight:800, color:THEME_COLOR, textTransform:'uppercase' }}>Landing Page 2</span>
                <h4 style={{ fontSize:16, fontWeight:800, margin:'8px 0 12px' }}>US FDA Food Registration</h4>
                <p style={p({ fontSize:13 })}>
                  Focused landing page targeting food exporters and manufacturers requiring FDA registration, designed to convert high-intent search traffic into qualified inquiries.
                </p>
              </div>
            </div>

            <p style={p({ marginTop:20 })}>
              Each page was designed to match a visitor's search intent, improving both user experience and conversion rates.
            </p>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Conversion Infrastructure</span>
            <h2 style={h2()}>Landing Page Development</h2>
            <p style={p({ marginBottom:20 })}>
              We designed and built dedicated landing pages that translated complex regulatory services into clear, actionable offers. Each page was structured to address the specific needs of compliance-seeking businesses.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Intent-Matched Design', desc: 'Each landing page matched the specific search intent of the visitor for higher relevance.' },
                { title: 'Clear Service Breakdown', desc: 'Complex compliance services were broken down into easy-to-understand offerings.' },
                { title: 'Consultation CTAs', desc: 'Strong calls-to-action encouraging visitors to book consultations directly.' },
                { title: 'Trust-Building Content', desc: 'Professional presentation with regulatory expertise highlighted throughout.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Paid Advertising</span>
            <h2 style={h2()}>Google Ads Campaign Execution</h2>
            <p style={p({ marginBottom:20 })}>
              We launched targeted Google Ads campaigns focused on high-intent regulatory keywords. Each campaign was structured around specific service lines to ensure relevance and maximize conversion potential.
            </p>
            <p style={p({ marginBottom:20 })}>
              Campaigns were continuously optimized based on search term performance, conversion data, and lead quality metrics.
            </p>

            <ul style={{ paddingLeft:20, margin:0, display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'Targeted high-intent regulatory compliance keywords',
                'Structured campaigns around specific service lines',
                'Continuous optimization based on conversion performance',
                'Negative keyword implementation to filter irrelevant traffic',
                'Ad copy tailored to compliance-seeking businesses'
              ].map((item, i) => (
                <li key={i} style={p({ fontSize:13 })}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Current Performance</span>
            <h2 style={h2()}>Current Lead Generation Results</h2>
            <p style={p({ marginBottom:20 })}>
              The campaign currently delivers approximately 40 qualified leads per month through a combination of Google Ads traffic and organic search visibility.
            </p>
            <p style={p({ marginBottom:20 })}>
              Each lead represents a business actively seeking regulatory compliance services, making them high-value prospects for MedDevices.
            </p>
            <p style={p()}>
              The dedicated landing pages continue to convert at a consistent rate, providing MedDevices with a predictable and scalable lead generation channel.
            </p>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Social Media Automation</span>
            <h2 style={h2()}>Instagram Automation</h2>
            <p style={p({ marginBottom:20 })}>
              We set up an Instagram automation workflow that maintains a consistent posting schedule while keeping the client in full control.
            </p>
            <p style={p({ marginBottom:20 })}>
              Content is created and queued in advance. Before any post goes live, the client reviews and approves it, ensuring every piece of content meets their brand standards.
            </p>
            <p style={p()}>
              This approach eliminated the burden of daily social media management while ensuring a steady stream of compliant, on-brand content.
            </p>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Email Marketing</span>
            <h2 style={h2()}>Newsletter Automation</h2>
            <p style={p({ marginBottom:20 })}>
              We implemented a newsletter email automation system that nurtures prospects over time. Subscribers receive regular updates about regulatory changes, compliance tips, and service offerings.
            </p>
            <p style={p({ marginBottom:20 })}>
              The automation ensures consistent communication without requiring manual effort from the MedDevices team.
            </p>
            <p style={p()}>
              This helps keep the brand top-of-mind for prospects who may not be ready to convert immediately, nurturing them until their compliance needs arise.
            </p>
          </div>

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Complete Ecosystem</span>
            <h2 style={h2()}>Complete Marketing System Built</h2>
            <p style={p({ marginBottom:20 })}>
              The entire ecosystem works together as a cohesive system:
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'🎯', title:'Landing Pages', desc:'Dedicated pages for Cosmetics Compliance and US FDA Food Registration converting search traffic into inquiries.' },
                { icon:'📊', title:'Google Ads', desc:'Targeted campaigns driving high-intent traffic to dedicated landing pages with continuous optimization.' },
                { icon:'📸', title:'Instagram Automation', desc:'Approval-based content scheduling maintaining consistent social presence without daily management.' },
                { icon:'📧', title:'Email Automation', desc:'Automated newsletter workflows nurturing prospects with regulatory updates and compliance tips.' }
              ].map((item,i) => (
                <div key={i} className="med-impact-card" style={{
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

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Proven Success</span>
            <h2 style={h2()}>Key Results</h2>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'📞', title:'40+ Qualified Leads/Month', desc:'Consistent stream of qualified inquiries from businesses seeking regulatory compliance services.' },
                { icon:'🎯', title:'2 High-Converting Landing Pages', desc:'Dedicated pages for Cosmetics Compliance and US FDA Food Registration driving conversions.' },
                { icon:'⚙️', title:'Full Marketing Automation', desc:'Instagram and email automation systems running with client approval workflows.' },
                { icon:'📈', title:'Scalable Growth System', desc:'A structured, predictable, and sustainable marketing process delivering consistent results.' }
              ].map((item,i) => (
                <div key={i} className="med-impact-card" style={{
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

          <div className="med-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Business Impact</span>
            <h2 style={h2()}>Transformation</h2>
            <p style={p({ marginBottom:20 })}>
              MedDevices needed a digital marketing system capable of supporting a highly technical, compliance-focused business.
            </p>
            <p style={p({ marginBottom:20 })}>
              By creating dedicated landing pages, managing targeted Google Ads campaigns, implementing an approval-based Instagram automation workflow, and setting up newsletter email automation, we built a scalable marketing system that continues to generate qualified inquiries.
            </p>
            <p style={p({ marginBottom:20 })}>
              Today, the campaign delivers approximately 40 qualified leads per month, while providing MedDevices with a more structured, predictable, and sustainable marketing process.
            </p>
            <p style={p()}>
              This project demonstrates how Digital Advertisement Makeeting Network helps specialized B2B businesses transform their expertise into a reliable digital growth engine through strategy, automation, and performance-driven marketing.
            </p>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default MedDevicesCaseStudy;
