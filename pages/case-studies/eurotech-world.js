import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const THEME_COLOR    = '#2563eb';
const THEME_COLOR_DK = '#1d4ed8';

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

function EurotechWorldCaseStudy() {
  return (
    <div style={{ paddingTop: 96 }}>
      <Head>
        <title>Eurotech World (India, Canada) - Lead Generation Case Study | Digimarketing Art</title>
        <meta name="description" content="Read how Digimarketing Art helped Eurotech World Assessment & Certification Services generate 100+ qualified inquiries through Google Ads and dedicated landing pages." />
        <meta name="keywords" content="certification marketing, training institute marketing, Google Ads for certification, lead generation, B2B digital marketing, eurotech world" />
        <link rel="canonical" href="https://www.digimarketingart.com/case-studies/eurotech-world" />
        <meta property="og:title" content="Eurotech World - Lead Generation Case Study | Digimarketing Art" />
        <meta property="og:description" content="Read how Digimarketing Art helped Eurotech World generate 100+ qualified inquiries through Google Ads." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.digimarketingart.com/case-studies/eurotech-world" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eurotech World - Lead Generation Case Study | Digimarketing Art" />
        <meta name="twitter:description" content="Read how Digimarketing Art helped Eurotech World generate 100+ qualified inquiries." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Eurotech World - Lead Generation Case Study",
              "description": "Read how Digimarketing Art helped Eurotech World generate 100+ qualified inquiries.",
              "author": { "@type": "Organization", "name": "Digimarketing Art" },
              "publisher": {
                "@type": "Organization",
                "name": "Digimarketing Art",
                "logo": { "@type": "ImageObject", "url": "https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" }
              },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.digimarketingart.com/case-studies/eurotech-world" }
            })
          }}
        />
      </Head>

      <style>{`
        @keyframes ew-rise { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ew-count { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .ew-rise { animation: ew-rise 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ew-hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .ew-hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important; }
        .ew-impact-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s; }
        .ew-impact-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(37,99,235,0.15) !important; border-color: rgba(37,99,235,0.35) !important; }
        .ew-stat-badge { animation: ew-count 0.7s ease both; }
        .ew-back-link { transition: color 0.18s, gap 0.18s; display:inline-flex; align-items:center; gap:7px; }
        .ew-back-link:hover { color: ${THEME_COLOR} !important; gap:12px !important; }
      `}</style>

      <section style={{
        position: 'relative', overflow: 'hidden', padding: '100px 24px 90px',
        textAlign: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(0,0,0,0.85) 0%, rgba(10,15,35,0.8) 100%)', pointerEvents:'none' }} />

        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:520, height:300, borderRadius:'50%',
          background: `radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)`,
          pointerEvents:'none', filter:'blur(2px)',
        }} />

        <div className="ew-rise" style={{ position:'relative', zIndex:1, maxWidth:920, margin:'0 auto' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)',
            borderRadius:100, padding:'6px 16px', backdropFilter:'blur(10px)',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:THEME_COLOR, display:'inline-block', boxShadow:`0 0 8px ${THEME_COLOR}` }} />
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Certification & Training — Lead Generation Case Study
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(1.5rem,5vw,3rem)', fontWeight:900,
            fontFamily:'var(--font-display)', color:'#fff',
            lineHeight:1.15, marginBottom:20, letterSpacing:'-0.02em',
          }}>
            How Digital Advertisement Makeeting Network Helped <span style={{
              color:THEME_COLOR, position:'relative', display:'inline-block',
              textShadow:`0 0 40px rgba(37,99,235,0.6)`,
            }}>Eurotech World (India, Canada) Generate Over 100 Qualified Inquiries</span> Through Digital Marketing
          </h1>

          <p style={{ fontSize:16, color:'rgba(255,255,255,0.72)', maxWidth:760, margin:'0 auto 36px', lineHeight:1.7 }}>
            Eurotech World Assessment & Certification Services Pvt. Ltd. — Transforming Certification and Training Marketing into a Scalable Lead Generation System.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Google Ads', 'Landing Pages', 'Meta Advertising', 'AI Video Content', 'Lead Generation', 'Brand Awareness'].map((chip,i) => (
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
            { value:'100+',           sub:'Qualified Inquiries',        icon:'📞' },
            { value:'Multi-Service',  sub:'Dedicated Landing Pages',    icon:'🎯' },
            { value:'Google + Meta',  sub:'Dual-Platform Campaigns',    icon:'📊' },
            { value:'AI Videos',      sub:'Content Strategy',           icon:'🎬' },
          ].map((s,i) => (
            <div key={i} className="ew-stat-badge" style={{
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
          <Link href="/case-studies" className="ew-back-link" style={{ color:'var(--text-secondary)', textDecoration:'none', fontWeight:700, fontSize:14, marginBottom:40 }}>
            <ArrowLeft size={16} /> Back to all case studies
          </Link>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
              <div>
                <span style={label()}>Client Overview</span>
                <h2 style={h2({ marginBottom:0 })}>About Eurotech World (India, Canada)</h2>
              </div>
              <img
                src="https://res.cloudinary.com/didtfhfme/image/upload/v1779180773/eurotech_pdhehu.webp"
                alt="EuroTech World"
                style={{ width:85, height:85, borderRadius:12, objectFit:'contain', flexShrink:0 }}
              />
            </div>
            <p style={p({ marginBottom:20 })}>
              Eurotech World Assessment & Certification Services Pvt. Ltd. is a leading provider of certification, inspection, training, and assessment services. The company offers internationally recognized certification solutions alongside industry-focused training programs that help professionals and organizations improve their skills, compliance, and career opportunities.
            </p>
            <p style={p({ marginBottom:20 })}>
              Their services include certification programs, CE Certification consulting, welding training, robotic welding training, plumbing training, and various technical and industrial skill development courses.
            </p>
            <p style={p({ marginBottom:16 })}><strong>Website:</strong> <a href="https://www.eurotechworld.net/" target="_blank" rel="noopener noreferrer" style={{ color: THEME_COLOR }}>https://www.eurotechworld.net/</a></p>
            <p style={p({ marginBottom:20 })}>
              To strengthen their online presence and generate a consistent flow of qualified leads, Digital Advertisement Makeeting Network partnered with Eurotech World to build a performance-driven digital marketing system focused on lead generation and brand awareness.
            </p>
            <p style={p()}>
              The objective was to increase qualified inquiries while creating dedicated online experiences for each service and training program.
            </p>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>The Hurdle</span>
            <h2 style={h2()}>The Challenge</h2>
            <p style={p({ marginBottom:20 })}>
              Eurotech World offered a wide range of certification and training services, each targeting different audiences. Professionals searching for technical training had different needs from businesses looking for certification services.
            </p>
            <p style={p({ marginBottom:20 })}>
              Sending all visitors to a single website made it difficult to communicate the value of each service clearly and affected conversion rates.
            </p>
            <p style={p({ marginBottom:24 })}>
              The company needed a marketing system that could:
            </p>
            <ul style={{ paddingLeft:20, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'Generate qualified inquiries through Google Search.',
                'Create dedicated landing pages for different services.',
                'Improve conversion rates with focused messaging.',
                'Increase brand awareness across social media.',
                'Showcase training programs through engaging visual content.',
                'Reach both individual learners and business clients.'
              ].map((item, i) => (
                <li key={i} style={p({ fontSize:13 })}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Our Objective</span>
            <h2 style={h2()}>Our Objective</h2>
            <p style={p({ marginBottom:24 })}>
              Our objective was to create a complete lead generation strategy that would attract high-intent prospects searching for certification and industrial training services.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16 }}>
              {[
                { icon:'🎯', title:'Dedicated Landing Pages', desc:'Build dedicated landing pages for individual services to improve conversion rates.' },
                { icon:'📞', title:'Google Ads Campaigns', desc:'Generate qualified leads through targeted Google Ads campaigns.' },
                { icon:'📱', title:'Meta Brand Awareness', desc:'Increase brand visibility through Meta advertising using engaging AI-generated video content.' }
              ].map((o,i) => (
                <div key={i} style={{ padding:20, background:'var(--bg-primary)', borderRadius:16, border:'1px solid var(--border-color)', textAlign:'center' }}>
                  <div style={{ fontSize:32, marginBottom:10 }}>{o.icon}</div>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'var(--text-primary)', marginBottom:6 }}>{o.title}</h4>
                  <p style={p({ fontSize:13 })}>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Strategic Plan</span>
            <h2 style={h2()}>Strategy</h2>
            <p style={p({ marginBottom:20 })}>
              We began by identifying the services with the highest commercial intent and search demand. Rather than directing users to a general homepage, we developed dedicated landing pages that addressed the specific needs of each audience.
            </p>
            <p style={p({ marginBottom:24 })}>
              Landing pages were created for services including:
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10, marginBottom:24 }}>
              {[
                'CE Certification',
                'Welding Training Course',
                'Robotic Welding Training',
                'Plumbing Training',
                'Certification Services',
                'Professional Training Programs'
              ].map((item, i) => (
                <div key={i} style={{ padding:'12px 16px', background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)', fontSize:13, fontWeight:700, color:'var(--text-primary)', textAlign:'center' }}>
                  {item}
                </div>
              ))}
            </div>
            <p style={p()}>
              Each landing page was designed to answer common customer questions, explain course or certification benefits, highlight key features, and encourage visitors to submit an inquiry.
            </p>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Conversion Infrastructure</span>
            <h2 style={h2()}>Landing Page Development</h2>
            <p style={p({ marginBottom:20 })}>
              Every landing page followed a conversion-focused structure designed to maximize inquiry generation.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Clear Service Descriptions', desc: 'Each page clearly explained the service or training program offered.' },
                { title: 'Strong CTAs', desc: 'Inquiry forms and call-to-action sections placed strategically throughout.' },
                { title: 'Mobile-Friendly Design', desc: 'Optimized for mobile devices with fast loading performance.' },
                { title: 'SEO-Friendly Content', desc: 'Structured with search-engine-friendly content to improve organic visibility.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Paid Advertising</span>
            <h2 style={h2()}>Google Ads Campaign Execution</h2>
            <p style={p({ marginBottom:20 })}>
              After completing the landing pages, we launched Google Ads campaigns targeting users actively searching for certification and training services.
            </p>
            <p style={p({ marginBottom:24 })}>
              Campaigns focused on high-intent keywords related to CE Certification, Welding Training, Robotic Welding Course, Plumbing Training, Industrial Certification, Professional Skill Development, and Technical Training Programs.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'🎯', title:'Search Campaigns', desc:'Service-category-based search campaigns with intent-focused keyword targeting.' },
                { icon:'📄', title:'Landing Page Mapping', desc:'Each ad group mapped to a dedicated landing page for maximum relevance.' },
                { icon:'✍️', title:'Ad Copy Optimization', desc:'Conversion-focused ad copy with continuous A/B testing and refinement.' },
                { icon:'⚙️', title:'Performance Optimization', desc:'Negative keyword management and continuous optimization based on conversion data.' }
              ].map((item,i) => (
                <div key={i} className="ew-impact-card" style={{
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

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Proven Results</span>
            <h2 style={h2()}>Lead Generation Results</h2>
            <p style={p({ marginBottom:20 })}>
              The Google Ads campaigns produced excellent results. The campaigns generated more than 100 qualified inquiries, with leads coming directly from users searching for certification services and professional training programs.
            </p>
            <p style={p()}>
              These inquiries created a consistent pipeline of prospective students, professionals, and businesses interested in Eurotech World's services.
            </p>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Social Media</span>
            <h2 style={h2()}>Meta Advertising Strategy</h2>
            <p style={p({ marginBottom:20 })}>
              Alongside Google Ads, we launched Meta advertising campaigns across Facebook and Instagram to improve brand visibility and audience engagement.
            </p>
            <p style={p({ marginBottom:20 })}>
              Rather than focusing only on direct lead generation, these campaigns were designed to increase awareness and strengthen Eurotech World's presence among professionals, students, and industrial organizations.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Facebook Awareness', desc: 'Targeted campaigns to reach professionals and industrial organizations.' },
                { title: 'Instagram Awareness', desc: 'Visual campaigns showcasing training programs and facilities.' },
                { title: 'AI-Generated Videos', desc: 'Professional promotional content reducing production time and costs.' },
                { title: 'Audience Targeting', desc: 'Interest and industry-based targeting for maximum relevance.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Creative Strategy</span>
            <h2 style={h2()}>AI-Generated Video Content</h2>
            <p style={p({ marginBottom:20 })}>
              To support the awareness campaigns, we created AI-generated promotional videos showcasing Eurotech World's certification services and training programs.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
              {[
                { title: 'Course Benefits', desc: 'Highlighting the value and outcomes of each training program.' },
                { title: 'Career Opportunities', desc: 'Showcasing the career paths enabled by certification.' },
                { title: 'Industry Demand', desc: 'Demonstrating market relevance and industry recognition.' },
                { title: 'Training Facilities', desc: 'Visual tours of practical training environments and equipment.' }
              ].map((el, i) => (
                <div key={i} style={{ padding:16, background:'var(--bg-primary)', borderRadius:12, border:'1px solid var(--border-color)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:THEME_COLOR, marginBottom:10 }} />
                  <h4 style={{ fontSize:13, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{el.title}</h4>
                  <p style={p({ fontSize:12 })}>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Complete Ecosystem</span>
            <h2 style={h2()}>Complete Digital Marketing System</h2>
            <p style={p({ marginBottom:20 })}>
              The final solution combined multiple digital marketing channels into one integrated system.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'🎯', title:'Landing Pages', desc:'Dedicated service landing pages for CE Certification, Welding Training, and more.' },
                { icon:'📊', title:'Google Ads', desc:'Search campaigns driving qualified traffic to dedicated landing pages.' },
                { icon:'📱', title:'Meta Campaigns', desc:'Facebook and Instagram awareness campaigns with AI-generated video content.' },
                { icon:'⚙️', title:'Ongoing Optimization', desc:'Performance tracking and continuous campaign optimization for sustained results.' }
              ].map((item,i) => (
                <div key={i} className="ew-impact-card" style={{
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

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Proven Success</span>
            <h2 style={h2()}>Key Results</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
              {[
                { icon:'📞', title:'100+ Qualified Inquiries', desc:'Generated through targeted Google Ads campaigns for certification and training services.' },
                { icon:'🎯', title:'6+ Dedicated Landing Pages', desc:'Built for CE Certification, Welding Training, Robotic Welding, Plumbing Training, and more.' },
                { icon:'📱', title:'Meta Brand Awareness', desc:'Facebook and Instagram campaigns with AI-generated promotional video content.' },
                { icon:'📈', title:'Scalable Marketing System', desc:'Integrated digital marketing system delivering sustainable lead generation and brand growth.' }
              ].map((item,i) => (
                <div key={i} className="ew-impact-card" style={{
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

          <div className="ew-hover-card" style={card({ marginBottom:24 })}>
            <span style={label()}>Business Impact</span>
            <h2 style={h2()}>Transformation</h2>
            <p style={p({ marginBottom:20 })}>
              Before implementing the strategy, Eurotech World required a more structured approach to attracting prospective students and certification clients online.
            </p>
            <p style={p({ marginBottom:20 })}>
              By combining dedicated landing pages with highly targeted Google Ads and Meta awareness campaigns, the company significantly improved its digital marketing performance.
            </p>
            <p style={p({ marginBottom:20 })}>
              The Google Ads campaigns generated a steady stream of qualified inquiries, while Facebook and Instagram campaigns strengthened brand awareness among the target audience. The addition of AI-generated video content helped maintain an active and professional social media presence without requiring large-scale video production.
            </p>
            <p style={p()}>
              Together, these initiatives created a sustainable marketing system that supports both lead generation and long-term brand growth.
            </p>
          </div>

          <div style={{
            borderRadius:24, padding:'52px 36px', textAlign:'center',
            background:`linear-gradient(135deg, #60a5fa 0%, ${THEME_COLOR} 50%, ${THEME_COLOR_DK} 100%)`,
            position:'relative', overflow:'hidden',
            boxShadow:'0 20px 60px rgba(37,99,235,0.3)',
          }}>
            <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:1 }}>
              <span style={label({ color:'rgba(255,255,255,0.6)', textAlign:'center', display:'block', marginBottom:10 })}>Conclusion</span>
              <h2 style={h2({ color:'#fff', fontSize:'clamp(1.4rem,4vw,2rem)', textAlign:'center', marginBottom:16 })}>Sustainable Digital Growth</h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.92)', lineHeight:1.75, maxWidth:660, margin:'0 auto 14px' }}>
                Eurotech World Assessment & Certification Services Pvt. Ltd. needed a digital marketing strategy that could effectively promote both its certification services and technical training programs.
              </p>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.75)', lineHeight:1.75, maxWidth:580, margin:'0 auto' }}>
                By building dedicated landing pages, managing Google Ads campaigns, launching Meta awareness campaigns, and producing AI-generated promotional videos, we created a scalable marketing system that delivers measurable business results. Today, the business has generated more than 100 qualified inquiries through Google Ads, while strengthening its online presence across Facebook and Instagram.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactForm accentColor={THEME_COLOR} showOffices={false} />

    </div>
  );
}

export default EurotechWorldCaseStudy;
