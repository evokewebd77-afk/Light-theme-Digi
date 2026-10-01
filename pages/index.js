import Head from 'next/head';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import { Phone, Mail, MapPin, CheckCircle2, ArrowUpRight, Zap } from 'lucide-react';

const Services = dynamic(() => import('../components/Services'), { ssr: true });
const GrowthPlaybook = dynamic(() => import('../components/GrowthPlaybook'), { ssr: true });
const Portfolio = dynamic(() => import('../components/Portfolio'), { ssr: true });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: true });
const Insights = dynamic(() => import('../components/Insights'), { ssr: true });
const Faq = dynamic(() => import('../components/Faq'), { ssr: true });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: true });
const GlobalOffices = dynamic(() => import('../components/GlobalOffices'), { ssr: true });

const contactInfo = [
  {
    icon: Phone,
    label: 'Direct Phone',
    value: '+91-90565-44487',
    href: 'tel:+919056544487',
    sub: 'Instant consultation • Mon-Sat',
    accent: '#d73d56',
  },
  {
    icon: Mail,
    label: 'Email Inquiries',
    value: 'info@digimarketingart.com',
    href: 'mailto:info@digimarketingart.com',
    sub: 'Average response: < 2 hours',
    accent: '#1D8DCA',
  },
  {
    icon: MapPin,
    label: 'Main Office',
    value: 'SCO 09, Aero View Plaza, Airport Rd, Mohali',
    href: 'https://maps.google.com/?q=Aero+View+Plaza+Mohali',
    sub: 'Punjab - 140603, India',
    accent: '#3A8C3A',
  },
];

const Home = () => {
  const leftPanel = (
    <div className="contact-info-container">
      <div className="contact-info-header">
        <span className="contact-info-badge">
          <Zap size={13} color="#d73d56" /> Ready to Scale?
        </span>
        <h3 className="contact-info-title">Let’s Talk Growth & Strategy</h3>
        <p className="contact-info-desc">
          Reach our performance marketing team directly or send us your campaign specs for an immediate ROI review.
        </p>
      </div>

      <div className="contact-cards-list">
        {contactInfo.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              className="contact-card-modern"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-card-icon" style={{ '--card-icon-accent': item.accent }}>
                <Icon size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-val">{item.value}</span>
                <span className="contact-card-sub">{item.sub}</span>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>
          );
        })}
      </div>

      <div className="contact-perks-box">
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>Free performance & SEO growth audit</span>
        </div>
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>Dedicated senior account manager</span>
        </div>
        <div className="contact-perk-item">
          <CheckCircle2 size={16} color="#d73d56" />
          <span>No lock-in contracts • Transparent KPIs</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Digimarketing Art - Digital Advertisement Marketing Network</title>
        <meta name="description" content="Digimarketing Art is a performance-driven digital marketing agency. We offer SEO, PPC, SMM, web development & more to scale your brand with AI-powered strategies." />
        <meta name="keywords" content="digital marketing agency, SEO services, PPC advertising, social media marketing, web development, content writing, lead generation, digital marketing India" />
        <link rel="canonical" href="https://www.digimarketingart.com" />
        <meta property="og:title" content="Digimarketing Art - Digital Advertisement Marketing Network" />
        <meta property="og:description" content="Digimarketing Art is a performance-driven digital marketing agency. We offer SEO, PPC, SMM, web development & more to scale your brand with AI-powered strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digimarketingart.com" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digimarketing Art - Digital Advertisement Marketing Network" />
        <meta name="twitter:description" content="Digimarketing Art is a performance-driven digital marketing agency. We offer SEO, PPC, SMM, web development & more to scale your brand with AI-powered strategies." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
      </Head>
      <Hero />
      <Clients />
      <Services />
      <GrowthPlaybook />
      <Portfolio />
      <Testimonials />
      <Insights />
      <Faq />
      <ContactForm leftPanel={leftPanel} />
      <GlobalOffices />
    </>
  );
};

export default Home;
