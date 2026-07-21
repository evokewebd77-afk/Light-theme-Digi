import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import {
  Target, Search, BarChart3, Users, Eye, Heart, MessageCircle,
  Share2, Smartphone, Link2, BarChart2, MapPin,
  Globe, Code, Settings, Palette, FileText, CheckCircle,
  Database, Radio, BookOpen, Monitor, ChevronRight, ArrowRight, Mail,
  MessageSquare, Building2
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const stats = null;

const services = [
  {
    title: 'Keyword Research',
    desc: 'Identifying the right keywords is the foundation of any successful SEO strategy.',
    icon: Search,
    items: ['Competitive Analysis: Analyze your competitors to identify high-performing keywords.', 'Keyword Selection: Choose the most relevant and high-traffic keywords for your business.', 'Long-Tail Keywords: Target specific phrases that attract highly qualified traffic.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779164802/AQP0RxlosQCufKCRVlEeGWDqqTIdNzi_3lyPPmQrQ_A7C4i-TQ2w_qQBVsuvafB9i7y8OcpM7QARwdByLVNpf9VTmQK0IYy2JpjMENN4tdnA-D5_xaP_-DnG6cCmFc8HXlUkP38_OxfTPvDYsRHkFeHWu0L4Ow.jpeg_vclyta.jpg'
  },
  {
    title: 'On-Page Optimization',
    desc: 'On-page optimization ensures your website content and structure are search-engine friendly.',
    icon: Globe,
    items: ['Meta Tags Optimization: Optimize title tags, meta descriptions, and headers to improve click-through rates.', 'Content Optimization: Ensure your content is high-quality, keyword-rich, and relevant to user intent.', 'Internal Linking: Improve site navigation and link equity distribution.', 'URL Structure: Create SEO-friendly URLs that are easy to read.', 'Image Optimization: Optimize images with descriptive file names and alt text.', 'User Experience (UX) Enhancements: Improve site usability and navigation.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779164896/AQOC6UnwoDU2Zq9H8LUGllOWUiPR_lv_5VXZC-XMkNjWnbRo1E8MlQqMf39FnxI2jmw_OPRCKnmraKbF07ktJhLS9_WSeJAvttvlbHY8QdHmdg6H4YM1-sTIMKNI7Jgj1csgQvyRtgBl0Q20OCvp3VKWIK9xiw.jpeg_lteddo.jpg'
  },
  {
    title: 'Technical SEO',
    desc: 'Technical SEO focuses on improving the backend aspects of your website to enhance its performance.',
    icon: Settings,
    items: ['Site Speed Optimization: Improve page load times for better user experience.', 'Mobile Optimization: Ensure your website is mobile-friendly for mobile-first indexing.', 'XML Sitemaps: Create and submit XML sitemaps to help search engines crawl your site.', 'Schema Markup: Implement structured data to enhance rich snippets.', 'HTTPS Implementation: Ensure your website is secure.', 'Crawl Error Resolution: Identify and fix crawl errors.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779165127/AQOJ2GE17bJYVHfssUJwTOpsE4vV_v_xvEf9jXYTBVuouRaTLEAGMXatmJZzct2QjAc6-adQIjE_1VcJB7dvEnjiX2mAWS8XleTm34b8LyT2f1EGOifV-gDcmft66Wk6gxkSCutXLyjAe-uYucKJJXYyCQyMsg.jpeg_cwlkts.jpg'
  },
  {
    title: 'Off-Page Optimization',
    desc: 'Off-page optimization involves activities outside your website to improve its authority and relevance.',
    icon: Link2,
    items: ['Link Building: Acquire high-quality backlinks from reputable websites.', 'Social Media Integration: Promote your content on social media platforms.', 'Guest Posting: Publish articles on high-authority sites to build backlinks.', 'Online Reputation Management: Monitor and manage your online reputation.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779165166/AQN5-SIQ2NAP6KZapvWjE0_G45-R29RdHktyftVJuIN57UqDU1J7RA5Je_Fw6qqEkK8LUXmSsq679tqy3Ew9TdZF8QmAzlKsFmIRE6zPzGyuJrLvQpCmdCtcE8AnBAESrsxpTLWBmPZN3Co5tPFwV3qa02W-hw.jpeg_uqjxw3.jpg'
  },
  {
    title: 'Local SEO',
    desc: 'Local SEO helps businesses attract customers from their specific geographic area.',
    icon: MapPin,
    items: ['Google My Business Optimization: Optimize your GMB profile with accurate information.', 'Local Citations: Ensure your business is listed accurately in local directories.', 'Review Management: Encourage and manage customer reviews.', 'Local Keyword Optimization: Target keywords relevant to your local audience.', 'Local Content Creation: Develop content tailored to local interests.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779165239/AQOrFcOLyB8r1VWKnofNhWBdFqMnMvWAR9FflgsEHC5glWOeQBHNpE-PnduM0NFIyE5S00WgXnqY44picVQOtPhZTzM32BeAbiUBDiyE60dIOfOPvXj94bwweqNc3Y3SgNk_HdEgOcxTguegWhJaXSRly9tLqQ.jpeg_o0yjbm.jpg'
  },
  {
    title: 'SEO Analytics and Reporting',
    desc: 'Measuring the success of your SEO efforts is crucial for continuous improvement.',
    icon: BarChart2,
    items: ['Performance Tracking: Monitor keyword rankings, organic traffic, and conversions.', 'Monthly Reports: Provide detailed reports on SEO performance.', 'Data-Driven Insights: Analyze data to identify opportunities and challenges.', 'Goal Setting: Set and track SEO goals to ensure continuous growth.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779165329/AQOgwEjyRKLcjJCnp465szS3TbEoIEtwBBcGgciAUGHkN6EhRn7jq7tsXhQ5aG81lqTWHh_sSc9k6qumgTjAaOzeG3LaWHZ3H-G12DEmd-FftLza-zTsilA7rEgllKFo793zTW1YBqXZeYR0sCPSIa0L4SXuWw.jpeg_hiqmgk.jpg'
  },
];

const timeline = [
  {
    week: 'Phase 1',
    title: 'Technical Audit & Competitor Analysis',
    items: ['Full Technical Crawl', 'Speed & UX Audit', 'Backlink Profile Audit'],
    extraTitle: 'Keyword Research & Strategy',
    extraItems: ['Keyword Mapping', 'Target list definition', 'Competitor keyword analysis']
  },
  {
    week: 'Phase 2',
    title: 'On-Page Optimization',
    items: ['Meta tags & headers optimization', 'Content enhancements', 'Internal linking audit', 'XML & robots configuration'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 3',
    title: 'Off-Page & Authority Building',
    items: ['Backlink acquisition', 'Guest posting campaigns', 'Local citations building', 'Brand mentions management'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 4+',
    title: 'Monitoring & Optimization',
    items: ['Keyword rankings audit', 'Organic traffic analysis', 'Conversion path tracking', 'Monthly ROI reporting'],
    extraTitle: null,
    extraItems: []
  },
];

const whyChoose = null;

const Seo = () => {
  const accentColor = '#3654bd';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>SEO Services - Digimarketing Art | Search Engine Optimization</title>
        <meta name="description" content="Boost your online visibility with Digimarketing Art's SEO services. Keyword research, on-page optimization, technical SEO, link building & more." />
        <meta name="keywords" content="SEO services, search engine optimization, keyword research, on-page SEO, technical SEO, link building, local SEO, SEO company India" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '120px 24px', backgroundImage: `url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782273011/AQNycmwYaYRurCoAPRB8wFSFcIrKJC3RM-eNMjtQdg8RtboEaoEflYG86z4K2JBLTDgfBWnjLBx5BqVxUgOOhhRf_ElATIgas-RgjAuMLC64KZrrJfWoE1CWtASAYQQbltx9tUI5q-8Fn60fgfoTgCTI_Llg2A.jpeg_lcht7b.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>SEO | SEARCH ENGINE OPTIMIZATION</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              DOMINATE <span style={{ color: accentColor }}>SEARCH RESULTS!</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Elevate Your Brand with Strategic SEO. We optimize your online presence to drive organic traffic, build authority, and deliver measurable results.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: accentColor, color: '#ffffff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}>
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(6px)', transition: 'all 0.2s' }}>
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" style={{ padding: '100px 24px', background: `url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg') center/cover fixed`, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>SEO | SEARCH ENGINE OPTIMIZATION Services</span></span>
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
          <section key={platform.title} id={platform.title.toLowerCase().replace(/[^a-z0-9]/g, '-')} style={{ padding: '40px 24px', borderTop: '1px solid var(--border-color)', ...(platform.image && (idx === 0 || idx === 2 || idx === 4) ? { background: `url(${platform.image}) center/cover fixed`, position: 'relative' } : { backgroundColor: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)', position: 'static' }) }}>
            {platform.image && (idx === 0 || idx === 2 || idx === 4) && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.8)', pointerEvents: 'none' }} />}
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
      <section style={{ padding: '100px 24px', background: `url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg') center/cover fixed`, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>SEO | SEARCH ENGINE OPTIMIZATION Process</span></span>
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
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #101a35 50%, #222222 100%)', position: 'relative', overflow: 'hidden' }}>
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
      <ContactForm accentColor="#3654bd" showOffices={false} />
    </div>
  );
};

export default Seo;
