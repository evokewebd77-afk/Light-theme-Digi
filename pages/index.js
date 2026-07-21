import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import GrowthPlaybook from '../components/GrowthPlaybook';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Insights from '../components/Insights';
import Faq from '../components/Faq';
import ContactForm from '../components/ContactForm';
import GlobalOffices from '../components/GlobalOffices';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+91-90565-44487' },
  { icon: Mail, label: 'Email Us', value: 'info@digimarketingart.com' },
  { icon: MapPin, label: 'Main Office', value: 'Aero View Plaza, Mohali, Punjab' },
];

const Home = () => {
  const leftPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {contactInfo.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="contact-detail-card" style={{ marginBottom: 0 }}>
            <div className="contact-detail-title">{item.label}</div>
            <div className="contact-detail-value" style={{ fontSize: 17 }}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Head>
        <title>Digimarketing Art - Digital Advertisement Marketing Network</title>
        <meta name="description" content="Digimarketing Art is a performance-driven digital marketing agency. We offer SEO, PPC, SMM, web development & more to scale your brand with AI-powered strategies." />
        <meta name="keywords" content="digital marketing agency, SEO services, PPC advertising, social media marketing, web development, content writing, lead generation, digital marketing India" />
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
