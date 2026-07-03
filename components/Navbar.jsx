import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <img
              src="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png"
              alt="Digimarketing Art"
              className="header-logo"
            />
            <span className="nav-brand-text">
              <span className="nav-brand-top"><span className="brand-cap">D</span>igital <span className="brand-cap">A</span>dvertisement</span>
              <span className="nav-brand-bottom">MARKETING NETWORK</span>
            </span>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.href + link.label} 
                href={link.href} 
                className={`nav-link ${router.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="nav-cta">
            Brief Us <ArrowUpRight size={14} />
          </Link>

          <button 
            className="dma-menu-btn" 
            onClick={() => setMobileOpen(true)} 
            aria-label="Open menu"
          >
            <Menu size={24} color="#ffffff" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} color="#111" />
          </button>
          <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link, idx) => (
              <Link 
                key={link.href + link.label} 
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className="mobile-menu-link"
              >
                <span className="mobile-menu-number">{String(idx).padStart(2, '0')}</span>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mobile-menu-cta">
              Brief Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
