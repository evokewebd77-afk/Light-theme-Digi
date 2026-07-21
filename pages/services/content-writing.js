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

const stats = [{ icon: FileText, label: 'Words Written', val: '1M+' },{ icon: Search, label: 'SEO optimized', val: '95+' },{ icon: CheckCircle, label: 'Plagiarism Free', val: '100%' },{ icon: Users, label: 'Clients', val: '500+' }];

const services = [
  {
    title: 'Blog Writing',
    desc: 'Blogs are a powerful tool for driving traffic to your website and establishing your expertise.',
    icon: FileText,
    items: ['Topic Research: Identify relevant and trending topics that resonate with your audience.', 'SEO Optimization: Integrate keywords seamlessly to improve search engine rankings.', 'Engaging Content: Create informative and engaging blog posts that capture readers\' interest.', 'Consistent Posting: Develop a content calendar and ensure regular posting to keep your audience engaged.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778913829/AQNXV5hDaGIpMIgf65BcdeoXiACbppch2jjOSfEMlH7SDSAccesOs6-uVvw6j8m6qikte-QsH-1FXnGxkCXnvoePzerbDuCFZMn4F_yg4K4RAYFu64f4c18q9hF1S__x0JBCvE7xd1DsiswOPkOMnB3lFQZldg.jpeg_ew0llf.jpg'
  },
  {
    title: 'Website Content',
    desc: 'Your website content is crucial for making a strong first impression and communicating your value.',
    icon: Globe,
    items: ['Home Page Content: Craft compelling content that clearly communicates your value proposition.', 'About Us Page: Tell your brand story and highlight your mission, vision, and values.', 'Service/Product Descriptions: Write detailed and persuasive descriptions that showcase the benefits of your offerings.', 'Landing Pages: Create focused landing pages designed to convert visitors into leads or customers.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778913922/AQNnfrGkYI-H7dJmvmxPER6XrBXfPhWS6sk8O1yckATeH4z4Mafjbi4Eux4ohunhzfzUxPothWrqlRnyN9yVxjCvRE4jVfgJQaNgY-kmvtD8F-wmUxYDUJZMLkpzTraRwmYNEu1jTkf94u9i7n9l71iN8UUD_Q.jpeg_nkeslk.jpg'
  },
  {
    title: 'Social Media Content',
    desc: 'Effective social media content can boost your online presence and engagement across all platforms.',
    icon: Smartphone,
    items: ['Platform-Specific Content: Develop tailored content for various social media platforms like Facebook, Instagram, LinkedIn, and Twitter.', 'Content Calendars: Plan and schedule posts to ensure consistent and timely updates.', 'Visual Content Integration: Incorporate images, videos, and graphics to enhance your social media posts.', 'Community Engagement: Create content that encourages interaction and engagement with your audience.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778914281/AQMl1cfG6HgE7PnIu9lRmb58wt9eaJQOVWUB2qF9tnG9aXQBGdbK4sTCMw9v9kxbr63jmRD74lGwD5uqr3xH4wVcMshDRnSPlo6QoYe9iiwcefx9s5FsdmLx2xBtfZJ15oQO3DiWuGxKfr7-9bmQdoxIoLmyFg.jpeg_cxdxsf.jpg'
  },
  {
    title: 'SEO Content',
    desc: 'SEO content is designed to improve your search engine rankings and drive organic traffic.',
    icon: Search,
    items: ['Keyword Research: Identify high-traffic and relevant keywords for your industry.', 'On-Page SEO: Write content optimized for on-page SEO, including meta tags, headings, and internal linking.', 'Content Optimization: Update existing content to improve its SEO performance.', 'Long-Form Content: Create in-depth articles, guides, and whitepapers that provide value and attract backlinks.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778913922/AQNnfrGkYI-H7dJmvmxPER6XrBXfPhWS6sk8O1yckATeH4z4Mafjbi4Eux4ohunhzfzUxPothWrqlRnyN9yVxjCvRE4jVfgJQaNgY-kmvtD8F-wmUxYDUJZMLkpzTraRwmYNEu1jTkf94u9i7n9l71iN8UUD_Q.jpeg_nkeslk.jpg'
  },
  {
    title: 'Product Descriptions',
    desc: 'Compelling product descriptions can significantly impact your sales and customer trust.',
    icon: Target,
    items: ['Feature Highlighting: Emphasize key features and benefits of your products.', 'Persuasive Copy: Write descriptions that persuade and encourage purchases.', 'SEO Integration: Incorporate relevant keywords to improve product visibility in search results.', 'Consistent Tone: Ensure a consistent tone and style that aligns with your brand.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1778913307/AQM5zOr1mE10YvXCLQ7Aqi5LxV4arbCzw5GjIs3hnhGK5isUuEaRjbbFdLo9XWyyyhASiM-c5TnANSoZT_EqlGr-XrITLEsllYqYXx59b92xe8vXAiN94o_68jEYpN0z17nE6qDPz_2DD4bRKTSyR3f72LmnQw.jpeg_gyxper.jpg'
  },
  {
    title: 'Email Newsletters',
    desc: 'Email newsletters are a great way to keep your audience informed and engaged with your brand.',
    icon: Mail,
    items: ['Content Planning: Develop a content strategy that aligns with your marketing goals.', 'Engaging Subject Lines: Craft subject lines that increase open rates.', 'Valuable Content: Create informative and engaging content that adds value to your subscribers.', 'Call-to-Actions: Include clear and compelling call-to-actions to drive conversions.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782199249/AQPE38MPwJI8ZfVn7mUAAYNPIJ7j0UpHa-lXpABInDokcV2kJQ8YxbsWYNwmnVNbsT8Ufnc38HcHyUquvxCgHNLx5c6fhSe99ArU0GHKfeG3GjSKlNhvnt_ZnXQY3VGHVmZkWvUokHQfxgQFhF2ilq9dEXpVWg.jpeg_nqzuwt.jpg'
  },
];

const timeline = [
  {
    week: 'Phase 1',
    title: 'Audience & Competitor Research',
    items: ['Audience analysis', 'Tone of voice definition', 'Competitor content mapping'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 2',
    title: 'Keyword Strategy & Outlining',
    items: ['Keyword mapping', 'Topic ideation', 'Detailed content outlines development'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 3',
    title: 'Content Drafting & Optimization',
    items: ['Copy drafting', 'Natural keyword insertion', 'Readability checks', 'Internal link planning'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 4+',
    title: 'Editing, Checking & Publishing',
    items: ['Detailed proofreading', 'Plagiarism & AI score checking', 'Formatting & publishing', 'Engagement monitoring'],
    extraTitle: null,
    extraItems: []
  },
];

const whyChoose = null;

const ContentWriting = () => {
  const accentColor = '#b716f9';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Content Writing Services - Digimarketing Art</title>
<meta name="description" content="Compelling content that engages your audience and boosts conversions. SEO-optimized blog posts, web copy, and marketing content by Digimarketing Art." />
        <meta name="keywords" content="content writing services, SEO content writing, blog writing, web copywriting, marketing content, website content" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782198784/AQNE-w2BHBqYzuSnr11sy9OPuKVU2p05vQOLUp3BcEruPbF6rSlIr2Pa2fTLBD0h4264ZuRZti4M1godvpvsyHQdcWzBtf3bRWAOh0IeHnv4xVUH_UHcvAkD9JkrOU8-vOizs0d1JnGnSfHRosaGktBIXhd-LA.jpeg_hqn0ev.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>CONTENT WRITING | STRATEGIC ENGAGEMENT</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              WORDS THAT <span style={{ color: accentColor }}>CONVERT!</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Elevate Your Brand with Strategic Content Writing. We create compelling narratives that capture attention, build trust, and drive results.
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
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>CONTENT WRITING | STRATEGIC ENGAGEMENT Services</span></span>
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
          <section key={platform.title} id={platform.title.toLowerCase().replace(/[^a-z0-9]/g, '-')} style={{ padding: '80px 24px', background: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', ...((idx === 0 || idx === 2 || idx === 4) && platform.image ? { position: 'relative', overflow: 'hidden', backgroundImage: `url(${platform.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' } : {}) }}>
            {(idx === 0 || idx === 2 || idx === 4) && platform.image && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.75)', pointerEvents: 'none' }} />}
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
                <div style={{ background: 'var(--bg-primary)', border: `1px solid var(--border-color)`, borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', textAlign: 'center' }}>
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
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>CONTENT WRITING | STRATEGIC ENGAGEMENT Process</span></span>
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
      <ContactForm accentColor="#b716f9" showOffices={false} />
    </div>
  );
};

export default ContentWriting;


