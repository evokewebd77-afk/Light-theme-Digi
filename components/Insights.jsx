import Link from 'next/link';

function Insights() {
  const articles = [
    {
      title: "If Your Funnel Still Has Stages, You're Already Behind",
      subtitle: "The Traditional Funnel Is Dead. Here's What Replaced It.",
      category: "Marketing",
      date: "3 Min read",
      slug: "funnel-stages",
      color: "#E8736F"
    },
    {
      title: "How Brands Are Secretly 'Whispering' to You on Social Media",
      subtitle: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?",
      category: "Marketing",
      date: "3 Min read",
      slug: "social-media-whispering",
      color: "#8B76F8"
    },
    {
      title: "The Psychology of 'Almost Buying': Why Do People Abandon Carts and Forms?",
      subtitle: "You've done everything right. The product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets.",
      category: "Marketing",
      date: "3 Min read",
      slug: "cart-abandonment",
      color: "#39B997"
    }
  ];

  return (
    <section id="insights" className="insights-section">
      <style>{`
        .insights-section {
          position: relative;
          padding: 80px 0 70px;
          background: radial-gradient(circle at top left, rgba(203, 0, 33, 0.12), transparent 24%),
                      radial-gradient(circle at bottom right, rgba(38, 79, 218, 0.12), transparent 24%),
                      linear-gradient(180deg, #F7F6F3 0%, #FFFFFF 38%, #F2F0ED 100%);
          overflow: hidden;
        }

        .insights-section::before {
          content: '';
          position: absolute;
          top: 8%;
          left: 8%;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(203, 0, 33, 0.12);
          filter: blur(24px);
          pointer-events: none;
        }

        .insights-section::after {
          content: '';
          position: absolute;
          bottom: 6%;
          right: 4%;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(38, 79, 218, 0.12);
          filter: blur(28px);
          pointer-events: none;
        }

        .insights-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }

        .insights-copy {
          max-width: 720px;
        }

        .insights-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 11px;
          color: var(--accent-red);
          font-weight: 700;
        }

        .insights-eyebrow::before {
          content: '';
          width: 40px;
          height: 1px;
          background: currentColor;
          opacity: 0.5;
        }

        .insights-title {
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.05;
          margin: 0;
          color: var(--text-primary);
          max-width: 760px;
        }

        .insights-copytext {
          color: var(--text-secondary);
          font-size: 17px;
          line-height: 1.85;
          margin-top: 24px;
          max-width: 700px;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .insights-grid {
            grid-template-columns: repeat(3, minmax(280px, 1fr));
          }
        }

        .insight-card {
          border-radius: 24px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,248,245,0.98));
          border: 1px solid rgba(226, 226, 226, 0.9);
          box-shadow: 0 24px 60px rgba(15, 15, 15, 0.06);
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          text-decoration: none;
          position: relative;
        }

        .insight-card::before {
          content: '';
          position: absolute;
          top: -24px;
          right: -24px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(255,255,255,0.95), transparent 60%);
          opacity: 0.9;
          pointer-events: none;
        }

        .insight-card::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: -26px;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, var(--card-color), transparent 55%);
          opacity: 0.2;
          pointer-events: none;
        }

        .insight-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 48px 130px rgba(15, 15, 15, 0.14);
        }

        .insight-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .insight-badge,
        .insight-time {
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          background: rgba(255, 255, 255, 0.95);
          color: var(--text-primary);
          border: 1px solid rgba(226, 226, 226, 0.9);
        }

        .insight-card-title {
          font-size: clamp(22px, 2.8vw, 28px);
          line-height: 1.25;
          margin: 0 0 16px;
          color: var(--text-primary);
          font-weight: 900;
          position: relative;
          z-index: 1;
        }

        .insight-description {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          max-width: 100%;
        }

        .insight-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-top: 24px;
          position: relative;
          z-index: 1;
        }

        .insight-read-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--text-primary);
          border-bottom: 1.5px solid var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .insight-card:hover .insight-read-link {
          color: var(--card-color);
          border-bottom-color: var(--card-color);
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          white-space: nowrap;
        }
      `}</style>

      <div className="container">
        <div className="insights-header reveal">
          <div className="insights-copy">
            <div className="insights-eyebrow">Latest Insights</div>
            <h2 className="insights-title">Stay ahead of the curve with our latest marketing strategies and <span className="font-display-italic">AI breakthroughs</span>.</h2>
            <p className="insights-copytext">See the newest thinking on growth, funnels, social strategy and conversion psychology — curated for ambitious digital brands.</p>
          </div>
          <a href="https://digimarketingart.com/blogs" className="hero-btn-secondary">View All Articles</a>
        </div>

        <div className="insights-grid">
          {articles.map((art, i) => (
            <Link
              key={i}
              href={`/blogs/${art.slug}`}
              className={`insight-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--card-color': art.color }}
            >
              <div>
                <div className="insight-meta">
                  <span className="insight-badge" style={{ color: art.color, borderColor: art.color }}>
                    {art.category}
                  </span>
                  <span className="insight-time">{art.date}</span>
                </div>

                <h3 className="insight-card-title">{art.title}</h3>
                <p className="insight-description">{art.subtitle}</p>
              </div>

              <div className="insight-footer">
                <span className="insight-read-link">Read Article</span>
                <span style={{ color: art.color, fontSize: '22px', lineHeight: 1 }}>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
