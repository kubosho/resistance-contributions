export function getBrowsingContextWindowProxy(): Window | null {
  const w = typeof window !== 'undefined' ? window : null
  return w
}
