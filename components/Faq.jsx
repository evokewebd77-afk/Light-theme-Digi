import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

function FaqRow({ faq, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <div className={`faq-row ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-row-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-row-q">{faq.q}</span>
        <span className="faq-row-toggle">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        className="faq-row-collapse"
        style={{
          maxHeight: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="faq-row-body" ref={bodyRef}>
          <p>{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

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
    <section id="faqs" className="faq-split-section">
      <div className="container">
        <div className="faq-split-wrapper">
          
          {/* Left Column: Sticky Heading & Contact Button */}
          <div className="faq-split-left">
            <span className="faq-label-pill">FAQS</span>
            <h2 className="faq-split-title">
              Everything You Need <br />
              <span className="font-display-italic">To Know</span>
            </h2>
            <p className="faq-split-desc">
              Have a question that's not answered here? Our team is always ready to discuss your specific project needs.
            </p>
            <a href="#contact" className="faq-split-cta">
              Contact Us <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Column: Clean Borderless Accordion */}
          <div className="faq-split-right">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <FaqRow
                  key={idx}
                  faq={faq}
                  isOpen={isOpen}
                  onToggle={() => setOpenIdx(isOpen ? -1 : idx)}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Faq;
