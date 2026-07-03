import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What makes your agency different from others?",
      a: "We focus on creating premium digital experiences that combine modern design, smooth interactions, high performance, and strategic branding to help businesses stand out online."
    },
    {
      q: "Do you only design websites or also develop them?",
      a: "We provide end-to-end services, handling both design (UI/UX) and development. We build custom, responsive, high-performance websites using modern tech stacks to ensure a seamless transition from concept to launch."
    },
    {
      q: "How do you approach a new project?",
      a: "We start with deep research into your market, competitors, and goals. Then, we create wireframes and visual designs, refine them based on your feedback, develop the site with clean code, and run thorough testing before launching."
    },
    {
      q: "Do you create fully custom websites?",
      a: "Yes, all our websites are fully custom-built from scratch. We do not use generic templates, ensuring your brand gets a unique, tailored digital presence that stands out from competitors."
    },
    {
      q: "What technologies power your websites?",
      a: "We use modern, industry-standard technologies like React, Vite, Next.js, and high-performance hosting services. We focus on clean, scalable code that ensures longevity and ease of maintenance."
    },
    {
      q: "Are your websites optimized for speed and performance?",
      a: "Absolutely. Performance is at the core of our development. We optimize assets, leverage code-splitting, use modern image formats, and implement best practices to ensure lightning-fast load times and perfect SEO scores."
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Yes, we provide ongoing support, maintenance, and optimization packages. We monitor performance, handle updates, and make continuous refinements to ensure your digital platform stays secure and grows with your business."
    },
    {
      q: "How involved can clients be during the process?",
      a: "We believe in collaborative partnership. We set up regular touchpoints, share progress at each milestone (design, development, staging), and collaborate closely with your team to ensure the final product perfectly aligns with your vision."
    }
  ];

  return (
    <section id="faqs" style={{ position: 'relative', padding: 'var(--section-padding) 0', width: '100%', overflow: 'hidden' }}>
      <div className="faq-bg" />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .faq-bg {
          position: absolute;
          inset: 0;
          background: url('https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781675350/ef0f0851-fa99-4097-aea4-3688df45ee59_vlhtrb.png') center / cover no-repeat;
          background-attachment: scroll;
          pointer-events: none;
        }
        .faq-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(247, 246, 243, 0.55) 0%, rgba(255, 255, 255, 0.40) 100%);
        }

        #faqs .section-label {
          background: rgba(215, 61, 86, 0.08);
          color: #d73d56;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 99px;
          width: fit-content;
        }

        #faqs h2 {
          color: var(--text-primary) !important;
          font-family: var(--font-display);
        }

        #faqs h2 .font-display-italic {
          color: #d73d56;
          font-style: italic;
        }

        #faqs p {
          color: var(--text-secondary) !important;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          width: 100%;
        }
        @media (min-width: 992px) {
          .faq-layout {
            grid-template-columns: 1fr 1.25fr;
            gap: 80px;
          }
        }

        .faq-left-col {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 28px;
          padding: 40px 36px;
          border: 1px solid rgba(229, 228, 224, 0.7);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.02),
                      inset 0 1px 1px #fff;
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: left;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        .faq-right-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 18px;
          border: 1px solid rgba(229, 228, 224, 0.5);
          padding: 16px 24px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 8px;
          cursor: pointer;
        }
        .faq-item:hover {
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(215, 61, 86, 0.15);
        }
        .faq-item.active {
          background: #ffffff;
          border-color: #d73d56;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04), 
                      inset 0 1px 1px #fff;
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 8px 0;
        }

        .faq-question-text {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-body);
          transition: all 0.3s ease;
          line-height: 1.5;
        }
        .faq-item.active .faq-question-text {
          color: #d73d56;
          transform: translateX(4px);
        }

        .faq-toggle-icon {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(229, 228, 224, 0.8);
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .faq-item.active .faq-toggle-icon {
          background: #d73d56;
          border-color: #d73d56;
          color: #fff;
          box-shadow: 0 8px 20px rgba(215, 61, 86, 0.25);
        }

        .faq-answer-container {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        .faq-answer-text {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.8;
          padding: 8px 0 12px 0;
        }

        .faq-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 16px;
        }
        .faq-stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .faq-stat-value {
          font-size: 38px;
          font-weight: 800;
          color: #d73d56;
          line-height: 1;
          font-family: var(--font-display);
        }
        .faq-stat-label {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .faq-trusted {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 16px;
        }
        .faq-avatars {
          display: flex;
        }
        .faq-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }
        .faq-avatar + .faq-avatar {
          margin-left: -10px;
        }
        .faq-trusted-text {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .faq-trusted-sub {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        @media (max-width: 575px) {
          .faq-layout {
            gap: 40px;
          }
          .faq-left-col {
            gap: 24px;
            padding: 32px 24px;
            border-radius: 20px;
          }
          .faq-stat-grid {
            gap: 16px;
          }
          .faq-stat-value {
            font-size: 30px;
          }
          .faq-stat-label {
            font-size: 10px;
          }
          .faq-item {
            padding: 12px 16px;
            border-radius: 14px;
          }
          .faq-question-text {
            font-size: 15px;
          }
          .faq-toggle-icon {
            width: 32px;
            height: 32px;
          }
          .faq-toggle-icon svg {
            width: 14px;
            height: 14px;
          }
          .faq-answer-text {
            font-size: 13.5px;
            line-height: 1.7;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="faq-layout">
          
          <div className="faq-left-col">
            <div className="reveal">
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '24px', lineHeight: '1.15' }}>
                Everything You Need <br />
                <span className="font-display-italic">To Know</span>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.7', maxWidth: '460px' }}>
                Premium web design, development, branding, and performance optimization — crafted to elevate your digital presence.
              </p>
            </div>

            <div className="faq-stat-grid">
              {[
                { value: '200+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '8+', label: 'Years Experience' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="faq-stat-item">
                  <div className="faq-stat-value">{s.value}</div>
                  <div className="faq-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="faq-trusted">
              <div className="faq-avatars">
                <div className="faq-avatar" style={{ background: '#d73d56', color: '#fff' }}>D</div>
                <div className="faq-avatar" style={{ background: '#1D8DCA', color: '#fff' }}>S</div>
                <div className="faq-avatar" style={{ background: '#3A8C3A', color: '#fff' }}>E</div>
              </div>
              <div>
                <div className="faq-trusted-text">Trusted by industry leaders</div>
                <div className="faq-trusted-sub">From startups to enterprises</div>
              </div>
            </div>
          </div>

          <div className="faq-right-col">
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question-text">
                      {faq.q}
                    </h3>
                    <div className="faq-toggle-icon">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>

                  <div 
                    className="faq-answer-container"
                    style={{
                      maxHeight: isOpen ? '160px' : '0',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p className="faq-answer-text">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}

export default Faq;
