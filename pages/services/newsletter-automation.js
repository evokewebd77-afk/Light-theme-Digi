import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Palette, Users, Shield, Zap, Sliders, Target, BarChart3 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const features = [
  { icon: Zap, title: 'Auto-Pipeline', desc: 'Seamlessly curate, schedule, and deploy personalized newsletters. Powered by behavior analytics to ensure your audience reads every word.' },
  { icon: Palette, title: 'Bespoke Design', desc: 'No generic templates. We engineer responsive, high-fidelity visual experiences that align perfectly with your brand identity.' },
  { icon: Users, title: 'Engagement Scale', desc: 'Transform passive subscribers into active advocates. Deliver consistent value that builds long-term loyalty and trust.' },
];

const process = [
  { step: '1', title: 'Discovery', desc: 'We deep-dive into your audience data, brand voice, and goals to create a comprehensive foundation.', items: ['Audience segmentation analysis', 'Brand voice definition', 'Competitive landscape review'] },
  { step: '2', title: 'Strategy', desc: 'We build a comprehensive content calendar with segmentation tags and automation triggers tailored to your goals.', items: ['Content calendar mapping', 'Segmentation strategy', 'Automation workflow design'] },
  { step: '3', title: 'Creation', desc: 'Our designers and copywriters craft high-fidelity visual experiences and compelling copy that converts.', items: ['Custom responsive design', 'Brand-aligned copywriting', 'Mobile-optimized layouts'] },
  { step: '4', title: 'Launch', desc: 'We deploy your newsletters, monitor performance metrics, and continuously optimize for maximum engagement and ROI.', items: ['Automated deployment', 'Performance analytics', 'Continuous optimization'] },
];

const industries = [
  { title: 'E-Commerce', desc: 'We craft high-conversion product drops and automates abandoned cart flows that recover revenue while you sleep.' },
  { title: 'SaaS & Tech', desc: 'We design user onboarding sequences and feature announcements that reduce churn and turn trial users into loyal advocates.' },
  { title: 'Creators', desc: 'We help you own your audience. We transform social followers into email subscribers with exclusive, beautifully designed digests.' },
  { title: 'Agencies & B2B', desc: 'We position you as a thought leader by automating case study distribution and nurturing cold leads into sales-ready prospects.' },
  { title: 'Real Estate', desc: 'We keep you top-of-mind with automated local market updates and stunning new listing alerts that drive inquiries.' },
  { title: 'Finance & Fintech', desc: 'We build trust through consistent, expert-led market insights and personalized financial advice digests that secure client confidence.' },
  { title: 'Health & Wellness', desc: 'We engage your community with automated wellness tips, class schedules, and success stories to boost retention.' },
  { title: 'Education & EdTech', desc: 'Nurture student growth and alumni relations with automated course digests, learning resources, and event updates.' },
];

const edge = [
  { icon: Shield, title: '99% Deliverability', desc: 'We protect your domain reputation rigorously. Your emails land in the Primary Inbox, not Spam or Promotions.' },
  { icon: BarChart3, title: 'Creative + Data', desc: 'The perfect blend of soulful, high-end design and cold, hard data analytics. We make it look good and perform better.' },
  { icon: Zap, title: 'Full Management', desc: 'You approve the content; we handle the tech, tags, triggers, and list hygiene. 100% hands-off growth for you.' },
  { icon: Sliders, title: 'Hyper-Segmentation', desc: 'Stop blasting everyone. We segment your list based on behavior and purchase history for maximum relevance.' },
  { icon: Target, title: 'Conversion Focused', desc: 'Pretty emails are vanity. Profitable emails are sanity. Every design decision is backed by CRO principles to drive clicks.' },
];

const NewsletterAutomation = () => {
  const accentColor = '#06b6d4';
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Newsletter Automation Services - Digimarketing Art</title>
        <meta name="description" content="AI-powered newsletter automation to scale your reach. Digimarketing Art creates personalized, automated email campaigns that drive engagement." />
        <meta name="keywords" content="newsletter automation, email marketing, AI email campaigns, automated newsletters, email automation, email marketing agency" />
      </Head>
      <section style={{ padding: '120px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782446648/AQNrGT8lTfFTj_y3LiYNH_c0IT1ZBJRDz-_VGotPkNT_EenaBfJ5v96LbtCR0wXwkl82ejlefwltVpPCDUsb1YBxvwK7RLuVbtj4nFw4eP92_2_dEAutap8NYHy8q1ERPiZ33E_xTajcFOHuERaj51368nkBWg.jpeg_azttjn.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 12, fontWeight: 700 }}>Newsletter Automation</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16, fontFamily: 'var(--font-display)', color: '#fff' }}>
            PREMIUM NEWSLETTERS<br />
            <span style={{ color: accentColor }}>ON AUTOPILOT WITH AI</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            We provide Automated AI Newsletter Services with custom, high-fidelity design for companies and brands, ensuring close, personalized customer relationships at scale.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: accentColor, color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Launch Your Newsletter <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(6px)' }}>
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, fontWeight: 700 }}>Core Features</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginTop: 12 }}><span>Our</span> <span style={{ color: accentColor }}>Engine</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '32px 28px' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${accentColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Icon size={24} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, fontFamily: 'var(--font-display)' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782975822/AQNwYPnAPvapr02BIGRhQTRnj1R4VId_WJ6O9ePeDKD_BsOU6F6IIX4xzi1MgNsz-_6hhwDLAm5m57fIjbKPGJKiViVRD0jYJ4uSkt8G_UU-oRU3n2WQwy2Mpf3CG3ia9mYWBMQk659fpJevB9y5C-rifCrb8Q.jpeg_gzjm5k.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.35)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, fontWeight: 700 }}>Our Process</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginTop: 12 }}>The <span style={{ color: accentColor }}>Blueprint</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 12 }}>Four simple steps from concept to inbox</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {process.map(p => (
              <div key={p.step} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', position: 'relative' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: accentColor, opacity: 0.15, fontFamily: 'var(--font-display)', lineHeight: 1, position: 'absolute', top: 16, right: 20 }}>{p.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ fontSize: 13, color: 'var(--text-secondary)', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, fontWeight: 700 }}>Target Audience</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginTop: 12 }}>Industries We <span style={{ color: accentColor }}>Empower</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {industries.map(ind => (
              <div key={ind.title} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 12, padding: '24px 20px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8, color: accentColor }}>{ind.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1782976229/AQMNSklSJAJgv5MmqrsD99jIURUATeKJp0yXgC6heBRgxTi2GybiwSrmzvn6J2YzXIOKDRBKLN8sd6Krd2esRcaKIB0wkHldzb6VQRByrt9B9LQpoFPfmz70L1lJn_LQC55vC66wvAHTkVIsfNaCWugbWit-Pw.jpeg_amxaol.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.35)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: accentColor, fontWeight: 700 }}>Our Edge</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginTop: 12 }}>Why Leading Brands Choose <span style={{ color: accentColor }}>Us</span></h2>
            <p style={{ color: '#111', fontSize: 16, marginTop: 12, fontWeight: 500 }}>We don't just send emails; we build assets. Stop relying on social algorithms and start owning your audience.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {edge.map(e => {
              const Icon = e.icon;
              return (
                <div key={e.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${accentColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon size={24} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm accentColor={accentColor} showOffices={false} />
    </div>
  );
};

export default NewsletterAutomation;
