/** Convierte URLs de YouTube (watch, youtu.be, sin protocolo) a URL de embed. */

export function toYoutubeEmbed(url: string): string | null {
  const raw = url.trim();
  if (!raw) return null;
  try {
    let href = raw;
    if (!/^https?:\/\//i.test(href)) {
      href = `https://${href}`;
    }
    const parsed = new URL(href);
    let videoId = '';

    if (parsed.hostname === 'youtu.be' || parsed.hostname === 'www.youtu.be') {
      videoId = parsed.pathname.replace(/^\//, '').split('/')[0] ?? '';
    } else if (
      parsed.hostname.includes('youtube.com') ||
      parsed.hostname.includes('youtube-nocookie.com')
    ) {
      videoId = parsed.searchParams.get('v') ?? '';
      if (!videoId && parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.replace(/^\/embed\//, '').split('/')[0] ?? '';
      }
    }

    if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return null;
    }

    let start = 0;
    const t = parsed.searchParams.get('t') || parsed.searchParams.get('time_continue') || '';
    if (t) {
      const sec = t.match(/^(\d+)s?$/i)?.[1] ?? t.match(/^(\d+)/)?.[1];
      if (sec) start = parseInt(sec, 10);
    }

    const q = start > 0 ? `?start=${start}` : '';
    return `https://www.youtube.com/embed/${videoId}${q}`;
  } catch {
    return null;
  }
}
