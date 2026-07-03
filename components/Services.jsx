import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Camera, Code, Bot, Smartphone, ShoppingCart, Settings, Building2, Monitor, Target } from 'lucide-react';

const serviceColors = [
  '#fef3c7', // Soft Yellow
  '#d1fae5', // Soft Mint
  '#f3e8ff', // Soft Purple
  '#dbeafe', // Soft Blue
  '#e0e7ff', // Soft Indigo
  '#fce4ec', // Soft Pink
  '#f3e8ff', // Soft Lavender
  '#fef9c3', // Light Lemon
  '#d1fae5', // Soft Mint
  '#e0f2fe', // Light Sky
  '#ede9fe', // Soft Violet
  '#fce7f3', // Light Rose
];

const serviceBgs = [
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781592817/AQOjVmfkjAY05UQO_v-2YfIVedbv1lQ54PPD4cHdcFONxRaA3yM25WDdqG5dXLFD0oMLRME1EcYxgZfVCGCZy91yQQ3q-NxkqFOD4IPeAC58QB_8HujtG4PXvpLESwhmRhHP9Hq3Y2rhqhF3WPUuGgk9Wr9vlA.jpeg_iiee4y.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781593502/AQNl_5UrSvdowzZbu-UjBme3Zq9SZ_w_prJd4oymoiUSwN5Z5jRHps13UBGqLxI83cCbPFy-aOt2_smiX9B7j9og749a5lEWqzlkUvSEMRGtyRNOmTr5jdZhSCbrCcDz86PQgqqw-nZ5Ft8CocptYRHG7tIi4g.jpeg_l4a6t5.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781593544/AQMbV_kdaTEuKlq9s1VSsElXJTKSPjIF54_kwq8FS5eZ-ynfqNnNmRjMLDnjVDZKwwxruG_L4HH7x4FSRpKXubIDcVUKaQAB-96oIttZ_s3yrpbZJa67lbQhb0k3l-hTw2tmVFgsHJI_MyfVXzuWzWBXALwjWQ.jpeg_fhwd1b.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781593820/AQNo_hjF0S9DMrTAmdXpqh-M4TKAOSFhn-mMo8koQx9D5T9L4oOpnHpO3klGcfTYvkArxgKx8KuClb3acjbnTuinPFT_UV-nIJNezwLlzNE6q888sH7L3qVC0cdOaW4xs2tbYZU_u9y0Fn2RgLO9ELQ7AwkbSg.jpeg_rwbzbr.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781599625/AQOT3AOJSnPPGvzpxOIxXvnffCgFTF8MELaNTZTHAKe_VpYtfUcAjL6xe0pTy2FtGTKq4F23xQyIf6J6h4c4FRqkmBTtpEJeH8gKNXaPjAEjlkF9WYYBj_WG0eL00JAdlN_GkhY9hdUn6fd40IW_fJUv5aTM.jpeg_uy0keh.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781593347/AQN1kLCZu5-rK_URQGcjehlT6UqoAYlGPjfIwUxpUK_-eGvA-3fa9izdiRkmhssK5Hl067ltvDlJag49dJVohSCp45VG7bkchJEDplr3x8-UL3rNEqKDi-UaJ7nHbGlHFU0cef6kEFxHFFoJW04mMtPnWhgf5Q.jpeg_ufuozb.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781593664/AQMLg7JnSRuQ0F0hG5Wk33M2-26W2tpO1j31rLAMjIysgyfwkVq6XNqqJGW50dAhPGmtp1utZ9dBjL3C7DJ97bvDkTEBUjsFH849e9S5R0mOveGfWUVwTr4ceWetLehqSPkx2CWUZAJM1M9H23ueYPYJhLytzQ.jpeg_y1gn8m.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781594288/AQOblpRR9KLWbyFSukWgHj3GfDSZjRxW6jeJxQTacdEbVGxSMpfn1iHC1HO8nFAjrEb4JFfA0xITJAJjAfmpeFuTvhE6YaVMpqx6CXSRgfxXMh2fBo2v8L9dV0rs3CkcRgDj50X4iYzMtqDX_kcqwgPg6MNbDg.jpeg_wngd1m.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781598945/AQM1bX9bEGohbLL0R29VJuKBba-pCR5uTGGd5InCYY_o_PqwJXulZH0wh2BRoH1PS5Hg_UfriAdCD8P71JwmzFHut_5sAE8GHPmvfOB2S-EE5BYuWo4vUSmJzvRP19ejcBB5wEyx1eDe8Eri9ZzAeBK5DxvuCg.jpeg_ygxlgw.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781599765/AQNCKebpEtAzb5uXteFqPWkuZDLXMK7DoaSsiVs6nJa_3uf7Yi9zXCWizbJEeeT2r8nUJ2sqKj5uaLL9nN5Zdpgn2q892oMHYrpGWD1Gwi4YqQb6EevY15xMwhfgAcEeTY_WAefTAggRN3DOv0ifIxDKE8ApdQ.jpeg_sqleai.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781599217/AQPL6NcmbVTG2Q8JEBRM3g6lVV4tlehXTV4EwfS6HDCDi_UHQos36isAYs9QQPGE9_VXy1WhzgWzlM4zhj8FDRzDOX0boiYamTZpKnEu1urKBamTOAXK5G90v4pYYbXypYlb6XDTrWUnAZHqROskXqq4S0dOpA.jpeg_s00gji.jpg',
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781598304/AQMBNq0QG0MaLhtX8W8qM6n0FAlm2jhC5hRnyNgKrQnL5DgaY-hDYgJqLFL2jtYNCRwFBTFrZ40lTIZ6p50Hx2qa0Gx2bTmG5WkrGPCWcegQrL_SOZb6KhdnhhcO3vo0E6-Gqt9VItBZDXy9upEoT8io8BLtBg.jpeg_l3vfel.jpg',
];

