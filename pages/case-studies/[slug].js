import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../../data/projectsData';
import ItcIndiaCaseStudy from './itc-india';
import SustainableFuturesCaseStudy from './sustainable-futures';
import EurocertCaseStudy from './eurocert';

const caseStudyPages = {
  'itc-india': ItcIndiaCaseStudy,
  'sustainable-futures': SustainableFuturesCaseStudy,
  'eurocert': EurocertCaseStudy,
};

function CaseStudyDetail({ project, slug }) {

  if (!project) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <Head>
          <title>Case Study Not Found - Digimarketing Art</title>
          <meta name="description" content="The requested case study could not be found." />
          <meta name="keywords" content="case study, digital marketing case study, client success story" />
        </Head>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Case Study not found</h2>
        <Link href="/case-studies" style={{ color: '#d73d56', fontWeight: 'bold' }}>&larr; Back to Case Studies</Link>
      </div>
    );
  }

  // If a dedicated page exists for this slug, render it
  const DedicatedPage = caseStudyPages[slug];
  if (DedicatedPage) {
    return <DedicatedPage />;
  }

  // Default generic detail page for other case studies
  return (
    <div style={{ paddingTop: '100px' }}>
      <Head>
        <title>{`${project.title} - Case Study | Digimarketing Art`}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`case study, ${project.title}, digital marketing results, client success, marketing case study`} />
        <link rel="canonical" href={`https://www.digimarketingart.com/case-studies/${project.slug}`} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.digimarketingart.com/case-studies/${project.slug}`} />
        <meta property="og:image" content={project.image} />
      </Head>
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d73d56', display: 'block', marginBottom: 16, fontWeight: 700 }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, fontFamily: 'var(--font-display)', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            {project.title}
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '40px', fontWeight: 600, fontSize: '14px' }}>
            <ArrowLeft size={16} /> Back to all case studies
          </Link>
          
          <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Project Overview
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
              {project.description}
            </p>
            
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#d73d56', border: '2px solid #d73d56', padding: '12px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 700, color: '#fff', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }}>
                Visit Project Website ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const staticSlugs = ['itc-india', 'sustainable-futures', 'eurocert'];
  const paths = projects
    .filter((p) => !staticSlugs.includes(p.slug))
    .map((p) => ({
      params: { slug: p.slug },
    }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;
  return {
    props: {
      project,
      slug: params.slug,
    },
  };
}

export default CaseStudyDetail;
