const CDN_ENDPOINT = process.env.AZURE_CDN_ENDPOINT;

export function toCdnUrl(blobUrl: string): string {
  if (!CDN_ENDPOINT) return blobUrl;

  try {
    const url = new URL(blobUrl);
    const pathParts = url.pathname.split('/').filter(Boolean);
    if (pathParts.length < 2) return blobUrl;

    return `${CDN_ENDPOINT}/${pathParts.join('/')}`;
  } catch {
    return blobUrl;
  }
}

export function fromCdnUrl(cdnUrl: string): string | null {
  if (!CDN_ENDPOINT || !cdnUrl.startsWith(CDN_ENDPOINT)) return null;

  const path = cdnUrl.replace(CDN_ENDPOINT, '');
  return path;
}
