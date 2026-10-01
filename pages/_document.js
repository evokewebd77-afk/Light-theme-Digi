import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Digimarketing Art - Digital Advertisement Marketing Network. We are a performance-driven digital marketing agency dedicated to scaling brands through AI-powered strategies." />
        <meta name="keywords" content="digital marketing agency, SEO company, PPC agency, social media marketing, web development, digital marketing India, AI marketing" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400&family=Rajdhani:wght@600;700&family=Space+Grotesk:wght@400;600&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400&family=Rajdhani:wght@600;700&family=Space+Grotesk:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="icon" href="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png" />
        <meta name="theme-color" content="#F7F6F3" />
        <meta property="og:site_name" content="Digimarketing Art" />
        <meta property="og:locale" content="en_US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digimarketing Art",
              "alternateName": "Digital Advertisement Marketing Network",
              "url": "https://www.digimarketingart.com",
              "logo": "https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto/v1779180783/logo_wc6s9i.png",
              "description": "Performance-driven digital marketing agency dedicated to scaling brands through AI-powered strategies.",
              "foundingDate": "2010",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aero View Plaza",
                "addressLocality": "Mohali",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-90565-44487",
                "contactType": "customer service",
                "email": "info@digimarketingart.com"
              },
              "sameAs": [
                "https://www.facebook.com/DamnArt-Digital-Marketing-Services",
                "https://www.linkedin.com/company/damnart"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digimarketing Art",
              "url": "https://www.digimarketingart.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.digimarketingart.com/blogs?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
