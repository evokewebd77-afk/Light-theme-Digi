import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import {
  Target, Search, BarChart3, Users, Eye, Heart, MessageCircle,
  Share2, Smartphone, TrendingUp, Link2, BarChart2, MapPin,
  Globe, Code, Settings, Palette, FileText, CheckCircle,
  Database, Radio, BookOpen, Monitor, ChevronRight, ArrowRight, Mail,
  MessageSquare, Building2
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const stats = null;

const services = [
  {
    title: 'Business Data Mining',
    desc: 'Data is the key to making informed business decisions.',
    icon: Database,
    items: ['Market Analysis: Extract valuable insights to understand industry trends and customer behavior.', 'Competitor Analysis: Gather and analyze competitor data to identify market opportunities.', 'Customer Segmentation: Use data-driven segmentation to tailor marketing strategies.', 'Trend Prediction: Leverage predictive analytics to anticipate future market movements.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779169746/AQPa31OqFJ1GU4UOHV3M_dKOJRFms2b3gHMBVMYYggwgywNMSaGF0TxD0eRUlXDPGlxuGjM_CekL6aeLldAxtn2TFqCJE3vTHuCiwoi9NQO104nLSSpLR4Q0dULRO4Mb5zHl2P3ZIYPkjNOvD86RodPfs6iujw.jpeg_ydxayu.jpg'
  },
  {
    title: 'Financial Data Mining',
    desc: 'Make smarter financial decisions with our advanced data mining techniques.',
    icon: BarChart3,
    items: ['Fraud Detection: Identify anomalies and prevent fraudulent transactions.', 'Risk Analysis: Assess financial risks and make data-driven investment decisions.', 'Stock Market Prediction: Use historical data to analyze stock trends.', 'Expense Optimization: Identify cost-saving opportunities based on spending patterns.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779170089/AQP11XSYecqK7wtcL-OH48kj91qgXUnk-Gzzo1EHwIJDu5uUVzuj8LVQiYcMr08Wle04JJZD9RnEOAn6C4vXPPKpyakvVwfeGcxDXchgo93whPZqHRIT7WxkYAWZpiDgCL3Fzxcp99O019ZmXeUaSqb_44ukQw.jpeg_cpnmja.jpg'
  },
  {
    title: 'Healthcare Data Mining',
    desc: 'Transform healthcare operations with data-driven insights.',
    icon: Globe,
    items: ['Patient Trend Analysis: Identify health patterns and improve patient care.', 'Medical Research Support: Extract relevant medical data for research.', 'Predictive Analytics: Forecast disease outbreaks and healthcare demands.', 'Healthcare Fraud Detection: Identify billing errors and fraudulent claims.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779170514/AQMSahbFcYMRR9kk1EB1p2wUFZ8Z9Sp_vrMan94oZ-hKX9JQs3wCNesGvLuo4qB8WuCm3K50GcqzcmhaVMsnSMZWc4-szbXPWaNrsMF6izr2HECqEndkwgXX0WRRQuQg0tblXrXjGLwgDEpZFYoZzhttCgAFHw.jpeg_yev9cc.jpg'
  },
  {
    title: 'Retail & E-Commerce Data Mining',
    desc: 'Boost your retail and e-commerce performance with actionable insights.',
    icon: Smartphone,
    items: ['Consumer Purchase Analysis: Understand buying habits and optimize marketing strategies.', 'Inventory Optimization: Predict demand and streamline inventory management.', 'Pricing Strategy Optimization: Adjust pricing based on market trends.', 'Customer Retention Analysis: Identify patterns to improve customer loyalty.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779170688/AQNR6i5hejNQe67fO5bIsx9RhkbjDTV11iJ_NymzfZFq_92MOi0WnGoe3oStDH8-OwxRvYE_BHid7DQjt9tK3MGUJALI4f0SN6kJaqBa-qWVUPjAjbj1gKFwK_F6rr6tCVuqGDsNsEWT4bBxAWZBNxvOhDvpuQ.jpeg_hehkpj.jpg'
  },
  {
    title: 'LinkedIn & Email Data Mining',
    desc: 'Extract valuable insights from LinkedIn and email data.',
    icon: Users,
    items: ['LinkedIn Data Mining: Extract targeted business leads and identify decision-makers.', 'Email Data Mining: Segmentation of potential customers based on engagement.', 'Competitor Analysis: Analyze competitor networks and industry connections.', 'Lead Generation: Automated data extraction for B2B B2B lead generation.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779171003/AQMtI_6e4oGPDvOWYOtmNtQVVVBIQHGMHNxyFygP7prfbiIjZowTxDDg75BUMZYiQ3Duigf-EyHyEqF9lBjwbJLMF0hTmOwn4MNXgVZZAkO-XlSyGpmK95FNHh79bffPhYeVyzK83JtGDEXFBfhbA_CDmJGHlw.jpeg_llzu1f.jpg'
  },
];

const timeline = [
  {
    week: 'Phase 1',
    title: 'Data Access & Scope Define',
    items: ['Clarify business objectives', 'Set parameters for target data sources', 'Complete security agreements'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 2',
    title: 'Extraction & Parsing',
    items: ['Run automated scrapers & extraction scripts', 'Safe data parsing', 'Format raw data into structured database schema'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 3',
    title: 'Analytics & Modeling',
    items: ['Apply AI predictive modeling', 'Find patterns & trends', 'Complete risk and fraud filters'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 4+',
    title: 'Insights & Reporting',
    items: ['Deliver parsed lead database', 'Actionable visual report', 'Ongoing database updates'],
    extraTitle: null,
    extraItems: []
  },
];

const whyChoose = { title: 'Data Mining', items: ['Accurate & Reliable Insights: Advanced tools for precise metrics.', 'Custom Solutions: Tailored strategies for your specific goals.', 'Data Security: Encrypted protocols to protect database assets.', 'Expert Analysts: Lead B2B data extraction engineers.'] };

const DataMining = () => {
  const accentColor = '#3fcda1';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Data Mining Services - Digimarketing Art</title>
        <meta name="description" content="Extract actionable insights with advanced data mining solutions from Digimarketing Art. B2B data extraction, lead lists & market intelligence." />
        <meta name="keywords" content="data mining services, B2B data extraction, lead lists, market intelligence, data analysis, business data mining" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '100px 24px', background: `url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782276708/AQN6VS9BnhYvZKtoI_86ciafdnjeYgWMhE6fxWYiYfXGZ29pgIqN5NOt7AgbYR94-jN5scPvOTLAdNxQ8_3k9WZpS_Hv4F4dSiydknzD-BRFHxrsTCuLd9vhKWKVgmlR7i8O0Fl_j7A-Zx3wmR8XePrb7NSkxg.jpeg_k32hql.jpg') center/cover no-repeat`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={stats && stats.length > 0 ? { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' } : { maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={stats && stats.length > 0 ? {} : { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>DATA MINING | AI-POWERED INSIGHTS</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              UNLOCK HIDDEN <span style={{ color: accentColor }}>VALUE!</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Transform Your Data into Actionable Insights with AI-Driven Data Mining Solutions. We help you uncover patterns, predict trends, and make smarter decisions.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: stats && stats.length > 0 ? 'flex-start' : 'center' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: accentColor, color: '#ffffff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}>
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(6px)', transition: 'all 0.2s' }}>
                Book a Call
              </Link>
            </div>
          </div>
          {stats && stats.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {stats.map(s => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '24px 20px', textAlign: 'center' }}>
                    <Icon size={28} color={accentColor} style={{ marginBottom: 8 }} />
                    <div style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-display)' }}>{s.val}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section id="overview" style={{ padding: '100px 24px', background: `url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg') center/cover no-repeat`, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>DATA MINING | AI-POWERED INSIGHTS Services</span></span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1.1 }} >
              Services We <span style={{ color: accentColor }}>Provide</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {services.map(p => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="reveal" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16, transition: 'all 0.3s', cursor: 'pointer' }}
                  onClick={() => {
                    const id = p.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    const element = document.getElementById(id);
                    if (element) {
                      const offset = 100; // height of fixed header
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = accentColor; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(255,255,255,0.05)`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid var(--border-color)`, flexShrink: 0 }}>
                    <Icon size={26} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'var(--font-display)', margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, flex: 1 }}>{p.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: accentColor, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {services.map((platform, idx) => {
        const Icon = platform.icon;
        return (
          <section key={platform.title} id={platform.title.toLowerCase().replace(/[^a-z0-9]/g, '-')} style={{ padding: '80px 24px', borderTop: '1px solid var(--border-color)', ...(platform.image && (idx === 0 || idx === 2 || idx === 4) ? { background: `url(${platform.image}) center/cover fixed`, position: 'relative' } : { background: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)', position: 'static' }) }}>
            {platform.image && (idx === 0 || idx === 2 || idx === 4) && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.8)', pointerEvents: 'none' }} />}
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ order: idx % 2 === 0 ? 1 : 2, ...((idx === 0 || idx === 2 || idx === 4) ? { background: 'rgba(255,255,255,0.9)', padding: '40px 36px', borderRadius: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' } : {}) }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `rgba(255,255,255,0.05)`, border: `1px solid var(--border-color)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={28} color={accentColor} />
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, marginBottom: 16, fontFamily: 'var(--font-display)' }}>{platform.title}</h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{platform.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {platform.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle size={18} color={accentColor} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, padding: '14px 32px', background: accentColor, color: '#ffffff', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s' }}>
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>
              {platform.image ? (
                <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', width: '100%', height: '100%', minHeight: 380, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
                  <img loading="lazy" src={platform.image} alt={platform.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                </div>
              ) : (
                <div style={{ order: idx % 2 === 0 ? 2 : 1, background: 'var(--bg-primary)', border: `1px solid var(--border-color)`, borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', textAlign: 'center' }}>
                  <Icon size={48} color={accentColor} />
                  <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-display)', margin: 0 }}>{platform.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{platform.desc}</p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: accentColor, fontWeight: 700, fontSize: 14, textDecoration: 'none', borderBottom: `2px solid ${accentColor}`, paddingBottom: 2 }}>
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Why Choose Section (If available) */}
      {whyChoose && (
        <section style={{ padding: '100px 24px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 20, fontFamily: 'var(--font-display)' }} >Why Choose Our {whyChoose.title}?</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>We deliver high-performing campaigns and scale your brand with proven strategies.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {whyChoose.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle size={18} color={accentColor} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--bg-primary)', border: `2px solid ${accentColor}`, borderRadius: 20, padding: '36px 32px' }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24, fontFamily: 'var(--font-display)' }}>Our Performance Guarantee</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>We are dedicated to delivering high conversion rates, lower costs, and maximized revenue for your brand.</p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: accentColor, color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  Start Now &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline Section */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>DATA MINING | AI-POWERED INSIGHTS Process</span></span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1.1 }} >
              Our <span style={{ color: accentColor }}>Process & Timeline</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {timeline.map((phase, idx) => (
              <div key={phase.week} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -12, left: 24, background: accentColor, color: '#ffffff', fontSize: 12, fontWeight: 800, padding: '4px 16px', borderRadius: 20, letterSpacing: '0.05em' }}>{phase.week}</div>
                <div style={{ marginTop: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, fontFamily: 'var(--font-display)' }}>{phase.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {phase.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  {phase.extraTitle && (
                    <>
                      <div style={{ height: 1, background: 'var(--border-color)', margin: '16px 0' }} />
                      <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12, fontFamily: 'var(--font-display)', color: accentColor }}>{phase.extraTitle}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {phase.extraItems.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #0d3126 50%, #222222 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%, rgba(215,61,86,0.05), transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: 16, fontFamily: 'var(--font-display)' }}>Ready to scale your business?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, fontSize: 17, lineHeight: 1.7 }}>
            Get a customized strategy tailored to your business goals. Our experts are ready to help you optimize ROI.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: accentColor, color: '#ffffff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm accentColor="#3fcda1" showOffices={false} />
    </div>
  );
};

export default DataMining;
