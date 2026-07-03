import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import {
  Target, Search, BarChart3, Users, Heart, MessageCircle,
  Share2, Smartphone, TrendingUp, Link2, BarChart2, MapPin,
  Globe, Code, Settings, Palette, FileText, CheckCircle,
  Database, Radio, BookOpen, Monitor, ChevronRight, ArrowRight, Mail,
  MessageSquare, Building2
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const services = [
  {
    title: 'Web Development',
    desc: 'Our custom website development services ensure your website is tailored to your unique business needs and objectives.',
    icon: Code,
    items: ['Bespoke Design: Create a unique and visually appealing design that aligns with your brand identity.', 'Scalable Solutions: Develop websites that can grow with your business, accommodating future expansion and functionality.', 'Responsive Design: Ensure your website is fully responsive, providing an optimal viewing experience across all devices.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778912299/AQNn4-SZaq2QlH2hZkA_zn_950uWOoYQAK_1zIHEIhf9pIboTlO9omMCx0J62X5g3lGXy3Z9NqGRyIlw2utKUP7FGbqf8PGQgI5ZH1y8T-OmrVwsPG63jQizSXgQx9jqXTJHYw1pV7I21k_AS66lliabo2P4pw.jpeg_covn49.jpg'
  },
  {
    title: 'E-Commerce Development',
    desc: 'For businesses looking to sell products or services online, our e-commerce development services are designed to drive sales.',
    icon: Smartphone,
    items: ['Platform Selection: Choose the best e-commerce platform for your needs (Shopify, WooCommerce, Magento, etc.).', 'Custom Shopping Cart: Develop a user-friendly and secure shopping cart that enhances the purchasing experience.', 'Payment Gateway Integration: Integrate secure payment gateways to facilitate smooth transactions.', 'Product Management: Implement robust product management systems to easily manage your inventory.', 'Order Tracking: Enable order tracking functionality to keep customers informed about their purchases.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778912650/AQM7vaUx9Pef_DUEYS9f3LJREx3InbIY3AFTDvbxfAtiE4pAkGw2hscrSXa3GovCidiodmLX2Mge1AhgyhbokI3sLbjPh5lNC-9dZ9h7t6Tr8o0LyV1EkkO7mPvLkTnSqJ0czUm7pkQJ4-HDDYuU1Ig7UMXmTw.jpeg_ernil3.jpg'
  },
  {
    title: 'CMS Development',
    desc: 'A Content Management System (CMS) allows you to easily manage and update your website content without technical expertise.',
    icon: Globe,
    items: ['Platform Expertise: Develop websites on popular CMS platforms like WordPress, Joomla, and Drupal.', 'Custom Templates: Create custom templates and themes that match your brand\'s aesthetic.', 'User-Friendly Interface: Design an intuitive backend interface for easy content management.', 'Plugin Integration: Integrate essential plugins and extensions to enhance functionality.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778912709/AQOxx40qPZcx7soskIHpHUDpBkqUANtLirOM3ScSFG6sTkB_CFGU_4PTswzqBxrUayrtgr15qeazPrMtjDMCAb9sjrVdlcyJpXuO1A3lEdfWWBOn6KlkuVwZULNnRb1mzTrJ8rIbtoc7GXiXoBtZHc_AIKAVVQ.jpeg_fqkm3t.jpg'
  },
  {
    title: 'Web Application Development',
    desc: 'For businesses requiring more complex solutions, our web application development services address specific workflows.',
    icon: Settings,
    items: ['Custom Web Apps: Develop tailored web applications that address specific business needs and workflows.', 'SaaS Solutions: Create Software as a Service (SaaS) applications accessible over the internet.', 'API Development: Develop and integrate APIs to ensure seamless interaction between different software systems.', 'Cloud Integration: Utilize cloud services to enhance scalability and accessibility.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778913157/AQNme8ThoQuzjbKxTu8IAPnt9Iz-ehttoO6srPIeK_ITAlxiOMp1wvqsOft-K1znK7sMiPOf-KLO8Cq-I0wJQ1zTSWgbuLeGzybPjS4o7AFYpHNyewnPU0BDy1GdxUIH4Iudr1ydFZWwgby9NE3eYiKjaWRT.jpeg_ttpa6r.jpg'
  },
  {
    title: 'Website Maintenance and Support',
    desc: 'Maintaining your website is crucial for ensuring its performance, security, and up-to-date content.',
    icon: Code,
    items: ['Regular Updates: Keep your website\'s software, plugins, and themes updated to the latest versions.', 'Security Monitoring: Implement and monitor security measures to protect your website from threats.', 'Performance Optimization: Optimize your website\'s performance to ensure fast load times.', 'Content Updates: Assist with regular content updates to keep your website fresh and relevant.', 'Backup and Recovery: Perform regular backups and establish recovery protocols to safeguard your data.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778912778/AQMCFpj89EKDVhgkREx1L5H9O1PqHwh0wfTCHgTG-ubBNUXCj6bjSTV2R58sg6vOKMIeCbz6Dy8OeJMZc_T_BTzufVYPeNm2Mhngi-OWnQv7GVbjgDgayffKf0HE4tsnUSxzTZtVyhQb0eYySX_YJTwzDb3_4w.jpeg_tbtocn.jpg'
  },
  {
    title: 'SEO-Friendly Development',
    desc: 'Developing your website with SEO best practices in mind ensures better visibility on search engines.',
    icon: Search,
    items: ['Clean Code: Write clean, efficient code that enhances site speed and search engine crawlability.', 'Meta Tags and Descriptions: Optimize meta tags, titles, and descriptions to improve search engine rankings.', 'URL Structure: Create SEO-friendly URLs that are easy to read and include relevant keywords.', 'Mobile Optimization: Ensure your website is mobile-friendly, as search engines prioritize mobile-first indexing.', 'Schema Markup: Implement structured data to provide search engines with detailed information about your content.'],
    image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1778913307/AQM5zOr1mE10YvXCLQ7Aqi5LxV4arbCzw5GjIs3hnhGK5isUuEaRjbbFdLo9XWyyyhASiM-c5TnANSoZT_EqlGr-XrITLEsllYqYXx59b92xe8vXAiN94o_68jEYpN0z17nE6qDPz_2DD4bRKTSyR3f72LmnQw.jpeg_gyxper.jpg'
  },
];

const timeline = [
  {
    week: 'Phase 1',
    title: 'Requirement Gathering & UI/UX Design',
    items: ['Technical briefing', 'Wireframing and UX planning', 'Design Mockups & Prototypes'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 2',
    title: 'Frontend & Frontend Dev',
    items: ['Clean HTML5/CSS3 coding', 'Responsive design execution', 'Interactive elements setup', 'Frontend library configuration'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 3',
    title: 'Backend & System Integration',
    items: ['Database schema setup', 'API implementation', 'CMS integration', 'Payment & Third-party tool connection'],
    extraTitle: null,
    extraItems: []
  },
  {
    week: 'Phase 4+',
    title: 'Testing, SEO & Deployment',
    items: ['Cross-browser & Speed testing', 'SEO audits & sitemaps', 'Production launch', 'Ongoing backups & maintenance'],
    extraTitle: null,
    extraItems: []
  },
];

const whyChoose = null;

const WebDevelopment = () => {
  const accentColor = '#4b92f7';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Web Development Services - Digimarketing Art</title>
        <meta name="description" content="Custom web development services by Digimarketing Art. Responsive websites, e-commerce, CMS, and high-performance web solutions for your business." />
        <meta name="keywords" content="web development services, website design, e-commerce development, CMS development, responsive web design, web application development" />
      </Head>
      {/* Hero */}
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1782206551/AQPtfMTdXenTSHdEMkCB5IaKhzMJe2Wkus4xNjfUIhV9Madkw6qM-JqQ5ZESNn1nN_dDSrXdGD6-4z-ZM18O3o_OFo2uoW5yX_ipfA5xijWA_IIDulZBU-KTYCyKA590F5ZsIgsxoE4BC9gHrZKyUQj-ePf_sA.jpeg_g8skaa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 16, fontWeight: 700 }}>WEB DEVELOPMENT | CUSTOM SOLUTIONS</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              CODE THAT <span style={{ color: accentColor }}>SCALES!</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 36, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Elevate Your Brand with Strategic Web Development. We build high-performing, secure, and scalable websites tailored to your business goals.
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
      <section id="overview" style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>WEB DEVELOPMENT | CUSTOM SOLUTIONS Services</span></span>
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
      <section style={{ padding: '100px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}><span style={{ textTransform: 'uppercase' }}>WEB DEVELOPMENT | CUSTOM SOLUTIONS Process</span></span>
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
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #0a1f3c 50%, #222222 100%)', position: 'relative', overflow: 'hidden' }}>
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
      <ContactForm accentColor="#4b92f7" showOffices={false} />
    </div>
  );
};

export default WebDevelopment;


