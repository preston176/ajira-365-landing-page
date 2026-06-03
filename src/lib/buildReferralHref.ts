/**
 * Build a sign-up URL on the app domain, forwarding a `?ref=CODE` query
 * param from the current landing-page URL if present.
 *
 * Pure: extracted from the React hook so it's trivially unit-testable
 * without a DOM environment.
 *
 * @param currentSearch  `window.location.search` (with or without leading `?`)
 * @param targetPath     destination path on the app, e.g. `/sign-up`
 * @param baseUrl        app origin, e.g. `https://app.ajira365.com`
 */
export function buildReferralHref(
  currentSearch: string,
  targetPath: string,
  baseUrl: string,
): string {
  const bare = `${baseUrl}${targetPath}`;
  if (!currentSearch) return bare;

  // Accept both `?ref=...` and `ref=...` shapes.
  const normalised = currentSearch.startsWith('?')
    ? currentSearch.slice(1)
    : currentSearch;
  const params = new URLSearchParams(normalised);
  const ref = params.get('ref');
  if (!ref) return bare;

  return `${bare}?ref=${encodeURIComponent(ref)}`;
}
