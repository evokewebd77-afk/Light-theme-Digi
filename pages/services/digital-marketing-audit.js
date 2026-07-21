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

const stats = [{ icon: Target, label: 'Google Ads Audited', val: '50+' },{ icon: Share2, label: 'Social Media Audited', val: '100+' },{ icon: Globe, label: 'Websites Audited', val: '75+' },{ icon: FileText, label: 'Content Audited', val: '200+' }];

const services = [
  {
    title: 'Google & FB Ads Performance Audit',
    desc: 'Are your campaigns delivering the best ROI? Our Audit evaluates your Google & FB Ads to identify areas for improvement and maximize performance.',
    icon: Target,
    items: ['Ad copy and creative performance: Evaluate visual and text messaging.', 'Keyword targeting and bidding strategies: Audit high-cost/low-yield keywords.', 'Campaign structure and budget allocation: Optimize for highest-yielding channels.', 'Deliverables: A detailed audit report with actionable suggestions to optimize for ROI.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779166889/AQNXmKOYhcPI_Tf31gPHCSugqTR9GXvYatOY9v0OTSTDMqqqtJG00Pf0IqPQ9dvPHePuhMZDCc0K-AJoWO3Bh5k5XxIKD4Di80ASvZeLomNYYcH8IyLaAIMOkv4uSjNAIP4bth-4cUH6wi-y7PEtY41Om-o.jpeg_zexzcz.jpg'
  },
  {
    title: 'Social Media Performance Audit',
    desc: 'Social media platforms like Facebook, Instagram, and LinkedIn are vital for brand growth. Our Social Media Performance Audit evaluates your campaigns and content strategies.',
    icon: Share2,
    items: ['Content quality and engagement rates: Analyze reach and community engagement.', 'Audience targeting and Segmentation: Verify target accuracy.', 'Posting frequency and consistency: Ensure brand visibility guidelines are met.', 'Deliverables: Suggestions for improving engagement, reach, and overall social strategy.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779167833/AQM4XoDrw5cJQTUpt5Fnj6JrTlowuWnbRxCblobtwYXdkTlvBYMMgKfsFmHwcGFUi2-l9yazQghPJdFjZ1rGMxqI0c1pqQGxmaq7dOFaAOv-kD2z5Snsau81-j1VtDSoMdP2X61DJOY2cpKgwdr1CiBl8UyoXQ.jpeg_fkwh39.jpg'
  },
  {
    title: 'Website Audit',
    desc: 'Your website is your first impression. Our Website Audit identifies performance issues, enhances user experience, boosts SEO, and improves conversion rates.',
    icon: Globe,
    items: ['Site speed and mobile responsiveness: Crucial for user experience & SEO rankings.', 'On-page SEO: Check meta tags, headers, image alt attributes, and keyword presence.', 'User experience (UX) and design: Clean layout and navigation check.', 'Deliverables: Actionable suggestions to improve speed, SEO, and UX conversions.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779167414/AQMqC-TOf84C4VRLBUk_-Pd-d3XLmp4BTj5yQqbbYokHfYawRuAm4AGS0xk1VoEmOKPN_yHLOjK6sLZ5prEZ1929Y2N_1qpSKpm-1-9hnfP5cOFVFqF_8gTN7Iv9VmGyg5J5ZQEFAY8uOdhYJIttdf9zJqED.jpeg_keeeie.jpg'
  },
  {
    title: 'Content Audit',
    desc: 'Content is the backbone of Digital Marketing. We evaluate your blogs, website copy, and social media posts to ensure they are optimized for SEO and resonate with your audience.',
    icon: FileText,
    items: ['Content quality, readability, and relevance: Make sure content meets audience expectations.', 'SEO optimization: Check keyword density, search intent alignment, and headers.', 'Engagement metrics: Track shares, comments, clicks, and page view stats.', 'Deliverables: Suggestions for optimizing existing articles and writing future content.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779169671/AQOf8ehljB-o3eCx2_VcLTFuOvsoosj03ueFdcRSrUi66PqaX5ZPPPQ5sNo3F1Flta5eeHZKwMP6LiAkLbnQczog5UX4rDL2Ya2lfWp7UX5sQ1JmFhbrTAcuM4TbhgKFq9hLTF-gJcTTOm5a3r6iQAsQoG05.jpeg_uw9c8s.jpg'
  },
];

const timeline = [
  {
    week: 'Step 1',
    title: 'Select Your Audit Service',
    items: ['Choose from Google Ads, social media, website, or content audits', 'Clarify audit parameters'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Step 2',
    title: 'Provide Secure Access',
    items: ['Share temporary access or read-only analytical access safely', 'Complete onboarding form'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Step 3',
    title: 'Get Audit Report',
    items: ['Our experts compile detailed performance indicators', 'Receive clean PDF report with actionable suggestions'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Step 4+',
    title: 'Implement Recommendations',
    items: ['Apply our suggestions to optimize marketing campaigns', 'Work with our experts for continuous optimization'],
    extraTitle: null,
    extraItems: []
  },
];

const whyChoose = { title: 'Digimarketing Audits', items: ['Affordable Pricing: Get expert analysis at a budget-friendly price.', 'Expert Analysis: Detailed review of your strategies to enhance performance.', 'Comprehensive Report: Actionable audit report with clear recommendations.', 'Practical Solutions: We don\'t just highlight problems; we offer solutions.'] };

const DigitalMarketingAudit = () => {
  const accentColor = '#fcc25b';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Digital Marketing Audit Services - Digimarketing Art</title>
        <meta name="description" content="Maximize ROI with a data-driven digital marketing performance audit from Digimarketing Art. Comprehensive analysis of your online marketing efforts." />
        <meta name="keywords" content="digital marketing audit, marketing performance audit, ROI analysis, marketing strategy audit, digital marketing analysis" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782204726/AQNzKNmSQXvWxfJxIMHv5yxiQZqAYQhs34Mjms84O7WwHdPGebMeLn6BF0CG1p26jakW95hZDkrr5gTESuoKSJxmvb38-fa79gADRUOGT4oVwNK_JulSRN3npnnD5_OiBfY63738r-MiGSsjeB3eRNpCYT4c.jpeg_jqjwgt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>DIGITAL MARKETING AUDIT | OPTIMIZE YOUR EFFORTS</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              OPTIMIZE YOUR <span style={{ color: accentColor }}>MARKETING!</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              DIGIMARKETINGART specializes in auditing your digital presence to save time, money, and effort. From Google Ads and Social Media Audits to Website Performance Analysis, we'll identify areas for improvement and provide actionable insights.
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
      <section id="overview" style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>DIGITAL MARKETING AUDIT | OPTIMIZE YOUR EFFORTS Services</span></span>
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
          <section key={platform.title} id={platform.title.toLowerCase().replace(/[^a-z0-9]/g, '-')} style={{ padding: '80px 24px', background: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', ...((idx === 0 || idx === 2) && platform.image ? { position: 'relative', overflow: 'hidden', backgroundImage: `url(${platform.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' } : {}) }}>
            {(idx === 0 || idx === 2) && platform.image && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.75)', pointerEvents: 'none' }} />}
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ order: idx % 2 === 0 ? 1 : 2, ...((idx === 0 || idx === 2) ? { background: 'rgba(255,255,255,0.9)', padding: '40px 36px', borderRadius: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' } : {}) }}>
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
        <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
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
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>DIGITAL MARKETING AUDIT | OPTIMIZE YOUR EFFORTS Process</span></span>
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
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #3c2f16 50%, #222222 100%)', position: 'relative', overflow: 'hidden' }}>
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
      <ContactForm accentColor="#fcc25b" showOffices={false} />
    </div>
  );
};

export default DigitalMarketingAudit;
