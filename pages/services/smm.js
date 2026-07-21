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

const stats = [];

const services = [
  {
    title: 'Facebook Management',
    desc: 'Grow brand awareness and lead generation on Facebook.',
    icon: Share2,
    items: ['Content Creation and Curation: Craft engaging posts, images, and videos that resonate with your audience.', 'Page Optimization: Optimize your Facebook page to ensure it reflects your brand and attracts followers.', 'Community Management: Engage with your audience through comments, messages, and community posts.', 'Ad Campaign Management: Create and manage targeted ad campaigns to reach your specific audience.', 'Analytics and Reporting: Monitor and analyze your page\'s performance to inform future strategies.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778910826/AQPuqvTarmrUQw4EZAWjiYc-zo021fiYCShCWgn97BWeXCdOREqwMchNX0qGV0HZrZnsrZea9H2Sz--_5SwXBfPBtSiP9GmleADs1pSc2fd3vCKOSYSbUHTIUG-Q88WOkvfAbjK027RnQ22-Fm-KsrxQ3hp7NQ.jpeg_suqpc2.jpg'
  },
  {
    title: 'Instagram Management',
    desc: 'Engage visual audiences and drive traffic with Instagram.',
    icon: Smartphone,
    items: ['Visual Content Creation: Develop high-quality images, videos, and stories that capture attention.', 'Hashtag Strategy: Implement effective hashtag strategies to increase your post visibility.', 'Engagement: Foster community engagement through likes, comments, and direct messages.', 'Influencer Collaboration: Partner with relevant influencers to amplify your brand reach.', 'Performance Tracking: Analyze key metrics to measure success and refine your strategy.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778911043/AQOTC8pO5a_85oG1cXXer7rffNyC7SzJhkW8ZtisUKsQmhyffeD6QQBCE_YwYg_Kh7K9Qm2xef4ORCAsZKBZxRMB1y_H0o8kdHWeWDJ_kDq-kvyVZURsL4cyq-q44ePDxOspxpRwQI3w3KPrwlCc7_wj-vE.jpeg_iwtkfu.jpg'
  },
  {
    title: 'LinkedIn Management',
    desc: 'Establish professional authority and drive B2B leads.',
    icon: Users,
    items: ['Profile Optimization: Enhance your LinkedIn profile to showcase your brand\'s expertise and attract connections.', 'Content Strategy: Create and share valuable content that positions your brand as a thought leader.', 'Network Building: Grow your professional network by connecting with potential clients, partners, and influencers.', 'LinkedIn Ads: Develop and manage targeted ad campaigns to reach decision-makers in your industry.', 'Analytics and Insights: Monitor your LinkedIn activity to gain insights and improve your strategy.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778911354/AQMhbzOhbXA9ztlUtb7s0Dmb5XNZvqjro8SGCilAKXci1i-YYHYxf2swMF1DqwfN0jQA825OsmMemvJxWaeIgBdRoU93kDneTww08WIPUoKENfpHTFW4nsoUAaIvPEDOEN4SC3zMaXDtgOeLriri0oJgN38.jpeg_scp3fd.jpg'
  },
];

const timeline = [
  {
    week: 'Week 1',
    title: 'Client Onboarding & Strategy',
    items: ['Initial Consultation', 'Needs Assessment', 'Proposal and Agreement'],
    extraTitle: 'Research & Platform Strategy',
    extraItems: ['Market & Competitor Research', 'Audience Analysis', 'Platform & Content Strategy']
  },
  {
    week: 'Week 2',
    title: 'Setup & Content Planning',
    items: ['Profile Optimization', 'Content Calendar Creation', 'Graphics & Video Creation', 'Account Configuration'],
    extraTitle: 'Approval & Scheduling',
    extraItems: ['Client Content Approval', 'Scheduling & Automation setup', 'Social Tool Integration']
  },
  {
    week: 'Week 3',
    title: 'Campaign Launch & Monitoring',
    items: ['Campaign Launch', 'Initial Monitoring', 'Engagement Management', 'Feedback Incorporation'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Week 4+',
    title: 'Performance & Optimization',
    items: ['Weekly Performance Reports', 'Monthly Strategy Reviews', 'Client Collaboration'],
    extraTitle: 'Continuous Growth',
    extraItems: ['Performance Adjustments', 'Strategy updates & upgrades', 'A/B Testing']
  },
];

const whyChoose = null;

const Smm = () => {
  const accentColor = '#3fcda1';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>SMM Services - Digimarketing Art | Social Media Marketing</title>
        <meta name="description" content="Grow your brand awareness and engagement with Digimarketing Art's social media marketing services. Strategy, content creation, community management & ads." />
        <meta name="keywords" content="SMM services, social media marketing, social media management, Facebook ads, Instagram marketing, LinkedIn marketing, social media strategy" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782198381/AQOL9EB3-d9d4ANCmfOz2Bp2Hm_PaAHdxMuCbu4RN_Zr4Aokl3Rhj0trzJtiKNvVxGbW-4_FUeVvUn3aXLrw95CHoChbU8WOJsUCswqCyLtWuRCQau810J8GvtQmdpB67IDjoLaMm0Q-gfpG7i3VJzO2ATkg4w.jpeg_bbab1h.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={stats && stats.length > 0 ? { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' } : { maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={stats && stats.length > 0 ? {} : { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>SMM | SOCIAL MEDIA MANAGEMENT</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              DON'T JUST POST,<br />YOUR <span style={{ color: accentColor }}>BRAND</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Elevate Your Brand with Strategic Social Media Management. We don't just manage accounts; we build communities.
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
      <section id="overview" style={{ padding: '100px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>SMM | SOCIAL MEDIA MANAGEMENT Services</span></span>
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
            {(idx === 0 || idx === 2) && platform.image && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.5)', pointerEvents: 'none' }} />}
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
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>SMM | SOCIAL MEDIA MANAGEMENT Process</span></span>
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
      <section style={{ padding: '100px 24px', textAlign: 'center', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#111', marginBottom: 16, fontFamily: 'var(--font-display)' }}>Ready to scale your business?</h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: 36, fontSize: 17, lineHeight: 1.7 }}>
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

export default Smm;
