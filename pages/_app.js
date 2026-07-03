import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import '../styles/globals.css';

function ScrollToTop() {
  const { pathname, hash, asPath } = useRouter();

  useEffect(() => {
    if (hash === '#work') {
      const el = document.getElementById('work');
      if (el) {
        setTimeout(() => {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .scroll-reveal-child');
      revealEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === '/contact' || href?.endsWith('/contact')) {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            e.preventDefault();
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = contactSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
        <CookieBanner />
        <div className="page-utils">
          <a
            href="tel:+919056544487"
            className="util-btn util-btn-call"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://wa.me/919056544487?text=Hi%20Digimarketing%20Art%20team%2C%20I%20need%20help%20with%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="util-btn util-btn-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          {showTopBtn && (
          <button
            type="button"
            className="util-btn util-btn-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
