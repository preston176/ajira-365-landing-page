import { describe, it, expect } from 'vitest';
import { buildReferralHref } from './buildReferralHref';

const BASE = 'https://app.ajira365.com';

describe('buildReferralHref', () => {
  it('returns the bare URL when no `ref` is present', () => {
    expect(buildReferralHref('', '/sign-up', BASE)).toBe(
      'https://app.ajira365.com/sign-up',
    );
  });

  it('returns the bare URL when the query is unrelated', () => {
    expect(buildReferralHref('?utm_source=twitter', '/sign-up', BASE)).toBe(
      'https://app.ajira365.com/sign-up',
    );
  });

  it('forwards a simple `ref` param', () => {
    expect(
      buildReferralHref('?ref=AJIRA-FRIEND01-DEADBEEF', '/sign-up', BASE),
    ).toBe('https://app.ajira365.com/sign-up?ref=AJIRA-FRIEND01-DEADBEEF');
  });

  it('forwards `ref` regardless of param ordering', () => {
    expect(
      buildReferralHref(
        '?utm_source=twitter&ref=AJIRA-X-Y',
        '/sign-up',
        BASE,
      ),
    ).toBe('https://app.ajira365.com/sign-up?ref=AJIRA-X-Y');
  });

  it('URL-encodes the ref value', () => {
    // unlikely in practice but the function should be safe
    expect(buildReferralHref('?ref=hello world', '/sign-up', BASE)).toBe(
      'https://app.ajira365.com/sign-up?ref=hello%20world',
    );
  });

  it('respects a custom targetPath', () => {
    expect(buildReferralHref('?ref=ABC', '/sign-in', BASE)).toBe(
      'https://app.ajira365.com/sign-in?ref=ABC',
    );
  });

  it('ignores an empty `ref=` value', () => {
    expect(buildReferralHref('?ref=', '/sign-up', BASE)).toBe(
      'https://app.ajira365.com/sign-up',
    );
  });

  it('handles a search string without a leading `?`', () => {
    expect(buildReferralHref('ref=XYZ', '/sign-up', BASE)).toBe(
      'https://app.ajira365.com/sign-up?ref=XYZ',
    );
  });
});
