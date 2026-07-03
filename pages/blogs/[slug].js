import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, Clock, User, Calendar, Volume2, VolumeX } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogDetail = ({ post }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    if (!post || !post.body) return;

    // Extract text content from the blog body HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.body;
    const cleanText = tempDiv.innerText || tempDiv.textContent || "";

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Select female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleKeywords = ['zira', 'samantha', 'karen', 'hazel', 'google us english', 'female', 'susan', 'tessa', 'moira'];
    
    let femaleVoice = null;
    for (const keyword of femaleKeywords) {
      const voice = voices.find(v => 
        v.lang.startsWith('en') && 
        v.name.toLowerCase().includes(keyword)
      );
      if (voice) {
        femaleVoice = voice;
        break;
      }
    }

    if (!femaleVoice) {
      femaleVoice = voices.find(v => v.lang.startsWith('en'));
    }

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.95; // Slightly slower for better clarity

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error:", e);
      setIsPlaying(false);
    };

    // Speak
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  if (!post) {
    return (
      <div style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center', minHeight: '80vh', background: 'var(--bg-primary)' }}>
        <Head>
          <title>Blog Not Found - Digimarketing Art</title>
          <meta name="description" content="The requested blog post could not be found." />
          <meta name="keywords" content="blog, digital marketing blog, marketing insights" />
        </Head>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Post Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>The blog post you are looking for does not exist.</p>
        <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 30px', background: 'var(--accent-red)', color: '#fff', borderRadius: '100px', fontWeight: 'bold' }}>
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: '140px', 
      paddingBottom: '100px', 
      backgroundImage: 'url(https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1781687554/AQPqEfQY7KCGO6l6kexc9wZecTTZRzmelId_ulbCzx807tMDAZmY4DXobBKYZObGjmIzJYK4Nz62tRkLCai8IxxQAESf_AJtC2Z_JbfEFO_zQIHgsFCLqSddIMq80Mnc5IhRJ54kG6fkvrc1GYQK24Fz9_tK-w.jpeg_kc4oh6.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Head>
        <title>{`${post.title} - Digimarketing Art Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`digital marketing blog, ${post.title}, ${post.category}, marketing insights, SEO tips`} />
        <link rel="canonical" href={`https://www.digimarketingart.com/blogs/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.digimarketingart.com/blogs/${post.slug}`} />
        <meta property="og:image" content="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
      </Head>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(247, 246, 243, 0.85)', pointerEvents: 'none' }} />
      <style>{`
        .blog-detail-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 48px;
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 640px) {
          .blog-detail-card {
            padding: 24px;
            border-radius: 16px;
          }
        }
        .blog-content-body h2 {
          color: var(--text-primary) !important;
          font-family: var(--font-display) !important;
          font-size: clamp(1.5rem, 3vw, 2rem) !important;
          font-weight: 700 !important;
          margin-top: 2.5rem !important;
          margin-bottom: 1rem !important;
          line-height: 1.25 !important;
        }
        .blog-content-body p {
          color: var(--text-primary) !important;
          opacity: 0.85;
          font-size: 1.1rem !important;
          line-height: 1.8 !important;
          margin-bottom: 1.5rem !important;
        }
        .blog-content-body ul, .blog-content-body ol {
          margin-left: 1.5rem !important;
          margin-bottom: 1.5rem !important;
          color: var(--text-primary) !important;
          opacity: 0.85;
        }
        .blog-content-body ul {
          list-style-type: disc !important;
        }
        .blog-content-body ol {
          list-style-type: decimal !important;
        }
        .blog-content-body li {
          margin-bottom: 0.5rem !important;
          font-size: 1.1rem !important;
          line-height: 1.6 !important;
        }
        .blog-content-body strong {
          color: var(--text-primary) !important;
          font-weight: 700 !important;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
        {/* Back Button */}
        <Link 
          href="/blogs" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--text-secondary)', 
            fontSize: '14px', 
            fontWeight: '600',
            marginBottom: '32px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ArrowLeft size={16} /> Back to Blogs
        </Link>

        {/* Category & Title */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ 
            display: 'inline-block', 
            background: 'rgba(203, 0, 33, 0.08)', 
            color: 'var(--accent-red)', 
            fontSize: '11px', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            padding: '4px 12px', 
            borderRadius: '100px', 
            marginBottom: '16px' 
          }}>
            {post.category}
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
            fontWeight: '800', 
            lineHeight: '1.15', 
            marginBottom: '20px', 
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            {post.title}
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            {post.excerpt}
          </p>
        </div>

        {/* Meta Info Block */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '16px', 
          padding: '20px 24px', 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '24px', 
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={16} style={{ color: 'var(--accent-red)' }} />
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: '700', letterSpacing: '0.05em' }}>Author</p>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{post.author}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} style={{ color: 'var(--accent-red)' }} />
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: '700', letterSpacing: '0.05em' }}>Published</p>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{post.date}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} style={{ color: 'var(--accent-red)' }} />
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: '700', letterSpacing: '0.05em' }}>Read Time</p>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{post.readTime}</p>
            </div>
          </div>
        </div>

        {/* Audio Player Listen Button */}
        <div style={{ marginBottom: '32px' }}>
          <button 
            onClick={handleTogglePlay}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              background: isPlaying ? 'var(--accent-red)' : 'var(--bg-secondary)',
              color: isPlaying ? '#fff' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '100px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (!isPlaying) {
                e.currentTarget.style.background = 'var(--accent-red)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPlaying) {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isPlaying ? (
              <>
                <VolumeX size={16} /> Stop Listening
              </>
            ) : (
              <>
                <Volume2 size={16} /> Listen to Article
              </>
            )}
          </button>
        </div>

        {/* Content Body */}
        <article 
          className="blog-detail-card blog-content-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug) || null;
  return {
    props: {
      post,
    },
  };
}

export default BlogDetail;
