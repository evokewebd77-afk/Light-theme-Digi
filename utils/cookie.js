export function setCookie(name, value, days = 7, options = {}) {
  try {
    const { secure = false, sameSite = 'Lax', path = '/' } = options;
    const encodedValue = encodeURIComponent(JSON.stringify(value));
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const parts = [`${name}=${encodedValue}`, `expires=${date.toUTCString()}`, `path=${path}`, `SameSite=${sameSite}`];
    if (secure) parts.push('Secure');
    document.cookie = parts.join('; ');
  } catch {
    // Silently fail — cookie setting should never break the app
  }
}

export function getCookie(name) {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
    if (!match) return null;
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

export function deleteCookie(name, options = {}) {
  const { path = '/' } = options;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
