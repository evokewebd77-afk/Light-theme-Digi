import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Share2, Code, FileText, Palette, Search, BarChart3, Database, Users, Radio, BookOpen, Monitor } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const services = [
  {
    icon: TrendingUp,
    title: 'PPC',
    desc: 'Drive targeted traffic to your website and increase conversions with PPC ads.',
    path: '/services/ppc',
    color: '#fcc25b',
  },
  {
    icon: Share2,
    title: 'SMM',
    desc: 'Grow your brand awareness and engagement on social media platforms.',
    path: '/services/smm',
    color: '#3fcda1',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Craft a user-friendly, high-performing website to achieve your business goals.',
    path: '/services/web-development',
    color: '#4b92f7',
  },
  {
    icon: FileText,
    title: 'Content Writing',
    desc: 'Create compelling content that engages your audience and boosts conversions.',
    path: '/services/content-writing',
    color: '#b716f9',
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    desc: 'Design eye-catching visuals that effectively communicate your brand message.',
    path: '/services/graphic-design',
    color: '#f45e73',
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Improve your search ranking and attract qualified leads organically.',
    path: '/services/seo',
    color: '#3654bd',
  },
  {
    icon: BookOpen,
    title: 'Training Courses',
    desc: 'We offer a wide range of training courses in Digital Marketing and AI Tools.',
    path: '/services/ai-training',
    color: '#8b5cf6',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing Audit',
    desc: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit',
    path: '/services/digital-marketing-audit',
    color: '#fcc25b',
  },
  {
    icon: Database,
    title: 'Data Mining',
    desc: 'Extract Actionable Insights with Advanced Data Mining Solutions.',
    path: '/services/data-mining',
    color: '#3fcda1',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    desc: 'Generate High-Quality Leads & Boost Conversions Effortlessly',
    path: '/services/lead-generation',
    color: '#4b92f7',
  },
  {
    icon: Monitor,
    title: 'Newsletter Automation',
    desc: 'Newsletter Automation with AI to scale your reach.',
    path: '/services/newsletter-automation',
    color: '#06b6d4',
  },
  {
    icon: Radio,
    title: 'Influencer Marketing',
    desc: 'Creator partnerships, UGC campaigns and performance tracking.',
    path: '/services/influencer-marketing',
    color: '#f45e73',
  },
];

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Our Services - Digimarketing Art | Digital Marketing Agency</title>
        <meta name="description" content="Explore Digimarketing Art's full range of digital marketing services: SEO, PPC, SMM, Web Development, Content Writing, Lead Generation, and more." />
        <meta name="keywords" content="digital marketing services, SEO services, PPC services, SMM services, web development services, content writing services, lead generation services" />
      </Head>
      {/* Hero */}
      <section style={{
        padding: '120px 24px',
        textAlign: 'center',
        position: 'relative',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781859451/26da8745-d676-4c44-91e0-600a07877194_fhgauo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        overflow: 'hidden',
      }}>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.55)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)', display: 'block', marginBottom: 16, fontWeight: 600 }}>
            DIGIMARKETINGART SERVICES | SCALE YOUR BRAND
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
            WE ARE YOUR<br /><span style={{ color: '#d73d56' }}>CREATIVE <span className="font-display-italic">HUB!</span></span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 36px' }}>
            We are a performance-driven digital marketing agency dedicated to scaling brands through AI-powered strategies and creative excellence. We don't just provide services; we build success stories.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1.5px solid rgba(255, 255, 255, 0.3)', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(6px)', transition: 'all 0.2s' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '80px 24px 120px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay so cards remain visible */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.55)', display: 'block', marginBottom: 12, fontWeight: 600 }}>
              DIGIMARKETINGART SERVICES | SCALE YOUR BRAND
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#111111', lineHeight: 1.1 }}>
              What We're <span style={{ color: '#d73d56' }}><span className="font-display-italic">Great</span> At</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((s) => {
              const Icon = s.icon;
              const isDark = s.color === '#000000' || s.color === '#3654bd';
              return (
                <Link key={s.title} href={s.path} style={{ textDecoration: 'none' }}>
                  <div className="reveal"
                    style={{
                      background: s.color,
                      border: '2px solid #d73d56',
                      borderRadius: 20,
                      padding: '32px 28px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                      minHeight: 200,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.18)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={24} color="#fff" />
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#ffffff' : '#111111', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.2 }}>{s.title}</h2>
                    <p style={{ fontSize: 14, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.7)', lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: isDark ? '#fff' : '#111', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — Full Width */}
      <section style={{
        textAlign: 'center',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781860240/be0d66d2-514e-40cc-baa3-02d160242a58_a5qh8y.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: 12, fontFamily: 'var(--font-display)', color: '#ffffff', lineHeight: 1.15 }}>
            Discover What We Can <span style={{ color: '#d73d56' }}>Achieve Together:</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, maxWidth: 520, margin: '16px auto 36px', lineHeight: 1.8 }}>
            Share Your Details and We'll Do the Rest! Let's have a conversation. We'd love to provide some honest guidance.
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 44px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 16, textDecoration: 'none', letterSpacing: '0.03em' }}
          >
            FREE CONSULTATION CALL <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm showOffices={false} />
    </div>
  );
};

export default ServicesPage;
