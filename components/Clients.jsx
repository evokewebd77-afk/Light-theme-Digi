function Clients() {
  const clients = [
    'Google Tag Manager',
    'Clarity',
    'Pabbly Connect',
    'SEMrush',
    'UberSuggest',
    'Google Analytics',
  ];

  return (
    <section className="clients-section">
      <div className="clients-inner">
        <div className="clients-label">Technology Platform</div>
        <div className="clients-track-wrap">
          <div className="clients-track">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <span key={i} className="client-pill">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
