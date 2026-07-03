import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '../utils/cookie';

const COOKIE_NAME = 'dma_cookie_consent';
const DEFAULT_CONSENT = { essential: true, analytics: false, marketing: false };

export default function CookieBanner() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME);
    if (!saved) setConsent(DEFAULT_CONSENT);
  }, []);

  function handleAccept() {
    setCookie(COOKIE_NAME, { essential: true, analytics: true, marketing: true }, 180);
    setConsent(null);
  }

  function handleReject() {
    setCookie(COOKIE_NAME, { essential: true, analytics: false, marketing: false }, 180);
    setConsent(null);
  }

  if (!consent) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      padding: '20px 24px', background: '#ffffff', borderTop: '1px solid #e0dfdd',
      boxShadow: '0 -8px 32px rgba(0,0,0,0.08)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <p style={{
          margin: 0, fontSize: 14, color: '#555', lineHeight: 1.6, flex: 1, minWidth: 240,
        }}>
          We use essential cookies to ensure the website functions properly.
          {consent.analytics !== undefined && ' You can accept all cookies or reject non-essential ones.'}
        </p>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          <button
            onClick={handleReject}
            style={{
              padding: '10px 24px', borderRadius: 8, border: '1px solid #d0cfcd',
              background: 'transparent', color: '#333', fontWeight: 600, fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: '10px 24px', borderRadius: 8, border: 'none',
              background: '#111', color: '#fff', fontWeight: 600, fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