function Services() {
  const services = [
    { title: 'Digital Marketing Audit', desc: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit', icon: ShoppingCart, path: '/services/digital-marketing-audit' },
    { title: 'Graphic Designing', desc: 'Design eye-catching visuals that effectively communicate your brand message.', icon: Camera, path: '/services/graphic-design' },
    { title: 'Influencer Marketing', desc: 'Creator partnerships, UGC campaigns and performance tracking.', icon: Settings, path: '/services/influencer-marketing' },
    { title: 'PPC', desc: 'Drive targeted traffic to your website and increase conversions with PPC ads.', icon: TrendingUp, path: '/services/ppc' },
    { title: 'SEO', desc: 'Improve your search ranking and attract qualified leads organically.', icon: TrendingUp, path: '/services/seo' },
    { title: 'Lead Generation', desc: 'Generate High-Quality Leads & Boost Conversions Effortlessly', icon: Target, path: '/services/lead-generation' },
    { title: 'SMM', desc: 'Grow your brand awareness and engagement on social media platforms.', icon: Camera, path: '/services/smm' },
    { title: 'Content Writing', desc: 'Create compelling content that engages your audience and boosts conversions.', icon: Smartphone, path: '/services/content-writing' },
    { title: 'Data Mining', desc: 'Extract Actionable Insights with Advanced Data Mining Solutions!', icon: Building2, path: '/services/data-mining' },
    { title: 'Web Development', desc: 'Craft a user-friendly, high-performing website to achieve your business goals.', icon: Code, path: '/services/web-development' },
    { title: 'Newsletter Automation', desc: 'Newsletter Automation with AI to scale your reach.', icon: Monitor, path: '/services/newsletter-automation' },
    { title: 'Training Courses', desc: 'We offers a wide range of training courses in Digital Marketing and AI Tools.', icon: Bot, path: '/services/ai-training' },
  ];

  const scrollRef = useRef(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    // No automatic scrolling. Cards are purely a static grid on all devices.
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-digital-bg" />
      <div className="services-bg-image" />
      <div className="services-text-overlay" />
      <div className="container">
          <div className="section-header">
            <div className="section-header-row">
              <div>
                <span className="section-label">Our Expertise</span>
                <h2 className="section-title">Our Specialized <span className="font-display-italic">Services</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginTop: '16px', maxWidth: '700px', lineHeight: '1.8' }}>We provide a comprehensive suite of digital marketing solutions designed to scale your business.</p>
              </div>
              <Link href="/services" className="section-link">View all services ↗</Link>
            </div>
          </div>

          {/* Static Grid View (2 Columns on Mobile, 3+ on Desktop) */}
          <div className="tw-cases desktop-cases">
            {services.map((s, i) => {
              const color = serviceColors[i % serviceColors.length];
              const bg = serviceBgs[i % serviceBgs.length];
              
              const cardStyle = {
                '--card-accent': color,
                backgroundColor: color,
              };
              return s.title === 'Training Courses' ? (
                <div key={`${s.title}-${i}`} className="service-card" style={{ cursor: 'default', ...cardStyle }}>
                  <img loading="lazy" src={bg} className="service-image" alt={s.title} />
                  <div className="service-text">
                    <h3>{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                  </div>
                </div>
              ) : (
                <Link key={`${s.title}-${i}`} href={s.path} className="service-card" style={{ textDecoration: 'none', ...cardStyle }}>
                  <img loading="lazy" src={bg} className="service-image" alt={s.title} />
                  <div className="service-text">
                    <h3>{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>


      </div>
    </section>
  );
}

export default Services;
