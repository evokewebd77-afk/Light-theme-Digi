import Link from 'next/link';

function Insights() {
  const articles = [
    {
      title: "If Your Funnel Still Has Stages, You're Already Behind",
      subtitle: "The Traditional Funnel Is Dead. Here's What Replaced It.",
      category: "Marketing",
      date: "3 Min read",
      slug: "if-your-funnel-still-has-stages-youre-already-behind",
      color: "#E8736F"
    },
    {
      title: "How Brands Are Secretly 'Whispering' to You on Social Media",
      subtitle: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?",
      category: "Marketing",
      date: "3 Min read",
      slug: "how-brands-are-secretly-whispering-to-you-on-social-media",
      color: "#8B76F8"
    },
    {
      title: "The Psychology of 'Almost Buying': Why Do People Abandon Carts and Forms?",
      subtitle: "You've done everything right. The product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets.",
      category: "Marketing",
      date: "3 Min read",
      slug: "the-psychology-of-almost-buying-why-do-people-abandon-carts-and-forms",
      color: "#39B997"
    }
  ];

  return (
    <section id="insights" className="insights-section">
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
