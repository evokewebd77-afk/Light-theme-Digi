import Head from 'next/head';
import React, { useState } from 'react';
import { ArrowRight, Search, Clock, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../../data/blogData';

const featuredPosts = blogPosts.slice(0, 2);
const allPosts = blogPosts;

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category).filter(Boolean)))];

const Blogs = () => {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = allPosts.filter((p) => {
    const matchCat = activeCat === 'All' || p.category === activeCat;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Blog - Digimarketing Art | Digital Marketing Insights</title>
        <meta name="description" content="Read the latest blogs from Digimarketing Art on digital marketing, SEO, PPC, social media, design, and AI-powered strategies to grow your business." />
        <meta name="keywords" content="digital marketing blog, marketing insights, SEO blog, PPC tips, social media marketing blog, digital marketing trends" />
        <link rel="canonical" href="https://www.digimarketingart.com/blogs" />
        <meta property="og:title" content="Blog - Digimarketing Art | Digital Marketing Insights" />
        <meta property="og:description" content="Read the latest blogs from Digimarketing Art on digital marketing, SEO, PPC, social media, design, and AI-powered strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digimarketingart.com/blogs" />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Digimarketing Art | Digital Marketing Insights" />
        <meta name="twitter:description" content="Read the latest blogs from Digimarketing Art on digital marketing, SEO, PPC, social media, and AI-powered strategies." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
      </Head>
      {/* Hero */}
      <section style={{
        padding: '120px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781933400/1be48cc5-89ed-4a9c-bb68-846e73d99a25_if8rvp.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 16, fontWeight: 600 }}>
            DIGIMARKETINGART BLOGS | INSIGHTS & UPDATES
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#fff' }}>
            LATEST<br /><span className="font-display-italic">INSIGHTS</span>
          </h1>
          <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            Stay ahead with our curated collection of industry insights, expert opinions, and the latest trends in digital marketing, technology, and business strategy.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 8, fontWeight: 700 }}>Featured Articles</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, fontFamily: 'var(--font-display)', margin: 0, color: '#111' }}>Top Stories This <span className="font-display-italic">Week</span></h2>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('all-articles');
                if (el) {
                  const offset = 100;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}
            >
              View All Blogs <ArrowRight size={15} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 28 }}>
            {featuredPosts.map((p) => (
              <Link
                key={p.title}
                href={`/blogs/${p.slug}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <article
                  style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: 20,
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ height: 4, background: '#d73d56' }} />
                  <div style={{ padding: '32px 28px' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(215,61,86,0.1)', color: '#d73d56', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 12px', borderRadius: 100, marginBottom: 14 }}>{p.category}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.3, marginBottom: 10, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Clock size={13} /> {p.readTime}</span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section id="all-articles" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781932671/AQOma43agczPqtvLOa4WJkFMQQB0mWaA3NuQoz-uQ1EIIGqmrN9DUjL447KX4GzfM9OG_4QmXCoIjdWfQ8lPVxx6_qA5EnRI2xmI3bUvbpdXAiK4Xw4fCPnrISJlpzAR4uWAMPwPsKIAlNsmeqCCZaONDLi1zw.jpeg_owkrbc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.35)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: 32, textAlign: 'center', color: '#111' }}>All <span className="font-display-italic">Articles</span></h2>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 500, margin: '0 auto 32px' }}>
            <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#666', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search blogs by title, category, or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '14px 16px 14px 46px', borderRadius: 100, border: '1px solid var(--border-color)', background: 'var(--bg-primary)', fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box' }}
            />
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: '8px 24px',
                  borderRadius: 100,
                  border: 'none',
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  background: activeCat === cat ? '#d73d56' : 'var(--bg-primary)',
                  color: activeCat === cat ? '#fff' : 'var(--text-secondary)',
                  border: activeCat === cat ? 'none' : '1px solid var(--border-color)',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 32 }}>
            Showing {filtered.length} of {allPosts.length} articles
          </p>

          {/* Article list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filtered.map((p) => (
              <Link
                key={p.title}
                href={`/blogs/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 16,
                    padding: '28px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 24,
                    flexWrap: 'wrap',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ flex: 1, minWidth: 250 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(215,61,86,0.1)', color: '#d73d56', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '3px 10px', borderRadius: 100 }}>{p.category}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{p.date}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.3, marginBottom: 6, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.excerpt}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-secondary)' }}><User size={13} /> {p.author}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-secondary)' }}><Clock size={13} /> {p.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section style={{
        padding: '100px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#111', marginBottom: 16, lineHeight: 1.15 }}>
            Subscribe to Our <span className="font-display-italic">Newsletter</span>
          </h2>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            Get the latest insights, trends, and expert opinions delivered directly to your inbox. Join our community of forward-thinkers.
          </p>
          <div style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ flex: 1, minWidth: 240, padding: '14px 20px', borderRadius: 100, border: '1px solid #ddd', fontSize: 14, background: '#fff', color: '#333' }}
            />
            <button style={{ padding: '14px 32px', background: '#d73d56', color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <div style={{ textAlign: 'center', padding: '24px', background: 'var(--bg-secondary)' }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: 13, textDecoration: 'none' }}>
          Back to top <ChevronDown size={14} style={{ transform: 'rotate(180deg)' }} />
        </a>
      </div>
    </div>
  );
};

export default Blogs;
