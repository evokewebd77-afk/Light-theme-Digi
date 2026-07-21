import { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const getSrcSet = (url) => {
  if (!url || !url.includes('cloudinary.com')) return undefined;
  const baseUrl = url.replace('/f_auto,q_auto/', '/');
  const sizes = [480, 800, 1200, 1600];
  return sizes.map(w => `${baseUrl.replace('/upload/', `/upload/w_${w},c_limit,f_auto,q_auto/`)} ${w}w`).join(', ');
};

const slides = [
  {
    badge: 'Google & Meta Ads Expert',
    headline: ['Performance', 'Marketing That', 'Drives Real', 'Growth.'],
    desc: 'Google Ads, Meta Ads, SEO and content campaigns anchored to measurable KPIs. We don\'t just run ads — we build growth engines that scale profitably.',
    cta: 'Start Your Campaign',
    bg: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781671138/d266cfaa-ada0-41e7-a083-8f45d8a6bdb7_kbvkrr.png',
    accent: '#CB0021',
  },
  {
    badge: 'Creative Performance Agency',
    headline: ['Smart Campaigns', 'That Deliver', 'Stronger, Measurable', 'Business Results.'],
    desc: 'Blending creativity with data to deliver campaigns that engage audiences, increase sales, and build lasting customer relationships.',
    cta: 'Start Your Campaign',
    bg: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781589528/AQNS1bSkPVxSCes1zhF_MvAAvgfx1gjxIbcRMv-rwJELrxk_axbkjIkAbHv5QX-8D5ySrMr60XLn2LULijPn9piuIxqynaWWSA6PQaYSUSlECQZWS17CCMUSraYfyD00LfFk5UVc2eWrrLVSqH8VXFyAWxublQ.jpeg_z0zswn.jpg',
    accent: '#1D8DCA',
    pills: ['Creative', 'Video', 'Social', 'Display', 'Content', 'Optimization'],
  },
  {
    badge: 'Transform Every Blog Into a Powerful Lead Generation Engine',
    headline: ['Strategic', 'Content Marketing', 'That Builds  Trust,', 'and Sustainable Growth.'],
    desc: 'We create SEO-optimized blogs, engaging articles, and strategic content that attracts qualified visitors, builds authority, and converts readers into loyal customers.',
    cta: 'Start Your Campaign',
    bg: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781589750/AQNSeH3Km9cBEmriDzBEKNgNekO5gSTQlLMZjHWWKxE0tvTjg0cJ_8pGh29UBwh8IKptBWi3pR9EZxTPEH0Ew8VNNkV1qX3Oni56Ts5x287PmU53-45q8FSY-COWzJvdnkKmRS4TMdNh4rx9s8vl3VKJzwQ6dg.jpeg_wt8s0i.jpg',
    accent: '#3A8C3A',
    pills: ['Blogs', 'SEO', 'Content Strategy', 'Copywriting', 'Research', 'Analytics'],
  },
  {
    badge: 'AI-Powered Growth Engine',
    headline: ['Scale Your', 'Brand With', 'AI-Powered', 'Marketing.'],
    desc: 'AI automation, conversion optimization and growth engineering. We leverage cutting-edge technology to give your business an unfair competitive advantage.',
    cta: 'Get Started',
    bg: 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781601354/7d10af75-0653-43f9-9fdc-58213dc97094_wrkrdg.png',
    accent: '#F5C84B',
    pills: ['AI Automation', 'AI Strategy', 'ROI Optimization', 'Data Analytics'],
  },
];

const tickerServices = [
  'Strategy & Planning', 'Performance Marketing', 'SEO & Analytics',
  'PPC Management', 'Social Media Marketing', 'Content Strategy',
  'Email Automation', 'Conversion Optimization', 'Brand Consulting',
  'Growth Hacking',
];

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const autoPlayRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => { setIsLoaded(true); }, []);

  useEffect(() => { setAnimKey((k) => k + 1); }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (i) => {
    setCurrentSlide(i);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    autoPlayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isPaused, nextSlide]);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const s = slides[currentSlide];

  return (
    <section
      id="hero"
      className="hero-section"
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image — covers full section */}
      {slides[currentSlide].bg && (
        <div className="hero-bg-overlay">
          <img
            src={slides[currentSlide].bg}
            srcSet={getSrcSet(slides[currentSlide].bg)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            alt=""
            fetchpriority={currentSlide === 0 ? 'high' : 'auto'}
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
          />
        </div>
      )}


      {/* ── TICKER ── */}
      <div className="hero-ticker">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...tickerServices, ...tickerServices].map((t, i) => (
              <span key={i} className="ticker-item">
                <span>{t}</span>
                <span className="ticker-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SLIDER ── */}
      <div className="hero-slider-wrap">
        <div className="hero-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((sl, idx) => (
            <div key={idx} className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}>
              {/* Decorative spinning shape */}
              <div
                className="hero-deco-shape"
                style={{
                  transform: idx === currentSlide
                    ? `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`
                    : undefined,
                }}
              >
                <svg viewBox="0 0 100 100" fill="none">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke={sl.accent} strokeWidth="0.6" fill="none" />
                  <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="#111" strokeWidth="0.3" fill="none" />
                </svg>
              </div>

              {/* Floating deco dots */}
              <div className="hero-deco-dot" style={{ top: '18%', right: '18%', width: 5, height: 5, background: sl.accent, opacity: 0.2, animation: 'hDotFloat 5s ease-in-out infinite' }} />
              <div className="hero-deco-dot" style={{ bottom: '28%', left: '10%', width: 4, height: 4, background: '#111', opacity: 0.1, animation: 'hDotFloat 7s ease-in-out 1.5s infinite' }} />
              <div className="hero-deco-dot" style={{ top: '55%', right: '6%', width: 3, height: 3, background: sl.accent, opacity: 0.15, animation: 'hDotFloat 6s ease-in-out 3s infinite' }} />

              <div className="hero-slide-inner">
                {/* LEFT */}
                <div className="hero-left">
                  <div className="hero-text-card">
                  <div className="hero-badge">
                    <span
                      className="hero-badge-dot"
                      style={{ background: sl.accent, '--pulse-color': `${sl.accent}40` }}
                    >
                      <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: sl.accent, animation: 'hPulse 2s ease infinite' }} />
                    </span>
                    <span className="hero-badge-text">{sl.badge}</span>
                  </div>

                  <h1 className="hero-title">
                    {sl.headline.map((word, wi) => {
                      let cls = '';
                      if (wi === 1) cls = 'accent';
                      return (
                        <span key={wi}>
                          <span className={`word ${cls}`}>{word}</span>{' '}
                          {(wi === 1 || wi === 3) && <br />}
                        </span>
                      );
                    })}
                  </h1>

                  <p className="hero-desc">{sl.desc}</p>

                  <div className="hero-pills">
                    {(sl.pills || ['PPC', 'SEO', 'Social', 'Email', 'Analytics', 'Content']).map((p, i) => (
                      <span key={i} className="hero-pill-item">{p}</span>
                    ))}
                  </div>

                  <div className="hero-ctas">
                    <a href="#contact" className="hero-btn-primary">
                      {sl.cta} <ArrowUpRight size={14} />
                    </a>
                    <a href="#services" className="hero-btn-secondary">
                      View All Services
                    </a>
                  </div>

                  <div className="hero-trust">
                    <div className="hero-trust-avatars">
                      {['#CB0021', '#1D8DCA', '#F5C84B', '#2E61BC'].map((c, i) => (
                        <div key={i} className="hero-trust-avatar" style={{ background: c }}>
                          {['H', 'R', 'F', 'E'][i]}
                        </div>
                      ))}
                    </div>
                    <span className="hero-trust-text">
                      <strong>150+</strong> brands trust us
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="hero-arrows">
          <button className="hero-arrow-btn" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <button className="hero-arrow-btn" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Bottom nav: dots + progress */}
        <div className="hero-bottom-nav">
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="hero-progress-bar">
            <div className="hero-progress-fill" key={animKey} />
          </div>
        </div>

        {/* Counter */}
        <div className="hero-counter">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
