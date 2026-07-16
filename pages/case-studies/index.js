import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { projects } from '../../data/projectsData';

function CaseStudies() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>Case Studies - Digimarketing Art | Our Work</title>
        <meta name="description" content="Explore how Digimarketing Art has helped brands transform their digital presence and achieve extraordinary growth through our case studies." />
        <meta name="keywords" content="case studies, digital marketing case studies, marketing success stories, portfolio, client results" />
      </Head>
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_100/v1782450236/AQPZBsgnP5kS4iazNp5X-e0yK6Y_-w0NFC2ACot9DJdrsmGivcbODzmFYC2_8-822-bvqtuoJkjjBr5-2Zz3CCZ0xuopLJtIEJQjk-p6Ub7fXb6hYmsAWRmYv3PkggGjWUzKYQyk7eBxfSDZ0PGzTHsfEsz5hw.jpeg_ym1z15.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 16, fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            OUR WORK
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Case <span className="font-display-italic" style={{ color: '#d73d56' }}>Studies</span>
          </h1>
          <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.8, maxWidth: 600, margin: '0 auto', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Explore how we've helped brands transform their digital presence and achieve extraordinary growth.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_100/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '180px', background: `url(${project.image}) center/cover no-repeat` }} />
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#d73d56', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '16px', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', flex: 1 }}>
                    {project.description}
                  </p>
                  {project.slug !== 'granata' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginTop: 'auto', width: '100%' }}>
                      <Link href={`/case-studies/${project.slug}`} style={{ background: 'transparent', border: '2px solid var(--border-color)', padding: '10px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        Read Full Case Study ↗
                      </Link>
                      {project.slug !== 'plastic-surgery-clinic' && (
                        <a href={project.website || "#"} target="_blank" rel="noopener noreferrer" style={{ background: '#d73d56', border: '2px solid #d73d56', padding: '10px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: '#fff', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
                          Visit Website ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
