import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projectsData';

function Portfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const autoPlayRef = useRef(null);

  // Responsive visible slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setVisibleSlides(1);
      else if (window.innerWidth <= 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, projects.length - visibleSlides);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    if (index > maxSlide) index = maxSlide;
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    autoPlayRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isPaused, nextSlide, maxSlide]);

  return (
    <>
      {/* Featured Work Slider */}
      <section id="work" className="work-section">
        <div className="work-bg-image" />
        <div className="work-text-overlay" />
        <div className="container">
          <div className="work-header">
            <div>
              <h2 className="section-title">Turning Ideas Into<br /><span className="font-display-italic">Digital</span> Success</h2>
              <p className="work-subtitle">We create premium marketing experiences that generate leads, increase revenue, and build unforgettable brands.</p>
            </div>
            <Link href="/case-studies" className="work-link">View Case Studies ↗</Link>
          </div>

          <div className="portfolio-slider-wrapper" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="portfolio-slider">
              <div className="slider-track" style={{ transform: `translateX(-${activeSlide * (100 / visibleSlides)}%)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="portfolio-slide">
                    <div className="portfolio-card">
                      <div className="portfolio-image" style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="portfolio-overlay" />
                      </div>
                      <div className="portfolio-content">
                        <span className="portfolio-category">{project.category}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link href={`/case-studies/${project.slug}`} className="explore-btn">Explore Project</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="slider-controls">
              <button className="slider-nav slider-prev" onClick={prevSlide} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <div className="slider-dots">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
              <button className="slider-nav slider-next" onClick={nextSlide} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="slider-counter">
            <span>{String(activeSlide + 1).padStart(2, '0')}</span>
            <span className="divider">/</span>
            <span>{String(maxSlide + 1).padStart(2, '0')}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
