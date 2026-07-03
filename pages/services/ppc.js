import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Search, Users, Building2, BarChart3, Target, MessageSquare, Mail, MapPin, ChevronRight } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const platforms = [
  {
    title: 'Google Ads',
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778911920/AQMeo0oXA6pKtGmn0hFj7iB1H-89dtIQDZZtioYWgGDbP1NmHFCQ8Hmm06-_q2CCK2KFCKIro6wQ3D-dNYYW6dAkg8GKLYfvZrx6NfEYvmg_5P2CpVW3Q3SePaUvcOuMQl9KymLAdDm3WorlYw_4v-GKj0cZQA.jpeg_xd80ts.jpg',
    desc: 'Reach a vast online audience through search and display advertising on various google platforms.',
    icon: Search,
    items: [
      'Target Specific Keywords: Reach potential customers by bidding on keywords relevant to your business.',
      'Various Ad Formats: Reach potential customers by bidding on keywords relevant to your business.',
      'Advanced Targeting Options: Target users based on location, demographics, interests, and more.',
      'Performance Tracking: Measure the success of your campaigns with detailed analytics.',
    ]
  },
  {
    title: 'Meta Ads (FB & INSTA)',
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778913922/AQNnfrGkYI-H7dJmvmxPER6XrBXfPhWS6sk8O1yckATeH4z4Mafjbi4Eux4ohunhzfzUxPothWrqlRnyN9yVxjCvRE4jVfgJQaNgY-kmvtD8F-wmUxYDUJZMLkpzTraRwmYNEu1jTkf94u9i7n9l71iN8UUD_Q.jpeg_nkeslk.jpg',
    desc: 'Target specific demographics and interests on the largest social media platform.',
    icon: Users,
    items: [
      'Precise Audience Targeting: Use demographics, interests, behaviors, and custom audiences to target your ideal customers.',
      'Diverse Ad Formats: Create image, video, carousel, and story ads that captivate users.',
      'Comprehensive Analytics: Monitor the performance of your campaigns with insights and reporting tools.',
      'Retargeting Capabilities: Re-engage users who have previously interacted with your brand.',
    ]
  },
  {
    title: 'LinkedIn Ads',
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778909387/AQPVSAm00lU7F6Jz0f2x8i6f8G5kuXDgt2_UrP5DMSfJEx7yBLhNaenCmB_vpiXy1r3REvAzMuWCmmDqJ4DhzCVDqCuw8r8igw27HMj_JjIv1QVAxCKgtjuBjzUTY0wcPUcjHawzIut5pZP32QyicNACHb15ug.jpeg_kfnmzw.jpg',
    desc: 'Connect with professionals and B2B audiences.',
    icon: Building2,
    items: [
      'Professional Audience: Target ads to specific job titles, industries, and companies.',
      'Content-Based Advertising: Promote your content with sponsored content, message ads, and dynamic ads.',
      'Lead Generation: Utilize LinkedIn\'s lead generation forms to capture valuable leads directly from your ads.',
      'Insightful Analytics: Gain insights into campaign performance and audience engagement.',
    ]
  },
  {
    title: 'Microsoft Ads',
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778908910/AQNghP7OpyzfcfFr_hS6_X3dK951FxYX27dAXAZqYhbc8RvGS9UjKuzybSqVfb2ePeIbhUIJ0a0QESWoQbltCWSLNgfQRwjWoWbQhGMxTYLqd9Nf6A4-bbmV7SOF0GhyWfzn_DNto_2MaeyRrReAWFK4MiK6xw.jpeg_w7yy7z.jpg',
    desc: 'Advertise on Microsoft\'s search engine network, including Bing and Yahoo.',
    icon: BarChart3,
    items: [
      'Keyword Targeting: Bid on keywords to display your ads on search engine results pages.',
      'Ad Extensions: Enhance your ads with additional information like call buttons, location, and site links.',
      'Demographic Targeting: Target users based on age, gender, and device type.',
      'Cost-Effective Advertising: Often lower cost-per-click compared to other PPC platforms.',
    ]
  },
];

const timeline = [
  {
    week: 'Week 1',
    title: 'Client Acquisition & Onboarding',
    items: ['Initial Consultation', 'Needs Assessment', 'Proposal and Agreement'],
    extraTitle: 'Research & Strategy Development',
    extraItems: ['Market Research', 'Audience Analysis', 'Campaign Strategy'],
  },
  {
    week: 'Week 2',
    title: 'Campaign Setup',
    items: ['Keyword Research', 'Ad Copy Creation', 'Landing Page Optimization', 'Account Setup', 'Campaign Configuration'],
  },
  {
    week: 'Week 3',
    title: 'Campaign Launch & Monitoring',
    items: ['Launch Campaigns', 'Initial Monitoring', 'Optimization'],
  },
  {
    week: 'Week 4 & Onwards',
    title: 'Performance Analysis & Reporting',
    items: ['Weekly Reports', 'Monthly Reviews', 'Client Feedback'],
    extraTitle: 'Continuous Optimization',
    extraItems: ['A/B Testing', 'Performance Tweaks', 'Budget Adjustments'],
  },
];

