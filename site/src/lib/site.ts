export const REPO_URL = 'https://github.com/OneLab-X/ai-gov';

/** Live demo URL. Empty by default; set PUBLIC_DEMO_URL to show the demo button. */
export const DEMO_URL = import.meta.env.PUBLIC_DEMO_URL ?? '';

/** Join a path onto the configured base ("/ai-gov/"), tolerating either slash style. */
export function href(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}
