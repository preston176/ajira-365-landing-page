import { useEffect, useState } from 'react';
import { buildReferralHref } from '../lib/buildReferralHref';

const APP_BASE_URL = 'https://app.ajira365.com';

/**
 * Build a sign-up URL on the app domain, forwarding the `?ref=CODE`
 * query param from the current landing-page URL if present.
 *
 * The actual URL-building is in the pure `buildReferralHref` helper so
 * it can be unit-tested without a DOM. This hook just orchestrates the
 * browser-only `window.location` read and SSR-safe fallback.
 */
export function useReferralHref(targetPath: string = '/sign-up'): string {
  const fallback = `${APP_BASE_URL}${targetPath}`;
  const [href, setHref] = useState<string>(fallback);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setHref(
      buildReferralHref(window.location.search, targetPath, APP_BASE_URL),
    );
  }, [targetPath, fallback]);

  return href;
}