const platformCards = [
  { title: 'Google Ads', desc: 'Reach a vast online audience through search and display advertising on various google platforms.', icon: Search },
  { title: 'Meta Ads (FB & INSTA)', desc: 'Target specific demographics and interests on the largest social media platform.', icon: Users },
  { title: 'LinkedIn Ads', desc: 'Connect with professionals and B2B audiences.', icon: Building2 },
  { title: 'Taboola Ads', desc: 'Promote content across premium publisher sites to drive engagement and traffic.', icon: BarChart3 },
  { title: 'Microsoft Ads', desc: 'Advertise on Microsoft\'s search engine network, including Bing and Yahoo.', icon: Target },
];

const Ppc = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>PPC Services - Digimarketing Art | Pay-Per-Click Advertising</title>
        <meta name="description" content="Drive targeted traffic and increase conversions with Digimarketing Art's PPC advertising services. Google Ads, Social Media Ads, Retargeting & more." />
        <meta name="keywords" content="PPC services, pay per click advertising, Google Ads, social media ads, retargeting, PPC management, paid advertising" />
      </Head>
      {/* Hero */}
      <section style={{
        padding: '120px 24px',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782122121/ee526ac9-2756-47e0-840f-f324d5c86071_f0wts7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.65)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 16, fontWeight: 700 }}>PPC | PAY-PER-CLICK</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
            STOP WASTING YOUR <span style={{ color: '#d73d56' }}>BUDGET!</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Invest in High-Performance PPC Solutions. Maximize your business growth with Digimarketing's digital marketing expertise.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: '#d73d56', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}>
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a href="#platforms" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(6px)', transition: 'all 0.2s' }}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* PPC Ads Platforms Overview */}
      <section id="platforms" style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.75)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 12, fontWeight: 700 }}>PPC ADS PLATFORMS</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              Platforms We <span style={{ color: '#d73d56' }}>Excel At</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {platformCards.map(p => {
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
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#d73d56'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(215,61,86,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} color="#d73d56" />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'var(--font-display)', margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, flex: 1 }}>{p.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d73d56', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Platform Sections */}
      {platforms.map((platform, idx) => {
        const Icon = platform.icon;
        return (
          <section key={platform.title} id={platform.title.toLowerCase().replace(/[^a-z0-9]/g, '-')} style={{ padding: '80px 24px', background: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', ...((idx === 0 || idx === 2) && platform.image ? { position: 'relative', overflow: 'hidden', backgroundImage: `url(${platform.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' } : {}) }}>
            {(idx === 0 || idx === 2) && platform.image && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.75)', pointerEvents: 'none' }} />}
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ order: idx % 2 === 0 ? 1 : 2, ...((idx === 0 || idx === 2) ? { background: 'rgba(255,255,255,0.9)', padding: '40px 36px', borderRadius: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' } : {}) }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(215,61,86,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={28} color="#d73d56" />
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, marginBottom: 16, fontFamily: 'var(--font-display)' }}>{platform.title}</h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{platform.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {platform.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle size={18} color="#d73d56" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, padding: '14px 32px', background: '#d73d56', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s' }}>
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>
              {platform.image ? (
                <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', width: '100%', height: '100%', minHeight: 380, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
                  <img loading="lazy" src={platform.image} alt={platform.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                </div>
              ) : (
                <div style={{ order: idx % 2 === 0 ? 2 : 1, background: 'var(--bg-primary)', border: '2px solid rgba(215,61,86,0.2)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', textAlign: 'center' }}>
                  <Icon size={48} color="#d73d56" />
                  <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-display)', margin: 0 }}>{platform.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{platform.desc}</p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d73d56', fontWeight: 700, fontSize: 14, textDecoration: 'none', borderBottom: '2px solid #d73d56', paddingBottom: 2 }}>
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* CTA - Ready to Dominate Search */}
      <section style={{ padding: '100px 24px', textAlign: 'center', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#111', marginBottom: 16, fontFamily: 'var(--font-display)' }}>Ready to Dominate Search?</h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: 36, fontSize: 17, lineHeight: 1.7 }}>
            Get a customized PPC strategy tailored to your business goals. Our experts are ready to help you maximize ROI.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: '#d73d56', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* PPC Process Timeline */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 12, fontWeight: 700 }}>PPC PROCESS TIMELINE</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              Our <span style={{ color: '#d73d56' }}>Process</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {timeline.map((phase, idx) => (
              <div key={phase.week} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -12, left: 24, background: '#d73d56', color: '#fff', fontSize: 12, fontWeight: 800, padding: '4px 16px', borderRadius: 20, letterSpacing: '0.05em' }}>{phase.week}</div>
                <div style={{ marginTop: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, fontFamily: 'var(--font-display)' }}>{phase.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {phase.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#d73d56', flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  {phase.extraTitle && (
                    <>
                      <div style={{ height: 1, background: 'var(--border-color)', margin: '16px 0' }} />
                      <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12, fontFamily: 'var(--font-display)', color: '#d73d56' }}>{phase.extraTitle}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {phase.extraItems.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#d73d56', flexShrink: 0 }} />
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



      {/* Contact Form */}
      <ContactForm accentColor="#d73d56" showOffices={false} />
    </div>
  );
};

export default Ppc;
